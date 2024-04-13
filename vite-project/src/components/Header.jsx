import React from "react";
import { Link } from "react-scroll"; // Import de Link depuis react-scroll pour la navigation fluide
import "../assets/styles/header.css"; // Import du fichier CSS pour le header

function Header() {
    return (
        <header>
            <div className="header-content">
                <h1>Bienvenue à l'éclipse</h1>
                <p>Où la cuisine devient une constellation de plaisir</p>
                <div className="reservation-button">
                    <img
                        src="src/assets/images/Image_header.webp"
                        alt="Plaisir culinaire"
                    />
                    <button>
                        Réserver une table <i className="fas fa-calendar-alt"></i> {/* Utilisation de l'icône Font Awesome */}
                    </button>
                </div>
                <Link
                    to="flipbook"
                    smooth={true}
                    duration={500}
                    className="menu-link"
                >
                    Voir le menu <i className="fas fa-chevron-down"></i>
                </Link>
            </div>
        </header>
    );
}

export default Header;
