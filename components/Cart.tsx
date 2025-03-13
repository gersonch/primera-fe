'use client'

import { useCart } from '@/hooks/use-cart'
import Image from 'next/image'
import Link from 'next/link'

export default function Carrito() {
  const { items, addQuantity, substractQuantity, removeAll } = useCart()

  return (
    <section className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>

      {items.length === 0 ? (
        <p className="text-gray-600">Tu carrito está vacío.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item, index) => {
            if (!item || !item.product) {
              console.error(`Item inválido en la posición ${index}:`, item)
              return null // Evita que el código siga ejecutándose
            }

            const { product, quantity } = item

            return (
              <div
                key={product.id}
                className="flex items-center border p-4 rounded-lg shadow"
              >
                <Image
                  src={product.imagesUrl || '/placeholder.png'} // Imagen por defecto si falta
                  alt={product.name || 'Producto sin nombre'}
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <div className="ml-4 flex-1">
                  <h2 className="font-semibold">
                    {product.name || 'Sin nombre'}
                  </h2>
                  <p className="text-gray-600">
                    {new Intl.NumberFormat('es-CL', {
                      style: 'currency',
                      currency: 'CLP',
                    }).format(product.price || 0)}
                  </p>
                </div>
                <span>{quantity || 0}</span>
                <div className="flex space-x-2">
                  <button onClick={() => addQuantity(product.id)}>+</button>
                  <button onClick={() => substractQuantity(product.id)}>
                    -
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}

      <div className="mt-6">
        <Link
          href="/tienda"
          className="text-blue-500 hover:text-blue-700 font-medium"
        >
          Seguir comprando
        </Link>
        {items.length > 0 && (
          <button onClick={() => removeAll()}>Borrar Carrito</button>
        )}
      </div>
    </section>
  )
}
