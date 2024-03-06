import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/images/logoS.png";
import ImageHome from "../../assets/images/ini12.png";
import ImageGirl from "../../assets/images/about2.png";
import ImageCode from "../../assets/images/code.png";
import ImageEnvelope from "../../assets/images/corazon.png";

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);

    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    };
    console.log(!showLinks);

    return (
        <nav className={` navbar   ${showLinks ? "show-nav" : "hide-nav"}`}>
            <img className="navbar__logo" src={Logo} alt="" />
            <ul className="navbar__links">
                <li className="navbar__items bg slideInDown-1">
                    <img src={ImageHome} alt="" />
                    <Link to="/home" className="navbar__link">
                        Inicio
                    </Link>
                </li>
                <li className="navbar__items bg slideInDown-1">
                    <img src={ImageGirl} alt="" />
                    <Link to="/about" className="navbar__link">
                        Sobre mí
                    </Link>
                </li>
                <li className="navbar__items slideInDown-2">
                    <img src={ImageCode} alt="" />
                    <Link to="/projects" className="navbar__link">
                        Proyectos
                    </Link>
                </li>

                <li className="navbar__items slideInDown-3">
                    <img src={ImageEnvelope} alt="" />
                    <Link to="/contact" className="navbar__link">
                        Contacto
                    </Link>
                </li>
            </ul>
            <button className="navbar__burger" onClick={handleShowLinks}>
                <span className="burger-bar"></span>
            </button>
        </nav>
    );
};
export default Navbar;
