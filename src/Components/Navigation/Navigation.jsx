import { useState } from 'react';
import  './Navigation.css'

const Navigation = ()=>{
    const [showLinks, setShowLinks] = useState(false);

    const handleShowLinks = ()=>{
        setShowLinks(!showLinks)
    }
    console.log(!showLinks)

    return(
        <nav className={ `navbar ${showLinks ? 'show-nav' : 'hide-nav'}`}>
            <div className="navbar__logo">Logo</div>
            <ul className="navbar__links">
                <li className="navbar__items slideInDown-1">
                    <a href="#" className='navbar__link'>inicio</a>
                </li>
                <li className="navbar__items slideInDown-2">
                    <a href="#" className='navbar__link'>Proyectos</a>
                </li>
                <li className="navbar__items slideInDown-3">
                    <a href="#" className='navbar__link' >Habilidades</a>
                </li>
                <li className="navbar__items slideInDown-4">
                    <a href="#" className='navbar__link' >contacto</a>
                </li>
            </ul>
                <button className="navbar__burger" onClick={handleShowLinks}>
                    <span className='burger-bar'></span>
                </button>

        </nav>
        )
}
export default Navigation;