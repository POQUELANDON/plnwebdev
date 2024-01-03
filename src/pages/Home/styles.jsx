import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  home: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center', // Centre le contenu verticalement
    alignItems: 'center', // Centre le contenu horizontalement
    textAlign: 'center', // Centre le texte
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
    fontSize: '40px', // Augmente la taille du titre
    fontWeight: 'bold', // Rend le titre en gras
    fontFamily: theme.typography.h1.fontFamily,
    color: theme.palette.text.primary, // Utilise la couleur secondaire pour le texte
    marginBottom: theme.spacing(1), // Ajoute un espace sous le titre
  },
  titleH2: {
    fontSize: '30px', // Augmente la taille du sous-titre
    color: theme.palette.text.primary, // Utilise la couleur secondaire pour le texte
    fontFamily: theme.typography.h2.fontFamily,
    marginBottom: theme.spacing(2), // Ajoute un espace sous le sous-titre
  },
  titleH3: {
    fontSize: '26px', // Augmente la taille du texte
    color: theme.palette.text.secondary, // Utilise la couleur secondaire pour le texte
  },
  description: {
    fontSize: '18px', // Augmente la taille du texte
    color: theme.palette.text.secondary, // Utilise la couleur secondaire pour le texte
  },
  skills: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10%',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  skillsItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    borderRadius: '4px',
    background: theme.palette.background.link, // Dégradé de couleur
    padding: '10px', // Espacement interne
  },
  btnLink: {
    color: theme.palette.text.secondary, // Couleur du texte
    fontFamily: theme.typography.fontFamily,
    textDecoration: 'none', // Supprime le soulignement
  },
}))
