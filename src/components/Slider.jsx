import "../styles/Slider.scss";
import { useInView } from 'react-intersection-observer';
import ges from "../assets/ges.png"
import { NavLink } from "react-router-dom";

const Slider = ({imageSrc, title, subtitle, flipped})=> {

        const { ref, inView } = useInView({
          threshold: 0.4,
        });
      

    const renderContent = () =>{
        if(!flipped){
            return (
                <>
                    <img src={imageSrc} alt="" className="sliderImg" id="propos"/>
                    <img src={ges} alt="" className="sliderImgTitle"/>
                    <div className="sliderContent">
                        <h1 className="sliderTitle">{title}</h1>
                        <p className="sliderSubtitle">{subtitle}</p>
                        <div className="more">
                            <p className="moreInfo">EN SAVOIR +</p>
                            <NavLink to={"/contact"} className="sliderNavlink"><p className="moreContact">CONTACT</p></NavLink>
                        </div>
                    </div>
                    {/* <div className="imgDescription">
                        <p className="imgTitle">ENSEMBLE, POUR DEMAIN.</p>
                        <p className="imgText">Des installateurs reconnus garants de l'environnement(R.G.E)</p>
                    </div> */}
                </>
            )
        }else{
            return (
                <>  
                    <img src={imageSrc} alt="" className="sliderImg"/>
                    <div className="sliderContent">
                        <h1 className="sliderTitle">{title}</h1>
                        <p className="sliderSubtitle">{subtitle}</p>
                        <div className="more">
                            <p className="moreInfo"> EN SAVOIR +</p>
                            <p className="moreContact"> CONTACT</p>
                        </div>
                    </div>
                </>
            )
        }
    }

    return (
        <div className={inView? "slider sliderZoom" : "slider"} ref={ref}>
            {renderContent()}
        </div>
    );
  }
  
  export default Slider;