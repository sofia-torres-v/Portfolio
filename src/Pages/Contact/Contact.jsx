import data from "../../mocks/ProjectData";
import "./Contact.css";
import EnvelopeImage from "../../assets/images/envelope.png";

const Contact = () => {
    const { aboutData } = data;

    return (
        <section id="contact" className="slide-in-from-top">
            <p className="contact__title">Si buscas talento comprometido ¡Hablemos!</p>
            <div className="contact__content">
                <div className="contact__icons-info">
                    <div className="contact__icons">
                        <a
                            href="https://wa.me/51941196749"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact__links-wm"
                        >
                            <i className="bx bxl-whatsapp"></i>
                        </a>

                        <p className="contact__text">
                            Escríbeme por WhatsApp
                        </p>
                    </div>

                    <div className="contact__icons">
                        <a
                            href="mailto:sofy.torresv@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact__links-wm"
                        >
                            <i className="bx bxs-envelope"></i>
                        </a>

                        <p className="contact__text">
                            Envíame un correo
                        </p>
                    </div>

                    <div className="contact__icons">
                        <a
                            href={aboutData.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact__links-wm"
                        >
                            <i className="bx bxl-linkedin-square"></i>
                        </a>
                        <p className="contact__text">
                            Conectemos en LinkedIn
                        </p>
                    </div>

                    <div className="contact__icons">
                        <a
                            href={aboutData.gitHub}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact__links-wm"
                        >
                            <i className="bx bxl-github"></i>
                        </a>

                        <p className="contact__text">
                            Mira mis proyectos
                        </p>
                    </div>

                </div>
                <div className="contact__titles">
                    <img className="icon-social" src={EnvelopeImage} alt="envelope image" />
                </div>
            </div>
        </section>
    );
};

export default Contact;
