import { FC } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Head from 'next/head'

import { Container, Typography, Grid } from '@material-ui/core'

import { getEvents } from '@services/api'

import { ItemSmCard } from '@components/ui/ItemSmCard'

import { DataTypes } from '@interfaces/DataTypes'
import { ErrorPage } from '@components/core/ErrorPage'

const EventsIndex: FC<{ eventsData: DataTypes[] }> = ({ eventsData }) => {
  if (!eventsData) {
    return <ErrorPage message="Thanos blip events data" />
  }

  return (
    <Container maxWidth="md">
      <Head>
        <title>All Events - Marvel Catalog</title>
      </Head>

      <main style={{ marginBottom: '2rem' }}>
        <Typography variant="h5" style={{ marginBottom: '1rem' }}>
          <strong>Marvel Events</strong>
        </Typography>

        <Grid container spacing={2}>
          {eventsData &&
            eventsData.map(({ id, name, title, thumbnail, startYear }) => (
              <Grid key={id} item xs={6} sm={4}>
                <Link href={`/events/${id}`} passHref>
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
  const eventsData = await getEvents(100, '-startDate')

  return {
    props: {
      eventsData: eventsData.data ? eventsData.data.results : null
    },
    revalidate: 60 * 60 * 24
  }
}

export default EventsIndex
