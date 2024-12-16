import { query } from './strapi'

const { STRAPI_HOST } = process.env

export function getCategories() {
  return query(
    'product-categories?fields[0]=name&fields[1]=slug&fields[2]=description&populate[img][fields][0]=url'
  ).then((res) => {
    return res.data.map((category) => {
      const { name, slug, description, img: rawImg } = category
      const image = `${STRAPI_HOST}${rawImg.url}`
      return { name, slug, description, image }
    })
  })
}
