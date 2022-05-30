import React from "react"

export default function ListItem(props) {
  const { finished, title } = props
  return (
    <li onClick={() => finished(title)}>
      <h3>{title} <button>Finish</button></h3>
    </li>
  )
}