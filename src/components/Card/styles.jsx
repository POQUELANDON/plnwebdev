import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  cardContainer: {
    textDecoration: 'none', // Supprime le soulignement
  },
  cardContent: {
    padding: '10px', // Espacement interne
    background: theme.palette.background.default,
    color: theme.palette.text.secondary, // Couleur du texte
  },
}))