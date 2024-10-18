import {Link} from "react-router-dom";
import "./Home.css";
import imagePerfil from "../../assets/images/portfolio-A.png";
import imageJs from "../../assets/images/javascript.png";
import imageReact from "../../assets/images/logos_react.png";
import imageTypescript from "../../assets/images/typescript.png";
// import imageVue from "../../assets/images/devicon_vuejs.png";
import imageTailwind from "../../assets/images/logos_tailwindcss-icon.png";
import imageGo from "../../assets/images/devicon_go.png";



const Home = () => {
    return (
        <section className="home__view">
            <div className="home__content-info">
                <div className="column container-hello">
                    <span className="span-hello1">Hola, soy</span>
                    <span className="span-hello">SOFIA TORRES</span>
                    <h1 className="title-home">Frontend Developer</h1>
                    <div className="home__text">
                    Apasionada del diseño visual, con enfoque mobile first y con conocimientos en Golang para el Backend.
                    </div>
                </div>
                <div className="column box__image-perfil">
                    <img className="image__perfil" src={imagePerfil} alt="" />
                </div>
            </div>

            <div className="home__content-image">
                <img src={imageJs} alt="icono JavScript" className="intro__image" />
                <img src={imageReact} alt="icono React" className="intro__image" />
                <img src={imageTypescript} alt="icono Html" className="intro__image" />
                {/* <img src={imageVue} alt="icono React" className="intro__image" />s */}
                <img src={imageTailwind} alt="icono Css" className="intro__image" />
                <img src={imageGo} alt="" className="intro__image" />
            </div>
            <Link to="/contact" className="button-title">
                Contáctame
            </Link>
        </section>
    );
};

export default Home;
