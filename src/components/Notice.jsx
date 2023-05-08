import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiFillDelete } from "react-icons/ai";

export default function Notice({notice}) {
  const [notices,setNotices] = useState([...notice].reverse())
  const api = "https://futbolciegoavellaneda.onrender.com/notices"
  const user = JSON.parse(localStorage.getItem("user"))

  const handleDelete = (id)=>{
    axios.delete(api+`/${id}`)
      .then(()=>{
        setNotices(prevNotices => prevNotices.filter(notice => notice._id !== id))
      })
    .catch(e => console.log(e))
  }

  useEffect(()=>{
    setNotices([...notice].reverse())
  },[notice])

  const printNotice = (notice)=> (
    <div className='mt-4 p-2 border-2 rounded border-slate-600 hover:bg-slate-600  duration-300  flex justi flex-col sm:flex-row' key={notice.title}>
        <img className='   sm:w-72 rounded mb-4 sm:mb-0 sm:mr-4' src={notice.images} alt='imagen' />
        <div className='flex justify-between w-full'>
          <div>
            <h2 className='text-4xl mb-2'>{notice.title}</h2>
            <p className='mb-4'>{notice.notice}</p>
            <div className='flex justify-between'>
              <span>{notice.date}</span>
            </div>
          </div>
          <div className='flex flex-col justify-end'>
         {user &&  <button className='text-4xl text-orange-700 hover:text-red-800 duration-300' onClick={()=>handleDelete(notice._id)}><AiFillDelete /></button>}
          </div>
          
        </div>
    </div>
  )

  return (
    <div className='flex flex-col gap-5'>
      {notices.map(printNotice)}
    </div>
  )
}
