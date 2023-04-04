import React from 'react'
export default function TableGames({games}) {

  const data = games

    //funcion que retorna un array de objetos con 2 propiedades,
    // date: fecha de jornada
    // data: array de todos los partidos de esa fecha
  const groupedData = data.reduce((acc, curr) => {
  const group = acc.find((item) => item.date === curr.date);
    if (group) {
      group.data.push(curr);
    } else {
      acc.push({ date: curr.date, data: [curr] });
    }
    return acc;
  }, []);

  const PrintTable = (props,index)=> {
    return (
    <div className='py-4 px-2' key={props.date}>
    <h2 className='text-white'>Jornada {index +1} - {props.date}</h2>
    <table className='w-full bg-gray-400 rounded-xl'>
                    <thead>
                        <tr className='text-center bg-gray-500'>
                            <th className='hidden sm:table-cell'>Equipo1</th>
                            <th className='hidden sm:table-cell'>Resultado</th>
                            <th className='hidden sm:table-cell'>Equipo2</th>
                        </tr>
                    </thead>
                    <tbody>
                      {props.data.map((item,index) =>(
                        <tr className='text-center hover:bg-gray-500' key={index}>
                            {/* <td className='sm:hidden'>{item.team1.split(" ").map(word => word.length >= 1 ? word[0] : word.slice(0, 2))}</td> */}
                            <td className=' sm:table-cell'>{item.team1}</td>
                            <td className=''>{item.goalTeam1} - {item.goalTeam2}</td>
                            {/* <td className='sm:hidden'>{item.team2.split(" ").map(word => word.length >= 1 ? word[0] : word.slice(0, 2))}</td> */}
                            <td className=' sm:table-cell'>{item.team2}</td>
                        </tr>
                      ))}
                        
                    </tbody>
                </table>
    </div>
    )
  }

  return (
    <>
      {groupedData.map(PrintTable)} 
    </>
  )
}
