import { query } from './strapi'

const { STRAPI_HOST, NEXT_PUBLIC_STRAPI_TOKEN } = process.env

export function getProduct({ slug }: { slug: string }) {
  return query(`products?filters[slug][$eq]=${slug}&populate=images`).then(
    (res) => {
      const product = res.data[0]
      if (!product) {
        console.error(`No se encontró un producto con slug: ${slug}`)
        return null // Retornar `null` si no hay producto
      }
      const {
        documentId,
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
      console.log(id, name, documentId)

      return {
        documentId,
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

export async function updateStockAfterPurchase(items) {
  try {
    // Iterar sobre cada producto comprado y actualizar el stock en Strapi
    await Promise.all(
      items.map(async (item) => {
        const newStock = item.product.stock - item.quantity

        if (newStock < 0) {
          console.warn(
            `Stock insuficiente para el producto: ${item.product.name}`
          )
          return // No actualizar si el stock sería negativo
        }

        const response = await fetch(
          `http://localhost:1337/api/products/${item.product.documentId}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
            },
            body: JSON.stringify({
              data: { stock: newStock },
            }),
          }
        )

        if (!response.ok) {
          throw new Error(
            `Error al actualizar el stock de ${item.product.name}`
          )
        }

        console.log(`Stock actualizado: ${item.product.name} → ${newStock}`)
      })
    )
  } catch (error) {
    console.error('Error en updateStockAfterPurchase:', error)
  }
}
