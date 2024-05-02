import React from 'react'
import { useState } from 'react'

const ClickEvent = () => {
    const [data, setData] = useState("")
  return (
      <div>
          <h4>{ data}</h4>
          <button onClick={() => setData("hello")} >click</button>
    </div>
  )
}

export default ClickEvent