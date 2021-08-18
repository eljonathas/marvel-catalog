import { Box, withStyles } from '@material-ui/core'

export const BoxComponent = withStyles({
  root: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '28rem',
    position: 'relative',
    '&:hover > div:first-child > div': {
      transform: 'scale(1.1)'
    }
  }
})(Box)
