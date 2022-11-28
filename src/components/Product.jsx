import "../styles/Product.scss";
import { useInView } from 'react-intersection-observer';
import Card from 'react-bootstrap/Card';
import {FcHome} from "react-icons/fc";
import {FcChargeBattery} from "react-icons/fc";
import {FcPanorama} from "react-icons/fc";
import {FcMultipleInputs} from "react-icons/fc";
import {FcAreaChart} from "react-icons/fc";
import {FcDebian} from "react-icons/fc";

function Product (){


    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.4,
      });

    return(
        <div className={inView? "product productZoom" : "product"} ref={ref} id="prestations">
            <p className="mainTitle">NOS PRESTATIONS</p>
            <div className="allProduct">
            <Card className="card">
                <FcHome className="cardImg"/>
                <Card.Body className="cardBody">
                    <Card.Title className="cardTitle">ISOLATION</Card.Title>
                    <Card.Text className="cardText">
                        Limitez les déperditions énergétiques de votre logement grâce aux différentes solutions d'isolation thermiques; laine de
                        verre, de coton, de bois, la ouate de cellulose ou encore le polystyrène expansé.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="card">
                <FcChargeBattery className="cardImg"/>
                <Card.Body className="cardBody">
                    <Card.Title className="cardTitle">PHOTOVOLTAÏQUES</Card.Title>
                    <Card.Text className="cardText">
                        Grâce à l'auto-consommation,réduisez votre facture d'énergie.
                        Les panneaux photovoltaïques captent l’énergie gratuite du soleil pour la
                        transformer en électricité ou en chaleur.C'est une alternative rentable en plus d'être
                        respectueuse de l'environnement.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="card">
                <FcPanorama className="cardImg"/>
                <Card.Body className="cardBody">
                    <Card.Title className="cardTitle">POMPE A CHALEUR</Card.Title>
                    <Card.Text className="cardText">
                        La pompe à chaleur puise son énergie dans la nature. Elle crée donc davantage d’énergie
                        qu’elle n’en consomme. Nous installons différents types de pompes à chaleur, aéro thermiques, géothermiques ou encore
                        hydrothermiques. Concrètement, vous pouvez faire jusqu’à 60% d’économies sur
                        votre facture!
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="card">
                <FcMultipleInputs className="cardImg"/>
                <Card.Body className="cardBody">
                    <Card.Title className="cardTitle">VMC</Card.Title>
                    <Card.Text className="cardText">
                        Renouvelez l'air de votre intérieur grâce au système d'extraction dans les pièces humides propre à la VMC.VMC simple
                        autoréglable ou hydroréglable, VMC double, nos experts reconnus garants de l'environnement (R.G.E) s'occupent de
                        l'installation dans sa globalité.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="card">
                <FcAreaChart className="cardImg"/>
                <Card.Body className="cardBody">
                    <Card.Title className="cardTitle">HYDROFUGE</Card.Title>
                    <Card.Text className="cardText">
                        Hydrofuge toiture ou façade, à effet perlant, filmogène ou coloré, toutes ces variantes ont
                        le même objectif : rendre imperméable les surfaces et les protéger ainsi des apparitions
                        de mousses et algues. L'hydrofuge est reconnu pour ses propriétés résistantes au temps aux rayons UV et est un
                        moyen rentable et économique de protéger votre habitation vous évitant ainsi de refaire
                        votre toiture par exemple. 
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="card">
                <FcDebian className="cardImg"/>
                <Card.Body className="cardBody">
                    <Card.Title className="cardTitle">CALORIFUGEAGE</Card.Title>
                    <Card.Text className="cardText">
                    Comme tous les travaux d'isolation, le calorifugeage consiste à limiter les déperditions de chaleur en isolant les
                        canalisations d'eau et de chauffage par lesquelles s'échappent pas moins de 20% de chaleur lors de l'acheminement 
                        de l'eau par exemple.
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}

export default Product