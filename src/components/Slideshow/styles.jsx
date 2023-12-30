import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  carrousel: {
    position: 'relative',
    width: '400px',
    height: '400px',
  },
  carrouselImage: {
    width: '100%',
    height: '100%',
    borderRadius: '25px',
    objectFit: 'contain',
    objectPosition: 'center',
    backgroundColor: '#ffff',
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
  },
  carrouselCounter: {
    color: theme.palette.text.primary,
    fontSize: '18px',
    position: 'absolute',
    bottom: '-10%',
    left: '50%',
    transform: 'translateX(-50%)',
  },
}))
