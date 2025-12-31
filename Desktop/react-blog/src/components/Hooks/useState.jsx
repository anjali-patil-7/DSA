//1......counter 
// import {useState}from 'react'

// function Counter() {
//     const [count, setCount] = useState(0)
//   return (
//     <div>
//       <button onClick={()=> setCount(count+1)}>count {count}</button>
//     </div>
//   )
// }

// export default Counter

//2.........button to increment decrement and reset the count value 
// import { useState } from "react";

// function Counter(){
//     let initalCount = 0
//     const [count , setCount] = useState(initalCount)
//     return (
//       <div>
//         <h2> Count:{count}</h2>
//         <button onClick={() => setCount(initalCount)}>Reset</button>
//         <button onClick={() => setCount(count + 1)}>Increment</button>
//         <button onClick={() => setCount(count - 1)}>Decrement</button>
//       </div>
//     );
// }
// export default Counter


//3..............usestate with objects
// import { useState } from "react";
// function Counter(){
//     const [name,setName] = useState({firstName:'', lastName:''})
//     return(
//         <form>
//             <input type='text' value={name.firstName} onChange={e=>setName({...name,firstName: e.target.value})}/>
//             <input type='text' value={name.lastName} onChange={e=>setName({...name,lastName: e.target.value})}/>
//             <h2>your firstname is - {name.firstName}</h2>
//             <h2>your lastname is - {name.lastName}</h2>
//         </form>
//     )
// }
// export default Counter


//4..........usestate with array
// import { useState } from "react";
// function Counter(){
//     const [items,setItems] = useState([])

//     const addItem = ()=>{
//         setItems([...items,{
//             id:items.length,
//             value  :Math.floor(Math.random() * 10) + 1
//         }])
//     }
//     return(
//         <div>
//             <button onClick={addItem}>Add a number</button>
//             <ul>
//                 {items.map(item =>(
//                     <li key={item.id}>{item.value}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }
// export default Counter


import { useState } from "react";
function Abc(){
    const [count , setCount] = useState(0)
    return(
        <div>
         
         
        </div>
    )
}