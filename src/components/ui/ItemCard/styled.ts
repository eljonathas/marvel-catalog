import { Card, withStyles, CardContent } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

export const CardComponent = withStyles({
  root: {
    height: '18rem',
    position: 'relative',
    borderRadius: '1rem',
    margin: '10px',
    display: 'flex',
    background: grey[900],
    cursor: 'pointer',
    '&:hover > div:first-child > div': {
      transform: 'scale(1.1)'
    }
  }
})(Card)

export const CardContentComponent = withStyles({
  root: {
    marginTop: 'auto',
    position: 'relative',
    zIndex: 3
  }
})(CardContent)
