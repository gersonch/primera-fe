export interface Product {
  name: string
  image: string
  price: number
  slug: string
}

export interface CategoryPageProps {
  params: { categoryId: string }
}

export interface GetProductsResponse {
  products: Product[]
}
