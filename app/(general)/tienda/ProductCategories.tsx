import { getCategories } from '@/lib/get-categories'
import { Category } from '@/types/category'
import { CardProduct } from '../../../components/CardProduct'

export const ProductCategories = async () => {
  const categories: Category[] = await getCategories()
  if (categories.length === 0) return null
  return (
    <section className="mt-20 ">
      <div className="text-center mb-6 ">
        <p className="text-xl font-semibold text-white">Todas las categorías</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 md:px-8 max-w-5xl mx-auto min-h-screen pt-4 pb-8">
        {categories.map((category, index) => {
          const { slug } = category
          return (
            <CardProduct
              name={category.name}
              slug={slug}
              description={category.description}
              index={index}
              image={category.image}
              price={null}
              key={index}
              href={`/categories/${slug}`}
            />
          )
        })}
      </div>
    </section>
  )
}
