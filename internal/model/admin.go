package model

import "time"

// Admin represents the built-in super admin user
type Admin struct {
	ID            int64     `json:"id"`
	Username      string    `json:"username"`
	PasswordHash  string    `json:"-"` // never expose
	MustChangePwd bool      `json:"must_change_pwd"`
	CreatedAt     time.Time `json:"created_at"`
	UpdatedAt     time.Time `json:"updated_at"`
}

// LoginRequest is the payload for admin login
type LoginRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

// LoginResponse is the response after successful login
type LoginResponse struct {
	Username      string `json:"username"`
	MustChangePwd bool   `json:"must_change_pwd"`
}

// ChangePasswordRequest is the payload for password change
type ChangePasswordRequest struct {
	OldPassword string `json:"old_password"`
	NewPassword string `json:"new_password"`
}