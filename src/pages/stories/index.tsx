import { FC } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { GetStaticProps } from 'next'

import { Container, Typography, Grid } from '@material-ui/core'

import { getStories } from '@services/api'

import { ItemSmCard } from '@components/ui/ItemSmCard'
import { ErrorPage } from '@components/core/ErrorPage'

import { DataTypes } from '@interfaces/DataTypes'

const StoriesIndex: FC<{ storiesData: DataTypes[] }> = ({ storiesData }) => {
  if (!storiesData) {
    return <ErrorPage message="Thanos blip stories data" />
  }

  return (
    <Container maxWidth="md">
      <Head>
        <title>All Stories - Marvel Catalog</title>
      </Head>

      <main style={{ marginBottom: '2rem' }}>
        <Typography variant="h5" style={{ marginBottom: '1rem' }}>
          <strong>Marvel Stories</strong>
        </Typography>

        <Grid container spacing={2}>
          {storiesData &&
            storiesData.map(({ id, name, title, thumbnail, startYear }) => (
              <Grid key={id} item xs={6} sm={4}>
                <Link href={`/stories/${id}`} passHref>
                  <a style={{ textDecoration: 'none' }}>
                    <ItemSmCard
                      title={name || title}
                      imageUrl={
                        !thumbnail ||
                        thumbnail.path.indexOf('image_not_available') !== -1
                          ? '/assets/images/marvel_logo_bg.jpg'
                          : thumbnail.path +
                            `/portrait_incredible.${thumbnail.extension}`
                      }
                      startYear={startYear}
                    />
                  </a>
                </Link>
              </Grid>
            ))}
        </Grid>
      </main>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const storiesData = await getStories(100, '-id')

  return {
    props: {
      storiesData: storiesData.data ? storiesData.data.results : null
    },
    revalidate: 60 * 60 * 24
  }
}
export default StoriesIndex
