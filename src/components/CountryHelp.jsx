import "../styles/CountryHelp.scss";
import { useInView } from 'react-intersection-observer';


const CountryHelp = ({image})=> {

    const { ref, inView } = useInView({
        threshold: 0.4,
    });
    
    return(
      <div className={inView? "countryHelp countryHelpZoom" : "countryHelp"} ref={ref}>
        <div className="countryHelpHeader">
          <img src={image} alt="" className="countryHelpImg"/>
        </div>
        <div className="countryHelpMainTitle">
          <p>Pour vous aider. De nombreuses aides de l'état.</p>
          <p className="helpLink">Cliquer ici pour en savoir plus</p>
        </div>
      </div>
    );
  }
  
export default CountryHelp;