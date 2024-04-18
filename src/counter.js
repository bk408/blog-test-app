import { useState } from "react";


function Counter() {
    const [data, setData] = useState("")
    return (
        <div>
            <h1>OnChange Event testing</h1>
            <input type="text" value={data} onChange={(e) => setData(e.target.value + "test")} />
        </div>
    )
}


export default Counter;