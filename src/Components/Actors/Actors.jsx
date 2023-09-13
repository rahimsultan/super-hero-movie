import { useEffect, useState } from "react"
import Swal from 'sweetalert2'
import Card from "../Card/Card"
import Cart from "../Cart/Cart"


const Actors = () => {

    const [allActors, setAllActors] = useState([])
    const [selectedActor, setSelectedActor]= useState([])
    let budget = 20000;
    const [actorCost, setActorCost] =useState(0)
    const [remaining, setRemaining] =useState(budget)


    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(res => setAllActors(res))
    },[])

    const handleSelectActor =(actor)=>{
        let cost = actor.salary;
        const selected = selectedActor.find(a=> a.id === actor.id)

        if(selected){
            return (
                Swal.fire({
                    title: 'Opps!',
                    text: 'Actor already in the list',
                    icon: 'error',
                    confirmButtonText: 'Close'
                  })
            )
        }else{
            selectedActor.forEach(item=>{
               cost += item.salary
            })
        }
        if(cost > budget){
            return (
                Swal.fire({
                    title: 'Opps..!!',
                    text: 'you dont have budget',
                    icon: 'warning',
                    confirmButtonText: 'Close'
                  })
            )
        }else{
            setActorCost(cost)
            setRemaining(budget-cost)
            setSelectedActor([...selectedActor, actor]);
        }
        
    }
    
  return (
    <>
        <div className="z-50">
            <h1 className="text-4xl font-bold text-center py-4 text-white relative">Let's Make a Movie</h1>
        </div>
        <div className="flex gap-5 max-w-6xl mx-auto">
            <div className="z-50 flex flex-wrap justify-evenly gap-5 w-[65%]">
                {
                    allActors.map((actor, index)=> <Card handleSelectActor={handleSelectActor} key={index} actor={actor}/>)
                }
            </div>
            <Cart selectedActor={selectedActor} actorCost={actorCost} remaining={remaining}/>
        </div>
        
    </>
  )
}

export default Actors