
const Card = ({actor, handleSelectActor}) => {
    // console.log(actor);
    const {image, name, salary, age, role}= actor
  return (
        <div className="max-w-[300px] rounded-md border text-white">
        <img
            src={image}
            alt="Laptop"
            className="h-[300px] w-full rounded-t-md object-cover"
        />
        <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">
            {name}
            </h1>
            <p className="mt-3 text-sm text-white-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
            </p>
            <div className="mt-4 flex gap-5 flex-wrap">
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                {role}
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                Age: {age}
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-bold text-gray-900">
               Salary: ${salary}
            </span>
            </div>
            <button
            onClick={()=>handleSelectActor(actor)}
            type="button"
            className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
            Hire Actor
            </button>
        </div>
        </div>
  )
}

export default Card