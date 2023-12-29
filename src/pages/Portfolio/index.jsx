import React, { useState, useContext } from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import ProjectCards from '../../components/ProjectCards'
import { ProjetContext } from '../../components/Router/'
import { useStyles } from './styles'

function Portfolio() {
  const [filter, setFilter] = useState('')
  const projetsData = useContext(ProjetContext)
  const classes = useStyles()

  // Création d'un tableau unique des intitulés de "location"
  const locations = [...new Set(projetsData.map((projet) => projet.location))]

  return (
    <section className={classes.galleryContainer}>
      <ButtonGroup className={classes.btnGroup} variant="text" aria-label="text button group">
        {/* Bouton pour afficher tous les projets */}
        <Button onClick={() => setFilter('')} className={filter === '' ? classes.btnFilterActive : classes.btnFilter}>Tous</Button>

        {/* Génération d'un bouton pour chaque intitulé de "location" */}
        {locations.map((location) => (
          <Button key={location} onClick={() => setFilter(location)} className={filter === location ? classes.btnFilterActive : classes.btnFilter}>
            {location}
          </Button>
        ))}
      </ButtonGroup>
          <ProjectCards filter={filter} />
    </section>
  )
}

export default Portfolio