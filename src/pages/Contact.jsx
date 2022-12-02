import "../styles/Contact.scss"
import Navbar from "../components/Navbar";
import {BsInstagram} from "react-icons/bs";
import {AiFillLinkedin} from "react-icons/ai";
import {IoLogoFacebook} from "react-icons/io";
import { useInView } from 'react-intersection-observer';
import contact from "../assets/contact.jpeg";
import Footer from "../components/Footer";

const navbarLinks = [
    {url:"/", title : "ACCUEIL", id:"1"},
    {url:"/help", title : "AIDES DE L'ETAT", id:"2"},
    {url:"#", title : "CONTACT", id:"3"},
    {url:"https://www.instagram.com/greenenergysolutions_/", title : <BsInstagram/>, id:"4"},
    {url:"https://www.linkedin.com/company/gesfrance/", title : <AiFillLinkedin/>, id:"5"},
    {url:"https://www.facebook.com/profile.php?id=100083332664949", title : <IoLogoFacebook/>, id:"6"},
  ]

function Contact (){

    const { ref, inView } = useInView({
        threshold: 0.4,
    });

    return(
        <div>
            <Navbar navbarLinks={navbarLinks}/>
            <div className={inView? "contact contactZoom" : "contact"} ref={ref}>
                <img src={contact} alt="" className="contactImg"/>
                <div className="contactContent">
                    <form name="contact" method="post" className="contactForm" data-netlify="true" onSubmit="submit">
                        <input type="hidden" name="form-name" value="contact" />
                        <p>
                            <label>Nom: <input type="text" name="name" required/></label>
                        </p>
                        <p>
                            <label>Prénom: <input type="text" name="name" required/></label>
                        </p>
                        <p>
                            <label>Email: <input type="email" name="email" required/></label>
                        </p>
                        <p>
                            <label>Téléphone: <input type="tel" name="tel" size="10" required/></label>
                        </p>
                        <p>
                            <label>Message: <textarea name="message" required></textarea></label>
                        </p>
                        <p>
                             <button type="submit">Envoyer</button>
                        </p>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact