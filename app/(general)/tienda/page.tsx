import { Suspense } from 'react'
import { ProductCategories } from '@/components/ProductCategories'
import { SkeletonPage } from './SkeletonPage'

export default function Tienda({ categories }) {
  return (
    <>
      <h1>La tienda</h1>
      {/*page muestra las categorias*/}
      <Suspense fallback={<SkeletonPage />}>
        <ProductCategories categories={categories} />
      </Suspense>
    </>
  )
}
