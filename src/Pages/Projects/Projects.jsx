import CardProject from '../../Components/cardProject/CardProject';
import ProjectsData from '../../mocks/ProjectData'
import './Projects.css';

const Projects = () => {
    return (     
        <section id="proyects">
            <h2>Mis Proyectos</h2>      
            <div className='projects__content container'>
                {ProjectsData.map((project) => (
                    <CardProject key={project.id} project={project}/>
                ))}
            </div>                
        </section>
    );
};

export default Projects;
