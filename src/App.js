import React from 'react'
import "./style.css"
import {Footer} from './components/Footer';
import {Header} from './components/Header'
import {useState} from 'react'

export default function App() {
 const [count, setCount] = useState(0)
  
  function handleCount(){
   count+=1;
   console.log(count)
  }
  return (
    <>
    <div className='app'>
      <div className='box'>
        <p>{count}</p>
        <button onClick={handleCount} className='add'>increase</button>
        <button className='subtract'>decrease</button>
        </div>
    </div>
    </>
   
    
  )
}
// handling state
