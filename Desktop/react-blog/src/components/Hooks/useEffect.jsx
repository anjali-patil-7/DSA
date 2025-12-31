//1............counter using useEffect
import { useEffect, useState } from "react";

function Bla(){
    const [count, setCount] = useState(0)

    useEffect(()=>{
        document.title = `you clicked ${count} times`
    })

    return(
        <div>
            <button onClick={()=>setCount(count+1)}>click {count} times</button>
        </div>
    )
}
export default Bla