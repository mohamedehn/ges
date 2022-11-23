import "../styles/Product.scss";
import { useInView } from 'react-intersection-observer';
import ampoule from "../assets/ampoule.webp"

function Product (){

    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.4,
      });

    return(
        <div className={inView? "product productZoom" : "product"} ref={ref}>
            <div className="productLeft">
                <div className="productItem">
                    <p className="productTitle">ISOLATION</p>
                    <p className="productText">Limite la déperdition thermique</p>
                    <p className="moreInfo"> EN SAVOIR PLUS</p>
                </div>
                <div className="productItem">
                    <p className="productTitle">PHOTOVOLTAÏQUES</p>
                    <p className="productText">Grâce à l'auto-consommation,réduisez votre facture d'énergie.</p>
                    <p className="moreInfo"> EN SAVOIR PLUS</p>
                </div>
                <div className="productItem">
                    <p className="productTitle">POMPE A CHALEUR</p>
                    <p className="productText">Elle consomme moins qu'elle ne produit.</p>
                    <p className="moreInfo"> EN SAVOIR PLUS</p>
                </div>
            </div>
            <div className="productCenter">
                <img src={ampoule} alt="lightImg" className="lightImg"/>
                <p className="lightText">"L’action est la clé fondamentale de tout succès."</p>
            </div>
            <div className="productRight">
            <div className="productItem">
                    <p className="productTitle">VMC</p>
                    <p className="productText">Renouvellement de l'air de votre intérieur sans déperdition d'énergie.</p>
                    <p className="moreInfo"> EN SAVOIR PLUS</p>
                </div>
                <div className="productItem">
                    <p className="productTitle">HYDROFUGE</p>
                    <p className="productText">Traitement des infiltrations d'eau dans le toit ou les murs.</p>
                    <p className="moreInfo"> EN SAVOIR PLUS</p>
                </div>
                <div className="productItem">
                    <p className="productTitle">CALORIFUGEAGE</p>
                    <p className="productText">Isolation thermique de vos tuyaux.</p>
                    <p className="moreInfo"> EN SAVOIR PLUS</p>
                </div>
            </div>
        </div>
    )
}

export default Product