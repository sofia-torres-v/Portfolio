import { Link } from "react-router-dom";
import "./Home.css";
import imagePerfil from "../../assets/images/perfil-portfolio.png";
import imageHtml from "../../assets/images/html.png";
import imageCss from "../../assets/images/css.png";
import imageJs from "../../assets/images/js-figma.png";
import imageReact from "../../assets/images/react2.png";
import imageMui from "../../assets/images/materialui-porfolio.png";
import imageWordp from "../../assets/images/wordpress1.png";

const Home = () => {
    return (
        <section className="home__view">
            <div className="box">
                <div className="box2">
                    <div className="container-hello">
                        <span className="span-hello1">Hola, soy</span>
                        <span className="span-hello">SOFIA TORRES</span>
                        <h1 className="title-home">Desarrolladora Web</h1>
                        <div className="home__text">
                        especialista en Frontend con enfoque mobile, apasionada por el diseño visual y el CSS.
                        </div>
                    </div>

                    <div className="box__image-perfil">
                        <img
                            className="image__perfil"
                            src={imagePerfil}
                            alt=""
                        />
                    </div>
                </div>

                <div className="box-img-btn">
                    <div className="content__images">
                        <img src={imageHtml} alt="" className="intro__image" />
                        <img src={imageCss} alt="" className="intro__image" />
                        <img src={imageJs} alt="" className="intro__image" />
                        <img src={imageReact} alt="" className="intro__image" />
                        <img src={imageMui} alt="" className="intro__image" />
                        <img src={imageWordp} alt="" className="intro__image" />
                    </div>
                    <Link to="/contact" className="button-title">Contáctame</Link>
                </div>
            </div>
        </section>
    );
};

export default Home;
