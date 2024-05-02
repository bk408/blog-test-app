import React, { useState } from 'react'

const ActFn = () => {
    const [name, setName] = useState()
  return (
      <div>
          <h3> {name} </h3>
          <input type='text' onChange={(e) => setName(e.target.value)}  placeholder='name' />
    </div>
  )
}

export default ActFn