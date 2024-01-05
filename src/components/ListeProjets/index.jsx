// Importation des hooks nécessaires de React
import { useEffect, useState } from 'react'
// Importation de PropTypes pour la vérification des types de props
import PropTypes from 'prop-types'
// Importation du contexte ProjetContext
import { ProjetContext } from '../Router/'

// Définition du composant ListeProjets
// Il prend deux props : 'url' pour l'URL à partir de laquelle récupérer les données de projet, et 'children' qui est une fonction à exécuter avec les données de projet
const ListeProjets = ({ url, children }) => {
  // Utilisation du hook useState pour définir l'état local des données de projet
  const [projetsData, setProjetsData] = useState([])

  // Utilisation du hook useEffect pour effectuer des actions après le rendu du composant
  useEffect(() => {
    fetch(url)
      .then((response) => response.json()) // Convertir la réponse en JSON
      .then((data) => {
        // Convertir les valeurs de rating en nombres
        const updatedData = data.map((projet) => ({
          ...projet,
          rating: parseInt(projet.rating, 10),
        }))
        setProjetsData(updatedData) // Mettre à jour l'état des données de projet avec les données récupérées
      })
      .catch((error) => console.error('Erreur:', error)) // En cas d'erreur, afficher l'erreur dans la console
  }, [url]) // Le tableau contient 'url', donc useEffect s'exécutera chaque fois que 'url' change

  let projets = []

  // Pour chaque projet dans les données de projet, ajouter les clés de l'objet projet à la liste des projets
  projetsData.forEach((projet) => {
    projets = [...projets, ...Object.keys(projet)]
  })

  // Créer un nouvel ensemble à partir de la liste des projets pour éliminer les doublons, puis convertir cet ensemble en tableau
  const projetsUniques = [...new Set(projets)]

  // Utilise le fournisseur de contexte de projet pour passer les données de projet
  return (
    <ProjetContext.Provider value={projetsData}>
      {/* Exécute la fonction 'children' avec les données de projet et les projets uniques comme arguments */}
      {children(projetsData, projetsUniques)}
    </ProjetContext.Provider>
  )
}

// Définition des types de props pour le composant ListeProjets
ListeProjets.propTypes = {
  url: PropTypes.string.isRequired, // 'url' doit être une chaîne de caractères et est requise
  children: PropTypes.func.isRequired, // 'children' doit être une fonction et est requise
}

// Exportation du composant ListeProjets pour qu'il puisse être utilisé dans d'autres fichiers
export default ListeProjets
