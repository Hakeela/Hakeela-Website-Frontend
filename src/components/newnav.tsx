"use client"

import { Search, Bell} from "lucide-react"
import ProfileDropdown from "./profiledropdown"
import { Link } from "react-router-dom"

interface NavbarProps {
  currentPage: string
  className: string
}

export function Navbar({ currentPage, className }: NavbarProps) {
  return (
    <header
    className={className}
      style={{
        display: "flex",
        height: "64px",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #e5e7eb",
        backgroundColor: "white",
        padding: "0 24px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "20px", fontWeight: "600", color: "#111827" }}>{currentPage}</span>
        </div>
      </div>

      {/* Search Bar */}
      <div style={{ flex: 1, maxWidth: "384px", margin: "0 32px", marginLeft: "auto"  }}>
        <div style={{ position: "relative"}}>
          <Search
            style={{
              position: "absolute",
              left: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#9ca3af",
              height: "16px",
              width: "16px",
            }}
          />
          <input
            type="text"
            placeholder="Search"
            style={{
              width: "100%",
              paddingLeft: "40px",
              paddingRight: "12px",
              paddingTop: "8px",
              paddingBottom: "8px",
              backgroundColor: "#f9fafb",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              fontSize: "14px",
              outline: "none",
            }}
          />
        </div>
      </div>

      {/* Right Side - Notifications and Profile */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>

        {/* Notification Bell */}
        <button
          style={{
            position: "relative",
            padding: "8px",
            backgroundColor: "transparent",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#f3f4f6"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent"
          }}
        >
          <Bell style={{ height: "20px", width: "20px", color: "#4b5563" }} />
          <span
            style={{
              position: "absolute",
              top: "4px",
              right: "4px",
              height: "12px",
              width: "12px",
              backgroundColor: "#ef4444",
              borderRadius: "50%",
            }}
          ></span>
        </button>

        <ProfileDropdown/>

        <Link to="/" className="navbar__avatar">
            <img src="/Imabong.png" alt="Profile avatar" />
        </Link>
      </div>
    </header>
  )
}
