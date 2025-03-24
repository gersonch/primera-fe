'use client'
import { useTransition } from 'react'
import { vexor } from '@/lib/vexor'
import { VexorPaymentResponse } from 'vexor'
import MercadoPagoIcon from '@/public/icons/MercadoPagoIcon'

interface Product {
  id: string
  title: string
  description: string
  quantity: number
  unit_price: number
}

interface ButtonPayProps {
  product: Product
}

export const ButtonPay: React.FC<ButtonPayProps> = ({ product }) => {
  const [isPending, startTransition] = useTransition()

  const handlePurchase = async () => {
    startTransition(async () => {
      try {
        const response: VexorPaymentResponse = await vexor.pay.mercadopago({
          items: [product],
          options: {
            successRedirect: 'http://localhost:3000/success',
            failureRedirect: 'http://localhost:3000/failure',
          },
        })
        console.log('Purchase response:', response)

        window.location.href = response.payment_url
      } catch (error) {
        console.error('Purchase failed:', error)
        // Handle error (e.g., show an error message to the user)
      }
    })
  }

  return (
    <button
      onClick={handlePurchase}
      className="bg-blue-400 text-background px-4 py-2 rounded w-full"
      disabled={isPending}
    >
      <div className="flex items-center justify-center gap-4">
        <MercadoPagoIcon width={35} height={35} />
        {isPending ? 'Loading...' : ` Pagar con Mercado Pago`}
      </div>
    </button>
  )
}
