import "../styles/Partnership.scss";
import partnership1 from "../assets/partenaires1.webp";
import partnership2 from "../assets/partenaires2.webp";
import { useInView } from 'react-intersection-observer';


function Partnership (){

    const { ref, inView } = useInView({
        threshold: 0.4,
    });

    return(
        <div className={inView? "partnership partnershipZoom" : "partnership"} ref={ref}>
            <p className="partnershipTitle">NOS PARTENAIRES</p>
            <div className="partnershipList">
                <img src={partnership1} alt="" className="partnershipImg"/>
                <img src={partnership2} alt="" className="partnershipImg2"/>
            </div>
        </div>
    )
}

export default Partnership;