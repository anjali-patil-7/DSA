//1..........api data fetching using useEffects
import { useEffect, useState } from "react";

function FetchUser(){
    const [users,setUsers] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
         .then((data)=>{
            setUsers(data)
         })
         .catch((error)=>{
            console.log("error fetching users:", error)
         })
    },[])
    return (
      <div>
        <h2>user List</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <p>Name: {user.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
} 
export default FetchUser