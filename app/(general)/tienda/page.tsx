import { Suspense } from 'react'
import { ProductCategories } from '@/components/ProductCategories'
import { SkeletonPage } from './SkeletonPage'
import Image from 'next/image'
import style from '@/components/navbar/styles.module.css'

export default function Tienda({ categories }) {
  return (
    <>
      <section className="bg-[url('/images/hero-pose.jpg')]  bg-center min-h-screen w-full bg-cover bg-fixed">
        {/* <Image
          src={'/images/hero-pose.jpg'}
          alt="hola"
          className="h-screen w-full object-cover"
          width={2000}
          height={2000}
        ></Image> */}

        {/*page muestra las categorias*/}
        <h1
          className={`z-50 text-6xl flex justify-center items-center h-screen !text-white ${style.h1}`}
        >
          Nuestra Tienda
        </h1>

        <Suspense fallback={<SkeletonPage />}>
          <ProductCategories categories={categories} />
        </Suspense>
      </section>
    </>
  )
}
