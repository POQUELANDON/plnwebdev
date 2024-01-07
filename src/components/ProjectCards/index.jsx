// Importation des dépendances nécessaires
import React, { useContext } from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '../../components/Card'
import { ProjetContext } from '../Router/'

// Définition du composant ProjectCards
const ProjectCards = ({ filter }) => {
  // Utilisation du contexte pour accéder aux données du projet
  const projetsData = useContext(ProjetContext)

  // Si les données du projet ne sont pas encore chargées, affiche "Chargement..."
  if (!projetsData) {
    return <div>Chargement...</div>
  }

  // Si une erreur s'est produite lors du chargement des données du projet, affiche l'erreur
  if (projetsData.error) {
    return <div>Une erreur s'est produite: {projetsData.error.message}</div>
  }

  // Filtrage des projets en fonction du filtre passé en prop
  const filteredProjets = projetsData.filter((projets) =>
    projets.location.includes(filter),
  )

  // Création d'une carte pour chaque projet filtré
  const cards = filteredProjets.map((projets) => (
    <Grid item xs={12} sm={6} md={4} key={projets.id}>
      <Card projets={projets} />
    </Grid>
  ))

  // Rendu du composant : une grille contenant les cartes de projet
  return (
    <Grid container spacing={3}>
      {cards}
    </Grid>
  )
}

// Exportation du composant pour qu'il puisse être utilisé dans d'autres fichiers
export default ProjectCards
