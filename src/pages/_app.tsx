import { useEffect, Fragment } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import PropTypes from 'prop-types'

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Container } from '@material-ui/core'

import { Navbar } from '@components/core/Navbar'

import { PageItemProvider } from '@contexts/PageItemContext'

import ProgressBar from '@badrap/bar-of-progress'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import theme from '../theme'
import { Footer } from '@components/core/Footer'

const progress = new ProgressBar({
  size: 2,
  color: theme.palette.primary.main,
  className: 'progress-bar',
  delay: 100
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

export default function MyApp(props: any) {
  const { Component, pageProps } = props

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')

    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <Fragment>
      <Head>
        <title>Marvel Catalog</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PageItemProvider>
          <Container maxWidth="md">
            <Navbar />
          </Container>
          <Component {...pageProps} />
          <Footer />
        </PageItemProvider>
      </ThemeProvider>
    </Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}
