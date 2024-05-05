import React, { useEffect, useState } from 'react'

const Api = () => {

    const [data, setData] = useState([])


    useEffect(() => {
         getData()
    }, [])


    const getData = async () => {
        let result = await fetch("https://fakestoreapi.com/products");
        result = await result.json();
        setData(result)
    }


  return (
      <div>
          <h3>api testing</h3>
      {data.map((item) => (
        <h3 key={item.id   }> {item.title} </h3>
      ))}
    </div>
  );
}

export default Api