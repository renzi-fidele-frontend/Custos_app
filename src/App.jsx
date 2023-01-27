import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Contacto from "./components/pages/Contacto/Contacto";
import Empresa from "./components/pages/Empresa/Empresa";
import NovoProjeto from "./components/pages/NovoProjeto/NovoProjeto";
import NavBar from "./components/Layout/NavBar/NavBar";
import Projetos from "./components/pages/Projetos/Projetos";
import Footer from "./components/Layout/Footer/Footer";
import Projeto from "./components/pages/Projeto/Projeto";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/empresa" element={<Empresa />} />
                    <Route path="/novo_projeto" element={<NovoProjeto />} />
                    <Route path="/projetos" element={<Projetos />} />
                    <Route path="/projetos/projeto/:id" element={<Projeto />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
