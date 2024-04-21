

import React, { useState } from 'react'

const FuncComp = () => {
    const [data, setData] = useState("")

    const handleBtn = () => {
        setData("Hello Function")
    }
  return (
      <div>
          <h1>Functional component testing</h1>
          <button data-testid = "btn1" onClick={handleBtn}>Update</button>
          <h3> {data} </h3>
    </div>
  )
}

export default FuncComp