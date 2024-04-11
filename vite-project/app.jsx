import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"; // Si vous utilisez react-router pour la navigation

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);
