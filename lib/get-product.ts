import { query } from './strapi'

const { STRAPI_HOST } = process.env

export function getProduct({ slug }: { slug: string }) {
  return query(`products?filters[slug][$eq]=${slug}&populate=images`).then(
    (res) => {
      const product = res.data[0]
      if (!product) {
        console.error(`No se encontró un producto con slug: ${slug}`)
        return null // Retornar `null` si no hay producto
      }
      const {
        id,
        name,
        description,
        price,
        images,
        productCategory,
        stock,
        isActive,
      } = product
      if (!images || images.length === 0) {
        console.error(`El producto ${name} no tiene imágenes`)
        return null // Evita el error si no hay imágenes
      }

      const imagesUrl = `${STRAPI_HOST}${images[0].url}`
      console.log(id)
      return {
        id,
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
