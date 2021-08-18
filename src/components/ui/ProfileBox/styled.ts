import { Box, withStyles } from '@material-ui/core'

export const ImageBoxComponent = withStyles({
  root: {
    width: '100%',
    height: '14rem',
    position: 'relative',
    marginBottom: '.5rem',
    '& > div': {
      borderRadius: '1rem 1rem 0 0'
    }
  }
})(Box)
