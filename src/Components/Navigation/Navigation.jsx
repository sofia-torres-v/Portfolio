import { useState } from 'react';
import  './Navigation.css'

const Navigation = ()=>{
    const [showLinks, setShowLinks] = useState(false);

    const handleShowLinks = ()=>{
        setShowLinks(!showLinks)
    }
    console.log(!showLinks)

    return(
        <nav className={ `navbar  ${showLinks ? 'show-nav' : 'hide-nav'}`}>
            <div className="navbar__logo"> Sofia.T </div>
            <ul className="navbar__links">
                <li className="navbar__items slideInDown-1">
                    <a href="#" className='navbar__link'>Sobre mí</a>
                </li>
                <li className="navbar__items slideInDown-2">
                    <a href="#" className='navbar__link'>Mis Proyectos</a>
                </li>
                <li className="navbar__items slideInDown-3">
                    <a href="#" className='navbar__link' >Contacto</a>
                </li>
            </ul>
                <button className="navbar__burger" onClick={handleShowLinks}>
                    <span className='burger-bar'></span>
                </button>

        </nav>
        )
}
export default Navigation;