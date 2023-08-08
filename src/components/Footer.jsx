import "../styles/Footer.scss";
import { NavLink } from "react-router-dom";
import React from "react";

function Footer (){
    return (
        <div className="footer">
            <p>©Copyright 2022 Green Energy Solutions - Tout droit réservé</p>
            <NavLink to={"/mentions"} className="footerNavlink"><p>Mentions légales</p></NavLink>
            <NavLink to={"/mentions"} className="footerNavlink"><p>Cookies</p></NavLink>
            <a href="https://www.codingcorp.fr">Powered by Coding Corp</a>
        </div>
    )
}

export default Footer