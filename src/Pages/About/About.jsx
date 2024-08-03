import { useState, useRef } from "react";
import "./About.css";
import data from "../../mocks/ProjectData";
import IntroAbout from "../../Components/introAbout/IntroAbout";

const About = () => {
    const { aboutData } = data;
    const [sectionVisible, setSectionVisible] = useState("habilidades");
    const contentRef = useRef(null);

    const mostrarSection = (section) => {
        setSectionVisible(section);
    };

    return (
        <>
            <section ref={contentRef} className="about__content" id="about">
                <IntroAbout />
                <div className="about__skills-titles">
                    <a
                        className={
                            sectionVisible === "habilidades" ? "active" : ""
                        }
                        onClick={() => mostrarSection("habilidades")}
                    >
                        Habilidades
                    </a>
                    <a
                        className={
                            sectionVisible === "estudios" ? "active" : ""
                        }
                        onClick={() => mostrarSection("estudios")}
                    >
                        Estudios
                    </a>
                    <a
                        className={
                            sectionVisible === "certificaciones" ? "active" : ""
                        }
                        onClick={() => mostrarSection("certificaciones")}
                    >
                        Certificaciones
                    </a>
                </div>
                <div className="about__skills-content">
                    {sectionVisible === "habilidades" && (
                        <ul className="skills__list">
                            {aboutData.skillsWithImages.map((skill, index) => (
                                <li className="skills__items" key={index}>
                                   <div className="about__box-img">
                                        <img
                                                className="about__skills-images"
                                                src={skill.image}
                                                alt={skill.name}
                                            />
                                    </div>
                                    {skill.name}
                                </li>
                            ))}
                        </ul>
                    )}
                    {sectionVisible === "estudios" && (
                        <ul className="skills-studies">
                            {aboutData.studiesWithImages.map(
                                (studies, index) => {
                                    // Filtrar solo los estudios que queremos mostrar
                                    if (
                                        [
                                            "Bootcamp de Desarrollo Web Front-End | Febrero 2023",
                                            "Bootcamp de Desarrollo Web Front-End | Actualmente",
                                        ].includes(studies.name)
                                    ) {
                                        return (
                                            <li
                                                className="skills-studies-images"
                                                key={index}
                                            >
                                                <img
                                                    className="about-studies-images"
                                                    src={studies.image}
                                                    alt={studies.name}
                                                />
                                                <p className="estudies-text">{studies.name}</p>
                                            </li>
                                        );
                                    } else {
                                        return null; // Omitir otros estudios
                                    }
                                }
                            )}
                        </ul>
                    )}
                    {sectionVisible === "certificaciones" && (
                        <ul className="skills-certifications">
                            <li>JavaScript - CoderHouse</li>
                            <li>Maquetación Mobile First  - Platzi</li>
                            <li>Algoritmos y Diagrama de Flujo - Platzi</li>
                            
                        </ul>
                    )}
                </div>
            </section>
        </>
    );
};

export default About;
