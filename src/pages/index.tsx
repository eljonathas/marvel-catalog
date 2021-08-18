import { GetStaticProps } from 'next'

import { Container, Typography } from '@material-ui/core'

import { Carousel } from '@components/ui/Carousel'
import { ItemsList } from '@components/ui/ItemsList'

import {
  getCharacters,
  getComics,
  getSeries,
  getEvents,
  getStories
} from '@services/api'

import styles from '@styles/pages/Index.module.scss'
import { ErrorPage } from '@components/core/ErrorPage'

const IndexPage = ({ comics, series, stories, characters, events }: any) => {
  if (!comics || !series || !stories || !characters || !events) {
    return <ErrorPage message="Thanos blip the page content" />
  }

  return (
    <Container maxWidth="md">
      <main>
        <section className={styles.mainSection}>
          <Typography variant="h5">
            <strong>Highlights</strong>
          </Typography>

          <Carousel items={comics.data.results} />
        </section>

        <section className={styles.mainSection}>
          <Typography variant="h5">
            <strong>Characters</strong>
          </Typography>

          <ItemsList
            items={characters.data.results}
            cardsQuantity={[4, 2]}
            path="characters"
          />
        </section>

        <section className={styles.mainSection}>
          <Typography variant="h5">
            <strong>Series</strong>
          </Typography>

          <ItemsList
            cardsQuantity={[3, 1]}
            withStartYear
            items={series.data.results}
            path="series"
          />
        </section>

        <section className={styles.mainSection}>
          <Typography variant="h5">
            <strong>Comics</strong>
          </Typography>

          <ItemsList
            cardsQuantity={[3, 1]}
            items={comics.data.results}
            path="comics"
          />
        </section>

        <section className={styles.mainSection}>
          <Typography variant="h5">
            <strong>Stories</strong>
          </Typography>

          <ItemsList
            cardsQuantity={[3, 1]}
            items={stories.data.results}
            path="stories"
          />
        </section>

        <section className={styles.mainSection}>
          <Typography variant="h5">
            <strong>Events</strong>
          </Typography>

          <ItemsList
            cardsQuantity={[4, 1]}
            items={events.data.results}
            path="events"
          />
        </section>
      </main>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const comics = await getComics(10, '-focDate')
  const series = await getSeries(10, '-startYear')
  const stories = await getStories(10, '-id')
  const events = await getEvents(10, '-startDate')
  const characters = await getCharacters(15, '-modified')

  return {
    props: {
      comics: comics.data ? comics : null,
      series: series.data ? series : null,
      stories: stories.data ? stories : null,
      characters: characters.data ? characters : null,
      events: events.data ? events : null
    },
    revalidate: 60 * 60 * 12 // 12 hours
  }
}

export default IndexPage
