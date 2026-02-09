"use client"

import { Bell, Menu } from "lucide-react"
import ProfileDropdown from "./profiledropdown"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { signOut } from "firebase/auth"
import { auth } from "../firebase/firebase"

interface NavbarProps {
  currentPage: string
  className: string
}

export function Navbar({ currentPage, className }: NavbarProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  const navigationItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Courses", href: "/courses" },
    { name: "Certificate", href: "/certificates" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Profile", href: "/profile" },
  ]

  const handleLogout = async () => {
    try {
      await signOut(auth)
      navigate("/marginportal")
    } catch (err) {
      console.error(err)
    }
  }
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
        padding: isMobile ? "0 12px" : "0 24px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {/* mobile-only hamburger placed before logo */}
          {isMobile && (
            <button
              aria-label="Open navigation"
              onClick={() => setMobileOpen((s) => !s)}
              style={{ background: "transparent", border: "none", padding: 8, cursor: "pointer" }}
            >
              <Menu style={{ height: 20, width: 20, color: "#111827" }} />
            </button>
          )}

          <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <img src="/Hakeela Full Logo (Blue) 1.png" alt="Hakeela logo" style={{ height: 30, marginRight: 8 }} />
          </Link>

          <span style={{ fontSize: "20px", fontWeight: "600", color: "#111827" }}>{currentPage}</span>
        </div>
      </div>

      {/* Right Side - Notifications, Profile and Logout */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>

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

        <Link to="/imabong" className="navbar__avatar" style={{ display: "flex", alignItems: "center" }}>
            <img src="/Imabong.png" alt="Profile avatar" style={{ height: isMobile ? 36 : 40, width: "auto", borderRadius: 8 }} />
        </Link>
      </div>
      {/* Mobile menu overlay (only on mobile) */}
      {isMobile && mobileOpen && (
        <div style={{ position: "absolute", left: 0, right: 0, top: 64, background: "white", zIndex: 40, borderBottom: "1px solid #e5e7eb" }}>
          <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
            {navigationItems.map((item) => (
              <Link key={item.name} to={item.href} onClick={() => setMobileOpen(false)} style={{ color: "#111827", textDecoration: "none", padding: "8px 0" }}>
                {item.name}
              </Link>
            ))}

            <button onClick={() => { setMobileOpen(false); handleLogout(); }} style={{ background: "transparent", border: "none", color: "#dc2626", padding: "8px 0", textAlign: "left", cursor: "pointer" }}>
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
