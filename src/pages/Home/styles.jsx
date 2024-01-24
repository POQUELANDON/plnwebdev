import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  home: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'center', // Centre le contenu verticalement
    alignItems: 'center', // Centre le contenu horizontalement
    textAlign: 'center', // Centre le texte
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
  homeTitle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2em',
  },
  titleH1: {
    fontSize: '20px', // Augmente la taille du titre
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
    backgroundPositionY: 'bottom 32px',
  },
  titleH3: {
    fontSize: '26px', // Augmente la taille du texte
    color: theme.palette.text.secondary, // Utilise la couleur secondaire pour le texte
  },
  description: {
    fontSize: '18px', // Augmente la taille du texte
    color: theme.palette.text.secondary, // Utilise la couleur secondaire pour le texte
    display: 'contents',
  },
  skills: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    gap: '10px',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: '20px',
      width: '100%',
    },
  },
  skillsGrid: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  skillsGridItem: {
    marginLeft: '0',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
    },
  },
  skillsItem: {
    width: '-webkit-fill-available',
    height: '250px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.filter,
    borderRadius: '20px',
    boxShadow:
      '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)', // Ajoute un effet d'ombre
    minHeight: '100px', // Définit une hauteur minimale pour éviter que la mise en page ne bouge
    transition: 'transform 0.3s ease-in-out', // Ajoute une transition pour rendre le changement de taille plus fluide
    '&:hover': {
      transform: 'scale(1.2)', // Augmente la taille de l'icône au survol
    },
  },
  '&.MuiSvgIcon-root': {
    fontSize: '2.5rem',
  },
  homeMe: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '60%',
    justifyContent: 'center',
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
