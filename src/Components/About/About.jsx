
import FotoPerfil from '../../assets/images/fotoPerfil1.png';
import './About.css';

const About = () => {
    return (
        <section className="about " id="about">
            <div className="about__content">
                <div className='about__text'>
                    <h3 className="about__title">{`Hi, I'm Sofia Torres`}</h3>
                    <h1 className="about__subtitle">Frontend Developer</h1>
                    <p className="about__description">Busco plasmar creatividad y usabilidad en cada uno de mis proyectos, donde cada detalle cuenta para mí.</p>
                    <div className="about__social">
                        <span className="about__contact-label">Contactame en:</span>
                        <div className='about__social-icons'>
                            <a href="#" className="about__social-link"><i className='bx bxl-linkedin-square'></i></a>
                            <a href="#" className="about__social-link"><i className='bx bxl-github'></i></a>
                            <a href="#" className="about__social-link"><i className='bx bx-envelope'></i></a>
                        </div>
                    </div>
                </div>

                <div className="about__image">
                    <img src={FotoPerfil} alt="FotoPerfil" className="about__image-src" />
                    <span className='circle-spin' ></span>
                </div>
            </div>
        </section>
    );
};

export default About;
