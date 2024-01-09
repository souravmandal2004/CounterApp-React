import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // using useState
  const [counter, setCounter] = useState (0);

  // let counter = 5;

  // Making the function to add the value
  function addValue () {
    setCounter (counter+1);
  }

  function decreaseValue () {
    setCounter (counter-1);
  }

  return (
    <>
      <h1>CounterApp - Mandal</h1>
      <h3 className='countValue'>Count Value: {counter} </h3>

      <button onClick={addValue} className='addVal'>Add Value</button>
      <br/>
      <button onClick={decreaseValue} className='removeVal'>Decrease Value</button>
    </>
  )
}

export default App
