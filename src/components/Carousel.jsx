import { useEffect, useState } from "react"
import team from '../images/Photo/EquipoHombres.webp'
import team1 from '../images/Photo/EquipoMujeres.webp'
import team2 from '../images/Photo/PartidoMasc.webp'
import team3 from '../images/Photo/PartidoFem.webp'
import team4 from '../images/Photo/Grupal.webp'
import team5 from '../images/Photo/Grupal2.webp'
import { BsFillCaretLeftFill,BsFillCaretRightFill } from "react-icons/bs";


export default function Carousel() {
    const imagesCarousel = [team,team1,team2,team3,team4,team5]

    const range = 1
    const limitSlides = 6 * range
    const [start,setStart] = useState(0)
    const [end,setEnd] = useState(start + range)
    const [intervalId,setIntervalId] = useState()
    const interval = 6 * 1000
    
    useEffect(() => {
        let id = setInterval(function () {
            next()
        },interval)
        setIntervalId(id)
        return () => clearInterval(intervalId);
      },[start])
  
      const itemCarousel = (item) =>( 
                  <div className='h-96 ' key={item}>
                      <img alt="Foto Jugador de las Pirañas" src={item} className='rounded-2xl h-full object-cover'/>
                  </div>
      )
  
  
        function prev (){
          if (start >= range){
            setStart(start-range)
            setEnd(end-range)
          }else{
            setStart(limitSlides - range)
            setEnd(limitSlides)
          }
        }
  
  
        function next (){
          if(start<limitSlides-range){
            setStart(start+range)
            setEnd(end+range)
          }else{
            setStart(0)
            setEnd(range)
          }
        }

        

  return (
            <div className='flex h-96 justify-between my-5 max-w-screen-xl'>
                <BsFillCaretLeftFill className="text-4xl flex self-center cursor-pointer"  onClick={prev}>prev</BsFillCaretLeftFill>
                {imagesCarousel.slice(start,end).map(itemCarousel)} 
                <BsFillCaretRightFill className="text-4xl flex self-center cursor-pointer"  onClick={next}>next</BsFillCaretRightFill>
            </div>
  )
}
