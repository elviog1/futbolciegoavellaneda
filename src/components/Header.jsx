import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../images/Photo/logo-laspirañas2.png'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="w-8/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center flex-wrap">
            <div className="flex-shrink-0">
              <img src={logo} className="h-14" />
              
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
              
                <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                <Link to={"/"} className="font-bold text-xl">Inicio</Link>
                </div>

                <div  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                <Link to={"/jugadores"} className="font-bold text-xl">Jugadores</Link>
                </div>
                <div  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                <Link to={"/nosotros"} className="font-bold text-xl">Nosotros</Link>
                </div>
                <div  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                <Link to={"/contacto"} className="font-bold text-xl">Contacto</Link>
                </div>
                <div  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                <Link to={"/partidos"} className="font-bold text-xl">Partidos</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <HiX className="block h-6 w-6" aria-hidden="true" />

              ) : (
                <HiMenu className="block h-6 w-6" aria-hidden="true" />

              )}
            </button>
          </div>
        </div>
        <div className={`${isOpen ? "block " : "hidden"} md:hidden absolute bg-gray-800 left-0 w-full text-center z-20 `} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
            <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">
                <Link to={"/"}>Inicio</Link>
            </div>

            <div  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">
                <Link to={"/jugadores"}>Jugadores</Link>
            </div>
            <div  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">
                <Link to={"/nosotros"}>Nosotros</Link>
            </div>
            <div  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">
                <Link to={"/contacto"}>Contacto</Link>
            </div>
            <div  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">
                <Link to={"/partidos"}>Partidos</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
