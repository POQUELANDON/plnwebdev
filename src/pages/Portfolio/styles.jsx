import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  galleryContainer: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    gap: '30px',
    flex: '1 0 auto',
  },
  titleH2: {
    color: theme.palette.text.primary, // Utilise la couleur secondaire pour le texte
    fontSize: '40px', // Augmente la taille du sous-titre
    fontFamily: theme.typography.h2.fontFamily,
    marginBottom: theme.spacing(1), // Ajoute un espace sous le sous-titre
  },
  btnGroup: {
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  btnFilter: {
    color: theme.palette.text.primary, // Couleur du texte
    padding: '10px', // Espacement interne
    '&:hover': {
      background: theme.palette.background.hover, // Change la couleur au survol
      borderRadius: '4px',
      color: theme.palette.text.secondary, // Couleur du texte
    },
  },
  btnFilterActive: {
    // Style pour le lien actif
    color: theme.palette.text.secondary, // Couleur du texte
    background: theme.palette.background.hover, // Change la couleur
    borderRadius: '4px',
  },
}))
