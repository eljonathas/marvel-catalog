import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

import { Container, Typography } from '@material-ui/core'
import { getDataById, getStories } from '@services/api'
import { DataTypes } from '@interfaces/DataTypes'

import { ProfileBox } from '@components/ui/ProfileBox'
import { ItemsList } from '@components/ui/ItemsList'

import Page404 from '../404'

const StoryPage = ({ data }: any) => {
  if (!data) {
    return <Page404 />
  }

  return (
    <Container maxWidth="md">
      <Head>
        <title>{data.result.title} - Marvel Catalog</title>
      </Head>

      <ProfileBox
        thumbnail={data.result.thumbnail}
        name={data.result.name ? data.result.name : data.result.title}
      >
        <Typography variant="h4" component="h1">
          <strong>{data.result.title}</strong>
        </Typography>

        <Typography
          variant="subtitle1"
          component="p"
          color="textSecondary"
          gutterBottom
        >
          {data.result.creators.available
            ? data.result.creators.items.map((creator: any, index: number) => (
                <span key={index}>
                  {creator.name}
                  {index < data.result.creators.items.length - 1 ? ', ' : ''}
                </span>
              ))
            : 'No Creators'}
        </Typography>

        <Typography
          variant="subtitle1"
          component="p"
          style={{ marginBottom: '3rem' }}
        >
          {data.result.description || 'No description available for this story'}
        </Typography>
      </ProfileBox>

      {data.result.characters.available ? (
        <section style={{ marginBottom: '2rem' }}>
          <Typography variant="h5" gutterBottom>
            <strong>Related Characters</strong>
          </Typography>

          <ItemsList
            cardsQuantity={[
              data.result.characters.available < 3
                ? data.result.characters.available < 2
                  ? 1
                  : 2
                : 3,
              1
            ]}
            items={data.characters.data.results}
            path="characters"
          />
        </section>
      ) : (
        ''
      )}

      {data.result.comics.available ? (
        <section style={{ marginBottom: '2rem' }}>
          <Typography variant="h5" gutterBottom>
            <strong>Related Comics</strong>
          </Typography>

          <ItemsList
            cardsQuantity={[
              data.result.comics.available < 3
                ? data.result.comics.available < 2
                  ? 1
                  : 2
                : 3,
              1
            ]}
            items={data.comics.data.results}
            path="comics"
          />
        </section>
      ) : (
        ''
      )}

      {data.result.events.available ? (
        <section style={{ marginBottom: '2rem' }}>
          <Typography variant="h5" gutterBottom>
            <strong>Related Events</strong>
          </Typography>

          <ItemsList
            cardsQuantity={[
              data.result.events.available < 3
                ? data.result.events.available < 2
                  ? 1
                  : 2
                : 3,
              1
            ]}
            items={data.events.data.results}
            path="events"
          />
        </section>
      ) : (
        ''
      )}

      {data.result.series.available ? (
        <section style={{ marginBottom: '2rem' }}>
          <Typography variant="h5" gutterBottom>
            <strong>Related Series</strong>
          </Typography>

          <ItemsList
            cardsQuantity={[
              data.result.series.available < 3
                ? data.result.series.available < 2
                  ? 1
                  : 2
                : 3,
              1
            ]}
            withStartYear
            items={data.series.data.results}
            path="series"
          />
        </section>
      ) : (
        ''
      )}
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await getStories(5, '-id')

  const paths = data
    ? data.results.map((item: DataTypes) => ({
        params: {
          id: String(item.id)
        }
      }))
    : [{ params: { id: '0' } }]

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ctx => {
  const { id } = ctx.params as { id: string }

  const data = await getDataById(id, 'stories')

  return {
    props: {
      data
    },
    revalidate: 60 * 60 * 24 * 3
  }
}

export default StoryPage
