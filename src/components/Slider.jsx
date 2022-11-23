import "../styles/Slider.scss";
import { useInView } from 'react-intersection-observer';


const Slider = ({imageSrc, title, subtitle, flipped})=> {

        const { ref, inView } = useInView({
          /* Optional options */
          threshold: 0.4,
        });
      

    const renderContent = () =>{
        if(!flipped){
            return (
                <>
                    <div className="sliderContent">
                        <h1 className="sliderTitle">{title}</h1>
                        <p className="sliderSubtitle">{subtitle}</p>
                        <div className="more">
                            <p className="moreInfo">EN SAVOIR +</p>
                            <p className="moreContact"> CONTACT</p>
                        </div>
                    </div>
                    <img src={imageSrc} alt="" className="sliderImg"/>
                    <div className="imgDescription">
                        <p className="imgTitle"></p>
                        <p className="imgText"></p>
                    </div>
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