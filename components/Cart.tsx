'use client'

import { useCart } from '@/hooks/use-cart'
import Image from 'next/image'
import Link from 'next/link'
import style from '@/components/navbar/styles.module.css'

export default function Carrito() {
  const { items, addQuantity, substractQuantity, removeAll, removeItem } =
    useCart()

  return (
    <section className={`px-4 pt-20 pb-8 !text-black ${style.links}`}>
      <h1 className="font-bold mb-4">
        Carrito de Compras {'('}
        {items.length}
        {')'}
      </h1>

      {items.length === 0 ? (
        <p className="text-gray-600">Tu carrito está vacío.</p>
      ) : (
        <section className="flex flex-col lg:flex-row justify-between gap-4 mr-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6  justify-center w-3/4 ">
            {items.map((item, index) => {
              if (!item || !item.product) {
                console.error(`Item inválido en la posición ${index}:`, item)
                return null
              }

              const { product, quantity } = item

              return (
                <section
                  key={product.id}
                  className="col-span-1 text-sm text-gray-600"
                >
                  <div id="card" className="flex lg:flex-col gap-4 mx-4">
                    <Image
                      src={product.imagesUrl || '/placeholder.png'}
                      alt={product.name || 'Producto sin nombre'}
                      width={1000}
                      height={1000}
                      className="aspect-w-9 aspect-h-16 w-[500px] h-[650px] object-cover"
                    />
                    <div className="flex flex-col items-start gap-4">
                      <div>
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

                      <div className="flex  gap-2 justify-start ">
                        <span>Cantidad:</span>
                        <button onClick={() => addQuantity(product.id)}>
                          +
                        </button>
                        <span>{quantity}</span>
                        <button onClick={() => substractQuantity(product.id)}>
                          -
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(product.id)}
                        className="underline underline-offset-4"
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                </section>
              )
            })}
          </div>

          <div className="bg-black h-screen lg:w-1/4 w-full"></div>
        </section>
      )}
      <div className="mt-6">
        <Link
          href="/tienda"
          className="font-medium underline underline-offset-4"
        >
          Seguir comprando
        </Link>
        {items.length > 0 && (
          <button
            onClick={() => removeAll()}
            className="mx-4 hover:underline underline-offset-4 transition"
          >
            Borrar Carrito
          </button>
        )}
      </div>
    </section>
  )
}
