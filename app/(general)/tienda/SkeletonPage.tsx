export function SkeletonPage() {
  return (
    <section className="py-8">
      <div className="text-center mb-6">
        <p className="text-xl font-semibold text-gray-800">
          Todas las categorías
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="group block  shadow-md hover:shadow-lg rounded-lg overflow-hidden transition-shadow duration-200 py-4 px-2"
          >
            <div className="relative w-full h-64 bg-gray-200 animate-pulse"></div>
            <div className="p-4">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
