import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  
  
  
  const [counter, kkCount] = useState(7)


  const addvalue = () => {
    
     
  // counter = counter + 1; 
if(counter < 20)
{
  kkCount(counter +1)
}
else {
   console.log("counter cannot go above 20");
}
}

const removevalue =() => {
 
  if(counter > 0 ){
    kkCount(counter -1)
}
else {
 console.log("counter cannot go below to 0");
}
}

  
  return (
    <>
      <h1>KK Don 77</h1>
      <h2>Counter value :{counter}</h2>
      <button 
      onClick={addvalue}
      > Add value </button>
      <br />
      <br/>
      <button 
      onClick ={removevalue}
      > Remove value </button>
    </>
  )
}

export default App
