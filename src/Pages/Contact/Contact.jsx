import "./Contact.css";

const Contact = () => {
    return (
        <section id="contact">
            <h1>Ponte en contacto conmigo</h1>
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
            <form >
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        // onChange={handleNameChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        // value={email}
                        // onChange={handleEmailChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Mensaje:</label>
                    <textarea
                        id="message"
                        // value={message}
                        // onChange={handleMessageChange}
                        required
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
            
        </section>
    );
};

export default Contact;
