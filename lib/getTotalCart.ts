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

export function GetTotalForProduct({ items }: { items: CartItem[] }) {
  const GetTotalForProduct = items.map((item) => {
    const total = item.quantity * item.product.price
    return {
      name: item.product.name,
      total: new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
      }).format(total || 0),
      quantity: item.quantity,
    }
  })

  return GetTotalForProduct
}

export function GetTotalCartToPay({ items }: { items: CartItem[] }) {
  const total = items.reduce(
    (acc, item) => acc + item.quantity * item.product.price,
    0
  )
  return {
    id: `total-${Date.now()}`,
    title: 'Total',
    description: 'Total a pagar',
    quantity: 1,
    unit_price: total,
  }
}
