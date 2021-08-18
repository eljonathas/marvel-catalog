import axios from 'axios'

import { generateHashMd5 } from '@utils/generateHash'

export const getHash = () => {
  const time = Date.now()
  const publicKey = process.env.MARVEL_PUBLIC_KEY || ''
  const privateKey = process.env.MARVEL_PRIVATE_KEY || ''

  const hash = generateHashMd5(time + privateKey + publicKey)

  return { time, hash, publicKey }
}

export const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public'
})

export const getSeries = async (limit: number = 10, orderBy: string) => {
  try {
    const { time, hash, publicKey } = getHash()
    const { data } = await api.get(
      `/series?orderBy=${orderBy}&ts=${time}&limit=${limit}&apikey=${publicKey}&hash=${hash}`
    )

    return data
  } catch (error) {
    return []
  }
}

export const getComics = async (limit: number = 10, orderBy: string) => {
  try {
    const { time, hash, publicKey } = getHash()
    const { data } = await api.get(
      `/comics?orderBy=${orderBy}&ts=${time}&limit=${limit}&apikey=${publicKey}&hash=${hash}`
    )

    return data
  } catch (error) {
    return []
  }
}

export const getStories = async (limit: number = 10, orderBy: string) => {
  try {
    const { time, hash, publicKey } = getHash()
    const { data } = await api.get(
      `/stories?orderBy=${orderBy}&ts=${time}&limit=${limit}&apikey=${publicKey}&hash=${hash}`
    )

    return data
  } catch (error) {
    return []
  }
}

export const getEvents = async (limit: number = 10, orderBy: string) => {
  try {
    const { time, hash, publicKey } = getHash()
    const { data } = await api.get(
      `/events?orderBy=${orderBy}&ts=${time}&limit=${limit}&apikey=${publicKey}&hash=${hash}`
    )

    return data
  } catch (error) {
    return []
  }
}

export const getCharacters = async (limit: number = 10, orderBy: string) => {
  try {
    const { time, hash, publicKey } = getHash()
    const { data } = await api.get(
      `/characters?orderBy=${orderBy}&ts=${time}&limit=${limit}&apikey=${publicKey}&hash=${hash}`
    )

    return data
  } catch (error) {
    return []
  }
}

export const getDataById = async (id: string, type: string) => {
  const { time, hash, publicKey } = getHash()

  try {
    const { data } = await api.get(
      `/${type}/${id}?ts=${time}&apikey=${publicKey}&hash=${hash}`
    )

    const dataCharacters =
      type !== 'characters'
        ? (
            await api.get(
              `/${type}/${id}/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`
            )
          ).data
        : []

    const dataComics =
      type !== 'comics'
        ? (
            await api.get(
              `/${type}/${id}/comics?ts=${time}&apikey=${publicKey}&hash=${hash}`
            )
          ).data
        : []

    const dataEvents =
      type !== 'events'
        ? (
            await api.get(
              `/${type}/${id}/events?ts=${time}&apikey=${publicKey}&hash=${hash}`
            )
          ).data
        : []

    const dataStories =
      type !== 'stories'
        ? (
            await api.get(
              `/${type}/${id}/stories?ts=${time}&apikey=${publicKey}&hash=${hash}`
            )
          ).data
        : []

    const dataSeries =
      type !== 'series' && type !== 'comics'
        ? (
            await api.get(
              `/${type}/${id}/series?ts=${time}&apikey=${publicKey}&hash=${hash}`
            )
          ).data
        : []

    return {
      result: data.data.results[0] || [],
      characters: dataCharacters,
      comics: dataComics,
      events: dataEvents,
      stories: dataStories,
      series: dataSeries
    }
  } catch (error) {
    return []
  }
}
