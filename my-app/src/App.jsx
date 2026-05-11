import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes
import AppNavbar from "./comp/AppNavbar"; 
import AppFooter from "./comp/AppFooter";

// Páginas
import Home from "./home";
import About from "./about";
import Albuns from "./albuns";
import Projects from "./projects";
import Store from "./store";



function App() {
  return (
    <Router>
      <AppNavbar />
      
      {/* Container para dar margem por causa do menu fixo */}
      <div className="container"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/albuns" element={<Albuns />} />
          <Route path="/store" element={<Store />} />
          
          {/* Caso o utilizador escreva um URL que não existe */}
          <Route path="*" element={<h1>Página não encontrada</h1>} />
        </Routes>
      </div>
    <AppFooter/>
    </Router>
  );
}

export default App;
