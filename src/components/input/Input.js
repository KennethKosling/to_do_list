import React from 'react';
import { useState } from 'react'

export default function Input({handleSubmit}){
  const [input, setInput] = useState('')
  
  const handleChange = (evt) => {
    setInput(evt.target.value);
  }

  const handleForm = (evt) => {
    evt.preventDefault();
    handleSubmit(input);
    setInput('');
  }

  return (
    <>
      <h1>Add a New Task</h1>
      <form onSubmit={handleForm}>
        <input className="add" type="text" placeholder="Insert text here" value={input} onChange={handleChange}/>
      </form>
    </>
  )
}