//1...........basic uncontrolled 
// import { useRef } from "react";
// function Uncontrolled(){
//     const inputRef = useRef(null)

//     const handlesubmit = ()=>{
//         alert(inputRef.current.value)
//     }
//     return(
//         <div>
//             <h2>uncontrolled input</h2>
//             <input type="text" ref={inputRef} />
//             <button onClick={handlesubmit}>submit</button>
//         </div>
//     )
// }
// export default Uncontrolled

//2...........uncontrolled form with default value 
// import React, { useRef } from "react";
// function Uncontrolled(){
//     return(
//        <form >
//          <input type="text" defaultValue="Anjali"/>
//          <button>submit</button>
//        </form>
//     )
// }
// export default Uncontrolled