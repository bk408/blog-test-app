

import React, { useState } from 'react'
import handleSecondMethod from './Helper'

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

          <button data-testid = "btn2" onClick={handleSecondMethod} >Print</button>
    </div>
  )
}

export default FuncComp