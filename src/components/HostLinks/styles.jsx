import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  linkContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '50%',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
  },
  linkIcon: {
    fontSize: '30px',
    color: theme.palette.text.secondary, // Couleur du texte
    transition: 'color 0.3s ease',
    '&:hover': {
      color: theme.palette.background.hover, // Change la couleur au survol
      fontSize: '40px',
    },
  },
}))
