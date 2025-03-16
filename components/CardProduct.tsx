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
}

export function CardProduct({
  slug,
  image,
  name,
  description = null,
  price = null,
  index,
}: CardProductProps) {
  return (
    <Link href={`/categories/${slug}`} key={index} className="">
      <div className="">
        <Image
          src={image}
          alt={name}
          width={2000}
          height={2000}
          className="aspect-w-9 aspect-h-16 w-[800px] h-[750px] object-cover"
        />
      </div>
      <div className="">
        <h3 className={`${style.links} !text-white`}>{name}</h3>
        <small className={`${style.links} !text-white`}>{description}</small>
        <span className={`${style.links}`}>{price}</span>
      </div>
    </Link>
  )
}
