//1.............controlled input -basic
// import { useState } from "react";

// function Controlled() {
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <h2>Controlled Component</h2>

//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <p>Name: {name}</p>
//     </div>
//   );
// }

// export default Controlled;

//2.............controlled checkbox
// import { useState } from "react";
// function Controlled(){
//     const [checked,setChecked] = useState(false)
//     return (
//       <div>
//         <input
//           type="checkbox"
//           checked={checked}
//           onChange={() => setChecked(!checked)}
//         />
//         <p>{checked ? "Checked" : "Not Checked"}</p>
//       </div>
//     );
// }
// export default Controlled