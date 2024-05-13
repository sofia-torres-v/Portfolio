import "./IntroAbout.css";
import ulimaGroup from "../../assets/images/ulimaAbout.jpeg";

const IntroAbout = () => {
    return (
        <section className="slide-in-from-top">
            <div className="intro__content">
                <div className="intro__text">
                    <h2 className="intro__span1">Sobre mí</h2>
                    <p className="intro__text">
                        Soy Desarrolladora Web Front-End, apasionada por
                        el diseño visual y fascinada por el CSS. Mi enfoque es
                        plasmar creatividad y usabilidad en todos mis
                        proyectos. Disfruto colaborar en entornos dinámicos y
                        participar activamente en eventos de emprendimiento y
                        hackathons. Mi experiencia incluye proyectos
                        colaborativos donde he tenido la oportunidad de trabajar
                        en equipos multidisciplinarios para desarrollar
                        soluciones innovadoras.
                    </p>
                    <h2 className="intro__text2">Mis Habilidades</h2>
                </div>

                <div className="intro__container-image">
                    <img src={ulimaGroup} alt="FotoPerfil" />
                </div>
            </div>
        </section>
    );
};

export default IntroAbout;
