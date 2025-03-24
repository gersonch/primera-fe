'use client'
import { useEffect } from 'react'
import { useCart } from '@/hooks/use-cart'
import { updateStockAfterPurchase } from '@/lib/get-product'

export function UpdateStock() {
  const { items } = useCart()

  useEffect(() => {
    const update = () => {
      updateStockAfterPurchase(items)
      localStorage.removeItem('cart-storage')
    }
    update()
  }, [items])
  return (
    <div>
      <h1>Update stock after purchase</h1>
    </div>
  )
}
