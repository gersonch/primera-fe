/* eslint-disable @typescript-eslint/no-unused-vars */
import style from '@/components/navbar/styles.module.css'
import Link from 'next/link'
import Image from 'next/image'

interface CardProductProps {
  slug: string
  image: string
  name: string
  description: string | null
  price: string | null
  index: number
  href: string
}

export function CardProduct({
  slug,
  image,
  name,
  description = null,
  price = null,
  index,
  href,
}: CardProductProps) {
  return (
    <Link href={href} key={index} className="text-black">
      <div className="">
        <Image
          src={image}
          alt={name}
          width={2000}
          height={2000}
          className="aspect-w-9 aspect-h-16 w-[800px] h-[70vh] object-cover saturate-[.7] hover:saturate-[1.2] hover:shadow-2xl transition-transform duration-500"
        />
      </div>
      <div className="">
        <h3 className={`${style.links} !text-white`}>{name}</h3>
        <small className={`${style.links} !text-white`}>{description}</small>
        <span className={`${style.links} !text-white`}>{price}</span>
      </div>
    </Link>
  )
}
