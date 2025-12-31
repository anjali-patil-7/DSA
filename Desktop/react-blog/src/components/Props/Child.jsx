//1.........parent---->child
// function Child(props) {
//   return (
//     <div>
//       <h2>Child Component</h2>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//       <p>Role: {props.role}</p>
//     </div>
//   );
// }

// export default Child;

//2...........child to parent
// function Child ({sendData}){
//     return(
//         <div>
//             <h2>child component</h2>
//             <button onClick={()=> sendData("hello parent!")}>
//                 Send data to parent
//             </button>
//         </div>
//     )
// }
// export default Child


//2.1.............input field - child sends typed text to parent
// import { useState } from "react"
// function Child({onSend}){
//     const [input,setInput] = useState("")

//     return(
//         <div>
//             <h2>child component</h2>
//             <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
//             <button onClick={()=>onSend(input)}>
//                 send to parent
//             </button>
//         </div>
//     )
// }
// export default Child;


function    Child({sendData}){
    return(
        <div>
            <h2>this is child component</h2>
            <button onClick={()=>sendData("helllo world")}>send data to parent</button>
            
        </div>
    )
}
export default Child