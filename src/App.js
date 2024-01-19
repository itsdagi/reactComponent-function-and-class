import React from 'react'
import "./App.css"
import {Footer} from './components/Footer';
import {Header} from './components/Header'
import {useState} from 'react'

export default function App() {
  const [count, setCount]= useState(0);
  function handleCount(){
    setCount(count + 1)
  }
  function handleSub(){
    setCount(count - 1)
  }
  function handleReset(){
    setCount(0)
  }
  return (
    <>
    <div className='app'>
      <div className='box'>
        <p>{count}</p>
        <button onClick={handleCount} className='add'>Increase</button>
        <button onClick = {handleSub}className='subtract'>Decrease</button>
        <button onClick = {handleReset}className='reset'>Reset</button>
        </div>
    </div>
    </>
   
    
  )
}
// handling state
