import React from "react";
// Removi o Nav do react-bootstrap para evitar conflito
import { Link, useLocation, useNavigate } from "react-router-dom";

// Mudei o nome para AppNavbar para ser mais claro, ou mantém Nav mas remove o import acima
export default function AppNavbar() {
    const location = useLocation(); 
 
    const menuItems = ["Home", "About", "Projects", "Albuns", "Store"];

    const closeMenu = () => {
        // Procura o botão de fechar do Offcanvas e simula um clique nele
        const closeBtn = document.querySelector('[data-bs-dismiss="offcanvas"]');
        if (closeBtn) closeBtn.click();
    };

    return (
        <nav className="navbar navbar-dark menu_bg_color fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Menu</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    {/* Linking das páginas*/}
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            {/* usar o menuItems para gerar links automaticamente */}
                            {menuItems.map((item) => {
                                // Definimos o caminho (ex: "About" vira "/about")
                                const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;

                                // Verificamos se o caminho atual é igual a este link
                                const isActive = location.pathname === path;

                                return (
                                    <li className="nav-item" key={item}>
                                        <Link
                                            className={`nav-link ${isActive ? "active" : ""}`}
                                            to={path}
                                            // para q o menu se esconda
                                            onClick={closeMenu}
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                );
                            })}


                            {/* Exemplo de link manual fixo (se quiseres manter o estilo anterior) */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/projects">Projetos Antigos</Link>
                            </li>

                            {/* Exemplo no Dropdown */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Mais Opções
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><Link className="dropdown-item" to="/action">Ação</Link></li>
                                    <li><Link className="dropdown-item" to="/outra-pagina">Outra Página</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/ajuda">Ajuda</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>
        </nav>
    );
}
