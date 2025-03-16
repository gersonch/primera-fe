import Link from 'next/link'
import Image from 'next/image'
import { getCategories } from '@/lib/get-categories'
import { Category } from '@/types/category'
import style from '@/components/navbar/styles.module.css'

export const ProductCategories = async () => {
  const categories: Category[] = await getCategories()

  if (categories.length === 0) return null
  return (
    <section className="mt-20 ">
      <div className="text-center mb-6 ">
        <p className="text-xl font-semibold text-white">Todas las categorías</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 md:px-8 max-w-5xl mx-auto min-h-screen pt-4 pb-8">
        {categories.map((category, index) => (
          <Link href={`/categories/${category.slug}`} key={index} className="">
            <div className="">
              <Image
                src={category.image}
                alt={category.name}
                width={2000}
                height={2000}
                className="aspect-w-9 aspect-h-16 w-[800px] h-[750px] object-cover"
              />
            </div>
            <div className="">
              <h3 className={`${style.links} !text-white`}>{category.name}</h3>
              <small className={`${style.links} !text-white`}>
                {category.description}
              </small>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
