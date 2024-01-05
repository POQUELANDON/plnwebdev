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
    gap: '10px',
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
    alignItems: 'stretch',
    justifyContent: 'space-between',
    gap: '10px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: '20px',
      width: '100%',
    },
  },
  skillsItem: {
    width: '-webkit-fill-available',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.background.filter,
    borderRadius: '20px',
    boxShadow:
      '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)', // Ajoute un effet d'ombre
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
