import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  projetContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: '10%',
    width: '100%',
  },
  projetContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
  },
  projetTitle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  projetHostContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  projetTagContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  projetHost: {
    display: 'flex',
    flexDirection: 'row',
  },
  projetDescription: {
    width: 'auto',
  },
}))
