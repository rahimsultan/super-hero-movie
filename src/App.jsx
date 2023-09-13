import Actors from "./Components/Actors/Actors"

function App() {

  return (
    <>
      <div className="bg-body-img bg-no-repeat bg-cover bg-center relative">
        <div className="bg-slate-700 inset-0 opacity-75 absolute"></div>
        <Actors/>
      </div>
    </>
  )
}

export default App
