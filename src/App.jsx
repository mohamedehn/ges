import './styles/App.scss';
import React from 'react';
import Intro from './components/Intro';
import imgIntro from "./assets/intro.jpeg"
import imgPhoto from "./assets/photovoltaique.png"
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
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
      <Slider/>
    </div>
  );
}

export default App;
