// import React from 'react'
import "./Home.css";

const Home = () => {
    return (
        <section className="home-view">
            <div className="box">
                <div className="container-hello">
                    <span className="span-hello">Hola, Soy</span>
                    <h1 className="title-home">Sofia Torres</h1>
                    <span className="span-frontend">
                        {" "}
                        &gt; Soy Desarrolladora Frontend
                    </span>
                </div>
            </div>
            <div className="intro__buttons">
                <button className="intro__btn">Contáctame</button>
                <button className="intro__btn">Descargar mi Cv</button>
            </div>
        </section>
    );
};

export default Home;
