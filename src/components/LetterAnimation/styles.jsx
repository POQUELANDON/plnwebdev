import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  letterAnimation: {
    '& span': {
      opacity: 0,
      animation: `$fadeIn 0.5s forwards`,
      animationDelay: '0s',
    },
  },
  '@keyframes fadeIn': {
    '0%': {
      transform: 'scaleX(0)',
    },
    '17%': {
      transform: 'scaleX(.18)',
    },
    '24%': {
      transform: 'scaleX(.4)',
    },
    '46%': {
      transform: 'scaleX(.81)',
    },
    '85%, 100%': {
      opacity: 1,
    },
    '100%': {
      transform: 'scaleX(1)',
    },
  },
}))
