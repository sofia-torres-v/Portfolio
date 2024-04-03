import "./Home.css";
import imagen2 from "../../assets/images/react-portfolio.png";
import imagen1 from "../../assets/images/js.png";
import imagen3 from "../../assets/images/materialui-porfolio.png";
import imagen5 from "../../assets/images/git-fork-outline.png";
import imagen4 from "../../assets/images/wordpress-about.png";

const Home = () => {
    return (
        <section className="home-view">
            <div className="box">
                <div className="container-hello">
                    <span className="span-hello">Hola, Soy</span>
                    <h1 className="title-home">Sofia Torres</h1>
                    <span className="home__text">
                        Desarrolladora Frontend, apasionada por el diseño visual
                        y fascinada por el CSS. Conóce mis principales habilidades.
                    </span>
                </div>
            </div>
            
                
                <div className="intro__images">
                    <div className="content__images">
                        <img
                            src={imagen1}
                            alt="Descripción de la imagen 1"
                            className="intro__image"
                        />
                        <p className="content__text">JavaScript</p>
                    </div>
                    <div className="content__images">
                        <img
                            src={imagen2}
                            alt="Descripción de la imagen 2"
                            className="intro__image"
                        />
                        <p className="content__text" >React</p>
                    </div>
                    <div className="content__images">
                        <img
                            src={imagen3}
                            alt="Descripción de la imagen 2"
                            className="intro__image"
                        />
                        <p className="content__text" >Material UI</p>
                    </div>
                    <div className="content__images">
                    <img
                            src={imagen5}
                            alt="Descripción de la imagen 2"
                            className="intro__image"
                        /> 
                        <p className="content__text" >Git</p>
            
                    </div>
                    <div className="content__images">
                    <img
                            src={imagen4}
                            alt="Descripción de la imagen 2"
                            className="intro__image"
                        />
                        <p className="content__text" >Wordpress</p>
               
                    </div>
            </div>
        </section>
    );
};

export default Home;
