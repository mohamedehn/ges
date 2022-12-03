import Navbar from "../components/Navbar";
import {BsInstagram} from "react-icons/bs";
import {AiFillLinkedin} from "react-icons/ai";
import {IoLogoFacebook} from "react-icons/io"
import "../styles/Help.scss";
import { useInView } from 'react-intersection-observer';
import foret from "../assets/foret.jpeg"
import Card from "react-bootstrap/Card"
import Footer from "../components/Footer";


const navbarLinks = [
    {url:"/", title : "ACCUEIL", id:"1"},
    {url:"/help", title : "AIDES DE L'ETAT", id:"2"},
    {url:"/contact", title : "CONTACT", id:"3"},
    {url:"https://www.instagram.com/greenenergysolutions_/", title : <BsInstagram/>, id:"4"},
    {url:"#", title : <AiFillLinkedin/>, id:"5"},
    {url:"https://www.facebook.com/profile.php?id=100083332664949", title : <IoLogoFacebook/>, id:"6"},
  ]

  const dataHelp = [
      {
        title: "TVA à 5,5%", 
        content : `L’État a mis en place un taux de TVA réduit à 5,5% afin d'encourager les particuliers à entreprendre des travaux 
        d'amélioration de l'habitat.`, 
        id:"1", 
        url : "https://www.economie.gouv.fr/particuliers/tva-taux-reduits-travaux#"
    },
      {
        title: "MaPrimeRénov'", 
        content : `Des avantages fiscaux vous permettant d’obtenir une aide de l’État pour vos travaux d’amélioration de l’isolation, 
        et ce quels que soient vos revenus.`, 
        id:"2",
        url:"https://www.maprimerenov.gouv.fr/prweb/PRAuth/app/AIDES_/BPNVwCpLW8TKW49zoQZpAw*/!STANDARD",
    },
      {
        title: "Le C.E.E", 
        content : `Si vous réalisez des travaux d'isolation, vous obtiendrez un Certificat d’économie d’énergie qu’un fournisseur d’énergie 
        doit racheter sous forme d’offre de service ou de primes, la Prime Énergie.`, 
        id:"3",
        url : "https://france-renov.gouv.fr/aides/cee",
    },
      {
        title: `L'Éco-PTZ : le prêt à taux zéro`, 
        content : `Destiné au financement des travaux de rénovation énergétique, il est applicablesans aucune condition de ressources.`, 
        id:"4",
        url:"https://www.service-public.fr/particuliers/vosdroits/F19905",
    },
      {
        title: `Agence nationale de l'habitat`, 
        content : `L'Anah accorde des aides aux propriétaires pour la réalisation des travaux d'isolation thermique. Ils peuvent 
        bénéficier de 35% jusqu'à 50 % de subventions en fonctions des revenus.`, 
        id:"5",
        url : "https://www.anah.fr/",
    },
      {
        title:`Action Logement`, 
        content : `Dispositif pour la rénovation énergétique réservé principalement aux revenus les plus modestes, l'aide peut aller jusqu'à 20.000 €`, 
        id:"6",
        url:"https://www.actionlogement.fr/",
    },
  ]

function Help (){

    const { ref, inView } = useInView({
        threshold: 0.4,
    });

    return(
        
        <div>
            <Navbar navbarLinks={navbarLinks}/>
            <div className={inView? "help helpZoom" : "help"} ref={ref}>
                <img src={foret} alt="" className="helpImg"/>
                
                <div className="helpContent">
                <p className="helpTitle">De nombreuses aides de l'état sont possible. Vous trouverez ci-dessous la liste. N'hésitez pas à cliquer
                pour être rediriger sur le site du gouvernement ou  à nous contacter pour plus d'informations</p>
                    {
                        dataHelp.map((help)=>(
                            <Card className="card" key={help.id}>
                                <a href={help.url}> 
                                <Card.Body className="cardBody" key={help.id}>
                                    <Card.Title className="cardTitle">{help.title}</Card.Title>
                                    <Card.Text className="cardText">{help.content}</Card.Text>
                                </Card.Body>
                                </a>
                            </Card> 
                        ))
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Help