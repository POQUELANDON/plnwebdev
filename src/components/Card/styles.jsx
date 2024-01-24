import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  cardContainer: {
    textDecoration: 'none', // Supprime le soulignement
  },
  card: {
    borderRadius: '20px',
    backgroundColor: theme.palette.background.filter,
    transition: 'transform 0.3s ease-in-out', // Ajoute une transition douce
    '&:hover': {
      transform: 'scale(1.05)', // Agrandit l'élément de 10%
      boxShadow:
        '10px 15px 10px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)', // Ajoute un effet d'ombre
    },
  },
  cardContent: {
    padding: '10px', // Espacement interne
    borderColor: theme.palette.background.default,
    backgroundColor: 'transparent',
    color: theme.palette.text.secondary, // Couleur du texte
    borderWidth: '2px',
  },
}))
