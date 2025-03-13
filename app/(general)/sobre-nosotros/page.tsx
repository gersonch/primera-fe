import { getAboutInfo } from '@/lib/get-about'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import Image from 'next/image'
import style from './about.module.css'

import { Suspense } from 'react'
import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer'

const Loading = () => (
  <div className="flex justify-center items-center h-screen">
    <p className="bg-black">Cargando...</p>
  </div>
)

interface AboutProps {
  title: string
  description: RootNode[]
  image: string
}

// Componente que muestra la información de "Sobre Nosotros"
const About = ({ title, description, image }: AboutProps) => {
  return (
    <section className="flex flex-col-reverse sm:flex-row justify-between sm:h-screen overflow-hidden">
      <div
        className={`${style.text} w-screen px-8 flex flex-col justify-end h-screen`}
      >
        <h2 className={`mb-8 ${style.links} font-semibold`}>{title}</h2>
        <div className={`${style.links} max-w-sm my-4 text-sm `}>
          <BlocksRenderer content={description} />
        </div>
      </div>
      <div className="flex   sm:w-full ">
        <Image
          src={image}
          alt="Quienes Somos"
          width={2000}
          height={2000}
          className={`object-cover ${style.img}`}
          loading="lazy"
        />
      </div>
    </section>
  )
}

// Componente principal de la página, resuelve los datos antes de pasarlos al componente About
const AboutPage = async () => {
  // Resuelve la promesa aquí
  const { title, description, image } = await getAboutInfo()

  return (
    <Suspense fallback={<Loading />}>
      {/* Pasa los datos resueltos al componente About */}
      <About title={title} description={description} image={image} />
    </Suspense>
  )
}

export default AboutPage
