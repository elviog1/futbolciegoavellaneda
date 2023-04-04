import React from 'react'

export default function RankingTeam({games}) {
    const dataGames = games

    const dataTeam = (nameTeam)=>{
        const dataResponse = dataGames.filter(item => item.team1 === nameTeam || item.team2 === nameTeam)
        return dataResponse
    }

    const nameTeams = ()=>{
        const result = []
        for(let i=0;i < dataGames.length; i++){
            if(!result.includes(dataGames[i].team1)){
                result.push(dataGames[i].team1)
            }else if(!result.includes(dataGames[i].team2)){
                result.push(dataGames[i].team2)
            }
        }
        return result
    }

    const clasification = (nameTeam)=>{
        let points = 0
        let goals = 0
        let data = dataTeam(nameTeam)
        for(let i = 0; i< data.length; i++){
            if(data[i].team1 === nameTeam){
                goals = goals + data[i].goalTeam1
                if(data[i].goalTeam1> data[i].goalTeam2){
                    points = points + 3
                }else if(data[i].goalTeam1< data[i].goalTeam2){
                    points = points + 0
                }else{
                    points = points + 1
                }
            }else{
                goals = goals + data[i].goalTeam2
                if(data[i].goalTeam2> data[i].goalTeam1){
                    points = points + 3
                }else if(data[i].goalTeam2< data[i].goalTeam1){
                    points = points + 0
                }else{
                    points = points + 1
                }
                
            }
        }
        return {points: points, goals:goals, team:nameTeam}
    }

    const ranking = nameTeams().map(item => clasification(item)).sort((a,b)=> b.points- a.points)


  return (
    <div className='px-2'>
        <p className='text-center text-white'>Posiciones</p>
        <table className='bg-gray-400 w-full text-center rounded-xl my-3 text-xl'>
                    <thead >
                        <tr>
                            <th className=' sm:table-cell'>Posicion</th>
                            <th className=' sm:table-cell'>Equipo</th>
                            <th className=' sm:table-cell'>Puntos</th>
                            <th className=' sm:table-cell'>Goles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ranking.map((item,index)=>(
                            <tr key={index}>
                                <td >{index+1}</td>
                                {/* <td className='sm:hidden'>{item.team.split(" ").map(word => word.length >= 1 ? word[0] : word.slice(0, 2))}</td> */}
                                <td className=' sm:table-cell'>{item.team}</td>
                                <td >{item.points} Pts.</td>
                                <td >{item.goals}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
    </div>
  )
}
