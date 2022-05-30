import React from "react"
import './App.css'
import data from '../../data'
import Input from "../../components/input/Input";
import List from "../../components/list/List";
import Finished from "../../components/finished/Finished";
import { useState } from "react";

export default function App() {
  const [ input, setInput ] = useState(data)
  const [ finishedItem, setFinishedItem ] = useState([])

  const finished = (items) => {
    const finishedItems = [items, ...finishedItem]
    setFinishedItem(finishedItems)
  }

  const handleSubmit = (item) => {
    setInput([{ title: item }, ...input])
  }

  return (
    <div>
      <Input handleSubmit={handleSubmit} />
      <List input={input} finished={finished}/>    
      <Finished finishedItem={finishedItem}/>
    </div>
  )
}