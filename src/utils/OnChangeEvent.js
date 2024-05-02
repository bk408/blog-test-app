import React, { useState } from 'react'

const OnChangeEvent = () => {
    const [name, setName] = useState()
  return (
      <div>
          <h2>{ name}</h2>
          <input type='text' onChange={(e) => setName(e.target.value)} placeholder='Enter your name' />
    </div>
  )
}

export default OnChangeEvent