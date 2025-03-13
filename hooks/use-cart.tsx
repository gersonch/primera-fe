// src/hooks/useCart.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ProductType } from '@/types/product'

interface CartStore {
  items: { product: ProductType; quantity: number }[]
  addItem: (product: ProductType) => void
  addQuantity: (id: number) => void
  substractQuantity: (id: number) => void
  removeItem: (id: number) => void
  removeAll: () => void
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (product) => {
        const items = get().items
        const existingItemIndex = items.findIndex(
          (item) => item.product.id === product.id
        )

        if (existingItemIndex >= 0) {
          // Si el producto ya existe, incrementar la cantidad
          alert('Producto ya existe en el carrito')
          return
        } else {
          // Si el producto no existe, agregarlo
          set({ items: [...items, { product, quantity: 1 }] })
        }
      },
      addQuantity: (id) => {
        const items = get().items
        const existingItemIndex = items.findIndex(
          (item) => item.product.id === id
        )

        if (existingItemIndex >= 0) {
          const existingItem = items[existingItemIndex]
          if (existingItem.quantity >= 8) {
            alert('No puedes agregar más de 8 productos')
            return
          }

          const updatedItem = {
            ...existingItem,
            quantity: existingItem.quantity + 1,
          }
          const updatedItems = [...items]
          updatedItems[existingItemIndex] = updatedItem
          set({ items: updatedItems })
        }
      },

      substractQuantity: (id) => {
        const items = get().items
        const existingItemIndex = items.findIndex(
          (item) => item.product.id === id
        )

        if (existingItemIndex >= 0) {
          const existingItem = items[existingItemIndex]
          if (existingItem.quantity <= 0) {
            return
          }

          const updatedItem = {
            ...existingItem,
            quantity: existingItem.quantity - 1,
          }
          const updatedItems = [...items]
          updatedItems[existingItemIndex] = updatedItem
          set({ items: updatedItems })
        }
      },

      removeItem: (id) => {
        const items = get().items
        set({ items: items.filter((item) => item.product.id !== id) })
      },

      removeAll: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage', // El nombre para persistir en localStorage
    }
  )
)
