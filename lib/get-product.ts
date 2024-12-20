import { query } from './strapi'

const { STRAPI_HOST } = process.env

export function getProduct({ slug }: { slug: string }) {
  return query(`products?filters[slug][$eq]=${slug}&populate=images`).then(
    (res) => {
      const product = res.data[0]
      const {
        name,
        description,
        price,
        images,
        productCategory,
        stock,
        isActive,
      } = product
      const imagesUrl = `${STRAPI_HOST}${images[0].url}`
      return {
        name,
        description,
        price,
        imagesUrl,
        productCategory,
        stock,
        isActive,
      }
    }
  )
}
