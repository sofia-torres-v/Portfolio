import {useState} from "react";
import CardProject from "../../Components/cardProject/CardProject";
import data from "../../mocks/ProjectData";
import "./Projects.css";
import imgCode from "../../assets/images/about2-r.png";

const Projects = () => {
    const {projectsData} = data;
    const initialVisibleProjects = 3; // Número inicial de proyectos visibles
    const [visibleProjects, setVisibleProjects] = useState(initialVisibleProjects);
    const [activeButton, setActiveButton] = useState("web con código"); // Estado para el botón activo

    // Filtrar proyectos por categoría
    const filteredProjects = projectsData.filter((project) => project.category === activeButton);

    const loadMoreProjects = () => {
        const nextVisibleProjects = visibleProjects + 6;
        setVisibleProjects(nextVisibleProjects);
        if (nextVisibleProjects >= filteredProjects.length) {
            setVisibleProjects(filteredProjects.length); // Muestra todos los proyectos restantes
        }
    };

    const showLessProjects = () => {
        setVisibleProjects(initialVisibleProjects); // Restablece el número de proyectos visibles al valor inicial
    };

    return (
        <section className="slide-in-from-top" id="projects">
            <div className="projects__content">
                <div className="box__projects-title">
                    <span className="projects__title">Mis Proyectos por categorías</span>
                    <img className="title__img-code" src={imgCode} alt="" />
                </div>
                <div className="box__projects-button">
                    <button
                        className={`projects__button-title ${activeButton === "web con código" ? "active" : ""}`}
                        onClick={() => {
                            setActiveButton("web con código");
                            setVisibleProjects(initialVisibleProjects);
                        }}
                    >
                        Proyectos en Código
                    </button>
                    <button
                        className={`projects__button-title ${activeButton === "web con WordPress" ? "active" : ""}`}
                        onClick={() => {
                            setActiveButton("web con WordPress");
                            setVisibleProjects(initialVisibleProjects);
                        }}
                    >
                        Proyectos en WordPress
                    </button>
                </div>

                <div className="projects__card">
                    {filteredProjects.slice(0, visibleProjects).map((project) => (
                        <CardProject key={project.id} project={project} />
                    ))}
                </div>
            </div>
            <div className="project__button-plus">
                <h2 className="subtitle-button-plus">Descubre más de mis proyectos</h2>
                {visibleProjects < filteredProjects.length ? (
                    <button className="projects__button" onClick={loadMoreProjects}>
                        Ver más<i class="bx bx-chevron-down angle"></i>
                    </button>
                ) : (
                    <button className="projects__button" onClick={showLessProjects}>
                        Ver menos <i className="bx bx-chevron-up angle"></i>
                    </button>
                )}
            </div>
        </section>
    );
};

export default Projects;
