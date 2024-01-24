// Importation des dépendances nécessaires de React
import React, { useState, useContext, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import ProjectCards from '../../components/ProjectCards'
import { ProjetContext } from '../../components/Router/'
import MainLayout from '../../components/MainLayout/'
import { useStyles } from './styles'

// Définition du composant Portfolio
function Portfolio() {
  // Utilisation du hook useState pour définir l'état local du filtre
  const [filter, setFilter] = useState('')
  // Utilisation du contexte pour accéder aux données du projet
  const projetsData = useContext(ProjetContext)
  // Utilisation des styles définis dans useStyles
  const classes = useStyles()
  // État pour le suivi des emplacements uniques
  const [locations, setLocations] = useState([])

  // Utilisation du hook useEffect pour effectuer des actions après le rendu du composant
  useEffect(() => {
    // Création d'un tableau unique des intitulés de "location"
    setLocations([...new Set(projetsData.map((projet) => projet.location))])
  }, [projetsData]) // useEffect s'exécutera chaque fois que 'projetsData' change

  // Si les données du projet ne sont pas encore chargées, affiche "Chargement..."
  if (!projetsData) {
    return <div>Chargement...</div>
  }

  // Si une erreur s'est produite lors du chargement des données du projet, affiche l'erreur
  if (projetsData.error) {
    return <div>Une erreur s'est produite: {projetsData.error.message}</div>
  }

  // Rendu du composant : une section contenant un groupe de boutons pour le filtrage et les cartes de projet
  return (
    <MainLayout>
      <section className={classes.galleryContainer}>
        <h2 className={classes.titleH2}>Mes réalisations</h2>
        <ButtonGroup
          className={classes.btnGroup}
          variant="text"
          aria-label="text button group"
        >
          {/* Bouton pour afficher tous les projets */}
          <Button
            onClick={() => {
              setFilter('')
            }}
            className={
              filter === '' ? classes.btnFilterActive : classes.btnFilter
            }
            aria-label="Afficher tous les projets"
          >
            Tous
          </Button>

          {/* Génération d'un bouton pour chaque intitulé de "location" */}
          {locations.map((location) => (
            <Button
              key={location}
              onClick={() => {
                setFilter(location)
              }}
              className={
                filter === location
                  ? classes.btnFilterActive
                  : classes.btnFilter
              }
              aria-label={`Afficher les projets de ${location}`}
            >
              {location}
            </Button>
          ))}
        </ButtonGroup>
        <ProjectCards filter={filter} />
      </section>
    </MainLayout>
  )
}

// Exportation du composant Portfolio pour qu'il puisse être utilisé dans d'autres fichiers
export default Portfolio
