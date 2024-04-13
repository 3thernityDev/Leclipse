import React, { useState } from "react";
import "../assets/styles/navbar.css"; // Import du fichier CSS pour la barre de navigation
import navlogo from "../assets/images/logo.png";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <div className="logo">
                <img src={navlogo} alt="logo" />
                <h3 className="LogoName">L'éclipse</h3>
            </div>
            <div
                className={`menu-toggle ${isOpen ? "open" : ""}`}
                onClick={toggleMenu}
            >
                <div className="hamburger"></div>
            </div>
            <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                <li>
                    <a href="/" onClick={toggleMenu}>
                        Accueil
                    </a>
                </li>
                <li>
                    <a href="#flipbook" onClick={toggleMenu}>
                        Menu
                    </a>
                </li>
                <li>
                    <a href="#about" onClick={toggleMenu}>
                        À propos
                    </a>
                </li>
                <li>
                    <a href="#contact" onClick={toggleMenu}>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
