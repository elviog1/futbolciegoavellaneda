import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Notice from '../components/Notice'
import Loading from '../components/Loading'
import NoticeNew from '../components/NoticeNew'

export default function NoticePage() {
    const [notices,setNotice] = useState([])
    const [activeNewNotice,setActiveNewNotice] = useState(false)
    const api = "https://futbolciegoavellaneda.onrender.com/notices"
    const user = JSON.parse(localStorage.getItem("user"))
    useEffect(()=>{
        axios.get(api)
        .then(res => setNotice(res.data.response))
        .catch(e => console.log(e))
    },[])

    const handleNewNotice = ()=>{
      setActiveNewNotice(!activeNewNotice)
    }

    const handlePostNotice = (newNotice)=>{
      setNotice([...notices,newNotice])
    }
    
  return (
    <div className='bg-gray-800 flex justify-center'>
        <div className='w-100 px-5'>
            <div className='flex justify-center gap-4'>
              <h2 className=' text-4xl font-bold text-gray-300'>Noticias</h2>
              {user && <button className='px-4 border rounded duration-300 hover:bg-gray-700 text-white font-bold' onClick={handleNewNotice}>X</button>}
            </div>
            {activeNewNotice && <NoticeNew handlePostNotice={handlePostNotice} />}

            {notices.length>0 ? 
              <Notice notice={notices} />
            :
            <div className='flex h-96 justify-center items-center'>
              <Loading />
            </div>
            }
        </div>
    </div>
  )
}
