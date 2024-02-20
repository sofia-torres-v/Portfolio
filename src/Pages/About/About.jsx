import FotoPerfil from "../../assets/images/IMG_20180826_131758.jpg";
import "./About.css";

const About = () => {
    return (
        <>
            <section className="about__content container" id="about">
                <div className="about__text">
                    <h2 className="about__title typewriter">
                        {`Hola, soy`}
                        <span className="about__title-name ">Sofia Torres</span>
                    </h2>

                    <p className="about__description">
                        Soy una <span className="span">Frontend developer</span> , apasionada por el diseño visual, fasinada por el CSS y
                        con estudios en
                        <span className="span"> Administración de Empresas</span>
                        , busco plasmar creatividad y usabilidad en cada uno de
                        mis proyectos . Me gusta trabajar de forma colaborativa
                        y aprender de manera contínua através de la práctica .
                    </p>
                    <div className="text__icons">
                        <p className="about__description-end">
                            Si buscas un talento comprometido
                            <span className="span"> ¡Hablemos!</span>
                        </p>
                        <div className="about__image-social">
                            <a href="#" className="about__social-link">
                                <i className="bx bxs-envelope"></i>
                            </a>
                            <a href="#" className="about__social-link">
                                <i className="bx bxl-linkedin"></i>
                            </a>
                            <a href="#" className="about__social-link">
                                <i className="bx bxl-github"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="about__image">
                    <div className="about__image-perfil">
                        <img
                            src={FotoPerfil}
                            alt="FotoPerfil"
                            className="about__image-src"
                        />
                    </div>
                </div>
            </section>

            <section className="about__studies container">


                <h2>Mis Estudios </h2>
                <h3>JavaScript <span>2024</span></h3>
                <p>CoderHouse</p>
          
                <h3>Desarrollo Web Front-End <span>2023</span></h3>
                <p>Laboratoria</p>
             
                <h3>Desarrollo Web Front-End <span>2021</span></h3>
                <p>CoderHouse</p>
            </section>
        </>
    );
};

export default About;
