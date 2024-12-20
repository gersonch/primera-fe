// app/category/[slug]/page.tsx
import { getProduct } from '@/lib/get-product'
import ProductContent from './ProductContent'

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
      <ProductContent product={product} categoryId={categoryId} />
    </section>
  )
}
