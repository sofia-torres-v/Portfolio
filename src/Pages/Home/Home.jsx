import { Link } from "react-router-dom";
import "./Home.css";
import imagePerfil from "../../assets/images/2.jpg";
import imageHtml from "../../assets/images/html.png";
import imageCss from "../../assets/images/css.png";
import imageJs from "../../assets/images/js-figma.png";
import imageReact from "../../assets/images/react2.png";
import imageMui from "../../assets/images/materialui-porfolio.png";
import imageWordp from "../../assets/images/wordpress1.png";

const Home = () => {
    return (
        <section className="home__view">
            <div className="home__content-info">
                <div className="column container-hello">
                    <span className="span-hello1">Hola, soy</span>
                    <span className="span-hello">SOFIA TORRES</span>
                    <h1 className="title-home">Frontend Developer</h1>
                    <div className="home__text">Especialista en crear sitios web atractivos y funcionales, apasionada del diseño visual.
                    </div>
                </div>
                <div className="column box__image-perfil">
                    <img className="image__perfil" src={imagePerfil} alt="" />
                </div>
            </div>

            <div className="home__content-image">
                <img src={imageHtml} alt="icono Html" className="intro__image" />
                <img src={imageCss} alt="icono Css" className="intro__image" />
                <img src={imageJs} alt="icono JavScript" className="intro__image" />
                <img src={imageReact} alt="icono React" className="intro__image" />
                <img src={imageMui} alt="" className="intro__image" />
                <img src={imageWordp} alt="" className="intro__image" />
            </div>
            <Link to="/contact" className="button-title">
                Contáctame
            </Link>
        </section>
    );
};

export default Home;
