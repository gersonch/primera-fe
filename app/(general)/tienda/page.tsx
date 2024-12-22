import { Suspense } from 'react'
import { ProductCategories } from '@/components/ProductCategories'

const Loading = () => (
  <div className="flex justify-center items-center h-screen">
    <p className="bg-black">Cargando...</p>
  </div>
)

export default function Tienda({ categories }) {
  return (
    <>
      <h1>La tienda</h1>
      <Suspense fallback={<Loading />}>
        <ProductCategories categories={categories} />
      </Suspense>
    </>
  )
}
