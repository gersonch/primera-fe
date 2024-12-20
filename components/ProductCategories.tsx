import Link from 'next/link'
import Image from 'next/image'
import { getCategories } from '@/lib/get-categories'

interface Category {
  slug: string
  name: string
  description: string
  image: string
}

export const ProductCategories = async () => {
  const categories: Category[] = await getCategories()

  if (categories.length === 0) return null
  return (
    <section className="py-8 ">
      <div className="text-center mb-6">
        <p className="text-xl font-semibold text-gray-800">
          Todas las categorías
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
        {categories.map((category, index) => (
          <Link
            href={`/categories/${category.slug}`}
            key={index}
            className="group block bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transition-shadow duration-200 py-4 px-2"
          >
            <div className="relative w-full h-64">
              <Image
                src={category.image}
                alt={category.name}
                layout="fill"
                objectFit="contain"
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600">
                {category.name}
              </h3>
              <small className="text-gray-600">{category.description}</small>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
