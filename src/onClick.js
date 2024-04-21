import { useState } from "react";



function OnClick() {
    const [count, setCount] = useState("")
    
    function handleCount() {
        setCount("Hello Bhavya");
    }

 

    return (
        <div>
            <h3>{count }</h3>
            <button onClick={handleCount}>Increase</button>
            {/*<button onClick={handleDecrementCount} >Decrease</button>*/}
        </div>
    )
}

export default OnClick;