import "./Home.css";
import data from "../../mocks/ProjectData";
import imagePerfil from '../../assets/images/foto-perfil-sin-fondo.png'

const Home = () => {
    const { aboutData } = data;
       // Filtrar las habilidades deseadas
       const filteredSkills = aboutData.skillsWithImages.filter(skill =>
        ['React', 'JavaScript', 'Material UI', 'Wordpress'].includes(skill.name)
    );
    return (
        <section className="home__view">
            <div className="box">
                <div className="container-hello">
                    <span className="span-hello">Hola, soy</span>
                    <h1 className="title-home">Sofia Torres</h1>
                    <div className="home__text">
                        Desarrolladora Web Frontend, apasionada por el diseño visual
                        y fascinada por el CSS. Conoce mis principales
                        habilidades.
                    </div>

                <div className="intro__images">
                {filteredSkills.map((skill, index) => (
                    <div className="content__images" key={index}>
                        <img
                            src={skill.image}
                            alt={`Imagen de ${skill.name}`}
                            className="intro__image"
                        />
                        <p className="content__text" translate="no">{skill.name}</p>
                    </div>
                ))}
                </div>
            </div>
                <div className="box__image-perfil">
                    <img className="image__perfil" src={imagePerfil} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Home;
