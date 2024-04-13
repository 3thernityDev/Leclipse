// Menu.jsx

import React, { useEffect } from "react";
import $ from "jquery";
import "turn.js";
import "../assets/styles/livremenu.css"; // Import du fichier CSS pour le menu
import page1 from "../assets/images/page-1.wepb";
import page2 from "../assets/images/page-2.wepb";
import page3 from "../assets/images/page-3.wepb";
import page4 from "../assets/images/page-4.wepb";
import page5 from "../assets/images/page-5.wepb";
import page6 from "../assets/images/page-6.wepb";
import page7 from "../assets/images/page-7.wepb";

function Menu() {
    useEffect(() => {
        // Initialisation du plugin turn.js pour créer le livre de menus
        $("#flipbook").turn({
            width: calculateWidth(), // Calculer la largeur initiale
            height: calculateHeight(), // Calculer la hauteur initiale
            autoCenter: true,
        });

        // Redimensionner le livre lorsque la fenêtre est redimensionnée
        $(window).on("resize", () => {
            const width = calculateWidth();
            const height = calculateHeight();
            $("#flipbook").turn("size", width, height);
        });

        // Fonction pour calculer la largeur initiale en fonction de la largeur de l'écran
        function calculateWidth() {
            return $(window).width() > 768 ? 1000 : $(window).width() - 40;
        }

        // Fonction pour calculer la hauteur initiale en fonction de la largeur de l'écran
        function calculateHeight() {
            return $(window).width() > 768 ? 800 : $(window).width() * 0.8;
        }
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
                    <img src={page1} alt="Page 1" />
                </div>
                <div className="page">
                    <img src={page2} alt="Page 2" />
                </div>
                <div className="page">
                    <img src={page3} alt="Page 3" />
                </div>
                <div className="page">
                    <img src={page4} alt="Page 4" />
                </div>
                <div className="page">
                    <img src={page5} alt="Page 5" />
                </div>
                <div className="page">
                    <img src={page6} alt="Page 6" />
                </div>
                <div className="page">
                    <img src={page7} alt="Page 7" />
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
