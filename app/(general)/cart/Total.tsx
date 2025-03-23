import { GetTotalCart, GetTotalForProduct } from '@/lib/getTotalCart'
import { CartItem } from '@/types/cartItem'

export function Total({ items }: { items: CartItem[] }) {
  const total = GetTotalCart({ items })
  const totalForProduct = GetTotalForProduct({ items })

  return (
    <section className="mx-4 flex flex-col  h-[calc(100vh-10rem)] lg:h-[calc(100vh-10rem)]">
      <div className="flex flex-col gap-4">
        <div className="border-b border-black pb-4 ">Resumen: </div>
      </div>
      <div>
        {totalForProduct.map((product, index) => (
          <div key={index} className="flex justify-between">
            <div>{product.name}</div>
            <div>{product.quantity}</div>
            <div>{product.total}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4 my-4">
        <h3 className="flex justify-between">
          <span>Sub total:</span> <span>{total}</span>
        </h3>
        <h2 className="flex justify-between">
          <span>TOTAL:</span> <span>{total}</span>
        </h2>
      </div>
      <div className="pt-8 flex-grow flex flex-col gap-4"></div>
      <div className="flex justify-center">
        <button className="px-24 py-4 bg-blue-400">Pagar</button>
      </div>
    </section>
  )
}
