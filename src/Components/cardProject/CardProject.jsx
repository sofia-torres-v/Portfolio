import { useState } from "react";
import PropTypes from "prop-types";
import "./cardProject.css";

const CardProject = ({ project }) => {
    const { name, liveLink, githubLink, description, skills } = project;

    const [isFlipped, setFlipped] = useState(false);

    const handleFlip = () => {
        console.log("click en ver detalles");
        setFlipped(!isFlipped);
    };

    const handleBack = () => {
        // Volver al card-front
        setFlipped(false);
    };
    console.log("estado actual de la tarjeta");
    return (
        <section className={`card-project ${isFlipped ? "flipped" : ""}`}>
            <div className="card-front">
                <img src={project.image} alt={name} />
                <h2 className="subtitle-projects">{name}</h2>
                <button>
                    <a href={liveLink} target="blank" rel="noopener noreferrer">
                        Codigo
                    </a>
                </button>
                <button>
                    <a
                        href={githubLink}
                        target="blank"
                        rel="noopener noreferrer"
                    >
                        Codigo
                    </a>
                </button>

                <button className="details-button" onClick={handleFlip}>
                    Ver Detalles
                </button>

                <h2>{skills}</h2>
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
