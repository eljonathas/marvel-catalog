import Head from 'next/head'

import { Container } from '@material-ui/core'
import { ErrorPage } from '@components/core/ErrorPage'

const Page500 = () => {
  return (
    <Container maxWidth="md">
      <Head>
        <title>500 - Marvel Catalog</title>
      </Head>

      <ErrorPage message="Thanos broken the server" />
    </Container>
  )
}

export default Page500
