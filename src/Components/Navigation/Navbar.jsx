import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/images/Group14.png";
import Initial from "../../assets/images/home.png";
import ImageGirl from "../../assets/images//abotme.png";
import ImageCode from "../../assets/images/cccode.png";
import ImageEnvelope from "../../assets/images/envelope-heart.png";

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);

    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    };
    console.log(!showLinks);
    const closeMenu = () => {
        setShowLinks(false); // Cierra el menú al hacer clic en un enlace
    };

    return (
        <nav className={` navbar   ${showLinks ? "show-nav" : "hide-nav"}`}>
            <img className="navbar__logo" src={Logo} alt="" />
            <ul className="navbar__links">
                <li className="navbar__items slideInDown-2">
                    <img src={Initial} alt="" />
                    <Link to="/home" className="navbar__link" onClick={closeMenu}>
                        inicio
                    </Link>
                </li>
                <li className="navbar__items slideInDown-2">
                    <img src={ImageCode} alt="" />
                    <Link to="/projects" className="navbar__link" onClick={closeMenu}>
                        Proyectos
                    </Link>
                </li>
                <li className="navbar__items bg slideInDown-1">
                    <img src={ImageGirl} alt="" />
                    <Link to="/about" className="navbar__link" onClick={closeMenu}>
                        Sobre mí
                    </Link>
                </li>

                <li className="navbar__items slideInDown-3">
                    <img src={ImageEnvelope} alt="" />
                    <Link to="/contact" className="navbar__link" onClick={closeMenu}>
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
