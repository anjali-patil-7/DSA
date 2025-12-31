//component- js func that return ui (static ui, layout, reusable blocks(header,footer, card))
//1.......simple component 
// function Greeting(){
//     return <h1>Hello Anjali</h1>
// }


//2......resuable component
// function greeting({name}){
//     return <h1>hello {name}</h1>
// }
// <greeting name = "anjali"/>
// <greeting name = "react"/>


//3........state - compoenets internal memory that can change(state->re-render->ui update)
//use state- user interaction , dynamic ui, forms, toggles, counters
// import { useState } from "react";

// function counter(){
//     const [count, setcount] = useState(0)

//     return (
//         <button onClick={()=>setcount(count + 1)}>
//             {count}
//         </button>
//     )
// }

//4........state inside same component
//here one component controls its own behavior
// function Toggle(){
//     const [isOn, setIsOn] = useState(false)
//     return (
//         <button onClick={()=> setIsOn(!isOn)}>
//             {isOn ? "ON": "OFF"}
//         </button>
//     )
// }

//************************Pratical qus************************* */

//1...........increase number when button is clicked

// import { useState } from "react";

// function Counter(){
//     const [count, setCount] = useState(0)

//     return(
//         <div>
//             <h2>count : {count}</h2>
//             <button onClick={()=> setCount(count + 1)}>
//                 Increase</button>
//             <button onClick={()=>setCount(count -1)}>
//                 Decrease
//             </button>
//         </div>
//     )
// }

// export default Counter



//2................Toggle Button(on/off)

// import { useState } from "react";

// function Toggle(){
//     const [isOn, setIsOn] = useState(false)
//     return(
//         <button onClick={()=> setIsOn(!isOn)}>
//             {isOn ? "ON" : "OFF"}
//         </button>
//     )
// }
// export default Toggle;


//3................live test preview - whatever user types should apper instanlty(conditional rendering)
// import { useState } from "react";

// function Livetxt(){
//     const [txt,setTxt] = useState("");

//     return(
//         <div>
//           <input type="text" placeholder="type something" value={txt}
//            onChange={(e)=> setTxt(e.target.value)} />

//            <h3>you typed:{txt}</h3>
           
//         </div>
//     )
// }

// export default Livetxt;



//4..................show/Hide text (conditional rendering)
//show text only when button is clicked

// import { useState } from "react";

// function ShowHide(){
//     const [show, setshow] = useState(false)

//     return(
//         <dv>
//             <button onClick={()=> setshow(!show)}>
//               {show ? "Hide" : "show"}
//             </button>

//             {show && <p>this text is showing..</p>}
//         </dv>
//     )
// }
// export  default ShowHide


//5...........rendering array using state
// import { useState } from "react";

// function List(){
//     const [items, setitems] = useState(["apple", "banana"])

//     return(
//         <ul>
//             {items.map((item, index)=>(
//                 <li key={index}>{item}</li>
//             ))}
//         </ul>
//     )
// }
// export default List;

//6..........counter 
// import { useState } from "react";

// function Counting(){
//     const [ count , setcount] = useState(0)

//     return(
//         <div>
//             <h2>{count}</h2>
//             <button onClick={()=>setcount(count + 1)}> +</button>
//         </div>
//     )
// }
// export default Counting



