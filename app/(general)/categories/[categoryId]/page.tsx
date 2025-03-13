import { getProducts } from '@/lib/get-products'
import Link from 'next/link'
import Image from 'next/image'
import { Suspense } from 'react'
import {
  Product,
  GetProductsResponse,
  CategoryPageProps,
} from '@/types/categories'

const Loading = () => (
  <div className="flex justify-center items-center h-screen">
    <p className="bg-black">Cargando...</p>
  </div>
)

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryId } = params

  const { products }: GetProductsResponse = await getProducts({ categoryId })
  console.log({ products })

  return (
    <Suspense fallback={<Loading />}>
      <section className="max-w-6xl mx-auto px-4 py-6">
        <div className="mb-6">
          <Link
            href="/tienda"
            className="text-blue-500 hover:text-blue-700 font-medium"
          >
            Volver
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product: Product, index: number) => (
            <Link
              href={`/categories/${categoryId}/product/${product.slug}`}
              key={index}
              className="border rounded-lg shadow-lg p-4 flex flex-col items-center"
            >
              <h1 className="text-lg font-semibold mb-2">{product.name}</h1>
              <Image
                src={product.image}
                alt={product.name}
                height={200}
                width={200}
                className="rounded-lg"
              />
              <span className="mt-4 text-green-600 font-bold text-xl">
                {new Intl.NumberFormat('es-CL', {
                  style: 'currency',
                  currency: 'CLP',
                }).format(product.price)}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </Suspense>
  )
}
