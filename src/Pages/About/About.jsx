import { useState } from "react";
import FotoPerfil from "../../assets/images/perfilRosa.jpg";
import "./About.css";

const About = () => {  
    const [ sectionVisible, setSectionVisible] = useState('habilidades');

    const mostrarSection = (section) =>{
        setSectionVisible(section);
    }


    return (
        <>
            <section
                className="about__content container slide-in-from-top"
                id="about"
            >
                <div className="about__image">
                    <div className="about__image-perfil">
                        <img src={FotoPerfil} alt="FotoPerfil" />
                    </div>
                </div>

                <div className="about__text span">
                    <h2>Sobre Mi</h2>
                    <p className="about__description">
                        Soy una
                        Frontend developer Peruana
                        , apasionada por el diseño visual, fasinada por el CSS y
                        con estudios en
                        Administración de Empresas
                        , busco plasmar creatividad y usabilidad en cada uno de
                        mis proyectos . Me gusta trabajar de forma colaborativa
                        y aprender de manera contínua através de la práctica .
                    </p>
                    <div className="about__skills">
                        <div>
                            <h3 onClick={() => mostrarSection('habilidades')}>Habilidades</h3>
                            {sectionVisible === 'habilidades' &&(
                                <ul>
                                    <li>React</li>
                                    <li>JavaScript</li>
                                    <li>Css Native</li>
                                    <li>Html5</li>
                                    <li>Material UI</li>
                                    <li>GitHub</li>
                                    <li>wordPress</li>
                                    <li>Shopify</li>
                                </ul>                     
                                )}
                        </div>
                        <div>
                            <h3 onClick={()=> mostrarSection('estudios')}>Estudios</h3>
                            {sectionVisible === 'estudios' &&(
                            <ul>
                                <li>Desarrollo Frontend  </li>
                                <li>Administracion  </li>
                            </ul>
                           )}
                        </div>
                        <div>
                            <h3 onClick={()=> mostrarSection('certificaciones')}>Certificaciones</h3>
                            {sectionVisible === 'certificaciones' &&(
                            <ul>
                                <li>Desarrollo web  </li>
                                <li>Desarrollo web   </li>
                                <li>Desarrollo web   </li>
                            </ul>    
                            )}                  
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
