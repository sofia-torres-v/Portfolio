import "./footer.css";
import data from "../../mocks/ProjectData";

const Footer = () => {
    const { aboutData } = data;
    return (
        <div className="footer">
            <div className="box-footer">
                <p>Sofia Torres Web Developer Copyright © 2024</p>
                <div className="home__social-icons">
                    <a
                        href={aboutData.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="about__social-link"
                    >
                        <i className="bx bxl-linkedin"></i>
                    </a>
                    <a
                        href={aboutData.gitHub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="about__social-link"
                    >
                        <i className="bx bxl-github"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
