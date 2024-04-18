import { useState } from "react";


/* beforeAll(() => {
    console.log("Before All testing");
}) */

/* beforeEach(() => {
    console.log("Before Each testing");
}) */

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


/* afterAll(() => {
    console.log("___After all testing");
}) */

afterEach(() => {
    console.log("___After each testing");
})

export default Click;