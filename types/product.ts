import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer'

export type ProductType = {
  id: number
  name: string
  description: RootNode[]
  price: number
  imagesUrl: string
  stock: number
  isActive: boolean
}
