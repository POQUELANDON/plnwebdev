import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  home: {
    width: '100%',
    height: 'auto',
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center', // Centre le contenu verticalement
    alignItems: 'center', // Centre le contenu horizontalement
    textAlign: 'center', // Centre le texte
    borderRadius: '20px', // Supprime le bord arrondi
    padding: theme.spacing(3), // Ajoute un peu d'espace autour du contenu
    gap: '2%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  homeTitle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleH1: {
    fontSize: '28px', // Augmente la taille du titre
    fontWeight: 'bold', // Rend le titre en gras
    marginBottom: theme.spacing(1), // Ajoute un espace sous le titre
  },
  titleH2: {
    fontSize: '20px', // Augmente la taille du sous-titre
    marginBottom: theme.spacing(2), // Ajoute un espace sous le sous-titre
  },
  titleH3: {
    fontSize: '18px', // Augmente la taille du texte
    color: theme.palette.text.secondary, // Utilise la couleur secondaire pour le texte
  },
  description: {
    fontSize: '18px', // Augmente la taille du texte
    color: theme.palette.text.secondary, // Utilise la couleur secondaire pour le texte
  },
  homeMe: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  photoHome: {
    width: '250px', // Augmente la taille de la photo
    marginBottom: theme.spacing(2), // Ajoute un espace sous la photo
  },
  btn: {
    marginTop: theme.spacing(2), // Ajoute un espace au-dessus du bouton
    color: theme.palette.text.secondary, // Couleur du texte
    fontFamily: theme.typography.fontFamily,
    borderRadius: '4px',
    background: theme.palette.background.link, // Dégradé de couleur
    padding: '10px', // Espacement interne
  },
}))
