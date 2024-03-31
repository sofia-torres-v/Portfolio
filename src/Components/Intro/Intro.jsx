import "./Intro.css";
// import data from "../../mocks/ProjectData";
import FotoPerfil from "../../assets/images/IMG_20180826_131758.jpg";

const Intro = () => {
    return (
        <section className="slide-in-from-top">
            <div className="intro__content">
                <div className="intro__container-hello">
                    <h2 className="intro__span1">Sobre mí</h2>

                    <div>
                        <p className="intro__text">
                            Soy una Frontend Developer Peruana con estudios en
                            Administración. Apasionada por el diseño visual y
                            fascinada por el CSS. Actualmente, me dedico a
                            trabajar en proyectos freelance. Mi objetivo es
                            plasmar creatividad y usabilidad en todos mis
                            proyectos. Me gusta trabajar de forma colaborativa y
                            aprender de manera contínua através de la práctica.
                        </p>
                    </div>
                    
                    <h2>Mis Habilidades</h2>
                    <p className="intro__text">
  
                        </p>
                </div>

                <div className="intro__container-image">
                    <img src={FotoPerfil} alt="FotoPerfil" />
                </div>
            </div>

            <div className="intro__content2"></div>
        </section>
    );
};

export default Intro;
