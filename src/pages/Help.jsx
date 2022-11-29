import Navbar from "../components/Navbar";
import {BsInstagram} from "react-icons/bs";
import {AiFillLinkedin} from "react-icons/ai";
import "../styles/Help.scss";
import { useInView } from 'react-intersection-observer';
import foret from "../assets/foret.jpeg"
import Card from "react-bootstrap/Card"


const navbarLinks = [
    {url:"/", title : "ACCUEIL"},
    {url:"/help", title : "AIDES DE L'ETAT"},
    {url:"#", title : "CONTACT"},
    {url:"https://www.instagram.com/greenenergysolutions_/", title : <BsInstagram/>},
    {url:"#", title : <AiFillLinkedin/>},
  ]

  const dataHelp = [
      {title: "TVA à 5,5%", content : `L’État a mis en place un taux de TVA réduit à 5,5% afin d'encourager les particuliers à
      entreprendre des travaux d'amélioration de l'habitat.`},
      {title: "MaPrimeRénov'", content : `Des avantages fiscaux vous permettant d’obtenir une aide de l’État pour vos
      travaux d’amélioration de l’isolation, et ce quels que soient vos revenus.`},
      {title: "Le C.E.E", content : `Si vous réalisez des travaux d'isolation, vous obtiendrez un Certificat d’économie d’énergie qu’un 
      fournisseur d’énergie doit racheter sous forme d’offre de service ou de primes, la Prime Énergie.`},
      {title: `L'Éco-PTZ : le prêt à taux zéro`, content : `Destiné au financement des travaux de rénovation énergétique, il est applicable
      sans aucune condition de ressources.`},
      {title: `Agence nationale de l'habitat`, content : `L'Anah accorde des aides aux propriétaires pour la réalisation des travaux 
      d'isolation thermique. Ils peuvent bénéficier de 35% jusqu'à 50 % de subventions en fonctions des revenus.`},
      {title:`Action Logement`, content : `Dispositif pour la rénovation énergétique réservé principalement aux revenus les
      plus modestes, l'aide peut aller jusqu'à 20.000 €`},
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
                <p className="helpTitle">De nombreuses de l'état sont possible. Ci-dessous la liste. Contactez nous pour plus d'informations</p>
                <div className="helpContent">
                    {
                        dataHelp.map((help)=>(
                            <Card className="card">
                                <Card.Body className="cardBody">
                                    <Card.Title className="cardTitle">{help.title}</Card.Title>
                                    <Card.Text className="cardText">{help.content}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Help