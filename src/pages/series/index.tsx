import { FC } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Head from 'next/head'

import { Container, Typography, Grid } from '@material-ui/core'

import { getSeries } from '@services/api'

import { ItemSmCard } from '@components/ui/ItemSmCard'
import { ErrorPage } from '@components/core/ErrorPage'

import { DataTypes } from '@interfaces/DataTypes'

const SeriesIndex: FC<{ seriesData: DataTypes[] }> = ({ seriesData }) => {
  if (!seriesData) {
    return <ErrorPage message="Thanos blip series data" />
  }

  return (
    <Container maxWidth="md">
      <Head>
        <title>All Series - Marvel Catalog</title>
      </Head>

      <main style={{ marginBottom: '2rem' }}>
        <Typography variant="h5" style={{ marginBottom: '1rem' }}>
          <strong>Marvel Series</strong>
        </Typography>

        <Grid container spacing={2}>
          {seriesData &&
            seriesData.map(({ id, name, title, thumbnail, startYear }) => (
              <Grid key={id} item xs={6} sm={4}>
                <Link href={`/series/${id}`} passHref>
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
  const seriesData = await getSeries(100, '-startYear')

  return {
    props: {
      seriesData: seriesData.data ? seriesData.data.results : null
    },
    revalidate: 60 * 60 * 24 * 5 // 5 days
  }
}

export default SeriesIndex
