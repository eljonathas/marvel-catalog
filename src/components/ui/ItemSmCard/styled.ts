import { Card, withStyles, CardContent, Typography } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

export const SmCardComponent = withStyles({
  root: {
    height: '12rem',
    position: 'relative',
    borderRadius: '1rem',
    display: 'flex',
    background: grey[900],
    cursor: 'pointer',
    '&:hover > div:first-child > div': {
      transform: 'scale(1.1)'
    }
  }
})(Card)

export const SmCardTitle = withStyles({
  root: {
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textDecoration: 'none'
  }
})(Typography)

export const SmCardContentComponent = withStyles({
  root: {
    marginTop: 'auto',
    position: 'relative',
    zIndex: 3,
    maxWidth: '100%'
  }
})(CardContent)
