import { Link } from "react-router-dom";
import "./styles/navbar.css";

const navigation = [
  { name: "About us",            href: "../pages/about.tsx" },
  { name: "Blog",                href: "/" },
  { name: "Initiatives",         href: "/" },
  { name: "HDx Consulting",      href: "/" },
  { name: "Hakeela Margin Portal", href: "/" }
];

export default function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="navbar__logo">
        <img src="/Hakeela Full Logo (Blue) 1.png" alt="Hakeela logo" />
      </Link>

      <ul className="navbar__list">
        {navigation.map(item => (
          <li key={item.name}>
            <Link to={item.href} className="navbar__link">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <Link to="/" className="navbar__avatar">
        <img src="/Imabong.png" alt="Profile avatar" />
      </Link>
    </nav>
  );
}
