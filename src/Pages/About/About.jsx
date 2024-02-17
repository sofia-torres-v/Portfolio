import FotoPerfil from "../../assets/images/IMG_20180826_131758.jpg";
import "./About.css";

const About = () => {
    return (
        <>
            <div className="about__content" id="about">
                <div className="about__text">
                    <h2 className="about__title typewriter">
                        {`Hi, I'm `}
                        <span className="about__title-name ">Sofia Torres</span>
                    </h2>

                    <h3 className="about__subtitle ">Frontend Developer</h3>

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
            </div>

            <p className="about__description">
                Apasionada por el diseño visual con un enfoque especial en CSS y
                con estudios en Administración, busco plasmar creatividad y
                usabilidad en cada uno de mis proyectos. Me gusta trabajar de
                forma colaborativa y aprender através de la práctica continua.
                Si buscas un talento comprometido, ¡hablemos!
            </p>

            
        </>
    );
};

export default About;
