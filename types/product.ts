import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer'

export type ProductType = {
  name: string
  description: RootNode[]
  imagesUrl: string
  isActive: boolean
  price: number
  stock: number
}
