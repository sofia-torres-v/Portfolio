import { Routes, Route } from "react-router-dom";

import Projects from "./Pages/Projects/Projects";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Navbar from "./Components/Navigation/Navbar";
import "boxicons/css/boxicons.min.css";
import "./App.css";
import Home from "./Pages/Home/home";
import Footer from "./Components/footer/Footer";



function App() {
    return (
        <>
          <header className="header">
              <Navbar/>
          </header>

          <main>
              <section className="section">
                    <div>
                        <Routes>
                            <Route path="/" element={<Home/>} />
                            <Route path="/Home" element={<Home />} />
                            <Route path="/About" element={<About />} />
                            <Route path="/Projects" element={<Projects />} />
                            <Route path="/Contact" element={<Contact />} />
                        </Routes>
                    </div>
              </section>

          </main>
          <Footer />
          
        </>
    );
}

export default App;
