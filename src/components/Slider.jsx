import "../styles/Slider.scss"

const Slider = ({imageSrc, title, subtitle, flipped})=> {

    const renderContent = () =>{
        if(!flipped){
            return (
                <>
                    <img src={imageSrc} alt="" className="sliderImg"/>
                    <div className="sliderContent">
                        <h1 className="sliderTitle">{title}</h1>
                        <p className="sliderSubtitle">{subtitle}</p>
                        <div className="more">
                            <p className="moreInfo">EN SAVOIR +</p>
                            <p className="moreContact"> CONTACT</p>
                        </div>
                    </div>
                </>
            )
        }else{
            return (
                <>  
                    <div className="sliderContent">
                        <h1 className="sliderTitle">{title}</h1>
                        <p className="sliderSubtitle">{subtitle}</p>
                        <div className="more">
                            <p className="moreInfo"> EN SAVOIR +</p>
                            <p className="moreContact"> CONTACT</p>
                        </div>
                    </div>
                    <img src={imageSrc} alt="" className="sliderImg"/>
                </>
            )
        }
    }

    return (
        <div className="slider">
            {renderContent()}
        </div>
    );
  }
  
  export default Slider;