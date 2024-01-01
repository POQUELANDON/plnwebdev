import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  main: {
    color: theme.palette.text.primary, // Couleur du texte
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 'auto',
    padding: '2% 10%',
  },
  header: {
    [theme.breakpoints.up('md')]: {
      maxWidth: '992px',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '1280px',
    },
    width: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
    height: '10%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
  },
  logo: {
    height: '20%',
    width: '20%',
  },
  nav: {
    width: '65%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-around',
    },
  },
  navLink: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '2%',
    textTransform: 'uppercase', // Transforme le texte en majuscules
    [theme.breakpoints.down('sm')]: {
      display: 'none', // Cache les boutons de navigation sur les petits écrans
    },
  },
  btnLink: {
    // Style pour le lien actif
    color: theme.palette.text.secondary, // Couleur du texte
    fontFamily: theme.typography.fontFamily,
    padding: '10px', // Espacement interne
    textDecoration: 'none', // Supprime le soulignement
    '&:hover': {
      background: theme.palette.background.hover, // Change la couleur au survol
      borderRadius: '4px',
      color: theme.palette.text.secondary, // Couleur du texte
      padding: '0 10px', // Espacement interne
    },
  },
  btnLinkActive: {
    // Style pour le lien actif
    color: theme.palette.text.secondary, // Couleur du texte
    fontFamily: theme.typography.fontFamily,
    borderRadius: '4px',
    background: theme.palette.background.link, // Dégradé de couleur
    padding: '0 10px', // Espacement interne
    textDecoration: 'none', // Supprime le soulignement
    // Ajoutez ici d'autres styles que vous voulez
  },
  menuButton: {
    '&.MuiButtonBase-root': {
      // Augmente la spécificité des styles personnalisés
      [theme.breakpoints.down('sm')]: {
        display: 'flex', // Affiche le bouton de menu sur les petits écrans
      },
      display: 'none', // Cache le boutons de navigation sur les petits écrans
    },
  },
  paper: {
    width: '100%',
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
    borderRadius: '20px', // Supprime le bord arrondi
  },
  '&.MuiPaper-root': {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
  },
  footer: {
    width: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto',
    color: theme.palette.text.primary, // Couleur du texte
    fontFamily: theme.typography.fontFamily,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2%',
  },
  footerLink: {
    display: 'flex',
    justifyContent: 'center',
    gap: '100%',
  },
  footerIcone: {
    color: theme.palette.text.primary, // Couleur du texte
  },
  footerSection: {
    display: 'flex',
    justifyContent: 'center',
  },
}))
