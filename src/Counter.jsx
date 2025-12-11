import { useState } from "react";

const Counter=()=>{
   const [count, setCount]=useState(0);
   const [rCounter, setRCounter]=useState(50)
   return(
    <div>
        <h1>Counter:{count}</h1>
        <h2>Reverse Counter:{rCounter}</h2>
        <button onClick={()=>setCount(count+1)}>update counter</button>
        <button onClick={()=>setRCounter(rCounter - 1)}>update R counter</button>
    </div>
   )
}
export default Counter;