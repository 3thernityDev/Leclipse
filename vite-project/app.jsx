import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./src/components/Navbar.jsx"; // Import du composant Navbar

function App() {
    return (
        <div>
            <Navbar /> {/* Affichage de la barre de navigation */}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
