import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
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
                            <Route path="/Projects" element={<Projects />} />
                            <Route path="/Contact" element={<Contact />} />
                        </Routes>
                    </div>
              </section>

          </main>
        </>
    );
}

export default App;
