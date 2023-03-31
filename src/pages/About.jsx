import React, { useEffect } from 'react'
import logo from '../images/Photo/logo-pirañas.png'
import yesi from '../images/Photo/yesi.jpg'
import delfo from '../images/Photo/delfo-cabrera.jpeg'

import Carousel from '../components/Carousel'
import 'animate.css';

export default function About() {
    useEffect(()=>{
        window.scrollTo({
            top:0
        })
    },[])
  return (
    <div  className='bg-gray-800 gap-5 min-h-screen m-auto flex flex-col text-white items-center overflow-hidden px-3'>
        {/* Quienes somos  */}
        <div  className=' flex items-center mt-10 ' data-aos="fade-right">
            <div className=''>
                <div className='flex flex-wrap justify-center items-center'>
                    <img src={logo} 
                        className="sm:w-96 max-h-96"
                    />
                    <div className='self-center max-w-xl'>
                        <h2 className='text-5xl  font-bold  py-5'>¿ Quienes somos ?</h2>
                        <span className='text-2xl'>Nosotros somos Las Pirañas de Avellaneda. El equipo de fútbol ciego que representa a la Municipalidad de Avellaneda con sus equipos Femenino y Masculino. Desde el año 2018 iniciamos esta actividad con ganas de aprender y crecer todos juntos.</span>
                    </div>
                </div>
            </div>
        </div>
        {/* Quien lidera */}
        <div  className=' flex items-center' >
            <div className=''>
                <div className='flex flex-wrap justify-center items-center min-h-screen'>
                    <div className='self-center max-w-xl'>
                        <h2 className='text-5xl  font-bold  py-5' data-aos="fade-left">¿ Quien Lidera ?</h2>
                        <div data-aos="fade-up">

                        <span className='text-2xl' >Yésica Galeano, Licenciada en Actividad Física y entrenadora de fútbol, es quien lidera este grupo desde el año 2018. Conforma el Cuerpo Técnico junto a Leandro Tomba y Erika Bianco.</span>
                        </div>
                    </div>
                    <div data-aos="flip-left">
                        <img src={yesi} 
                            className="w-72 shadow-lg duration-300 hover:shadow-white rounded-full mt-14"
                        />
                        </div>
                </div>
            </div>
        </div>
        {/* Donde entrenamos */}
        <div  className=' flex items-center max-w-xl' >
            <div className=''>
                <div className='flex flex-wrap justify-center items-center min-h-screen'>
                    <div className='self-center ' >
                        <div data-aos="zoom-in-right">
                            <h2 className='text-5xl  font-bold  py-5'>¿ Donde Entrenamos ?</h2>
                        </div>
                        <div data-aos="zoom-in-left">
                            <span className='text-2xl'>Las Pirañas entrenan en el Polideportivo Delfo Cabrera, en la localidad de Avellaneda. Entrenamos tres veces por semana; donde dividimos los estimulos entre técnico,táctico y preparación física. Los grupos estan divididos no solo en femenino y masculino, sino también en avanzado y principiantes.</span>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                         data-aos-anchor-placement="top-bottom">
                        <img src={delfo} 
                            className="h-82  object-cover rounded-3xl my-4 opacity-50 hover:opacity-100 duration-300 "
                            />
                    </div>
                </div>
            </div>
        </div>
        {/* Que logramos */}
        <div className='min-h-screen flex items-center'>
            <div className='max-w-screen-md'>
                <div className='flex flex-col'>
                    <div className='self-center'>
                        <div data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">

                            <h2 className='text-5xl  font-bold  py-5 text-center'>¿ Que logramos ?</h2>
                        </div>
                        <div data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">

                            <span className='text-2xl'>Logramos participar de la Liga Nacional de Futbol para Ciegos. El equipo masculino participo de la Copa de Plata quedando en 3° Lugar y el equipo femenino participo en su 1° Torneo Nacional para Ciegas.</span>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="600">
                        <Carousel />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
