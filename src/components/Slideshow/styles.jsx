import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  carrousel: {
    position: 'relative',
    width: '100%',
    height: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carrouselImage: {
    width: '100%',
    height: '100%',
    borderRadius: '25px',
    objectFit: 'contain',
    objectPosition: 'center',
    backgroundColor: '#ffff',
    cursor: 'zoom-in',
    '&:hover': {
      transform: 'scale(1.05)', // Agrandit l'élément de 10%
    },
  },
  carrouselNavigation: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    pointerEvents: 'none',
    cursor: 'pointer',
  },
  carrouselButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: theme.palette.text.primary,
    pointerEvents: 'auto',
    '&:first-child': {
      left: '0',
    },
    '&:last-child': {
      right: '0',
    },
  },
  carrouselArrow: {
    fontSize: '50px',
    '&:hover': {
      fontSize: '70px', // Agrandit l'élément de 10%
    },
  },
  carrouselCounter: {
    color: theme.palette.text.primary,
    fontSize: '18px',
    position: 'absolute',
    bottom: '-10%',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  btnCloseModal: {
    marginTop: theme.spacing(2),
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
    borderRadius: '24px',
    padding: '1%', // Espacement interne
    position: 'absolute',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    pointerEvents: 'auto',
    right: '0',
  },
  btnCloseIcon: {
    fontSize: '30px',
    '&:hover': {
      fontSize: '40px',
    },
  },
  modalArrow: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: theme.palette.text.primary,
    pointerEvents: 'auto',
    '&:first-child': {
      left: '0',
    },
    '&:last-child': {
      right: '0',
    },
  },
}))
