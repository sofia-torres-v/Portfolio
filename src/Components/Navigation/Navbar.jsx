import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/images/Group14.png";

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
                <li className="navbar__items slideInDown-2" onClick={closeMenu} >                  
                    <NavLink to="/home" className="navbar__link" activeClassName="active">
                        inicio
                    </NavLink>
                </li>
                <li className="navbar__items slideInDown-2" onClick={closeMenu}>
                    <NavLink to="/projects" className="navbar__link" activeClassName="active" >
                        Proyectos
                    </NavLink>
                </li>
                <li className="navbar__items bg slideInDown-1" onClick={closeMenu}>
                    <NavLink to="/about" className="navbar__link" >
                        Sobre mi
                    </NavLink>
                </li>

                <li className="navbar__items slideInDown-3" onClick={closeMenu}>
                    <NavLink to="/contact" className="navbar__link" >
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
