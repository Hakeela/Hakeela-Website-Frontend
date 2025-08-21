import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ChevronDown, X } from "lucide-react"; // Import the X icon
import "./styles/navbar.css";

const navigation = [
    { name: "About us", href: "/about" },
    { name: "Blog", href: "/blog" },
    {
        name: "Initiatives",
        href: "",
        children: [
            { name: "Hakeela Margin Internship", href: "" },
            { name: "Hakeela Special Needs And Tech", href: "" },
            { name: "Hakeela Fund", href: "" },
            { name: "HDx Consulting", href: "/hdxconsulting" },
            { name: "Hakeela Tech Hub", href: "" }
        ]
    },
    { name: "HDx Consulting", href: "/hdxconsulting" },
    { name: "Hakeela Margin Portal", href: "/signup" }
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState < string | null > (null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) setOpenDropdown(null); // Close dropdowns when menu closes
    };

    const toggleDropdown = (name: string) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    return (
        <nav className="navbar">
            <Link to="/home" className="navbar__logo">
                <img src="/Hakeela Full Logo (Blue) 1.png" alt="Hakeela logo" />
            </Link>

            <button
                className="navbar__toggle"
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
            >
                {/* --- THIS IS THE ICON SWAP --- */}
                {isMenuOpen ? (
                    <X className="navbar__toggle-icon" size={24} />
                ) : (
                    <Menu className="navbar__toggle-icon" size={24} />
                )}
            </button>

            <ul className={`navbar__list ${isMenuOpen ? 'navbar__list--open' : ''}`}>
                {navigation.map(item => (
                    <li key={item.name} className="navbar__item">
                        {item.children ? (
                            <div className="navbar__dropdown">
                                <button
                                    className="navbar__link dropdown-toggle"
                                    aria-haspopup="true"
                                    aria-expanded={openDropdown === item.name}
                                    onClick={() => toggleDropdown(item.name)}
                                >
                                    {item.name}
                                    <ChevronDown
                                        className={`dropdown-icon ${openDropdown === item.name ? 'dropdown-icon--open' : ''}`}
                                        size={16}
                                    />
                                </button>
                                <ul className={`dropdown-menu ${openDropdown === item.name ? 'dropdown-menu--open' : ''}`}>
                                    {item.children.map(sub => (
                                        <li key={sub.name}>
                                            <Link
                                                to={sub.href}
                                                className="dropdown-item"
                                                onClick={() => {
                                                    setIsMenuOpen(false);
                                                    setOpenDropdown(null);
                                                }}
                                            >
                                                {sub.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <Link
                                to={item.href}
                                className="navbar__link"
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    setOpenDropdown(null);
                                }}
                            >
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