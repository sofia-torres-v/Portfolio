import ContactForm from "../../Components/form/form";
import "./Contact.css";

const Contact = () => {
    return (
        <section id="contact">
            <h1 className="contact__title">Ponte en contacto conmigo</h1>
                < ContactForm />
            <div className="contact__content">
                <div className="contact__icons">
                    <i className="bx bxs-map"></i>
                    <p>Lima, Perú</p>
                </div>
                <div className="contact__icons">
                    <i className="bx bxs-envelope"></i>
                    <p>sofy.torresv@gmail.com</p>
                </div>
                <div className="contact__icons">
        
                    <i className="bx bxs-phone-call"></i>
                    <p>(+51) 941 196 749</p>
                </div>
            </div>
            
        </section>
    );
};

export default Contact;
