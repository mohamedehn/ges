import "../styles/Info.scss";
import { useInView } from 'react-intersection-observer';
import contact from "../assets/contact.webp";
import {BsInstagram} from "react-icons/bs"
import {AiFillLinkedin} from "react-icons/ai"
import {IoLogoFacebook} from "react-icons/io"

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
                        <div className="infoMail">
                            <p className="infoMailText">Mail</p>
                            <p className="infoMailAdress">contact@greenenergysolutions.fr</p>
                        </div>
                    </a>
                    <div className="infoAdress">
                        <p>Adresse</p>
                        <p>40 Rue de Bruxelles</p>
                        <p>69100 VILLEURBANNE</p>
                    </div>
                </div>
                <div className="infoContentRight">
                    <div className="instagram">
                        <a href="https://www.instagram.com/greenenergysolutions_/">
                            <BsInstagram/>
                            <p className="infoInstagram">Instagram</p>
                        </a> 
                    </div>
                    <div className="linkedin">
                        <a href="https://www.linkedin.com/company/gesfrance/">
                            <AiFillLinkedin/>     
                            <p className="infoLinkedin">LinkedIn</p> 
                        </a>
                    </div>
                    <div className="facebook">
                        <a href="https://www.facebook.com/profile.php?id=100083332664949">
                            <IoLogoFacebook/>     
                            <p className="infoFacebook">Facebook</p> 
                        </a>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Info;