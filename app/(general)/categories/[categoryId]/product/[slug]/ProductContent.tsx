'use client'
import { Suspense } from 'react'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import Image from 'next/image'
import Link from 'next/link'
import { SkeletonProduct } from './SkeletonProduct'
import { ProductType } from '@/types/product'
import { useCart } from '@/hooks/use-cart'

export default function ProductContent({
  product,
  categoryId,
}: {
  product: ProductType
  categoryId: string
}) {
  const { addItem, items } = useCart()
  console.log(items)

  return (
    <Suspense fallback={<SkeletonProduct />}>
      <div className="mb-6">
        <Link
          href={`/categories/${categoryId}`}
          className="text-blue-500 hover:text-blue-700 font-medium"
        >
          Volver
        </Link>
      </div>
      <div className="flex flex-col md:flex-row items-center rounded-lg p-6">
        <div className="relative w-full h-64 md:w-1/2 md:h-96 rounded-lg overflow-hidden">
          <Image
            src={product.imagesUrl}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <div className="md:ml-6 mt-4 md:mt-0 w-full md:w-1/2">
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
          <div className="text-sm text-gray-600 mt-2">
            stock: {product.stock}
          </div>
          <div
            className={`text-sm mt-2 ${
              product.isActive ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {product.isActive ? 'Disponible' : 'No disponible'}
          </div>
          <button
            className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
            onClick={() => addItem(product)}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </Suspense>
  )
}
