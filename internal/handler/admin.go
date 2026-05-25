package handler

import (
	"encoding/json"
	"errors"
	"log"
	"net/http"
	"strings"
	"time"

	"github.com/golang-jwt/jwt/v5"

	"github.com/mengshi02/axons-home/internal/model"
	"github.com/mengshi02/axons-home/internal/store"
)

// JWT secret — in production, load from env or config
var jwtSecret = []byte("axons-home-jwt-secret-change-me")

// TokenExpiration defines how long the JWT token is valid
const TokenExpiration = 24 * time.Hour

// AdminHandler handles admin authentication and management APIs
type AdminHandler struct {
	store *store.Store
}

// NewAdminHandler creates a new AdminHandler
func NewAdminHandler(s *store.Store) *AdminHandler {
	return &AdminHandler{store: s}
}

// Claims represents the JWT claims for admin auth
type Claims struct {
	Username string `json:"username"`
	jwt.RegisteredClaims
}

// GenerateToken creates a signed JWT token for the given admin
func GenerateToken(admin *model.Admin) (string, error) {
	claims := &Claims{
		Username: admin.Username,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(TokenExpiration)),
			IssuedAt:  jwt.NewNumericDate(time.Now()),
			Issuer:    "axons-home",
		},
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(jwtSecret)
}

// ValidateToken parses and validates a JWT token string
func ValidateToken(tokenStr string) (*Claims, error) {
	claims := &Claims{}
	_, err := jwt.ParseWithClaims(tokenStr, claims, func(t *jwt.Token) (interface{}, error) {
		if _, ok := t.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, errors.New("unexpected signing method")
		}
		return jwtSecret, nil
	})
	if err != nil {
		return nil, err
	}
	return claims, nil
}

// Login handles POST /api/admin/login
func (h *AdminHandler) Login(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var req model.LoginRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "invalid request body", http.StatusBadRequest)
		return
	}
	req.Username = strings.TrimSpace(req.Username)
	req.Password = strings.TrimSpace(req.Password)
	if req.Username == "" || req.Password == "" {
		http.Error(w, "username and password required", http.StatusBadRequest)
		return
	}

	admin, err := h.store.AuthenticateAdmin(req.Username, req.Password)
	if err != nil {
		log.Printf("Admin auth error: %v", err)
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}
	if admin == nil {
		http.Error(w, "invalid credentials", http.StatusUnauthorized)
		return
	}

	token, err := GenerateToken(admin)
	if err != nil {
		log.Printf("Token generation error: %v", err)
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}

	// Set HttpOnly cookie
	http.SetCookie(w, &http.Cookie{
		Name:     "axons_admin_token",
		Value:    token,
		Path:     "/",
		MaxAge:   int(TokenExpiration.Seconds()),
		HttpOnly: true,
		Secure:   r.TLS != nil, // Secure only when served over HTTPS
		SameSite: http.SameSiteLaxMode,
	})

	resp := model.LoginResponse{
		Username:      admin.Username,
		MustChangePwd: admin.MustChangePwd,
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(resp)
}

// Logout handles POST /api/admin/logout
func (h *AdminHandler) Logout(w http.ResponseWriter, r *http.Request) {
	http.SetCookie(w, &http.Cookie{
		Name:     "axons_admin_token",
		Value:    "",
		Path:     "/",
		MaxAge:   -1,
		HttpOnly: true,
		Secure:   r.TLS != nil,
		SameSite: http.SameSiteLaxMode,
	})
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
}

// Me handles GET /api/admin/me — returns current admin info
func (h *AdminHandler) Me(w http.ResponseWriter, r *http.Request) {
	claims, ok := r.Context().Value(claimsContextKey).(*Claims)
	if !ok || claims == nil {
		http.Error(w, "unauthorized", http.StatusUnauthorized)
		return
	}

	admin, err := h.store.GetAdminByUsername(claims.Username)
	if err != nil {
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}
	if admin == nil {
		http.Error(w, "admin not found", http.StatusUnauthorized)
		return
	}

	resp := model.LoginResponse{
		Username:      admin.Username,
		MustChangePwd: admin.MustChangePwd,
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(resp)
}

// ChangePassword handles POST /api/admin/change-password
func (h *AdminHandler) ChangePassword(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}

	claims, ok := r.Context().Value(claimsContextKey).(*Claims)
	if !ok || claims == nil {
		http.Error(w, "unauthorized", http.StatusUnauthorized)
		return
	}

	var req model.ChangePasswordRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "invalid request body", http.StatusBadRequest)
		return
	}
	req.OldPassword = strings.TrimSpace(req.OldPassword)
	req.NewPassword = strings.TrimSpace(req.NewPassword)
	if req.OldPassword == "" || req.NewPassword == "" {
		http.Error(w, "old_password and new_password required", http.StatusBadRequest)
		return
	}
	if len(req.NewPassword) < 6 {
		http.Error(w, "new password must be at least 6 characters", http.StatusBadRequest)
		return
	}

	// Verify old password
	admin, err := h.store.AuthenticateAdmin(claims.Username, req.OldPassword)
	if err != nil {
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}
	if admin == nil {
		http.Error(w, "old password is incorrect", http.StatusUnauthorized)
		return
	}

	// Update to new password
	if err := h.store.ChangeAdminPassword(claims.Username, req.NewPassword); err != nil {
		log.Printf("Password change error: %v", err)
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}

	// Issue a new token (clears must_change_pwd flag)
	admin.MustChangePwd = false
	token, err := GenerateToken(admin)
	if err != nil {
		log.Printf("Token regeneration error: %v", err)
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}

	http.SetCookie(w, &http.Cookie{
		Name:     "axons_admin_token",
		Value:    token,
		Path:     "/",
		MaxAge:   int(TokenExpiration.Seconds()),
		HttpOnly: true,
		Secure:   r.TLS != nil,
		SameSite: http.SameSiteLaxMode,
	})

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
}

// GetLatestVersion handles GET /api/releases/latest (public, no auth)
func (h *AdminHandler) GetLatestVersion(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}

	version, err := h.store.GetConfig("latest_version")
	if err != nil {
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"version": version})
}

// UpdateVersion handles PUT /api/admin/config/version (requires auth)
func (h *AdminHandler) UpdateVersion(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPut {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var body struct {
		Version string `json:"version"`
	}
	if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
		http.Error(w, "invalid request body", http.StatusBadRequest)
		return
	}
	body.Version = strings.TrimSpace(body.Version)
	if body.Version == "" {
		http.Error(w, "version is required", http.StatusBadRequest)
		return
	}

	if err := h.store.SetConfig("latest_version", body.Version); err != nil {
		log.Printf("Version update error: %v", err)
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}

	log.Printf("Version updated to %s", body.Version)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"version": body.Version})
}

// contextKey for storing JWT claims in request context
type contextKey string

const claimsContextKey = contextKey("claims")

// ClaimsContextKey returns the context key for JWT claims (exported for main.go)
func ClaimsContextKey() contextKey {
	return claimsContextKey
}