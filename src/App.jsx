import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navigation/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/footer/Footer";
import "boxicons/css/boxicons.min.css";
import "./App.css";

function App() {
    return (
        <>
            <header className="header">
                <Navbar />
            </header>

            <main>
                <section className="section">
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default App;
