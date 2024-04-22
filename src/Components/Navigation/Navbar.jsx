import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/images/logoSofiaPortfolio.png";

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
            <Link to='/'>
                <img className="navbar__logo" src={Logo} alt="Logo de nombre Sofía" />   
            </Link>
            <ul className="navbar__links">
                <li className="navbar__items slideInDown-2" onClick={closeMenu} >                  
                    <Link to="/home" className="navbar__link" activeClassName="active">
                        inicio
                    </Link>
                </li>
                <li className="navbar__items slideInDown-2" onClick={closeMenu}>
                    <Link to="/projects" className="navbar__link" activeClassName="active" >
                        Proyectos
                    </Link>
                </li>
                <li className="navbar__items bg slideInDown-1" onClick={closeMenu}>
                    <Link to="/about" className="navbar__link" >
                        Sobre mi
                    </Link>
                </li>

                <li className="navbar__items slideInDown-3" onClick={closeMenu}>
                    <Link to="/contact" className="navbar__link" >
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
