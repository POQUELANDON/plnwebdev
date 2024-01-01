import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  cardContainer: {
    boxShadow: 'none',
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: theme.spacing(2),
  },
  me: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cvContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: '0 1 auto',
    alignItems: 'center',
    width: '100%',
  },
  photoHome: {
    width: '100%',
  },
  button: {
    color: theme.palette.text.secondary, // Couleur du texte
    fontFamily: theme.typography.fontFamily,
    borderRadius: '4px',
    background: theme.palette.background.link, // Dégradé de couleur
    padding: '10px', // Espacement interne
  },
  card: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerText: {
    textAlign: 'center',
  },
  icon: {
    marginBottom: theme.spacing(1),
  },
}))