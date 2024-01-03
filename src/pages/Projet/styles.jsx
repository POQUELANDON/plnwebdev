import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  projetContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: '10%',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
  projetContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    fontFamily: theme.typography.h2.fontFamily,
    color: theme.palette.text.primary, // Utilise la couleur secondaire pour le texte
  },
  projetTitle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  titleH2: {
    fontSize: '30px', // Augmente la taille du sous-titre
    color: theme.palette.text.primary, // Utilise la couleur secondaire pour le texte
    fontFamily: theme.typography.h2.fontFamily,
    marginBottom: theme.spacing(2), // Ajoute un espace sous le sous-titre
  },
  titleH3: {
    fontSize: '20px', // Augmente la taille du texte
    color: theme.palette.text.secondary, // Utilise la couleur secondaire pour le texte
    textAlign: 'center',
  },
  projetHostContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  projetTagContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme.palette.text.secondary,
  },
  projetHost: {
    display: 'flex',
    flexDirection: 'row',
    color: theme.palette.text.secondary,
  },
  projetDescription: {
    width: '70%',
    color: theme.palette.text.secondary,
  },
}))
