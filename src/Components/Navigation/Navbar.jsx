import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/images/logo.png";

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);

    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    };

    const closeMenu = () => {
        setShowLinks(false);
    };

    // Función para aplicar clases activas
    const getLinkClass = ({ isActive }) =>
        isActive ? "navbar__link active" : "navbar__link";

    return (
        <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
            <NavLink to="/">
                <img
                    className="navbar__logo"
                    src={Logo}
                    alt="Logo de nombre Sofía"
                />
            </NavLink>

            <ul className="navbar__links">
                <li className="navbar__items slideInDown-2" onClick={closeMenu}>
                    <NavLink to="/" className={getLinkClass}>
                        Inicio
                    </NavLink>
                </li>

                <li className="navbar__items slideInDown-2" onClick={closeMenu}>
                    <NavLink to="/projects" className={getLinkClass}>
                        Proyectos
                    </NavLink>
                </li>

                <li className="navbar__items bg slideInDown-1" onClick={closeMenu}>
                    <NavLink to="/about" className={getLinkClass}>
                        Sobre mí
                    </NavLink>
                </li>

                <li
                    className="navbar__items navbar__item-border slideInDown-3"
                    onClick={closeMenu}
                >
                    <NavLink to="/contact" className={getLinkClass}>
                        Contacto
                    </NavLink>
                </li>
            </ul>

            <button className="navbar__burger" onClick={handleShowLinks}>
                <span className="burger-bar"></span>
            </button>
        </nav>
    );
};

export default Navbar;
