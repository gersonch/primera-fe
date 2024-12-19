import { getProduct } from '@/lib/get-product'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import Image from 'next/image'
import Link from 'next/link'

export default async function CategoryPage({
  params,
}: {
  params: { slug: string; categoryId: string }
}) {
  const { slug, categoryId } = params
  const product = await getProduct({ slug })

  if (!product) return <div>¡Producto no encontrado!</div>

  return (
    <section className="max-w-4xl mx-auto px-4 py-6">
      <div className="mb-6">
        <Link
          href={`/categories/${categoryId}`}
          className="text-blue-500 hover:text-blue-700 font-medium"
        >
          Volver
        </Link>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="relative w-full h-64 md:w-1/2 md:h-96">
          <Image
            src={product.imagesUrl}
            alt={product.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="md:ml-6 mt-4 md:mt-0">
          <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
          <div className="text-gray-700 mt-2">
            <BlocksRenderer content={product.description} />
          </div>
          <p className="text-xl font-semibold text-gray-900 mt-4">
            {new Intl.NumberFormat('es-CL', {
              style: 'currency',
              currency: 'CLP',
            }).format(product.price)}
          </p>
          <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
            Añadir al carrito
          </button>
        </div>
      </div>
    </section>
  )
}
