import "../styles/Mentions.scss";
import { useInView } from 'react-intersection-observer';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";

const navbarLinks = [
    {url:"/", title : "ACCUEIL", id:"1"},
    {url:"/help", title : "AIDES DE L'ETAT", id: "2"},
    {url:"/contact", title : "CONTACT", id:"3"},
  ]


function Mentions (){

    const { ref, inView } = useInView({
        threshold: 0.4,
    });

    return (
        <div className={inView? "mentions mentionsZoom" : "mentions"} ref={ref}>
            <Navbar navbarLinks={navbarLinks}/>
            {/* <img src={mention} alt="" className="mentionImg"/> */}
            <div className="mentionsContent">
                <div className="mentionsText">
                    <h2>Mentions légales</h2>
                    <div className="mentionsPropriete">
                        <p>Le présent site est la propriété de Green Energy Solutions</p>
                        <p>Siège social : 40 Rue de Bruxelles - 69100 VILLEURBANNE - Email: contact@greenenergysolutions.fr</p>
                        <p>Entreprise créée en 2022 – code 4322B - Convention BTP et construction - SIRET : 91416308400017</p>
                        <p>Toute reproduction même partielle est interdite sans autorisation préalable. </p>
                    </div> 
                    <div className="mentionsPresta">
                        <p>2 - PRESTATAIRES</p>
                        <p>Création / Conception / Développement :</p>
                        <p>Nom de l'entreprise : Coding Corp</p>
                        <p>SIRET : 953 263 423 00014</p>
                        <p>Email : contact@codingcorp.fr - Web : www.codingcorp.fr</p>
                        <p>Hébergement : Hostinger</p>
                    </div>
                </div>
                <div className="confidential">
                    <h2>Politique de confidentialité</h2>
                    <p>Les internautes accédant au site https://greenenergysolutions.fr/ peuvent être amenés à fournir des informations nominatives 
                        ou à caractère personnel dans le cadre des services proposés par Green Energy Solutions.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Mentions