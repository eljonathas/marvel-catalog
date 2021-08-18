import { Button, Typography, Container } from '@material-ui/core'

import styles from './Footer.module.scss'

export const Footer = () => {
  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Container maxWidth="md">
      <div className={styles.footerContent}>
        <Typography color="textSecondary">
          Developed with ❤️ by{' '}
          <a
            href="https://github.com/eljonathas"
            target="_black"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Jonathas Andrade
          </a>
        </Typography>

        <Button variant="outlined" color="primary" onClick={handleToTop}>
          <span>Back to Top</span>
        </Button>
      </div>
    </Container>
  )
}
