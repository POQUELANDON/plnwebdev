import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: theme.palette.background.default,
  },
  emoji: {
    fontSize: '4em',
  },
  button: {
    marginTop: theme.spacing(2),
    color: theme.palette.text.secondary, // Couleur du texte
    fontFamily: theme.typography.fontFamily,
    borderRadius: '4px',
    background: theme.palette.background.link, // Dégradé de couleur
    padding: '10px', // Espacement interne
  },
}))

function Error() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <span className={classes.emoji} role="img" aria-label="Confused Face">
        😕
      </span>
      <h1>Oups! Cette page n'existe pas.</h1>
      <p>
        Il semble que vous vous soyez perdu. Pas de soucis, ça arrive aux
        meilleurs d'entre nous.
      </p>
      <Button
        title="Bouton de retour acceuil"
        variant="contained"
        color="primary"
        className={classes.button}
        component={Link}
        to="/"
      >
        Retour à l'accueil
      </Button>
    </div>
  )
}

export default Error
