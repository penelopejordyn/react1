import React, { useState } from 'react'
import Game from './Game'
import './Form.css'

function Form () {

    const [formData, setFormData] = useState({
        noun: "",
        noun2: "",
        adjective: "",
        color: ""
    })

    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        setIsSubmitted(true)
    }
 
    return (
        <>
        <div className={`card ${isSubmitted ? 'hidden' : ''}`}>
            <form onSubmit={handleSubmit}>
                <input 
                name="noun" 
                placeholder="noun" 
                value={formData.noun}
                onChange={handleChange}
                />
                
                <input 
                name="noun2" 
                placeholder="another noun" 
                value={formData.noun2}
                onChange={handleChange}
                />

                <input 
                name="adjective" 
                placeholder="adjective" 
                value={formData.adjective}
                onChange={handleChange}
                />

                <input 
                name="color" 
                placeholder="color" 
                value={formData.color}
                onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
        {isSubmitted && <Game {...formData} />}
        </>
    )
}
export default Form