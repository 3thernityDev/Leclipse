import React from "react";
import "../assets/styles/navbar.css"; // Import du fichier CSS pour la barre de navigation

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/">Accueil</a>
                </li>
                <li>
                    <a href="/menu">Menu</a>
                </li>
                <li>
                    <a href="/about">À propos</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
