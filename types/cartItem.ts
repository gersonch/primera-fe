import { ProductType } from '@/types/product'

export interface CartItem {
  product: ProductType
  quantity: number
}
