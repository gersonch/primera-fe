import { query } from './strapi'

const { STRAPI_HOST } = process.env

export function getAboutInfo() {
  return query('about?populate=img').then((res) => {
    const { title, description, img } = res.data

    const image = `${STRAPI_HOST}${img.url}`

    return { title, description, image }
  })
}
