import { getProducts } from '@/lib/get-products'
import Link from 'next/link'
import { Suspense } from 'react'
import {
  Product,
  GetProductsResponse,
  CategoryPageProps,
} from '@/types/categories'
import { CardProduct } from '@/components/CardProduct'

const Loading = () => (
  <div className="flex justify-center items-center h-screen">
    <p className="bg-black">Cargando...</p>
  </div>
)

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryId } = params

  const { products }: GetProductsResponse = await getProducts({ categoryId })

  return (
    <Suspense fallback={<Loading />}>
      <section className="h-screen px-4 py-6 bg-[url('/images/hero-pose.jpg')]  bg-center min-h-screen w-full bg-cover bg-fixed">
        <div className="mb-6">
          <Link
            href="/tienda"
            className="text-blue-500 hover:text-blue-700 font-medium"
          >
            Volver
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product: Product, index: number) => {
            const { slug } = product
            return (
              <CardProduct
                href={`/categories/${categoryId}/product/${slug}`}
                key={index}
                name={product.name}
                description={null}
                price={new Intl.NumberFormat('es-CL', {
                  style: 'currency',
                  currency: 'CLP',
                }).format(product.price)}
                image={product.image}
                slug={slug}
                index={index}
              />
            )
          })}
          {/* {new Intl.NumberFormat('es-CL', {
                  style: 'currency',
                  currency: 'CLP',
                }).format(product.price)} */}
        </div>
      </section>
    </Suspense>
  )
}
