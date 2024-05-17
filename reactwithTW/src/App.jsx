//import { useState } from 'react'
import './App.css'
import Car from './components/Car';

function App() {
  //const [count, setCount] = useState(0)
  let obj ={
    username:"nouditya",
    pass : "123"
  }

  return (
    <>
      
       <h1 className="rounded-xl dark:bg-green-800 mb-4">Tailwind Css</h1>

       <div className='flex'>
       <Car user="Nouditya Badsare" txt={obj}/>
       <Car  btn="Visit me" txt={obj}/>
       </div>

    </>
  )
}

export default App
