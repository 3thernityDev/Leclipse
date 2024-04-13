import React from "react";
import "../assets/styles/navbar.css"; // Import du fichier CSS pour la barre de navigation

function Navbar() {
    return (
        <nav>
            <div className="logo">
                <img src="src\assets\images\logo.png" alt="logo" />
                <h3 className="LogoName">L'éclipse</h3>
            </div>
            <ul>
                <li>
                    <a href="/">Accueil</a>
                </li>
                <li>
                    <a href="#flipbook">Menu</a>
                </li>
                <li>
                    <a href="#about">À propos</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
