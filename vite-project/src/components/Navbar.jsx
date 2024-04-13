import React, { useState } from "react";
import "../assets/styles/navbar.css"; // Import du fichier CSS pour la barre de navigation

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav>
            <div className="logo">
                <img src="src\assets\images\logo.png" alt="logo" />
                <h3 className="LogoName">L'éclipse</h3>
            </div>
            <ul className={showMenu ? "nav-links active" : "nav-links"}>
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
            <div className="burger" onClick={toggleMenu}>
                <div className={showMenu ? "line1 active" : "line1"}></div>
                <div className={showMenu ? "line2 active" : "line2"}></div>
                <div className={showMenu ? "line3 active" : "line3"}></div>
            </div>
        </nav>
    );
}

export default Navbar;
