import React from "react";
import "../assets/styles/footer.css"; // Import du fichier CSS pour le footer

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-left">
                    <h3>Nous trouver</h3>
                    <p>
                        <i className="fas fa-map-marker-alt"></i> 123 Rue de
                        l'Éclipse, 75000 Paris
                    </p>
                </div>
                <div className="footer-middle">
                    <h3>Contact</h3>
                    <p>
                        <i className="fas fa-phone"></i> +33 1 23 45 67 89
                    </p>
                    <p>
                        <i className="fas fa-envelope"></i>
                        contact@restaurantleclipse.com
                    </p>
                </div>
                <div className="footer-right">
                    <h3>Horaires d'ouverture</h3>
                    <p>Mercredi - Dimanche:</p>
                    <p>12h - 14h30</p>
                    <p>19h - 23h30</p>
                </div>
            </div>
            <div className="legal-info">
                <p>
                    Mentions légales | Conditions générales de vente | Politique
                    de confidentialité
                </p>
            </div>
            <div className="copyright">
                <p>&copy; 2024 Restaurant L'Éclipse. Tous droits réservés.</p>
            </div>
        </footer>
    );
}

export default Footer;
