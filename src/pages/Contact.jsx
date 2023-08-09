import "../styles/Contact.scss"
import Navbar from "../components/Navbar";
import { useInView } from 'react-intersection-observer';
import contact from "../assets/contact.webp";
import Footer from "../components/Footer";
import React from "react";

const navbarLinks = [
    {url:"/", title : "ACCUEIL", id:"1"},
    {url:"/help", title : "AIDES DE L'ETAT", id:"2"},
    {url:"#", title : "CONTACT", id:"3"},
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
                    <form name="contact" action="https://formsubmit.co/contact@greenenergysolutions.fr" method="POST" className="contactForm">
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
                            <label>Téléphone: <input type="tel" name="tel" size={10} required/></label>
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