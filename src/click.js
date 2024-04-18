import { useState } from "react";



function Click() {
    const[clickData, setClickData] = useState("")
    return (
        <div>
            <h1>Click Event Testing</h1>
            <button onClick={() => setClickData("Happy testing")} >update data</button>
            <p>{ clickData }</p>
        </div>
    )
}


export default Click;