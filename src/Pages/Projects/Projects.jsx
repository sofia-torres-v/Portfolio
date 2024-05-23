import { useState } from "react";
import CardProject from "../../Components/cardProject/CardProject";
import data from '../../mocks/ProjectData';
import "./Projects.css";

const Projects = () => {
    const { projectsData } = data;
    const initialVisibleProjects = 3; // Número inicial de proyectos visibles
    const [visibleProjects, setVisibleProjects] = useState(initialVisibleProjects);
    const [category, setCategory] = useState("web con código"); // Estado para manejar la categoría seleccionada

    // Filtrar proyectos por categoría
    const filteredProjects = projectsData.filter(project => project.category === category);

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
                    <h2 className="projects__title">Mis Proyectos</h2>
                    <div className="box__projects-button">
                        <button className="projects__button-title" onClick={() => { setCategory("web con código"); setVisibleProjects(initialVisibleProjects); }}>Web con Código</button>
                        <button className="projects__button-title" onClick={() => { setCategory("web con WordPress"); setVisibleProjects(initialVisibleProjects); }}>Web con WordPress</button>
                    </div>
                </div>
                <div className="projects__card">
                    {filteredProjects.slice(0, visibleProjects).map((project) => (
                        <CardProject key={project.id} project={project} />
                    ))}
                </div>
                {visibleProjects < filteredProjects.length ? (
                    <button className="projects__button" onClick={loadMoreProjects}>Ver más proyectos<i className='bx bx-chevron-down angle'></i></button>
                ) : (
                    <button className="projects__button" onClick={showLessProjects}>Ver menos proyectos <i className='bx bx-chevron-up angle'></i></button>
                )}
            </div>
        </section>
    );
};

export default Projects;
