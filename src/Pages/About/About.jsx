import { useState } from "react";
import Intro from "../../Components/Intro/Intro";
import "./About.css";
import Projects from "../Projects/Projects";
import  data  from "../../mocks/ProjectData";

const About = () => {
    const { aboutData } = data;
    const [sectionVisible, setSectionVisible] = useState("habilidades");

    const mostrarSection = (section) => {
        setSectionVisible(section);
    };

    return (
        <>
            <section className="about__content  " id="about">
                <Intro />
                <div className="about__text  span">
                    <h2 className="about__subtitle">Sobre Mí</h2>
                    <p className="about__description">
                        Soy una Frontend developer Peruana con estudios en
                        Administración de Empresas , apasionada por el diseño
                        visual y fascinada por el CSS. Mi objetivo es plasmar
                        creatividad y usabilidad en cada uno de mis proyectos .
                        Me gusta trabajar de forma colaborativa y aprender de
                        manera contínua através de la práctica. Te invito a explorar mi formación y experiencia haciendo clic en los enlaces de Habilidades, Estudios y Certificaciones. 
                    </p>

                    <div className="about__skills">
                        <div>
                            <h3 onClick={() => mostrarSection("habilidades")}>
                                Habilidades
                            </h3>
                            {sectionVisible === "habilidades" && (
                                <ul className="skills__list">
                                    {aboutData.skillsWithImages.map(
                                        (skill, index) => (
                                            <li className="skills__items" key={index}>
                                                <img className="about__skills-images"
                                                    src={skill.image}
                                                    alt={skill.name}
                                                />
                                                {skill.name}
                                            </li>
                                        )
                                    )}
                                </ul>
                            )}
                        </div>
                        <div>
                            <h3 onClick={() => mostrarSection("estudios")}>
                                Estudios
                            </h3>
                            {sectionVisible === "estudios" && (
                                <ul>
                                    <li>Desarrollo Frontend </li>
                                    <li>Administracion </li>
                                </ul>
                            )}
                        </div>
                        <div>
                            <h3
                                onClick={() =>
                                    mostrarSection("certificaciones")
                                }
                            >
                                Certificaciones
                            </h3>
                            {sectionVisible === "certificaciones" && (
                                <ul>
                                    <li>Desarrollo web </li>
                                    <li>Desarrollo web </li>
                                    <li>Desarrollo web </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <Projects />
        </>
    );
};

export default About;
