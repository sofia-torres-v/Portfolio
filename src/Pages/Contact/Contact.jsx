import data from "../../mocks/ProjectData";
import "./Contact.css";
import EnvelopeImage from "../../assets/images/zzzz.png";

const Contact = () => {
    const { aboutData } = data;

    return (
        <section className="slide-in-from-top" id="contact">
            <p className="contact__title">
                Si buscas talento comprometido ¡Hablemos!
            </p>
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
                            <a
                                className="contact__links-wm"
                                href="https://wa.me/51941196749"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                (+51) 941 196 749
                            </a>
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
                            <a
                                className="contact__links-wm"
                                href="mailto:sofy.torresv@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                sofy.torresv@gmail.com
                            </a>
                        </p>
                    </div>

                    <div className="contact__icons">
                        <a
                            href={aboutData.gitHub}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact__links-wm"
                        >
                            <i className="bx bxl-github contact-bx"></i>
                        </a>

                        <p className="contact__text">
                            <a
                                href={aboutData.gitHub}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact__links-wm"
                            >
                                github.com/sofia-torres-v
                            </a>
                        </p>
                    </div>
                    <div className="contact__icons">
                        <a
                            href={aboutData.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact__links-wm"
                        >
                            <i className="bx bxl-linkedin-square contact-bx"></i>
                        </a>
                        <p className="contact__text">
                            <a
                                href={aboutData.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact__links-wm"
                            >
                                in/sofia-torres-v
                            </a>
                        </p>
                    </div>
                </div>

                <div className="contact__titles">
                    <img className="icon-social" src={EnvelopeImage} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Contact;
