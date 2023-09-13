
const Cart = ({selectedActor, actorCost,remaining}) => {
  return (
    <div className="w-[35%]  text-white z-50">
        <h2 className="text-xl font-bold text-center py-5 border-b">Selected Actor List</h2>
        <div className="text-xl font-bold py-5 border-b flex gap-5">
            <h5>Total Actor: {selectedActor.length}</h5>
            <h5>Total Cost: {actorCost}</h5>
            <h5>Remaining: {remaining}</h5>
        </div>
        <div>
            {
                selectedActor.map((actor)=>{
                    return (
                        <div key={actor.id} className="flex items-center justify-between border m-2">
                            <div className="max-w-[50px]">
                                <img src={actor.image} alt="" />
                            </div>
                            <div className="flex gap-5 px-2">
                                <h4 className="font-semibold text-xl">{actor.name}</h4>
                                <h4 className=" text-xl">{actor.role}</h4>
                                <h5 className="font-bold text-xl">${actor.salary}</h5>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Cart