import "../styles/Mentions.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";

const navbarLinks = [
    {url:"/", title : "ACCUEIL", id:"1"},
    {url:"/help", title : "AIDES DE L'ETAT", id: "2"},
    {url:"/contact", title : "CONTACT", id:"3"},
  ]


function Mentions (){

   

    return (
        <div className="mentions">
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
                        <p>Email : contact@codingcorp.fr - Web : https://www.codingcorp.fr</p>
                        <p>Hébergement : Hostinger</p>
                    </div>
                </div>
                <div className="confidential">
                    <h2>Politique de confidentialité</h2>
                    <p>Les internautes accédant au site https://greenenergysolutions.fr/ peuvent être amenés à fournir des informations nominatives 
                        ou à caractère personnel dans le cadre des services proposés par Green Energy Solutions.
                    </p>
                    <p>
                        L’entreprise Green Energy Solutions est responsable de traitement au sens du Règlement (UE) 2016/679 dit Règlement 
                        Général pour la Protection des Données ou « RGPD », pour la collecte et le traitement des données à caractère personnel 
                        effectuées sur le site accessible à l’adresse URL : https://greenenergysolutions.fr/
                    </p>
                    <p>
                        L’entreprise Green Energy Solutions traite les données personnelles collectées via son site pour les finalités suivantes :
                    </p>
                    <p>
                        - Afin de permettre au visiteur du site d’obtenir des informations sur les services proposés par l'entreprise Green Energy 
                        Solutions et les conditions d’éligibilité. <br/>
                        Conformément au RGPD, le visiteur du site dispose sur ses données personnelles des droits suivants : <br/>
                        - Un droit d’accès <br/>
                        - Un droit de rectification <br/>
                        - Un droit d’effacement <br/>
                        - Le cas échéant, d’un droit à la portabilité de ses données <br/>
                        - Un droit de demander la limitation du traitement de ses données et/ ou de s’y opposer <br/>
                        - Le cas échéant, un droit de retirer son consentement <br/>
                        - Un droit de définir des directives relatives au sort de ses données après sa mort <br/>
                        Le visiteur peut exercer ses droits en envoyant soit : <br/>
                        - Un courriel au Responsable de Traitement de Green Energy Solutions <br/>
                        - Un courrier à l’attention du Responsable de Traitement à l’adresse suivante : <br/>
                            Green Energy Solutions <br/>
                            40 Rue de Bruxelles <br/>
                            69100 VILLEURBANNE <br/>
                    </p>
                    <p>
                        Si le visiteur estime que Green Energy Solutions n’a pas correctement répondu à ses sollicitations, il dispose d’un 
                        droit d’introduire une réclamation auprès de la CNIL. Green Energy Solutions limite la collecte des données personnelles 
                        au strict nécessaire au regard des finalités des traitements de données, elles sont destinées à l’entreprise 
                        Green Energy Solutions mais sont susceptibles d’être transférées à des organismes publics afin de mieux répondre à la 
                        demande du visiteur.
                    </p>
                    <p>
                        Les données ne sont en aucun cas communiquées, ni vendues, ni cédées, louées et / ou commercialisées à des 
                        tiers au sens du RGPD.
                    </p>
                    <p>
                        Les données sont stockées exclusivement sur le territoire Français et ne font l’objet d’aucun transfert en dehors de 
                        l’Union Européenne.
                    </p>
                    <p>
                        Les données seront conservées tant que le visiteur souhaite recevoir des informations, et le temps nécessaire à la 
                        gestion de sa demande.
                    </p>
                    <p>
                        Green Energy Solutions veille à ce que toutes les mesures techniques et organisationnelles afin de protéger les données 
                        personnelles soient mises en œuvre, ces règles de confidentialités et de sécurité sont également imposées à l’ensemble 
                        du personnel de Green Energy Solutions, ainsi qu’à tous les prestataires et sous-traitants travaillant pour 
                        Green Energy Solutions.
                    </p>
                </div>
                <div className="link">
                
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Mentions