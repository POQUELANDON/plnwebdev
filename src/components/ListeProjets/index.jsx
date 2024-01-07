// Importation des hooks nécessaires de React
import { useEffect, useState } from 'react'
// Importation de PropTypes pour la vérification des types de props
import PropTypes from 'prop-types'
// Importation du contexte ProjetContext
import { ProjetContext } from '../Router/'

// Définition du composant ListeProjets
const ListeProjets = ({ url, children }) => {
  // Utilisation du hook useState pour définir l'état local des données de projet
  const [projetsData, setProjetsData] = useState([])
  // État pour le suivi du chargement des données
  const [isLoading, setIsLoading] = useState(false)
  // État pour le suivi des erreurs lors de la récupération des données
  const [error, setError] = useState(null)

  // Utilisation du hook useEffect pour effectuer des actions après le rendu du composant
  useEffect(() => {
    setIsLoading(true) // Début du chargement
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données')
        }
        return response.json() // Convertir la réponse en JSON
      })
      .then((data) => {
        // Convertir les valeurs de rating en nombres
        const updatedData = data.map((projet) => ({
          ...projet,
          rating: parseInt(projet.rating, 10),
        }))
        setProjetsData(updatedData) // Mettre à jour l'état des données de projet avec les données récupérées
        setIsLoading(false) // Fin du chargement
      })
      .catch((error) => {
        console.error('Erreur:', error) // En cas d'erreur, afficher l'erreur dans la console
        setError(error) // Mettre à jour l'état d'erreur
        setIsLoading(false) // Fin du chargement
      })
  }, [url]) // useEffect s'exécutera chaque fois que 'url' change

  // Si les données sont en cours de chargement, afficher "Chargement..."
  if (isLoading) {
    return <div>Chargement...</div>
  }

  // Si une erreur s'est produite, afficher le message d'erreur
  if (error) {
    return <div>Une erreur s'est produite: {error.message}</div>
  }

  // Utilise le fournisseur de contexte de projet pour passer les données de projet
  return (
    <ProjetContext.Provider value={projetsData}>
      {/* Exécute la fonction 'children' avec les données de projet comme argument */}
      {children(projetsData)}
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
