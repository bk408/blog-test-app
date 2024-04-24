import React, { useEffect, useState } from 'react'

const Find = () => {
    const [data, setData] = useState(false)

    useEffect(() => {
      setTimeout(() => {
        setData(true)
      }, 2000);
    }, [])

  return (
      <div>
          <h3>findBy testing</h3>

          {
              data? <h2>data found</h2> : <h2>no data found</h2>
          }

    </div>
  )
}

export default Find