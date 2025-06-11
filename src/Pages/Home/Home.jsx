import {Link} from "react-router-dom";
import "./Home.css";
import imagePerfil from "../../assets/images/perfil-portfolio.jpg";
import imageCss from "../../assets/images/icons_css.png";
import imageTailwind from "../../assets/images/logos_tailwindcss-icon.png";
import imageJs from "../../assets/images/javascript.png";
import imageTypescript from "../../assets/images/typescript.png";
import imageReact from "../../assets/images/logos_react.png";

const Home = () => {
    return (
        <section className="home__view">
            <div className="home__content-info">
                <div className="column container-hello">
                    <span className="span-hello1">Hola, soy</span>
                    <span className="span-hello">SOFIA TORRES</span>
                    <h1 className="title-home">Frontend Developer</h1>
                </div>
                <div className="column box__image-perfil">
                    <img className="image__perfil" src={imagePerfil} alt="" />
                </div>
            </div>

            <div className="home__content-image">
                <div className="box-icons-banner">
                    <img src={imageCss} alt="icono JavScript" className="intro__image" />
                    <p className="text-icon-home">Css</p>
                </div>
                <div className="box-icons-banner">
                    <img src={imageTailwind} alt="icono Css" className="intro__image icon-tailwind" />
                    <p className="text-icon-home">Tailwind</p>
                </div>
                <div className="box-icons-banner">
                    <img src={imageReact} alt="icono React" className="intro__image" />
                    <p className="text-icon-home">React</p>
                </div>
                <div className="box-icons-banner">
                    <img src={imageJs} alt="icono JavScript" className="intro__image" />
                    <p className="text-icon-home">JavaScript</p>
                </div>
                <div className="box-icons-banner">
                    <img src={imageTypescript} alt="icono Typescript" className="intro__image" />
                    <p className="text-icon-home">Typescript</p>
                </div>
            </div>
            <Link to="/contact" className="button-title">
                Contáctame
            </Link>
        </section>
    );
};

export default Home;