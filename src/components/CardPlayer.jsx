import { Link } from "react-router-dom"

export default function CardPlayer({player}) {
    const printCards = (item,i)=>{
        return (
            <div data-aos="fade-right" key={i} className={`rounded-xl flex justify-center flex-col max-w-sm my-3 mx-3 shadow-xl  duration-500 ${item.sex === "Mujer" ? "hover:shadow-pink-400" : "hover:shadow-blue-500"}`}>
                <Link className="flex flex-col" to={`/detail?id=${item._id}`}>
                    <img src={item.photo} 
                    className="h-80 w-80 object-cover rounded-t-xl" 
                    alt="Foto jugador de Las Pirañas"
                    />
                    <div className="w-full py-2 text-2xl bg-gradient-to-r from-green-400 via-blue-500 to-indigo-900 rounded-b-xl">
                        <span className='uppercase'>{item.name}</span>
                    </div>
                </Link>
            </div>
        ) 
    }
  return (
    <>
        {player.map(printCards)}
    </>
  )
}
