import { useState } from "react";
import PropTypes from "prop-types";
import "./cardProject.css";

const CardProject = ({ project }) => {
    const { name, liveLink, githubLink, description, skills} = project;
    const [isFlipped, setFlipped] = useState(false);

    const handleFlip = () => {
        console.log("click en ver detalles");
        setFlipped(!isFlipped);
    };

    const handleBack = () => {
        // Volver al card-front
        setFlipped(false);
    };
     // Define la longitud máxima del extracto
     const maxExtractLength = 70;
     // Obtén el extracto truncado de la descripción
     const extract = description.length > maxExtractLength ? `${description.substring(0, maxExtractLength)}...` : description;
    
    return (
        <section className={`card-project ${isFlipped ? "flipped" : ""}`}>
            <div className="card-front">
                <img src={project.image} alt={name} />
                <h2 className="subtitle-projects">{name}</h2>
                <div className="box-description">
                    <p>{extract}
                        <a className="details-button" onClick={handleFlip}>
                            Leer más
                        </a>
                    </p>
                </div>

                <div className="btn-box">
                    <button className="btn-online">
                        <a
                            className="online__link"
                            href={liveLink}
                            target="blank"
                            rel="noopener noreferrer"
                        >
                             Ver Proyecto
                        </a>
                    </button>
                    <button className="btn-online">
                        <a
                            className="online__link"
                            href={githubLink}
                            target="blank"
                            rel="noopener noreferr*-er"
                        >
                          
                            Ver Código
                        </a>
                    </button>
                </div>

                <div className="box-tec">
                    <p className="title-skills1">Tecnologías:</p>
                    
                   <div className="project-skills">
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className={`project-skill ${[skill]}`}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {isFlipped && (
                <div className="card-back">
                    <div className="card-back-content">
                        {description}
                        <button className="back-button" onClick={handleBack}>
                            Volver
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

CardProject.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        skills: PropTypes.string.isRequired,
        liveLink: PropTypes.string.isRequired,
        githubLink: PropTypes.string.isRequired,
    }).isRequired,
};

export default CardProject;
