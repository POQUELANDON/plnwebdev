import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  cardContainer: {
    textDecoration: 'none', // Supprime le soulignement
  },
  card: {
    borderRadius: '20px',
  },
  cardContent: {
    padding: '10px', // Espacement interne
    borderColor: theme.palette.background.default,
    backgroundColor: 'transparent',
    color: theme.palette.text.secondary, // Couleur du texte
    borderWidth: '2px',
  },
}))
