import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  contact: {
    width: '100%',
    height: 'auto', // Utilise la hauteur de la fenêtre pour un effet plein écran
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
    borderRadius: '20px', // Supprime le bord arrondi
    padding: '5%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
    background: theme.palette.background.default,
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
