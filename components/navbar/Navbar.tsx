'use client'
import Link from 'next/link'
import ActiveLink from '../active-link/ActiveLink'
import styles from './styles.module.css'
import { IoMenu, IoClose } from 'react-icons/io5'
import { useState, useEffect } from 'react'
import { useCart } from '@/hooks/use-cart'
import { RiShoppingCart2Fill } from 'react-icons/ri'
import { RiShoppingCart2Line } from 'react-icons/ri'
import DropdownNavbar from './DropdownNavbar'

export interface NavItems {
  path: string
  text: string
}

export const Navbar: React.FC = () => {
  const { items } = useCart()
  console.log(items)
  const [isDeploy, setIsDeploy] = useState(false)

  const navItems: NavItems[] = [
    { path: '/sobre-nosotros', text: 'Nosotros' },
    { path: '/contactanos', text: 'Contáctanos' },
    { path: '/', text: 'Primera Fe' },
    { path: '/tienda', text: 'Tienda' },
    { path: '/cart', text: 'Carrito' },
  ]
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsDeploy(false)
      }
    }

    window.addEventListener('resize', handleResize)

    // Llama a handleResize una vez para establecer el estado inicial
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleLinkClik = () => {
    setIsDeploy(false)
  }

  return (
    <header
      className={`flex justify-between w-full py-2 md:py-0 z-50 absolute bg-white `}
    >
      <div
        className={`${isDeploy ? 'opacity-100 pointer-events-auto ' : 'opacity-0 pointer-events-none '} transition-all z-0`}
      >
        <DropdownNavbar onLinkClick={handleLinkClik} />
      </div>
      {/* links izquierda */}
      <div
        className={`flex-grow basis-0 ${styles.links} hidden md:flex items-center pointer-events-none md:pointer-events-auto`}
      >
        {navItems.slice(0, 2).map((navItem, index) => (
          <ActiveLink key={index} {...navItem} />
        ))}
      </div>

      {/* menu hamburguesa */}
      <div className="absolute top-4 left-2">
        <button className="">
          {isDeploy ? (
            <IoClose
              className="text-2xl md:hidden text-white 
              "
              onClick={() => setIsDeploy(false)}
            />
          ) : (
            <IoMenu
              className="text-2xl md:hidden"
              onClick={() => setIsDeploy(true)}
            />
          )}
        </button>
      </div>

      {/* title */}
      {navItems
        .filter((navItem) => navItem.path === '/')
        .map((navItem, index) => (
          <h1
            key={index}
            className={`flex text-center justify-center text-4xl font-bold w-full lg:w-auto ${styles.h1} `}
          >
            <Link
              href={navItem.path}
              className={`flex items-center justify-center z-10 ${isDeploy && '!text-white'}`}
            >
              {navItem.text}
            </Link>
          </h1>
        ))}

      {/* links derecha */}
      <div
        className={`flex-grow basis-0 ${styles.links}  justify-end hidden md:flex items-center`}
      >
        {navItems
          .filter((navItem) => navItem.path === '/tienda')
          .map((navItem, index) => (
            <ActiveLink key={index} {...navItem} />
          ))}

        {navItems
          .filter((navItem) => navItem.path === '/cart')
          .map((navItem, index) => (
            <div key={index} className={`flex items-center `}>
              {items.length > 0 ? (
                <RiShoppingCart2Fill className="text-xl" />
              ) : (
                <RiShoppingCart2Line className="text-xl" />
              )}
              <ActiveLink {...navItem} />
            </div>
          ))}
      </div>
    </header>
  )
}
