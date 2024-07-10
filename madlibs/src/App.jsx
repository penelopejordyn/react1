import { useState } from 'react'
import './App.css'
import Form from './Form'

function Madlib() {
  const [count, setCount] = useState()

  return (
    <>
      <h1>React MadLibs</h1>
      <div className="card">
        <Form />
      </div>
    </>
  )
}



export default Madlib 
