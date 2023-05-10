import axios from 'axios'
import React, { useState } from 'react'

export default function NewPlayer() {
  const [sendForm,setSendForm] = useState(false)
  const [name,setName] = useState("")
  const [lastName,setLastName] = useState("")
  const [birthday,setBirthday] = useState("")
  const [height,setHeight] = useState()
  const [city,setCity] = useState("")
  const [country,setCountry] = useState("")
  const [photo,setPhoto] = useState("")
  const [position,setPosition] = useState("Arquero")
  const [sex,setSex] = useState("")
  const [captain,setCaptain] = useState(false)
  const api = "https://futbolciegoavellaneda.onrender.com/players"


    const handleSubmit = (e)=>{
        e.preventDefault()
        let data ={
            name: name,
            lastname: lastName,
            date:birthday,
            height: height,
            country:country,
            city: city,
            photo: photo,
            captain: captain,
            position: position,
            sex:sex
        }
        axios.post(api,data)
        .then(res => setSendForm(true))
        .catch(e => console.log(e))

    }

  return (
    <div className='bg-gray-800 flex justify-center  items-center pt-4'>
        <div className=''>
            <h2 className='text-white font-medium text-4xl text-center'>Registro de Jugadores </h2>

        <div className='max-w-2xl'>
      
      <form onSubmit={handleSubmit} className={` mx-auto px-2 w-full `}>

      <div className="mb-4 pt-4">
        <label htmlFor="name" className="block text-gray-100 text-xl font-medium mb-2">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
          required
          maxLength={30}
        />
      </div>

      
      <div className="mb-4">
        <label htmlFor="lastName" className="block text-gray-100 text-xl font-medium mb-2">Apellido</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
          required
          maxLength={30}
        />
      </div>


      <div className="mb-4">
        <label htmlFor="birthday" className="block text-gray-100 text-xl font-medium mb-2">Fecha de nacimiento</label>
        <input
          type="date"
          id="birthday"
          name="birthday"
          value={birthday}
          onChange={(event) => setBirthday(event.target.value)}
          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
          required
        />
      </div>


      <div className="mb-4">
        <label htmlFor="height" className="block text-gray-100 text-xl font-medium mb-2">Altura</label>
        <input
          type="text"
          id="height"
          name="height"
          value={height}
          onChange={(event) => setHeight(event.target.value)}
          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
          required
        //   max={3}
        //   min={0}
        />
      </div>


      <div className="mb-4">
        <label htmlFor="country" className="block text-gray-100 text-xl font-medium mb-2">Pais</label>
        <input
          type="text"
          id="country"
          name="country"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
          required
          maxLength={20}
        />
      </div>


      <div className="mb-4">
        <label htmlFor="city" className="block text-gray-100 text-xl font-medium mb-2">Localidad</label>
        <input
          type="text"
          id="city"
          name="city"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
          maxLength={20}
          required
        />
      </div>



      <div className="mb-4 flex gap-4 items-center flex-wrap">
        <label htmlFor="sex" className="block text-gray-100 text-xl font-medium ">Sexo</label>

        <label htmlFor="Hombre" className='flex gap-2 text-gray-400 cursor-pointer'>Hombre
        <input
          type="radio"
          id="Hombre"
          name="sex"
          value="Hombre"
          onChange={(event) => setSex(event.target.value)}
          className=" focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
          required />
        </label>

        <label htmlFor='Mujer' className='flex gap-2 text-gray-400 cursor-pointer'>Mujer
        <input
          type="radio"
          id="Mujer"
          name="sex"
          value="Mujer"
          onChange={(event) => setSex(event.target.value)}
          className=" focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
          required
        />
        </label>

      </div>


      <div className="mb-4">
        <label htmlFor="position" className="block text-gray-100 text-xl font-medium mb-2">Posicion</label>
        <select className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2' onChange={(e)=> setPosition(e.target.value)}>
            <option defaultValue='Arquero'  >Arquero</option>
            <option defaultValue='Defensor'  >Defensor</option>
            <option defaultValue='Medio Campista' >Medio Campista</option>
            <option defaultValue='Delantero' >Delantero</option>
        </select>
      </div>


      <div className="mb-4">
        <label htmlFor="photo" className="block text-gray-100 text-xl font-medium mb-2">Imagen</label>
        <input
          type="text"
          id="photo"
          name="photo"
          value={photo}
          onChange={(event) => setPhoto(event.target.value)}
          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
          required
        />
      </div>


      <div className="mb-4 flex gap-4 items-center flex-wrap">
        <label htmlFor="captain" className="block text-gray-100 text-xl font-medium ">Capitan</label>

        <label htmlFor='si' className='flex gap-2 text-gray-400 cursor-pointer'>
        <input
          type="checkbox"
          id="si"
          name="captain"
        //   value="si"
          onChange={(event) => setCaptain(event.target.checked)}
          className=" focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
        />
        </label>

      </div>

      <div className="mt-6 flex justify-center">
        <button
          type="submit"
          className="inline-flex items-center justify-center px-5 py-3 rounded-md border-none text-white bg-gradient-to-r from-green-500 to-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:from-green-600 hover:to-green-900"
        >
          Enviar mensaje
        </button>
      </div>
    </form>
      </div>
    <p className={` text-center text-5xl opacity-0 font-bold text-white ${sendForm ? " animate__animated animate__zoomIn animate__delay-1s opacity-100" : ""}`}>Usuario registrado</p>
        </div>
    </div>
  )
}
