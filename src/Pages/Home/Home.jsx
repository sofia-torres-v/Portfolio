import "./Home.css";
import data from "../../mocks/ProjectData";

const Home = () => {
    const { aboutData } = data;
       // Filtrar las habilidades deseadas
       const filteredSkills = aboutData.skillsWithImages.filter(skill =>
        ['React', 'JavaScript', 'Material UI', 'Git', 'Wordpress'].includes(skill.name)
    );
    return (
        <section className="home-view">
            <div className="box">
                <div className="container-hello">
                    <span className="span-hello">Hola, soy</span>
                    <h1 className="title-home">Sofia Torres</h1>
                    <span className="home__text">
                        Desarrolladora Frontend, apasionada por el diseño visual
                        y fascinada por el CSS. Conoce mis principales
                        habilidades.
                    </span>
                </div>
            </div>

            <div className="intro__images">
                {filteredSkills.map((skill, index) => (
                    <div className="content__images" key={index}>
                        <img
                            src={skill.image}
                            alt={`Imagen de ${skill.name}`}
                            className="intro__image"
                        />
                        <p className="content__text">{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Home;
