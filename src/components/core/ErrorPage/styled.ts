import { Box, withStyles } from '@material-ui/core'

export const FullCenteredContainer = withStyles({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    marginTop: '2rem',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '1rem'
  }
})(Box)
