import "../styles/Partnership.scss";
import partnership from "../assets/partenaires.png";
import { useInView } from 'react-intersection-observer';


function Partnership (){

    const { ref, inView } = useInView({
        threshold: 0.4,
    });

    return(
        <div className={inView? "partnership partnershipZoom" : "partnership"} ref={ref}>
            <p className="partnershipTitle">NOS PARTENAIRES</p>
            <img src={partnership} alt="" className="partnershipImg"/>
        </div>
    )
}

export default Partnership;