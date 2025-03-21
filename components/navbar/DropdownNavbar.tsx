'use client'
import Link from 'next/link'
import ActiveLink from '../active-link/ActiveLink'
import styles from './styles.module.css'
import { RiShoppingCart2Fill } from 'react-icons/ri'
import { RiShoppingCart2Line } from 'react-icons/ri'
import { useCart } from '@/hooks/use-cart'

export interface NavItems {
  path: string
  text: string
}

interface DropdownNavbarProps {
  navItems: NavItems[]
  isDeploy: boolean
}

const DropdownNavbar: React.FC<DropdownNavbarProps> = ({
  navItems,
  isDeploy,
}) => {
  const { items } = useCart()

  return (
    <div
      className={`md:flex flex-col md:flex-row text-sm ${
        isDeploy
          ? 'absolute flex flex-col opacity-100 top-14 bg-slate-500 lg:bg-white h-screen w-screen px-16 py-4 items-center z-50 slide-in-from-left-0'
          : 'opacity-0 md:opacity-100 pointer-events-none absolute md:static'
      } md:pointer-events-auto gap-6 md:flex-grow md:basis-0 ${styles.links} transition`}
    >
      {navItems.slice(0, 2).map((navItem, index) => (
        <ActiveLink key={index} {...navItem} />
      ))}
      {isDeploy &&
        navItems.slice(3).map((navItem, index) =>
          navItem.path === '/cart' ? (
            <Link key={index} href={navItem.path}>
              <div className="flex items-center text-center mr-4">
                {items.length > 0 ? (
                  <RiShoppingCart2Fill className="text-xl mr-2 flex items-center" />
                ) : (
                  <RiShoppingCart2Line className="text-xl mr-2 flex items-center" />
                )}
                <div className="flex items-center text-center">
                  {navItem.text}
                </div>
              </div>
            </Link>
          ) : (
            <ActiveLink key={index} {...navItem} />
          )
        )}
    </div>
  )
}

export default DropdownNavbar
