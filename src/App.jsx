// import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import About from "./Components/About/About";
import Proyects from "./Components/Proyects/Proyects";
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
                <About/>
                <Proyects />
                <Contact />
            </main>
        </>
    );
}

export default App;
