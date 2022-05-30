import React from 'react'
import ListItem from "../listItem/ListItem"

export default function List({ input, finished }){
  return (
    <>
      <h1>To Do:</h1>
      <ul>
        {
          input.map((item, idx) => {
            return(
              <ListItem key={idx} title={item.title} finished={finished} />
            )
          })
        }
      </ul>
    </>
  )
}