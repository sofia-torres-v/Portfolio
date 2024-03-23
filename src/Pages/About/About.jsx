import { useState, useRef } from "react";
import Intro from "../../Components/Intro/Intro";
import "./About.css";
import data from "../../mocks/ProjectData";

const About = () => {
    const { aboutData } = data;
    const [sectionVisible, setSectionVisible] = useState("habilidades");
    const contentRef = useRef(null);

    const mostrarSection = (section) => {
        setSectionVisible(section);
        // Desplazar hacia el elemento deseado
        if (contentRef.current) {
            contentRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <section ref={contentRef} className="about__content" id="about">
                <Intro />
                <div className="about__skills-titles">
                    <a className={sectionVisible === "habilidades" ? "active" : ""} onClick={() => mostrarSection("habilidades")}>
                        Habilidades
                    </a>
                    <a className={sectionVisible === "estudios" ? "active" : ""} onClick={() => mostrarSection("estudios")}>
                        Estudios
                    </a>
                    <a className={sectionVisible === "certificaciones" ? "active" : ""} onClick={() => mostrarSection("certificaciones")}>
                        Certificaciones
                    </a>
                </div>
                <div className="about__skills-content">
                    {sectionVisible === "habilidades" && (
                        <ul className="skills__list">
                            {aboutData.skillsWithImages.map((skill, index) => (
                                <li className="skills__items" key={index}>
                                    <img className="about__skills-images" src={skill.image} alt={skill.name} />
                                    {skill.name}
                                </li>
                            ))}
                        </ul>
                    )}
                    {sectionVisible === "estudios" && (
                        <ul>
                            <li>Desarrollo Frontend </li>
                            <li>Administracion </li>
                        </ul>
                    )}
                    {sectionVisible === "certificaciones" && (
                        <ul>
                            <li>Desarrollo web </li>
                            <li>Desarrollo web </li>
                            <li>Desarrollo web </li>
                        </ul>
                    )}
                </div>
            </section>
        </>
    );
};

export default About;
