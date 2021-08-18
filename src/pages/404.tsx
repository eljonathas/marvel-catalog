import Head from 'next/head'

import { Container } from '@material-ui/core'
import { ErrorPage } from '@components/core/ErrorPage'

const Page404 = () => {
  return (
    <Container maxWidth="md">
      <Head>
        <title>404 - Marvel Catalog</title>
      </Head>

      <ErrorPage message="Thanos broken the page you were looking for" />
    </Container>
  )
}

export default Page404
