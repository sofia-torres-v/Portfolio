import data from "../../mocks/ProjectData";
import "./Contact.css";
import LinkedinIcon from "../../assets/images/zzzz.png";

const Contact = () => {
    const { aboutData } = data;
    return (
        <section className="slide-in-from-top" id="contact">
            <p className="contact__title">
                Si buscas talento comprometido ¡Hablemos!
                {/* <span className="contact__span"> */}
                {/* <span className="contact__span">!</span> */}
            </p>
            <div className="contact__content">
                <div className="contact__icons-info">
                    <div className="contact__icons">
                        <i className="bx bxs-phone-call "></i>
                        <p className="contact__text">(+51) 941 196 749</p>
                    </div>
                    <div className="contact__icons">
                        <i className="bx bxs-envelope  "></i>
                        <p className="contact__text">sofy.torresv@gmail.com</p>
                    </div>
                    <div className="contact__icons">
                        <div className="">
                            <a
                                href={aboutData.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer__social-link"
                            >
                                <i className="bx bxl-linkedin contact-bx"></i>
                            </a>
                            <a
                                href={aboutData.gitHub}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer__social-link"
                            >
                                <i className="bx bxl-github contact-bx"></i>
                            </a>
                        </div>
                        <div className="boxes">
                            <i className="bx bxs-map contact-bx"></i>
                            <p className="contact__text">Lima, Perú</p>
                        </div>
                    </div>
                </div>

                <div className="contact__titles">
                    <img className="icon-social" src={LinkedinIcon} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Contact;
