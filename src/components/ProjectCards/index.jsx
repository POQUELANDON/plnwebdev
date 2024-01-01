import React, { useContext } from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '../../components/Card'
import { ProjetContext } from '../Router/'

const ProjectCards = ({ filter }) => {
  const projetsData = useContext(ProjetContext)

  // Filtrage des projets en fonction du filtre
  const filteredProjets = projetsData.filter((projets) =>
    projets.location.includes(filter),
  )

  const cards = filteredProjets.map((projets) => (
    <Grid item xs={12} sm={6} md={4} key={projets.id}>
      <Card projets={projets} />
    </Grid>
  ))

  return (
    <Grid container spacing={3}>
      {cards}
    </Grid>
  )
}

export default ProjectCards
