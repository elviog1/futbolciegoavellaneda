import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { BsFillReplyAllFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';


export default function Detail() {
    const api = "https://futbolciegoavellaneda.onrender.com"
    const query = new URLSearchParams(window.location.search)
    const id = query.get("id")
    const [player,setPlayer] = useState({})
    useEffect(()=>{
        axios.get(api+`/players/${id}`)
        .then(res =>{
            setPlayer(res.data.response)
        })
        .catch(e =>console.log(e))
    },[])

    function getYearsOld(date){
        let dateBirth = new Date(date)
        let dateNow = new Date()
        let yearsOld =dateNow.getFullYear() - dateBirth.getFullYear()
        let month = dateNow.getMonth() - dateBirth.getMonth()
        if(month < 0 || (month === 0 && dateNow.getDate() < dateBirth.getDate())){
            yearsOld--
        }
        return yearsOld
    }
    console.log(player)
  return (
    <div className='flex justify-center bg-gray-800 min-h-screen'>
        {
            player.name  ? 
            <div className=''>
            <Link to="/jugadores" className=' h-10 text-5xl absolute text-green-800 hover:text-green-600'>
                <BsFillReplyAllFill  /> 
            </Link>
            <div className='flex flex-col items-center '>
                <img src={player.photo} 
                className="h-96 w-96 object-cover rounded-full" 
                alt='Foto del jugador'
                />

                <div className='text-2xl text-gray-400'>
                    <div className='text-center bg-gradient-to-r from-green-400 via-blue-500 to-indigo-900 my-3 p-3 rounded-2xl opacity-80 mb-4'>
                        <p className='text-3xl pt-3 uppercase font-bold text-gray-100'>Jugador</p>
                        <p className='text-3xl pt-3 uppercase font-bold text-gray-100 py-4'> {player.name}</p>
                    </div>
                    
                    <p><span className='font-bold text-gray-300'>Nombre Completo:</span> {player.name} {player.lastname}</p>
                    <p><span className='font-bold text-gray-300'>Fecha de nacimiento:</span> {player.date}</p>
                    <p><span className='font-bold text-gray-300'>Edad:</span> {getYearsOld(player.date)}</p>
                    <p><span className='font-bold text-gray-300'>Nacionalidad:</span> {player.country}</p>
                    <p><span className='font-bold text-gray-300'>Ciudad:</span> {player.city}</p>
                    <p><span className='font-bold text-gray-300'>Capitan:</span> {player.captain ? "Si" : "No"}</p>
                    <p><span className='font-bold text-gray-300'>Altura:</span> {player.height}m</p>
                    <p><span className='font-bold text-gray-300'>Posicion:</span> {player.position}</p>
                </div>
            </div>
        </div>
            :
            <div className='flex justify-center items-center'>
                <Loading />
            </div>
        }

        
    </div>
  )
}
