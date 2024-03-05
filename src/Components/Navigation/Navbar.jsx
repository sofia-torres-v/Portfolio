import { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/images/logoS.png";
import Mensaje from "../../assets/images/corazon.png";
import About from "../../assets/images/about2.png";
import Code from "../../assets/images/code.png";
import { Link } from "react-router-dom";

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
                    <img src={About} alt="" />
                    <Link to="/about" className="navbar__link">
                        Sobre mí
                    </Link>
                </li>
                <li className="navbar__items slideInDown-2">
                    <img src={Code} alt="" />
                    <Link to="/projects" className="navbar__link">
                        {" "}
                        Proyectos
                    </Link>
                </li>

                <li className="navbar__items slideInDown-3">
                    <img src={Mensaje} alt="" />
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
