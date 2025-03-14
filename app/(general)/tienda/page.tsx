import { Suspense } from 'react'
import { ProductCategories } from '@/components/ProductCategories'
import { SkeletonPage } from './SkeletonPage'
import Image from 'next/image'
import style from '@/components/navbar/styles.module.css'

export default function Tienda({ categories }) {
  return (
    <>
      <h1
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  md:text-6xl text-3xl font-bold z-10 !text-white flex flex-nowrap ${style.h1}`}
      >
        Nuestra Tienda
      </h1>
      <section className="">
        <Image
          src={'/images/hero-pose.jpg'}
          alt="hola"
          className="h-screen w-full object-cover"
          width={2000}
          height={2000}
        ></Image>
      </section>

      {/*page muestra las categorias*/}
      <Suspense fallback={<SkeletonPage />}>
        <ProductCategories categories={categories} />
      </Suspense>
    </>
  )
}
