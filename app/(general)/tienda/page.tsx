import { Suspense } from 'react'
import { ProductCategories } from '@/components/ProductCategories'
import { SkeletonPage } from './SkeletonPage'

export default function Tienda({ categories }) {
  return (
    <>
      <h1>La tienda</h1>
      <Suspense fallback={<SkeletonPage />}>
        <ProductCategories categories={categories} />
      </Suspense>
    </>
  )
}
