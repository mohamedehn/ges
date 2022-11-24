import "../styles/CountryHelp.scss";
import { useInView } from 'react-intersection-observer';


const CountryHelp = ({image, title, subtitle, text, info})=> {

    const { ref, inView } = useInView({
        threshold: 0.4,
    });
    
    return(
      <div className={inView? "countryHelp countryHelpZoom" : "countryHelp"} ref={ref}>
        <div className="countryHelpHeader">
          <img src={image} alt="" className="countryHelpImg"/>
          <p></p>
        </div>
        <div className="countryHelpTitle">{title}</div>
        <div className="countryHelpContent">
          <p className="moreInfo">{info}</p>
          <p className="countryHelpName">{subtitle}</p>
          <p className="countryHelpText">{text}</p>
        </div>
      </div>
    );
  }
  
export default CountryHelp;