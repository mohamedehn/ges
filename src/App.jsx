import './styles/App.scss';
import React from 'react';
import Intro from './components/Intro';
import imgIntro from "./assets/intro.jpeg"
import imgPhoto from "./assets/photovoltaique.png"
import Slider from './components/Slider';
import Product from './components/Product';
import Navbar from './components/Navbar';
import {IoLogoFacebook} from "react-icons/io"
import {BsInstagram} from "react-icons/bs"
import {AiFillLinkedin} from "react-icons/ai"
import CountryHelp from './components/CountryHelp';
import foret from "./assets/foret.jpeg"

const navbarLinks = [
  {url:"#", title : "ACCUEIL"},
  {url:"#", title : "NOS PRESTATIONS"},
  {url:"#", title : "A PROPOS DE NOUS"},
  {url:"#", title : "CONTACT"},
  {url:"#", title : <IoLogoFacebook/>},
  {url:"#", title : <BsInstagram/>},
  {url:"#", title : <AiFillLinkedin/>},
]

function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks}/>
      <Intro imageSrc={imgIntro}/>
      <Slider 
        imageSrc={imgPhoto} 
        title={"QUI SOMMES NOUS ?"}
        subtitle={`Basée en région Rhône-Alpes Auvergne,
        Green Energy Solutions est une startup
        indépendantede conseils, d'études et de travaux
        en matière d'économie énergétique destinée aux
        particuliers et aux professionnelles.
        Soucieux des problématiques liées à
        l'environnement, nous avons pour ambition de
        promouvoir les énergies renouvelables et
        permettre à tout un chacun de les adopter et de
        faire baisser de manière significative les
        consommations d'énergies`}
      />
      <Product/>
      <CountryHelp
        image={foret}
        title={"Pour vous aider. De nombreuses aides de l'état"}
      />
    </div>
  );
}

export default App;
