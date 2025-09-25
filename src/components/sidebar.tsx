import { BookMarked, Award, BriefcaseBusiness, LogOut, User, LayoutGrid} from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

interface SidebarProps {
  activePage: string
  className?: string;
  onPageChange: (page: string) => void
}

export function Sidebar({ activePage, onPageChange, className }: SidebarProps) {
  const navigate = useNavigate()

  const navigationItems = [
    {
      name: "Dashboard",
      icon: LayoutGrid,
      href: "/dashboard"
    },
    {
      name: "Courses",
      icon: BookMarked,
      href: "/courses"
    },
    {
      name: "Certificate",
      icon: Award,
      href: "/certificates"
    },
    {
      name: "Portfolio",
      icon: BriefcaseBusiness,
      href: "/portfolio"
    },
    {
      name: "Profile",
      icon: User,
      href: "/profile"
    },
  ]

  return (
    <aside
      className={className}
      style={{
        width: "200px",
        height: "100vh",
        backgroundColor: "white",
        borderRight: "1px solid #e5e7eb",
        display: "flex",
        flexDirection: "column",
        padding: "24px",
        flexShrink: 0,  // important!
      }}
    >
      <div style={{ padding: "24px" }}>

        <Link to="/home" className="navbar__logo">
          <img src="/Hakeela Full Logo (Blue) 1.png" alt="Hakeela logo"
                style={{height:"30px"}} />
        </Link>
        {/* Navigation Items */}
        <nav style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop:"20px"}}>
          {navigationItems.map((item) => {
            const Icon = item.icon
            const isActive = item.name === activePage
            return (
              <button
                key={item.name}
                onClick={() => {
                  onPageChange(item.name)
                  navigate(item.href)}}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: "500",
                  transition: "all 0.2s",
                  backgroundColor: isActive ? "rgba(0, 0, 184, 1)" : "transparent",
                  color: isActive ? "white" : "#4b5563",
                  border: "none",
                  cursor: "pointer",
                  width: "100%",
                  textAlign: "left",
                  marginTop: "10px"
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = "#f3f4f6"
                    e.currentTarget.style.color = "#111827"
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = "transparent"
                    e.currentTarget.style.color = "#4b5563"
                  }
                }}
              >
                <Icon style={{ height: "20px", width: "20px" }} />
                {item.name}
              </button>
            )
          })}
        </nav>

        {/* Logout at bottom */}
        <div
          style={{
            marginTop: "200px",
            paddingTop: "px",
          }}
        >
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "8px 12px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "500",
              color: "#dc2626",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              width: "100%",
              textAlign: "left",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#fef2f2"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"
            }}
          >
            <LogOut style={{ height: "20px", width: "20px" }} />
            Logout
          </button>
        </div>
      </div>
    </aside>
  )
}
