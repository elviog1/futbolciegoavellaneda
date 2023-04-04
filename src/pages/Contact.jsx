import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import 'animate.css';
export default function Contact() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")
  const [sendForm,setSendForm] = useState(false)
  const handleSubmit = (e)=>{
    e.preventDefault()
    emailjs.sendForm("service_bfwjorn","template_5ne6ced",e.target,"uIBEj_N6y_8IgemSl")
    .then(response => console.log(response)) 
    .catch(error => console.log(error)) 
    setName("")
    setEmail("")
    setMessage("")
    setSendForm(!sendForm)
  }
  return (
    <div className='bg-gray-800 gap-5 min-h-screen  m-auto flex flex-col justify-center items-center '>

      <div className='max-w-2xl'>
      <h3 className='text-4xl sm:max-w-3xl text-white font-medium py-4 text-center'>¿Tenes alguna duda o consulta sobre nosotros? Dejanos tu mensaje.</h3>
      <form onSubmit={handleSubmit} className={` mx-auto px-2 w-full ${sendForm ? "animate__animated animate__bounceOut" : ""}`}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-100 text-xl font-medium mb-2">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-100 text-xl font-medium mb-2">Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-100 text-xl font-medium mb-2">Mensaje</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2 resize-none"
          rows={5}
          required
          maxLength={300}
        />
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
    <span className={`absolute text-5xl opacity-0 font-bold text-white ${sendForm ? " animate__animated animate__zoomIn animate__delay-1s opacity-100" : ""}`}>Mensaje enviado</span>

    </div>
  )
}
