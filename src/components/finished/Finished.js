import React from "react";

export default function Finished(props) {
  const { finishedItem } = props
  return (
    <>
      <h1>Finished:</h1>
      <ul>
        {
          finishedItem.map((item) => {
            return (
              <li>
                <h3>
                  {item}
                </h3>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}