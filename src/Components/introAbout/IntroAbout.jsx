import "./IntroAbout.css";
import ulimaGroup from "../../assets/images/gema1.png";

const IntroAbout = () => {
    return (
        <section className="slide-in-from-top">
            <div className="intro__content">
                <div className="intro__text">
                    <h2 className="intro__span1">Sobre mí</h2>
                    <p className="intro__text">
                        Soy <strong>Desarrolladora Web Frontend</strong>, mi enfoque es plasmar creatividad y usabilidad en todos mis proyectos. Me encanta participar activamente en <strong>eventos de emprendimiento</strong> y <strong>hackathons</strong>. Tengo experiencia trabajando en equipos multidisciplinarios en una variedad de proyectos, contribuyendo al desarrollo de soluciones innovadoras.
                    </p>
                </div>

                <div className="intro__container-image">
                    <img src={ulimaGroup} alt="FotoPerfil" />
                </div>
            </div>
        </section>
    );
};

export default IntroAbout;
