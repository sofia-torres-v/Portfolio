import "./Intro.css";
import data  from '../../mocks/ProjectData'
import FotoPerfil from "../../assets/images/IMG_20180826_131758.jpg";

const Intro = () => {
    const { aboutData } = data;
    return (
        <section className="home">
            <div className="home__content">
                <div className="home__container-hello">
                    <span className="home__span-hello">Hola,</span>
                    <h1 className="home__title">
                        <span className="span">Soy</span> {aboutData.name}</h1>
                    <span className="home__span-frontend">
                        &gt;Frontend Developer
                    </span>

                    <div className="home__social">
                        <p className="home__social-text">
                            Puedes contactame en:
                        </p>
                        <div className="home__social-icons">
                            <a href={`mailto:${aboutData.email}`}className="about__social-link">
                                <i className="bx bxs-envelope"></i>
                            </a>
                            <a
                                href={aboutData.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="about__social-link"
                            >
                                <i className="bx bxl-linkedin"></i>
                            </a>
                            <a
                                href={aboutData.gitHub}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="about__social-link"
                            >
                                <i className="bx bxl-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <img src={FotoPerfil} alt="FotoPerfil" />
                </div>
            </div>
        </section>
    );
};

export default Intro;
