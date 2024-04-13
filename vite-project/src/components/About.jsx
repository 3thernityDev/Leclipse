// About.jsx

import React from "react";
import "../assets/styles/about.css"; // Import du fichier CSS pour la section "À propos"

function About() {
    return (
        <section id="about">
            <div className="container">
                <h2>À propos de nous</h2>
                <div className="team-member">
                    <div className="member-info">
                        <h3>Grondin Mathieu</h3>
                        <p>Chef de cuisine & Gestionnaire</p>
                        <p>
                            Passionné depuis tout petit de la cuisine de mes
                            grand-parents et des pâtisseries de ma mère, mais
                            aussi qualifié dans ce domaine. Je saurai éveiller
                            les papilles de nos clients. Je veillerai également
                            à la bonne gestion de ma brigade et cuisine, mais
                            également à la sélection de mes produits auprès des
                            fournisseurs locaux pour vous offrir une expérience
                            unique.
                        </p>
                    </div>
                    <div className="member-image">
                        {/* Image de Grondin Mathieu */}
                    </div>
                </div>
                <div className="team-member">
                    <div className="member-info">
                        <h3>ARMAND Noham</h3>
                        <p>Maître d’hôtel & Gestionnaire</p>
                        <p>
                            Conquis par le monde de la restauration, l’élégance
                            et la finesse du travail m’ont donné la motivation
                            et un engagement dans celle-ci. Je souhaite montrer
                            mes expériences en vous proposant un service raffiné
                            avec les différents services de la haute gastronomie
                            pour vous offrir une expérience unique et
                            exceptionnelle.
                        </p>
                    </div>
                    <div className="member-image">
                        {/* Image de ARMAND Noham */}
                    </div>
                </div>
                <div className="restaurant-description">
                    <h3>Notre restaurant</h3>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quaerat velit sapiente voluptas odio distinctio
                        culpa adipisci, earum minima amet, sint mollitia quod
                        laborum. Nulla, perferendis iste. Ullam tempora nesciunt
                        necessitatibus quasi odio quos impedit atque error,
                        neque sint distinctio dolorum, quia id fugiat dolorem
                        voluptatem optio dolore repellat animi saepe voluptates.
                        Ex, omnis animi. Ipsum nulla, consequuntur illum
                        laudantium sit eveniet. Exercitationem harum doloremque
                        nulla eos, voluptatem a iusto est temporibus inventore
                        in, sequi modi accusantium similique, saepe facilis. At
                        nobis earum numquam ipsa consectetur? Maxime, aliquid.
                        Dolores quaerat, deleniti exercitationem ducimus
                        quisquam et ex nesciunt. Magnam voluptates accusamus
                        facere?
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
