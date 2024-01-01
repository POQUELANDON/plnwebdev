import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  contact: {
    width: '100%',
    height: 'auto', // Utilise la hauteur de la fenêtre pour un effet plein écran
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '2%',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  title: {
    width: '45%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  },
  picture: {
    width: '90%',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '48% 52% 62% 38% / 79% 77% 23% 21% ',
  },
  paper: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
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
