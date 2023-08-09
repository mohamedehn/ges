import "../styles/Footer.scss";
import { NavLink } from "react-router-dom";
import React from "react";

function Footer (){
    return (
        <div className="footer">
            <p>©Copyright 2023 Green Energy Solutions - Tous droits réservés</p>
            <NavLink to={"/mentions"} className="footerNavlink"><p>Mentions légales</p></NavLink>
            <NavLink to={"/cookies"} className="footerNavlink"><p>Cookies</p></NavLink>
            <a href="https://www.codingcorp.fr">Powered by Coding Corp</a>
        </div>
    )
}

export default Footer