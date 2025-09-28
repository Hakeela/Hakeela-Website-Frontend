"use client"

import { Bell} from "lucide-react"
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
        </button>

        <ProfileDropdown/>

        <Link to="/imabong" className="navbar__avatar">
            <img src="/Imabong.png" alt="Profile avatar" />
        </Link>
      </div>
    </header>
  )
}
