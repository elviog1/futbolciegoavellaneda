import React from 'react'
import FutbolCiegoPhoto from '../images/Photo/FutbolCiegoTeam.jpeg'
import logo from '../images/Photo/logo-pirañas.png'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='bg-gray-800 min-h-screen m-auto p-4 flex flex-col items-center' >
      <div className='h-96 sm:w-8/12'>
          <img 
            src={FutbolCiegoPhoto}
            className="bg-white w-full h-96 object-cover rounded-3xl"
            />

      </div>
        <h1 className='sm:text-5xl text-4xl text-white font-bold relative bottom-44 '>Las Pirañas</h1>
        <p className='sm:text-5xl text-2xl text-white font-bold relative  bottom-44 '>Mas Viva que nunca.</p>

      <div className='flex justify-center flex-wrap w-8/12'>
          <img 
            src={logo} 
            className='w-96'
          />
          <div className='flex flex-col justify-center gap-4 sm:text-2xl text-xl sm:max-w-4xl '>{ /*w-8/12*/}
            <span className='font-bold text-gray-300 '> Alguien dijo ... <span className='text-5xl'>¿PIRAÑAS?</span></span>
            <p className='text-gray-300'>- Si si, Pirañas. ¿ Te gustaria formar parte del equipo, entrenar, conocer gente nueva y mas ? No lo dudes, se una PIRAÑA como nosotros  !</p>
            <Link to="/nosotros" className='text-green-800 hover:text-green-600 font-bold text-center text-3xl sm:flex justify-center'>
                <button className='bg-gradient-to-r from-green-500 to-green-800 px-4 py-3 rounded-xl hover:from-green-600 hover:to-green-900 hover:text-gray-300 text-gray-800'>¡ Conocenos !</button>
            </Link>
          </div>
        </div>
    </div>
  )
}
