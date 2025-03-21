import { CartItem } from '@/types/cartItem'

export function GetTotalCart({ items }: { items: CartItem[] }) {
  const total = items.reduce(
    (acc, item) => acc + item.quantity * item.product.price,
    0
  )

  const totalCLP = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
  }).format(total || 0)
  return totalCLP
}
