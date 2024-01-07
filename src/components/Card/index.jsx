import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import { useStyles } from './styles'

// Définition du composant ProjectCard
const ProjectCard = ({ projets }) => {
  // Utilisation des styles définis dans useStyles
  const classes = useStyles()

  // Si les données du projet ne sont pas disponibles, retourne null
  if (!projets) {
    return null
  }

  return (
    // Lien vers la page du projet
    <Link
      to={`/projet/${projets.id}`}
      className={classes.cardContainer}
      aria-label={`Lien vers le projet ${projets.title}`}
    >
      <Card className={classes.card}>
        <CardMedia
          component="img"
          alt={`Couverture ${projets.title}`}
          height="140"
          image={projets.cover}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h5" component="div" className={classes.cardH5}>
            {projets.title}
          </Typography>
          <Typography variant="subtitle1" className={classes.cardSubtitle1}>
            {projets.description}
          </Typography>
          <Rating
            name="read-only"
            value={parseInt(projets.rating, 10)}
            readOnly
          />
        </CardContent>
      </Card>
    </Link>
  )
}

// Vérification des types de props pour le composant ProjectCard
ProjectCard.propTypes = {
  projets: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
}

// Exportation du composant ProjectCard pour qu'il puisse être utilisé dans d'autres fichiers
export default ProjectCard
