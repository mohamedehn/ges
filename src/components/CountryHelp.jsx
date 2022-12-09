import "../styles/CountryHelp.scss";
import { useInView } from 'react-intersection-observer';
import { NavLink } from "react-router-dom";


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
          <NavLink to={"/help"}><p className="helpLink">Cliquer ici pour en savoir plus</p></NavLink>
        </div>
      </div>
    );
  }
  
export default CountryHelp;