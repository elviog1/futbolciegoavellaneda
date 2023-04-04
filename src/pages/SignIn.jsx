import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const api = "https://futbolciegoavellaneda.onrender.com/auth/signin"
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("user"))

  const handleSubmit = (e)=>{
    const data = {
      email,password
    }
    e.preventDefault()
    axios.post(api,data)
    .then(res => {
      console.log(res)
      navigate("/")
      localStorage.setItem("user",JSON.stringify(data))
      window.location.reload()
    })
    .catch(e => console.log(e))
  }

  const handlesignout = ()=>{
    axios.post(`https://futbolciegoavellaneda.onrender.com/auth/signout/${user.email}`)
    .then(res =>{
      console.log(res)
      navigate("/")
      localStorage.removeItem("user")
      window.location.reload()
    })
    .catch(e => console.log(e))
  }

  return (
    <div className="bg-gray-800 flex justify-center min-h-screen items-center ">
      <div className="">
        {
          !user ?
          <form
          onSubmit={handleSubmit}
          className={` mx-auto px-2 w-full`}
          >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-100 text-xl font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-100 text-xl font-medium mb-2"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
              required
            />
          </div>

          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md border-none text-white bg-gradient-to-r from-green-500 to-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:from-green-600 hover:to-green-900"
            >
              Iniciar Sesion
            </button>
          </div>
          </form>
          :
          <div>
              <button onClick={handlesignout} className="p-3 text-xl font-medium rounded-lg text-white bg-gradient-to-r from-green-400 via-blue-500 to-indigo-900">Desconectarse</button>
          </div>
        }
      </div>
    </div>
  );
}
