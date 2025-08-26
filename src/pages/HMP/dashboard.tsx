import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import ProfileDropdown from "../../components/profiledropdown";

export default function Dashboard() {
    return(
        <div>
            <nav className="navbar">
                <Link to="/home" className="navbar__logo">
                    <img src="/Hakeela Full Logo (Blue) 1.png" alt="Hakeela logo" />
                </Link>
                <ProfileDropdown/>
                <Link to="/" className="navbar__avatar">
                    <img src="/Imabong.png" alt="Profile avatar" />
                </Link>
            </nav>
            <h1>
                Dashboard
            </h1>
            <Footer/>
        </div>
    )
}