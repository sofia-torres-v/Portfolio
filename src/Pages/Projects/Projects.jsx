import CardProject from "../../Components/cardProject/CardProject";
import data from '../../mocks/ProjectData';
import "./Projects.css";

const Projects = () => {
    const { projectsData } = data; // Desestructura projectsData directamente
    return (
        <section className="slide-in-from-top" id="projects">
            <div className="projects__content">
                <h2 className="projects__title">Mis Proyectos</h2>
                <div className="projects__card ">
                    {projectsData.map((project) => (
                        <CardProject key={project.id} project={project} />
                    ))}
                </div>
                <button>ver más</button>
            </div>
        </section>
    );
};

export default Projects;
