package model

import "time"

// Visit represents a single page visit record
type Visit struct {
	ID        int64     `json:"id"`
	IP        string    `json:"ip"`
	UA        string    `json:"ua"`
	Path      string    `json:"path"`
	Referer   string    `json:"referer"`
	Device    string    `json:"device"`    // desktop / mobile / tablet
	OS        string    `json:"os"`        // windows / mac / linux / android / ios
	Browser   string    `json:"browser"`   // chrome / firefox / safari / edge / other
	Country   string    `json:"country"`   // Optional: IP geolocation
	VisitedAt time.Time `json:"visited_at"`
}

// StatsSummary represents site statistics summary
type StatsSummary struct {
	PV          int64            `json:"pv"`
	UV          int64            `json:"uv"`
	TodayPV     int64            `json:"today_pv"`
	TodayUV     int64            `json:"today_uv"`
	DeviceStats map[string]int64 `json:"device_stats"`
	OSStats     map[string]int64 `json:"os_stats"`
	BrowserStats map[string]int64 `json:"browser_stats"`
}