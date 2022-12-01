import "../styles/Mentions.scss"




function Mentions (){
    return (
        <div>
            <div className="mentions">
                <p className="mentionsPropriete">1 - PROPRIÉTÉ Le présent site est la propriété de la Société
                    Siège social : adresse - Tél.: numéro- Email: contact@nomentreprise.fr
                    Entreprise/ Association créée en année – code X - Convention AAA - SIRET : chiffre
                    Directeur de la publication : nom, fonction et entreprise
                    Toute reproduction même partielle est interdite sans autorisation préalable.
                </p> 
                <p className="mentionsPresta">2 - PRESTATAIRES
                    Création / Conception / Développement :
                    Nom entreprise et adresse
                    Tél. : numéro - Email : contact@nomentreprise.fr - Web : www.site.fr
                    Hébergement : Nom
                </p>
            </div>
        </div>
    )
}

export default Mentions