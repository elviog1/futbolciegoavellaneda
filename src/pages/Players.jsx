import axios from 'axios'
import React from 'react'
import { useEffect, useState } from "react"
import CardPlayer from '../components/CardPlayer'
import Loading from '../components/Loading'

export default function Players() {
    const api = "https://futbolciegoavellaneda.onrender.com"
    const [arrayPlayer,setArrayPlayer] = useState([])
    const [playerFilter,setPlayerFilter] = useState([])
    useEffect(()=>{
        axios.get(api+"/players")
        .then(res => {
            setArrayPlayer(res.data.response)
            setPlayerFilter(res.data.response)
        })
        .catch(e => console.log(e))
    },[setPlayerFilter])
    const woman =arrayPlayer.filter(player => player.sex === "Mujer")
    const man =arrayPlayer.filter(player => player.sex === "Hombre")

  return (
    <div className='m-auto text-center flex justify-center bg-gray-800 min-h-screen'>
        <div>
            <h2 className='text-4xl text-white font-bold'>Jugadores - {playerFilter.length > 0 ? playerFilter.length : ""}</h2>
            <div className='flex justify-center gap-5 py-4 flex-wrap'>
                <button onClick={()=>setPlayerFilter(arrayPlayer)} className='bg-gradient-to-r from-green-500 to-green-800  py-2 px-4 rounded-lg text-xl hover:text-white hover:bg-green-600 font-bold'>Todos</button>
                <button onClick={()=>setPlayerFilter(woman)} className='bg-gradient-to-r from-green-500 to-green-800 py-2 px-4 rounded-lg text-xl hover:text-white hover:bg-green-600 font-bold'>Femenino</button>
                <button onClick={()=>setPlayerFilter(man)} className='bg-gradient-to-r from-green-500 to-green-800 py-2 px-4 rounded-lg text-xl hover:text-white hover:bg-green-600 font-bold'>Masculino</button>
            </div>
            <div className='flex flex-wrap gap-4 justify-center'>
                {playerFilter.length > 0 ?
                    <CardPlayer player={playerFilter} />
                    :
                    <div className='flex justify-center h-96 items-center'>
                        <Loading />
                    </div>
                }
            </div>
        </div>
    </div>
  )
}
