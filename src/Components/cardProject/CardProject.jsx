import PropTypes from "prop-types";
import "./cardProject.css";

const CardProject = ({ project }) => {
    return (
        <section className="card-project">
            <div className="img-project">
                <img src={project.image} alt="" />
            </div>
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
        liveLink: PropTypes.string.isRequired,
        githubLink: PropTypes.string.isRequired,
    }).isRequired,
};

export default CardProject;
