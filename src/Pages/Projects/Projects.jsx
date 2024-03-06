import CardProject from '../../Components/cardProject/CardProject';
import ProjectsData from '../../mocks/ProjectData'
import './Projects.css';

const Projects = () => {
    return (     
        
        <section className='slide-in-from-top' id="projects">
            <h2 className='projects__title'>Mis Proyectos</h2>      
            <div className='projects__content container'>
                {ProjectsData.map((project) => (
                    <CardProject key={project.id} project={project}/>
                ))}
            </div>    
            <button>ver mas</button>            
        </section>
    );
};

export default Projects;
