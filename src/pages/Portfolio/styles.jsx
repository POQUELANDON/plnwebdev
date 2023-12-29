import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  galleryContainer: {
    borderRadius: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    gap: '30px',
    flex: '1 0 auto',
  },
  btnGroup: {
    justifyContent: 'flex-end',
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