import NavBar from "./Components/NavBar/NavBar";
import Intro from "./Components/intro/intro";
import "boxicons/css/boxicons.min.css";
import "./App.css";
function App() {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <Intro />
            </main>
        </>
    );
}

export default App;
