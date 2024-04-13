// Menu.jsx

import React, { useEffect } from "react";
import $ from "jquery";
import "turn.js";
import "../assets/styles/livremenu.css"; // Import du fichier CSS pour le menu

function Menu() {
    useEffect(() => {
        // Initialisation du plugin turn.js pour créer le livre de menus
        $("#flipbook").turn({
            width: 1000,
            height: 800,
            autoCenter: true,
        });
    }, []);

    const nextPage = () => {
        // Fonction pour passer à la page suivante du livre de menus
        $("#flipbook").turn("next");
    };

    const prevPage = () => {
        // Fonction pour passer à la page précédente du livre de menus
        $("#flipbook").turn("previous");
    };

    return (
        <div>
            <h3>Menu</h3>
            <div id="flipbook">
                {/* Insérez ici les pages de votre menu */}
                <div className="page">
                    <img src="src/assets/images/page-1.webp" alt="Page 1" />
                </div>
                <div className="page">
                    <img src="src/assets/images/page-2.webp" alt="Page 2" />
                </div>
                <div className="page">
                    <img src="src/assets/images/page-3.webp" alt="Page 3" />
                </div>
                <div className="page">
                    <img src="src/assets/images/page-4.webp" alt="Page 4" />
                </div>
                <div className="page">
                    <img src="src/assets/images/page-5.webp" alt="Page 5" />
                </div>
                <div className="page">
                    <img src="src/assets/images/page-6.webp" alt="Page 6" />
                </div>
                <div className="page">
                    <img src="src/assets/images/page-7.webp" alt="Page 7" />
                </div>

                {/* Ajoutez d'autres pages ici */}
            </div>
            {/* Boutons pour naviguer entre les pages */}
            <div className="button-container">
                <button className="prev-button" onClick={prevPage}>
                    ◀️ Précédent
                </button>
                <button className="next-button" onClick={nextPage}>
                    Suivant ▶️
                </button>
            </div>
        </div>
    );
}

export default Menu;
