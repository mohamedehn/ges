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
import Partnership from './components/Partnership';
import Expertise from './components/Expertise';
import Info from './components/Info';
import Footer from './components/Footer';

const navbarLinks = [
  {url:"#", title : "ACCUEIL", id:"1"},
  {url:"/help", title : "AIDES DE L'ETAT", id: "2"},
  {url:"/contact", title : "CONTACT", id:"3"},
  {url:"https://www.instagram.com/greenenergysolutions_/", title : <BsInstagram/>, id:"4"},
  {url:"https://www.linkedin.com/company/gesfrance/", title : <AiFillLinkedin/>, id:"5"},
  {url:"https://www.facebook.com/profile.php?id=100083332664949", title : <IoLogoFacebook/>, id:"6"},
]

function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks}/>
      <Intro imageSrc={imgIntro}/>
      <Slider 
        imageSrc={imgPhoto} 
        title={"QUI SOMMES NOUS ?"}
        subtitle={`Basée en région Rhône-Alpes Auvergne,Green Energy Solutions est une startup indépendante de conseils, d'études et de travaux
        en matière d'économie énergétique destinée aux particuliers et aux professionnelles. Soucieux des problématiques liées à l'environnement, 
        nous avons pour ambition de promouvoir les énergies renouvelables et permettre à tout un chacun de les adopter et de faire baisser de 
        manière significative les consommations d'énergies`}
      />
      <Product/>
      <CountryHelp image={foret}/>
      <Partnership/>
      <Expertise/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;
