import { Link } from "react-router-dom";
import { useState } from "react";
import "./styles/navbar.css";

const navigation = [
    { name: "About us", href: "/about" },
    { name: "Blog", href: "/blog" },
  {
    name: "Initiatives ▼",
    href: "#",
    children: [
      { name: "Hakeela Special Needs And Tech", href: "/snat" },
      { name: "Hakeela Fund", href: "#" },
      { name: "Hakeela Tech Hub", href: "#" }
    ]
  },
  { name: "HakStudios", href: "/hdxconsulting" },
  { name: "Hakeela Margin Internship", href: "/marginportal" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        <img src="/Hakeela Full Logo (Blue) 1.png" alt="Hakeela logo" />
      </Link>

      <ul className="navbar__list">
        {navigation.map(item => (
          <li key={item.name} className="navbar__item">
            {item.children ? (
              <div className="navbar__dropdown">
                <button className="navbar__link dropdown-toggle">
                  {item.name}
                </button>
                <ul className="dropdown-menu">
                  {item.children.map(sub => (
                    <li key={sub.name}>
                      <Link to={sub.href} className="dropdown-item">
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link to={item.href} className="navbar__link">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <div className="navbar__right">
        <Link to="/imabong" className="navbar__avatar">
          <img src="/Imabong.png" alt="Profile avatar" />
        </Link>

        <button
          className={`navbar__hamburger ${open ? 'open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mobile-menu">
          <ul>
            {navigation.map(item => (
              <li key={item.name} className="mobile-item">
                {item.children ? (
                  <details>
                    <summary>{item.name}</summary>
                    <ul>
                      {item.children.map(sub => (
                        <li key={sub.name}>
                          <Link to={sub.href} onClick={() => setOpen(false)}>{sub.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link to={item.href} onClick={() => setOpen(false)}>{item.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
