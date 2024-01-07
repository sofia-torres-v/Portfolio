import FotoPerfil from "../../assets/images/fotoPerfil1.png";
import "./Intro.css";

const Intro = () => {
    return (
        <div id="intro" className="container">
            <div className="intro-content ">
                <div className="box-intro">
                    <div className="box-greeting">
                        <p className="text-hello">{`Hello, I'm Sofia`}</p>

                        <h1 className="text-frontend typewriter">
                            Frontend Developer
                        </h1>
                    </div>
                    <p className="text-about">
                        Busco plasmar creatividad y usabilidad en cada uno de
                        mis proyecto donde cada detalle cuenta para mí.
                    </p>
                </div>

                <div className="box-img">
                    <img src={FotoPerfil} alt="" className="img-intro" />
                </div>
            </div>

            <div className="intro-redes">
                <p>Conectame en mis redes</p>
                <i className="bx bxl-linkedin"></i>
                <i className="bx bxl-github"></i>
            </div>
        </div>
    );
};

export default Intro;
