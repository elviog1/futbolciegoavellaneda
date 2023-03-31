import { useEffect, useState } from "react"
import team from '../images/Photo/EquipoHombres.jpeg'
import team1 from '../images/Photo/EquipoMujeres.jpeg'
import team2 from '../images/Photo/PartidoMasc.jpeg'
import team3 from '../images/Photo/PartidoFem.jpeg'
import team4 from '../images/Photo/Grupal.jpeg'
import team5 from '../images/Photo/Grupal2.jpg'
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
                      <img  src={item} className='rounded-2xl h-full object-cover'/>
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
            <div className='flex h-96 justify-between my-5'>
                <BsFillCaretLeftFill className="text-4xl flex self-center cursor-pointer"  onClick={prev}>prev</BsFillCaretLeftFill>
                {imagesCarousel.slice(start,end).map(itemCarousel)} 
                <BsFillCaretRightFill className="text-4xl flex self-center cursor-pointer"  onClick={next}>next</BsFillCaretRightFill>
            </div>
  )
}
