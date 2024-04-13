import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./src/components/Navbar.jsx"; // Import du composant Navbar
import Header from "./src/components/Header.jsx";
import LivreMenu from "./src/components/LivreMenu.jsx";

function App() {
    return (
        <div>
            <Navbar /> {/* Affichage de la barre de navigation */}
            <Header />
            <LivreMenu />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
