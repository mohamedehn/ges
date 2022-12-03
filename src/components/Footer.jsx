import "../styles/Footer.scss";
import { NavLink } from "react-router-dom";

function Footer (){
    return (
        <div className="footer">
            <p>©Copyright 2022 Green Energy Solutions - Tout droit réservé</p>
                <NavLink to={"/mentions"} className="footerNavlink"><p>Mentions légales</p></NavLink>
                <p>Powered by Digital Comet</p>
        </div>
    )
}

export default Footer