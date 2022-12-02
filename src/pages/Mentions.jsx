import "../styles/Mentions.scss";
import mention from "../assets/mention.jpeg";
import { useInView } from 'react-intersection-observer';
import Navbar from "../components/Navbar";
import {IoLogoFacebook} from "react-icons/io"
import {BsInstagram} from "react-icons/bs"
import {AiFillLinkedin} from "react-icons/ai"
import Footer from "../components/Footer";

const navbarLinks = [
    {url:"/", title : "ACCUEIL", id:"1"},
    {url:"/help", title : "AIDES DE L'ETAT", id: "2"},
    {url:"/contact", title : "CONTACT", id:"3"},
    {url:"https://www.instagram.com/greenenergysolutions_/", title : <BsInstagram/>, id:"4"},
    {url:"https://www.linkedin.com/company/gesfrance/", title : <AiFillLinkedin/>, id:"5"},
    {url:"https://www.facebook.com/profile.php?id=100083332664949", title : <IoLogoFacebook/>, id:"6"},
  ]


function Mentions (){

    const { ref, inView } = useInView({
        threshold: 0.4,
    });

    return (
        <div className={inView? "mentions mentionsZoom" : "mentions"} ref={ref}>
            <Navbar navbarLinks={navbarLinks}/>
            <img src={mention} alt="" className="mentionImg"/>
            <div className="mentionsContent">
                <div className="mentionsText">
                <p className="mentionsPropriete">Le présent site est la propriété de Green Energy Solutions
                    Siège social : 40 Rue de Bruxelles - 69100 VILLEURBANNE - Email: contact@greenenergysolutions.fr
                    Entreprise créée en 2022 – code 4322B - Convention BTP et construction - SIRET : 91416308400017
                    Toute reproduction même partielle est interdite sans autorisation préalable.
                </p> 
                {/* <p className="mentionsPresta">2 - PRESTATAIRES
                    Création / Conception / Développement :
                    Nom entreprise et adresse
                    Tél. : numéro - Email : contact@nomentreprise.fr - Web : www.site.fr
                    Hébergement : Nom
                </p> */}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Mentions