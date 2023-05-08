import axios from 'axios'
import React, { useState } from 'react'

export default function NoticeNew({handlePostNotice}) {
  const [title,setTitle] = useState("")
  const [notice,setNotice] = useState("")
  const [images,setImage] = useState("")
  const [date,setDate] = useState("")
  const api = "https://futbolciegoavellaneda.onrender.com/notices"
  const handleSubmit = (e)=>{
    e.preventDefault()
    let data = {
      title,notice,images,date
    }
    axios.post(api,data)
    .then(res =>{
      console.log(res)
      handlePostNotice(data)
    })
    .catch(e => console.log(e))
  }
  return (
    <div className='flex justify-center'>
      <div className='sm:w-96 w-full'>
      <form onSubmit={handleSubmit} className=''>
          <label className="block">
          <span className="text-gray-400">Titulo</span>
            <input  type="text" 
                    name="title" 
                    className="mt-1 block w-full border rounded-md shadow-sm" 
                    onChange={(e)=> setTitle(e.target.value)}
                    required
                    />
          </label>
          <label  className="block">
          <span className="text-gray-400">Noticia</span>
            <textarea name="description" 
                      className="mt-1 block w-full border rounded-md shadow-sm" 
                      onChange={(e)=> setNotice(e.target.value)}
                      required
                      maxLength={500}
                      />
            <p className='text-gray-400 font-serif text-xs justify-end flex pt-1 pe-1'>caracteres maximos {500 - notice.length}</p>
          </label>
          <label  className="block">
          <span className="text-gray-400">Imagen</span>
            <input  type="text" 
                    name="image" 
                    className="mt-1 block w-full border rounded-md shadow-sm" 
                    onChange={(e)=> setImage(e.target.value)}
                    required
                    placeholder='http://...'
                    />
          </label>
          <label  className="block">
          <span className="text-gray-400">Fecha</span>
            <input  type="date" 
                    name="date" 
                    className="mt-1 block w-full border rounded-md shadow-sm" 
                    onChange={(e)=> setDate(e.target.value)}
                    required
                    />
          </label>
          <button className="mt-4 block w-full border rounded-md shadow-sm py-2 text-gray-400 hover:bg-gray-400 hover:text-gray-800 font-bold duration-300 hover:border-gray-400"  type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
