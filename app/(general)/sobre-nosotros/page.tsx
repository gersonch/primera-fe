import { getAboutInfo } from '@/lib/get-about'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import Image from 'next/image'
import style from './about.module.css'

const About = async () => {
  const { title, description, image } = await getAboutInfo()

  return (
    <section className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 p-4 my-16">
      {/* Imagen */}
      <div className=" w-full md:w-1/2 aspect-w-16 aspect-h-9 flex justify-center no-bg ">
        <Image
          src={image}
          alt="Quienes Somos"
          width={400}
          height={400}
          className={`object-cover ${style.img}`}
          loading="lazy"
        />
      </div>

      {/* Texto */}
      <div className={`${style.text} w-full md:w-1/2 my-4 p-6`}>
        <h2 className="text-4xl font-bold text-green-900 mb-8 ">{title}</h2>
        <div className={` mt-2`}>
          <BlocksRenderer content={description} />
        </div>
      </div>
    </section>
  )
}

export default About
