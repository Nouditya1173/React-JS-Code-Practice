import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setcounter] = useState(15)

  const addvalue = function(){
      if(counter<20)
      {
        setcounter(counter+1)
      }
     //console.log(counter+ Math.random());
    
  }
  const removevalue = function(){
    if(counter>0)
    {
      setcounter(counter-1)
    }

  }

  
 //let counter=15;
  return (
    <>
      <div>
        
       <h1>Counter  {counter}</h1>
       <button onClick={addvalue}>add value {counter}</button>
       <br></br>
       <button onClick={removevalue}>remove value {counter}</button>

      </div>
       
    </>
  )
}

export default App
