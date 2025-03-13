import Link from 'next/link'
import ActiveLink from '../active-link/ActiveLink'
import { FaShoppingCart } from 'react-icons/fa' // Importar el ícono de carrito
import styles from './styles.module.css'
import { Burger } from '../Burger'

export interface NavItems {
  path: string
  text: string
}

export const Navbar: React.FC = () => {
  const navItems: NavItems[] = [
    { path: '/sobre-nosotros', text: 'Sobre Nosotros' },
    { path: '/contactanos', text: 'Contáctanos' },
    { path: '/', text: 'Primera Fe' },
    { path: '/tienda', text: 'Tienda' },
    { path: '/cart', text: 'Carrito' },
  ]

  return (
    <header>
      <div className="flex items-center justify-between absolute w-full bg-white text-center py-2 md:py-1">
        {/* Enlaces de la izquierda */}
        <div
          className={`md:flex flex-col md:flex-row hidden gap-6 md:flex-grow md:basis-0 ${styles.links}`}
        >
          {navItems.slice(0, 2).map((navItem, index) => (
            <ActiveLink key={index} {...navItem} />
          ))}
        </div>
        <div className="md:hidden pl-4">
          <Burger />
        </div>

        {/* Título centrado */}
        <h1
          className={`flex text-center justify-center text-4xl font-bold w-full lg:w-auto ${styles.h1}`}
        >
          <Link href="/">Primera Fe</Link>
        </h1>

        {/* Enlaces a la derecha y el carrito */}
        <div
          className={`md:flex flex-col md:flex-row hidden gap-6 md:flex-grow md:basis-0 justify-end items-center ${styles.links}`}
        >
          {navItems.slice(3).map((navItem, index) =>
            // Si el texto es "Carrito", agrega el ícono
            navItem.text === 'Carrito' ? (
              <Link key={index} href={navItem.path}>
                <div className="flex items-center text-center mr-4">
                  <FaShoppingCart className="text-xl mr-2 flex items-center" />
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
