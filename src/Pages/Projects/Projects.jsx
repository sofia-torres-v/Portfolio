import  { useState } from "react";
import CardProject from "../../Components/cardProject/CardProject";
import data from '../../mocks/ProjectData';
import "./Projects.css";

const Projects = () => {
    const { projectsData } = data;
    const [visibleProjects, setVisibleProjects] = useState(4); // Número inicial de proyectos visibles
    const [showMore, setShowMore] = useState(true); // Estado para controlar si mostrar más proyectos o no

    const loadMoreProjects = () => {
        setVisibleProjects(prevVisibleProjects => prevVisibleProjects + 6); // Aumenta el número de proyectos visibles al hacer clic en el botón
        if (visibleProjects + 6 >= projectsData.length) {
            setShowMore(false); // Desactiva el botón "Ver más proyectos" cuando no hay más proyectos para cargar
        }
    };

    const showLessProjects = () => {
        setVisibleProjects(4); // Restablece el número de proyectos visibles al valor inicial
        setShowMore(true); // Vuelve a habilitar el botón "Ver más proyectos"
    };

    return (
        <section className="slide-in-from-top" id="projects">
            <div className="projects__content">
                <h2 className="projects__title">Mis Proyectos</h2>
                <div className="projects__card ">
                    {projectsData.slice(0, visibleProjects).map((project) => (
                        <CardProject key={project.id} project={project} />
                    ))}
                </div>
                {showMore && visibleProjects < projectsData.length && (
                    <button className="projects__button" onClick={loadMoreProjects}>Ver más proyectos</button>
                )}
                {!showMore && (
                    <button className="projects__button" onClick={showLessProjects}>Ver menos proyectos</button>
                )}
            </div>
        </section>
    );
};

export default Projects;
