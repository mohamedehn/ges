import "../styles/Partnership.scss";
import partnership from "../assets/partenaires.png"

function Partnership (){
    return(
        <div className="partnership">
            <p>NOS PARTENAIRES</p>
            <img src={partnership} alt="" className="partnershipImg"/>
        </div>
    )
}

export default Partnership;