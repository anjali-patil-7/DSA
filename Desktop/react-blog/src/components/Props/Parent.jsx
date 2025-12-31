//1..........parent-->child
// import Child from "./child"; 

// function Parent() {
//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <Child name="Anjali" age={22} role="MERN Stack Developer" />
//     </div>
//   );
// }

// export default Parent;

//2..........child to parent
// import { useState } from "react";
// import Child from "./child";
// function Parent(){
//   const [message, setMessage] = useState("")
//   // func paased to child
//   const recDataFromChild = (data) =>{
//     setMessage(data)
//   }
//   return(
//     <div>
//       <h1>Parent compoent</h1>
//       <p>Message from chid:{message}</p>
//       <Child sendData={recDataFromChild} />
//     </div>
//   )
// }
// export default Parent;

//2.1.........input field-child sends typed text to parent
// import { useState } from "react";
// import Child from "./child";
// function Parent(){
//   const [username, setUsername] = useState("");
//   const getUsername = (name)=>{
//     setUsername(name)
//   }
//   return(
//     <div>
//       <h1>parent compoenets</h1>
//       <h3>username from child: {username}</h3>
//       <Child onSend={getUsername}/>
//     </div>
//   )
// }
// export default Parent;


import { useState } from "react";
import Child from "./child";

function Parent(){
    const[message, setMessage] = useState("")
    const recive = (data)=>{setMessage (data)}

    return(
        <div>
            <h1>this is parent compoenet</h1>
            <p>message from child:{message}</p>
            <Child sendData={recive}/>
        </div>
    )
}
export default Parent