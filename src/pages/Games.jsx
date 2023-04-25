import React, { useEffect, useState } from 'react'
import TableGames from '../components/TableGames'
import RankingTeam from '../components/RankingTeam'
import axios from 'axios'
import Loading from '../components/Loading'

export default function Games() {
const api = "https://futbolciegoavellaneda.onrender.com/games"
  const [games,setGames] = useState([])
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    axios.get(api)
      .then(res => {
        setGames(res.data.response)
        setLoading(!loading)
      })
      .catch(e => console.log(e))
  },[])

  return (
    <div className='bg-gray-800 flex justify-center  text-2xl'>


        <div className='mt-5 w-100'>
          <img className='w-full h-100 object-cover ' src='https://i.imgur.com/wTjlbjX.jpg' />
          <h1 className='sm:text-4xl text-4xl text-center text-gray-300 font-bold relative bottom-44  tracking-widest  uppercase backdrop-blur-lg'>Copa Claudio Monzón</h1>
          {loading ?
          <div>
            <RankingTeam games={games} />
            <div className='h-96 overflow-y-auto mt-4'>
              <TableGames games={games} />
            </div>
          </div>
            :
            <div className='flex justify-center items-center'>
              <Loading />
            </div>
          }
          
        </div>
        
        
        
        
    </div>
  )
}
