import React from 'react'
import logoAvellaneda from '../images/Photo/av-logo.png'
import logo from '../images/Photo/logo-laspirañas2.png'
import { BsArrowUpCircleFill } from "react-icons/bs";
export default function Footer() {
  const scrollToTop = ()=>{
    window.scrollTo({
      behavior: "smooth",
      top: 0
    })
  }
  return (
    <div className='m-auto flex justify-center w-full bg-gray-800'>
    <div className='  items-center text-center flex justify-around flex-wrap gap-2 py-4 w-full'>
      <div className=' flex justify-center'>
        {/* <span className='text-gray-300 text-2xl font-bold'>Las Pirañas De Avellaneda</span> */}
        <div className='flex '>
          <img src={logo} className="h-14" />
        </div>
        {/* <img src={logo} className="h-14" /> */}

      </div>
      <div className=''>
        <img src={logoAvellaneda} className='h-24' />
      </div>
      <div className='flex gap-2 justify-center '>
        <span className='text-gray-300 text-2xl'>Seguinos en </span>
        <div className='flex gap-3 '>
          <a rel="noreferrer" target="_blank" href='https://www.instagram.com/futbolciego_avellaneda/'>
            <img alt='logo-red-social' className="w-7" src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" />
          </a>
          <a rel="noreferrer" target="_blank" href='https://www.youtube.com/channel/UCijMfMHmNcTQyaIpphGvBvA'>
            <img alt='logo-red-social' className="w-7" src="https://cdn-icons-png.flaticon.com/512/3938/3938037.png" />
          </a>
          <a rel="noreferrer" target="_blank" href='https://www.facebook.com/profile.php?id=100079544866335'>
            <img alt='logo-red-social' className="w-7" src="https://cdn-icons-png.flaticon.com/512/2504/2504903.png" />
          </a>
        </div>
      </div>
      <div className=''>
        <button onClick={scrollToTop}>
          <BsArrowUpCircleFill className='text-4xl text-gray-300' />
        </button>
      </div>
    </div>
    </div>
  )
}
