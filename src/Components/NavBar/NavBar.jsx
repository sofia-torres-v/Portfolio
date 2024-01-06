import "../NavBar/NavBar.css";
import logo from "../../assets/images/logo.jpg";
import { Link } from "react-scroll";

const NavBar = () => {
    return (
        <nav className="navbar">
            <img className="desktop-menu-logo" src={logo} alt="logo" />
            <div className="desktop-menu">
                <Link className="desktop-menu-list">Home</Link>
                <Link className="desktop-menu-list">Proyects</Link>
                <Link className="desktop-menu-list">skills</Link>
                <Link className="desktop-menu-list">Contacto</Link>
            </div>

            <button className="desktop-menu">
                <img src="" alt="" className="desktop-menu-img" />
                Contactame
            </button>
        </nav>
    );
};

export default NavBar;
