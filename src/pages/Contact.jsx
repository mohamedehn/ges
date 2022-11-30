import "../styles/Contact.scss"
import Navbar from "../components/Navbar";
import {BsInstagram} from "react-icons/bs";
import {AiFillLinkedin} from "react-icons/ai";
import { useInView } from 'react-intersection-observer';
import contact from "../assets/contact.jpeg";

const navbarLinks = [
    {url:"/", title : "ACCUEIL", id:"1"},
    {url:"/help", title : "AIDES DE L'ETAT", id:"2"},
    {url:"#", title : "CONTACT", id:"3"},
    {url:"https://www.instagram.com/greenenergysolutions_/", title : <BsInstagram/>, id:"4"},
    {url:"#", title : <AiFillLinkedin/>, id:"5"},
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
                    
                </div>
                <div className="contactFooter">
                        <p>©Copyright 2022 Green Energy Solutions - Tout droit réservé</p>
                        <p>Mentions légales</p>
                        <p>Powered by Ehn-Dev</p>
                </div>
            </div>
        </div>
    )
}

export default Contact