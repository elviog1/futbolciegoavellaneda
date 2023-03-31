import React from 'react'
import FutbolCiegoPhoto from '../images/Photo/FutbolCiegoTeam.jpeg'
import logo from '../images/Photo/logo-pirañas.png'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='bg-gray-800 min-h-screen m-auto p-4' >
      <div className='h-96'>
          <img 
            src={FutbolCiegoPhoto}
            className="bg-white w-full h-96 object-cover rounded-3xl"
            />

      </div>
        <h1 className='text-5xl text-white font-bold relative  bottom-36 pl-10'>Las Pirañas</h1>
        <p className='text-5xl text-white font-bold relative  bottom-36 pl-10'>Mas Viva que nunca.</p>

      <div className='flex justify-center'>
          <img 
            src={logo} 
            className='w-96'
          />
          <div className='flex flex-col justify-center gap-4 text-3xl w-6/12'>
            <span className='font-bold text-gray-300 '> Alguien dijo ... <span className='text-5xl'>¿ PIRAÑAS ?</span></span>
            <p className='text-gray-300'>- Si si, Pirañas. ¿ Te gustaria formar parte del equipo, entrenar, conocer gente nueva y mas ? No lo dudes, se una PIRAÑA como nosotros  !</p>
            <Link to="/nosotros" className='text-green-800 hover:text-green-600 font-bold'>¡ Conocenos !</Link>
          </div>
        </div>
    </div>
  )
}
