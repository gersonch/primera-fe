'use client'
import Link from 'next/link'
import ActiveLink from '../active-link/ActiveLink'
import styles from './styles.module.css'
import { IoMenu, IoClose } from 'react-icons/io5' // Importar el ícono de menú
import { useState, useEffect } from 'react'
import { useCart } from '@/hooks/use-cart'
import { RiShoppingCart2Fill } from 'react-icons/ri'
import { RiShoppingCart2Line } from 'react-icons/ri'

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

  return (
    <header>
      <div className="flex items-center justify-between md:absolute w-full bg-white text-center py-2 md:py-1 relative ">
        {/* Enlaces de la izquierda */}
        <div
          className={`md:flex flex-col md:flex-row text-sm ${isDeploy ? 'absolute flex flex-col opacity-100 top-14 bg-white h-screen px-16 py-4 items-center z-50' : ' hidden opacity-70 pointer-events-none'} md:pointer-events-auto gap-6 md:flex-grow md:basis-0 ${styles.links} transition`}
        >
          {navItems.slice(0, 2).map((navItem, index) => (
            <ActiveLink key={index} {...navItem} />
          ))}
          {isDeploy &&
            navItems.slice(3).map((navItem, index) =>
              // Si el texto es "Carrito", agrega el ícono
              navItem.text === 'Carrito' ? (
                <Link key={index} href={navItem.path}>
                  <div className="flex items-center text-center mr-4">
                    {items.length > 0 ? (
                      <RiShoppingCart2Fill className="text-xl mr-2 flex items-center" />
                    ) : (
                      <RiShoppingCart2Line className="text-xl mr-2 flex items-center" />
                    )}

                    {/* Icono de carrito */}
                    <div className=" flex items-center text-center">
                      {navItem.text}
                    </div>
                  </div>
                </Link>
              ) : (
                <ActiveLink key={index} {...navItem} />
              )
            )}
        </div>
        <div className="md:hidden pl-4">
          <button onClick={() => setIsDeploy(!isDeploy)} className="z-50">
            {isDeploy ? <IoClose /> : <IoMenu />}
          </button>
        </div>

        {/* Título centrado */}
        <h1
          className={`flex text-center justify-center text-4xl font-bold w-full lg:w-auto ${styles.h1}`}
        >
          <Link href="/">Primera Fe</Link>
        </h1>

        {/* Enlaces a la derecha y el carrito */}
        <div
          className={` md:flex flex-col md:flex-row hidden gap-6 md:flex-grow md:basis-0 justify-end items-center text-sm ${styles.links}`}
        >
          {navItems.slice(3).map((navItem, index) =>
            // Si el texto es "Carrito", agrega el ícono
            navItem.text === 'Carrito' ? (
              <Link key={index} href={navItem.path}>
                <div
                  className={`flex items-center text-center mr-4 hover:underline underline-offset-4`}
                >
                  {items.length > 0 ? (
                    <RiShoppingCart2Fill className="text-xl mr-2 flex items-center" />
                  ) : (
                    <RiShoppingCart2Line className="text-xl mr-2 flex items-center" />
                  )}
                  {/* Icono de carrito */}
                  <div className=" flex items-center text-center">
                    {navItem.text}
                  </div>
                </div>
              </Link>
            ) : (
              <ActiveLink key={index} {...navItem} />
            )
          )}
        </div>
      </div>
    </header>
  )
}
