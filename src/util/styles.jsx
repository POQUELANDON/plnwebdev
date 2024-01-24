import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  '*': {
    margin: '0',
  },
  main: {
    color: theme.palette.text.primary, // Couleur du texte
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 'auto',
    padding: '2% 10%',
    margin: '0',
  },
  paper: {
    backgroundColor: 'transparent',
    width: '100%',
    padding: theme.spacing(3),
    borderRadius: '20px', // Supprime le bord arrondi
  },
  header: {
    [theme.breakpoints.up('md')]: {
      maxWidth: '992px',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '1280px',
    },
    margin: '0 auto 2px auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    height: 'auto',
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
    color: theme.palette.text.secondary, // Couleur du texte
    fontFamily: theme.typography.fontFamily,
    padding: '10px', // Espacement interne
    textDecoration: 'none', // Supprime le soulignement
    '&:hover': {
      background: theme.palette.background.hover, // Change la couleur au survol
      borderRadius: '4px',
      color: theme.palette.text.secondary, // Couleur du texte
      padding: '0 10px', // Espacement interne
      boxShadow:
        '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)', // Ajoute un effet d'ombre
    },
  },
  btnLinkActive: {
    // Style pour le lien actif
    color: theme.palette.text.secondary, // Couleur du texte
    fontFamily: theme.typography.fontFamily,
    borderRadius: '4px',
    background: theme.palette.background.link, // Change la couleur au survol
    padding: '0 10px', // Espacement interne
    textDecoration: 'none', // Supprime le soulignement
    boxShadow:
      '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)', // Ajoute un effet d'ombre
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
  footer: {
    width: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto',
    color: theme.palette.text.secondary, // Couleur du texte
    fontFamily: theme.typography.fontFamily,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  footerLink: {
    display: 'flex',
    justifyContent: 'center',
    gap: '100%',
  },
  footerIcone: {
    color: theme.palette.text.secondary, // Couleur du texte
  },
  footerSection: {
    display: 'flex',
    justifyContent: 'center',
  },
}))
