import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  linkContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '50%',
    alignItems: 'center',
    gap: '50%',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.secondary, // Couleur du texte
    transition: 'color 0.3s ease',
    padding: '0 50%', // Espacement interne
    '&:hover': {
      background: theme.palette.background.hover, // Change la couleur au survol
      borderRadius: '4px',
      padding: '0 50%', // Espacement interne
    },
  },
}))
