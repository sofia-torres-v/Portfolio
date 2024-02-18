import { useState } from 'react';
import  './Navbar.css'
import Logo from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom';

const Navbar= ()=>{
    const [showLinks, setShowLinks] = useState(false);

    const handleShowLinks = ()=>{
        setShowLinks(!showLinks)
    }
    console.log(!showLinks)

    return(
        <nav  className={ ` navbar   ${showLinks ? 'show-nav' : 'hide-nav'}`}>
            <img className='navbar__logo' src={Logo} alt="" />
            <ul className="navbar__links">
                <li className="navbar__items slideInDown-1">
                    <Link to='/about'className='navbar__link'>Sobre mí</Link>
                </li>
                <li className="navbar__items slideInDown-2">
                    <Link to='/proyects'className='navbar__link'>Mis Proyectos</Link>
                </li>
                <li className="navbar__items slideInDown-3">
                    <Link to='/contact'className='navbar__link' >Contacto</Link>
                </li>
            </ul>
                <button className="navbar__burger" onClick={handleShowLinks}>
                    <span className='burger-bar'></span>
                </button>

        </nav>
        )
}
export default Navbar;