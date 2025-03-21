import { useCart } from '@/hooks/use-cart'
import Link from 'next/link'
import styles from '@/components/navbar/styles.module.css'
import { RiShoppingCart2Fill } from 'react-icons/ri'
import { RiShoppingCart2Line } from 'react-icons/ri'

interface DropdownNavbarProps {
  onLinkClick: () => void
}

export default function DropdownNavbar({ onLinkClick }: DropdownNavbarProps) {
  const { items } = useCart()

  return (
    <div
      className={`absolute  bg-[#1a1b23] h-screen w-full top-0 flex flex-col items-center justify-center gap-4`}
    >
      <div className={`flex flex-col gap-4 ${styles.links} `}>
        <Link
          href="/sobre-nosotros"
          onClick={onLinkClick}
          className="!text-white"
        >
          NOSOTROS
        </Link>
        <Link href="/contactanos" onClick={onLinkClick} className="!text-white">
          CONTACTANOS
        </Link>
        <Link href="/tienda" onClick={onLinkClick} className="!text-white">
          TIENDA
        </Link>
        <Link
          href="/cart"
          onClick={onLinkClick}
          className="flex gap-x-2 z-50 !text-white"
        >
          CARRITO
          {items.length > 0 ? (
            <RiShoppingCart2Fill className="text-xl " />
          ) : (
            <RiShoppingCart2Line className="text-xl " />
          )}
        </Link>
      </div>
    </div>
  )
}
