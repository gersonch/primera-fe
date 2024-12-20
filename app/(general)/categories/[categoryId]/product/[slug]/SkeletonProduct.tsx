export function SkeletonProduct() {
  return (
    <div className="flex flex-col md:flex-row items-center rounded-lg p-6 animate-pulse">
      <div className="relative w-full h-64 md:w-1/2 md:h-96 rounded-lg overflow-hidden bg-gray-300">
        {/* Placeholder for image */}
      </div>
      <div className="md:ml-6 mt-4 md:mt-0 w-full md:w-1/2">
        <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
        <div className="h-6 bg-gray-300 rounded w-1/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
        <div className="h-10 bg-blue-300 rounded w-1/2 mt-6"></div>
      </div>
    </div>
  )
}
