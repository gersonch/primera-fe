import { Suspense } from 'react'
import { ProductCategories } from '@/app/(general)/tienda/ProductCategories'
import { SkeletonPage } from './SkeletonPage'
import style from '@/components/navbar/styles.module.css'

export default function Tienda() {
  return (
    <>
      <section className="bg-[url('/images/hero-pose.jpg')]  bg-center min-h-screen w-full bg-cover bg-fixed">
        <h1
          className={`z-50 text-6xl flex justify-center items-center h-screen !text-white ${style.h1}`}
        >
          Nuestra Tienda
        </h1>

        <Suspense fallback={<SkeletonPage />}>
          <ProductCategories />
        </Suspense>
      </section>
    </>
  )
}
