import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Component/login'
import Card from './Component/Card'

function App() {
  // const [count, setCount] = useState(0)

  // let myObj = {
  //   username: "kk",
  //   age:21
  // }

  // let myArray = [1,2,3]

const [counter,setCounter] = useState(15)

const addvalue =()=>{
  setCounter(counter +1)
}

const remomeValue =()=>{
  setCounter(counter -1)
}





  return (
    <>
   <h1 className="bg-gray-800 text-white p-4 text-3xl font-bold  rounded-xl">Welcome to
    Tailwind Css</h1>
 

   


{/* <Card username ="kkdon " />

<Login username ="chaiaurcode" someObje = {myObj}   /> */}

<br />
<h1>KK Don calculater </h1>
<h1>Counter value:{counter}</h1>
<br />
<button
onClick={addvalue}>
  Add value{counter}
</button>
<br />

<button
onClick={remomeValue}
>
  removeValue{counter}
</button>
<p>footer:{counter}</p>



    </>
  )
}

export default App
