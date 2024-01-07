import "../NavBar/NavBar.css";
// import logo from "../../assets/images/logo.jpg";
// import { Link } from "react-scroll";

const NavBar = () => {
    return (
        <nav className="navbar container">
            {/* <img className="desktop-menu-logo" src={logo} alt="logo" /> */}
            <span>LOGO</span>
            {/* <div className="desktop-menu">
                <Link className="desktop-menu-list">Home</Link>
                <Link className="desktop-menu-list">Proyects</Link>
                <Link className="desktop-menu-list">skills</Link>
                <Link className="desktop-menu-list">Contacto</Link>
            </div> */}

            <i className="bx bx-menu"></i>
        </nav>
    );
};

export default NavBar;
