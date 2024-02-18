import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Proyects from "./Pages/Proyects/Proyects";
import Contact from "./Pages/Contact/Contact";
import "boxicons/css/boxicons.min.css";
import "./App.css";
import Navbar from "./Components/Navigation/Navbar";


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
                            <Route path="/" element={<About />} />
                            <Route path="/About" element={<About />} />
                            <Route path="/projects" element={<Proyects />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </div>
              </section>

          </main>
        </>
    );
}

export default App;
