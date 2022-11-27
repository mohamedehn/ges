import "../styles/Expertise.scss";
import { useInView } from 'react-intersection-observer';
import expertise from "../assets/expertise.png"

function Expertise (){

    const { ref, inView } = useInView({
        threshold: 0.4,
    });

    return(
        <div className={inView? "expertise expertiseZoom" : "expertise"} ref={ref}>
            <img src={expertise} alt="" className="expertiseImg"/>
            <div className="expertiseContent">
                <p className="expertiseTitle">L'EXPERTISE À VOTRE SERVICE.</p>
                <p className="expertiseText">Déterminer la meilleure performance énergétique pour votre future habitation, réaliser un audit si vous êtes déjà propriétaire et enfin permettre à tous de bénéficier d'une meilleure isolation et de faire baisser la facture énergétique, telles sont nos missions.</p>
            </div>
            
        </div>
    )
}

export default Expertise;