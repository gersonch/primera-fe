'use client'
import { useCart } from '@/hooks/use-cart'

export function PopUpCart({ navItem }) {
  const { items } = useCart()
  return (
    <div>
      {navItem.path === '/cart' && (
        <span
          className={`bg-blue-500 text-white rounded-full px-2 py-1 w-8 h-8 text-center absolute -top-4 -right-1 ${items.length > 0 ? 'opacity-80' : 'opacity-0'} transition-all`}
        >
          {items.length}
        </span>
      )}
    </div>
  )
}
