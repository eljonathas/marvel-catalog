import { FC } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Head from 'next/head'

import { Container, Typography, Grid } from '@material-ui/core'

import { getCharacters } from '@services/api'

import { ItemSmCard } from '@components/ui/ItemSmCard'
import { ErrorPage } from '@components/core/ErrorPage'

import { DataTypes } from '@interfaces/DataTypes'

const CharactersIndex: FC<{ charactersData: DataTypes[] }> = ({
  charactersData
}) => {
  if (!charactersData) {
    return <ErrorPage message="Thanos blip characters page" />
  }

  return (
    <Container maxWidth="md">
      <Head>
        <title>All Characters - Marvel Catalog</title>
      </Head>

      <main style={{ marginBottom: '2rem' }}>
        <Typography variant="h5" style={{ marginBottom: '1rem' }}>
          <strong>Marvel Characters</strong>
        </Typography>

        <Grid container spacing={2}>
          {charactersData &&
            charactersData.map(({ id, name, title, thumbnail, startYear }) => (
              <Grid key={id} item xs={6} sm={4}>
                <Link href={`/characters/${id}`}>
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
  const charactersData = await getCharacters(100, '-modified')

  return {
    props: {
      charactersData: charactersData.data ? charactersData.data.results : null
    },
    revalidate: 60 * 60 * 24
  }
}

export default CharactersIndex
