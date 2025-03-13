// app/category/[slug]/page.tsx
import { getProduct } from '@/lib/get-product'
import ProductContent from './ProductContent'
import { Suspense } from 'react'
import { SkeletonProduct } from './SkeletonProduct'

export default async function CategoryPage({
  params,
}: {
  params: { slug: string; categoryId: string }
}) {
  const { slug, categoryId } = await params
  const product = await getProduct({ slug })

  if (!product) return <div>¡Producto no encontrado!</div>

  return (
    <section className="max-w-4xl mx-auto px-4 py-6">
      <Suspense fallback={<SkeletonProduct />}>
        <ProductContent product={product} categoryId={categoryId} />
      </Suspense>
    </section>
  )
}
