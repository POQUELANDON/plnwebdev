import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import { useStyles } from './styles'

const ProjectCard = ({ projets }) => {
  const classes = useStyles()

  return (
    <Link to={`/projet/${projets.id}`} className={classes.cardContainer}>
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
          <Rating name="read-only" value={projets.rating} readOnly />
        </CardContent>
      </Card>
    </Link>
  )
}

ProjectCard.propTypes = {
  projets: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
}

export default ProjectCard
