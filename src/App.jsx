// import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import Proyects from "./Components/Proyects/Proyects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import "boxicons/css/boxicons.min.css";
import "./App.css";

function App() {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <main>
                <Home />
                <Proyects />
                <Skills />
                <Contact />
            </main>
        </>
    );
}

export default App;
