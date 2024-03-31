import "./Home.css";
import imagen1 from "../../assets/images/js.png";
import imagen2 from "../../assets/images/react-portfolio.png";
import imagen3 from "../../assets/images/materialui-porfolio.png";
import imagen4 from "../../assets/images/icon-wordpress-blue.png";
import imagen5 from "../../assets/images/icon-git-blanco.png";

const Home = () => {
    return (
        <section className="home-view">
            <div className="box">
                <div className="container-hello">
                    <span className="span-hello">Hola, Soy</span>
                    <h1 className="title-home">Sofia Torres</h1>
                    <span className="span-frontend">
                        {" "}
                        Desarrolladora Frontend, apasionada por el diseño visual
                        y fascinada por el CSS. Conóce mis principales habilidades.
                    </span>
                </div>
            </div>
            
                
                <div className="intro__images">
                    <div>
                        <img
                            src={imagen1}
                            alt="Descripción de la imagen 1"
                            className="intro__image"
                        />
                        <h2>JavaScript</h2>
                    </div>
                    <div>
                        <img
                            src={imagen2}
                            alt="Descripción de la imagen 2"
                            className="intro__image"
                        />
                        <h2>React</h2>
                    </div>
                    <div>
                        <img
                            src={imagen3}
                            alt="Descripción de la imagen 2"
                            className="intro__image"
                        />
                        <h2>Material UI</h2>
                    </div>
                    <div>
                        <img
                            src={imagen4}
                            alt="Descripción de la imagen 2"
                            className="intro__image"
                        />
                        <h2>Wordpress</h2>
                    </div>
                    <div>
                         <img
                            src={imagen5}
                            alt="Descripción de la imagen 2"
                            className="intro__image"
                        /> 
                        <h2>Git</h2>
                    </div>
            </div>
        </section>
    );
};

export default Home;
