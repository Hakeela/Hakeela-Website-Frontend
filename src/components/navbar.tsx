import { Link } from "react-router-dom";
import "./styles/navbar.css";

const navigation = [
    { name: "About us", href: "/about" },
    { name: "Blog", href: "/blog" },
  {
    name: "Initiatives ▼",
    href: "",
    children: [
      { name: "Hakeela Margin Internship", href: "/marginportal" },
      { name: "Hakeela Special Needs And Tech", href: "" },
      { name: "Hakeela Fund", href: "" },
      { name: "HDx Consulting", href: "/hdxconsulting" },
      { name: "Hakeela Tech Hub", href: "" }
    ]
  },
  { name: "HDx Consulting", href: "/hdxconsulting" },
  { name: "Hakeela Margin Portal", href: "/marginportal" }
];

export default function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/home" className="navbar__logo">
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


      <Link to="/" className="navbar__avatar">
        <img src="/Imabong.png" alt="Profile avatar" />
      </Link>
    </nav>
  );
}
