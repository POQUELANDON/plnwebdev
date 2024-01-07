import React, { useState } from 'react'
import DefaultMiro from '../../assets/Poque_Landon_Natacha_1_competences_122023.png'

// Définition du composant MiroFrame
const MiroFrame = () => {
  // Utilisation du hook useState pour définir l'état local de l'erreur
  const [isError, setIsError] = useState(false)

  // Fonction pour gérer les erreurs lors du chargement de l'iframe
  const handleError = () => {
    setIsError(true)
  }

  // Si une erreur s'est produite, afficher une image par défaut
  // Sinon, afficher l'iframe
  return isError ? (
    <div>
      <img src={DefaultMiro} alt="Default" aria-label="Image par défaut" />
      <p>Une erreur s'est produite lors du chargement du tableau Miro.</p>
    </div>
  ) : (
    <iframe
      title="Mon tableau Miro"
      paddings="5px"
      width="100%"
      height="480"
      src="https://miro.com/app/embed/uXjVNM9OMOU=/"
      frameBorder="0"
      scrolling="no"
      allowFullScreen
      onError={handleError}
      aria-label="Tableau Miro intégré"
    ></iframe>
  )
}

// Exportation du composant MiroFrame pour qu'il puisse être utilisé dans d'autres fichiers
export default MiroFrame
