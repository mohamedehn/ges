import "../styles/Info.scss";
import { useInView } from 'react-intersection-observer';
import contact from "../assets/contact.jpeg";
import {BsInstagram} from "react-icons/bs"
import {AiFillLinkedin} from "react-icons/ai"

function Info (){

    const { ref, inView } = useInView({
        threshold: 0.4,
    });

    return (
        <div className={inView? "info infoZoom" : "info"} ref={ref}>
            <img src={contact} alt="" className="infoImg"/>
            <p className="infoTitle">CONTACT</p>
            <div className="infoContent">
                <div className="infoContentLeft">
                    <a href="mailto:contact@greenenergysolutions.fr">
                        <p className="infoMail">
                            <p className="infoMailText">Mail</p>
                            <p className="infoMailAdress">contact@greenenergysolutions.fr</p></p>
                    </a>
                    <p className="infoAdress">
                        <p>Adresse</p>
                        <p>40 Rue de Bruxelles</p>
                        <p>69100 VILLEURBANNE</p>
                    </p>
                </div>
                <div className="infoContentRight">
                    <p className="infoInstagram"><BsInstagram/>Instagram</p>
                    <p className="infoLinkedin"><AiFillLinkedin/>LinkedIn</p>
                </div>
                <div className="infoFooter"></div>
            </div>
            
        </div>
    )
}

export default Info;