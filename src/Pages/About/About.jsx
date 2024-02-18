import FotoPerfil from "../../assets/images/IMG_20180826_131758.jpg";
import "./About.css";

const About = () => {
    return (
        <>
            <section className="about__content container" id="about">
                <div className="about__text">
                    <h2 className="about__title typewriter">
                        {`Hi, I'm `}
                        <span className="about__title-name ">Sofia Torres</span>
                    </h2>

                    <h3 className="about__subtitle ">Frontend  Developer</h3>
                    <h3> Perú - Lima, ciudad</h3>

                    <div className="about__social">
                        <a href="#" className="about__social-link">
                            <i className="bx bxl-whatsapp-square"></i>
                        </a>
                        <a href="#" className="about__social-link">
                            <i className="bx bxs-envelope"></i>
                        </a>
                        <a href="#" className="about__social-link">
                            <i className="bx bxl-linkedin-square"></i>
                        </a>
                        <a href="#" className="about__social-link">
                            <i className="bx bxl-github"></i>
                        </a>
                    </div>
                </div>

                <div className="about__image">
                    <img
                        src={FotoPerfil}
                        alt="FotoPerfil"
                        className="about__image-src"
                    />
                </div>
            </section>

        <section className="about__content2 container">
            <h2 className="acerca">Acerca de mí</h2>
            <p className="about__description">
                Apasionada por el diseño visual, fasinada por el CSS y
                con estudios en Administración, busco plasmar creatividad y
                usabilidad en cada uno de mis proyectos, donde cada detalle cuenta para mí. Me gusta trabajar de
                forma colaborativa y aprender de manera contínua através de la práctica .
                Si buscas un talento comprometido, ¡hablemos!
            </p>

            <h2 className="acerca">Mi Educación</h2>
            <h3>Desarrollo Web</h3>
            <p>CoderHouse</p>
            <p>Laboratoria</p>
        </section>

        <section className="about__content3 container">
            <h2> Algunos de mis Proyectos</h2>


        </section>

            
        </>
    );
};

export default About;
