// ContactForm.jsx
import React from "react";
import "../assets/styles/contactForm.css"; // Import du fichier CSS pour le formulaire de contact

function ContactForm() {
    return (
        <section id="contact">
            <div className="container">
                <div className="contact-info">
                    <div className="info">
                        <h3>Contactez-nous</h3>
                        <p>
                            Remplissez le formulaire ci-dessous pour nous
                            envoyer un message. Nous vous répondrons dès que
                            possible !
                        </p>
                    </div>
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Nom :</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email :</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message :</label>
                        <textarea id="message" name="message"></textarea>
                    </div>
                    <button type="submit">Envoyer</button>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;
