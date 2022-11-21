import "../styles/Intro.scss"

const Intro = ({imageSrc})=> {
    return (
        <div className="intro">
            <img src={imageSrc} alt="" className="introImg"/>
            <h1 className="introTitle"> ENSEMBLE, POUR DEMAIN.</h1>
        </div>
    );
  }
  
  export default Intro;