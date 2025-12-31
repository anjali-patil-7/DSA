// import Header from "./header"

// function App() {
//   return (
//     <div>
//       <Header></Header>
//       <h1>hello react</h1>
//       <h2>lets start learnng...</h2>
//     </div>
//   )
// }

// export default App



// function App(){
//   return (
//     <h1>hello react</h1>
//   )
// }
// export default App


// // /1.........making component
// function App(){
//   return(
//     <div>
//       <h1>First component</h1>
//       <Fruit></Fruit>
//       <Color></Color>
//     </div>
//   )
// }

// function Fruit(){
//   return(
//     <div>
//       <h1>Apple</h1>
//       <h1>orange</h1>
//     </div>
//   )
// }
// function Color(){
//   return(
//     <div>
//       <h1>Red colour</h1>
//     </div>
//   )
// }

// function App(){
//   const userName = "Anjali Patil"
//   let x=20;
//   let y=30;
//   return (
//     <div>
//       <h1> {userName}</h1>
//       <h1>{20+30}</h1>
//       <h1>{x*y}</h1>
//       <button onClick={()=>alert("hello")}>Click</button>
//     </div>
//   )
// }



// import { createElement } from "react"
// function App(){
//   // return createElement("div",{id:"rootDiv"},"hello div")
//   return(
//     <div className="rootOther">hello other</div>     //..also we can return write like this
//   )
// }


// import Greeting from "./components/Greeting"

// function App(){
//   return (
//     <div>
//       <Greeting></Greeting>
//     </div>
//   )
// }


// export default App




//...........add a button and use onclick event
// function App() {
//   function handleClick() {
//     alert("Button Clicked!");
//   }

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// export default App;


//................passing parameter in function calls
// function App(){
//   function greet(name){
//     alert(`hello, ${name}`)
//   }
//   return (
//     <div style = {{textAlign:"center", marginTop:"50px"}}>
//       <button onClick={()=>greet("Anjali")}>Greet me</button>
//     </div>
//   )
// }
// export default App;



//.............. 
// function App(){
//   function callFun(){
//     alert("function called")
//   }
//   const fruit = (name)=>{
//     alert (name)
//   }
//   return (
//     <div>
//       <h1>event and function call</h1>
//       <button onClick={()=>fruit("apple")}>Apple</button>
//       <button onClick={()=>fruit("banana")}>banana</button>
//     </div>
//   )
// }
// export default App



///.................state
//1............usestate example
// import { useState } from "react";
// import Counter from "../counter";
// function App(){
//   const [fruit, setFruit] = useState("Apple")

//   const handleFruit=()=>{
//     setFruit("Bananna")
//   }
//   return(
//     <div>
//       <h1>state in react js</h1>
//       <h1>{fruit}</h1>
//       <button onClick={handleFruit}>change Fruit name</button>
//       <Counter/>
//     </div>
//   )
// }
// export default App;





//...............toggle html elemnts , hide and show 
// import { useState } from "react";
// function App(){
//   const [display , setDisplay] = useState(true)
//   return (
//     <div>
//       <h1>Toggle in react js</h1>
//       {
//         display ? <h1>Anjali patil</h1>: null
//       }
//       <button onClick={()=>setDisplay(!display)}>Toggle me</button>
//     </div>
//   )
// }
// export default App



//****************Props */
//1...........simple example
// function Welcome(Props){
//   return <h2>hello, {Props.name} !</h2>
// }
// function App(){
//   return (
//     <div>
//       <Welcome name = "Anjali"/>
//       <Welcome name = "Rahul"/>
//       <Welcome name = "Neha"/>
//     </div>
//   )
// }
// export default App
//App - parent component
//welcome - child component
//name - prop passed to the child
//{props.name} - accessing the prop inside the child

//2..............passing multiple props 
// function User(props) {
//   return (
//     <p>
//       Name: {props.name}, Age: {props.age}
//     </p>
//   );
// }

// function App() {
//   return <User name="Anjali" age={22} />;
// }
// export default App


///************PROPS */
// import Hello from "./components/Hello";
// function App(){
//   return(
//     <div className="App">
//       <Hello name="Anjali" message="hi, there" emoji="< __ >"></Hello>
//     </div>
//   )
// }
// export default App



///pasing array using props 
// import Fruits from "./components/Fruits";
// import Hello from "./components/Hello"
// function App(){
//   let arr=[1,2,3]
//   return(
//     <div className="App">
//         {/* <Hello 
//         name="Anjali" message="hi there" age="22" arr={arr} /> */}
//         <Fruits></Fruits>
//     </div>
//   )
// }




//**************************************************************************************************************** */
//****************************************************************************************************************************************** */
//1........increase number when button is clicked

// import Counter from "./components/week1";

// function App(){
//   return (
//     <div>
//       <h1> my first react app</h1>
//       <Counter/>
//     </div>
//   )
// }
// export default App; 


//2...........Toggle function

// import Toggle from "./components/week1";
// function App(){
//   return(
//     <div>
//       <h1>This is Toggle function</h1>
//       <Toggle/>
//     </div>
//   )
// }
// export default App; 

//3............live text
// import Livetxt from "./components/week1"

// function App(){
//   return (
//     <div>
//       <h1> this live texting...</h1>
//      <Livetxt/>
//     </div>
//   )
// }
// export default App

//4.........show/hide text
// import ShowHide from "./components/week1";

// function App(){
//   return(
//     <div>
//       <h1>this is show and hide app</h1>
//       <ShowHide/>
//     </div>
//   )
// }
// export default App

//5........rendering array using state

// import List from "./components/week1";
// function App(){
//   return(
//     <div>
//       <h1>this is list of items in array</h1>
//       <List/>
//     </div>
//   )
// }
// export default App


//6...........counter
//  import Counting from "./components/week1"
//  function App() {
//   return(
//     <div>
//       <h1>this is counter app</h1>
//       <Counting/>
//     </div>
//   )
//  }
//  export default App

//7........props
//1........parent to child
// import Parent from "./components/Props/Parent"

// function App(){
//   return (
//     <div>
//       <h1>this is props</h1>
//       <Parent/>
      
//     </div>
//   )
// }
// export default App;

//2........child to parent
//parent gives a function to child -- child calls that function with data --- parent receive and update state is called lifting state up
// import Parent from "./components/Props/Parent"

// function App(){
//   return (
//     <div>
//       <h1>this is props</h1>
//       <Parent/>
      
//     </div>
//   )
// }
// export default App;


//1..............controlled input
// import Controlled from "./components/Controlled";
// function out(){
//   return(
//     <div>
//       <h1>this is controller input</h1>
//       <Controlled/>
//     </div>
//   )
// }
// export default Controlled


//2................uncontrolled input
// import  Uncontrolled from './components/uncontrolled'
// function App(){
//    return(
//     <div>
//       <h1>this is uncontrolled component</h1>
//       <Uncontrolled/>
//     </div>
//    )
// }
// export default App 



//1..............api fecting using useEffect
// import FetchUser from './components/UseEffects'
// function App(){
//   return(
//     <div>
//       <h1>this is fetching data</h1>
//       <FetchUser/>
//     </div>
//   )
// }
// export default App;



//*********************************HOOKS */
//1.usestate - counter
// import Counter from "./components/Hooks/useState";
// import Bla from './components/Hooks/useEffect'
// import useEffect from './components/Hooks/useEffect'
// function App(){
//   return(
//     <div>
//       <h1>this is counter app</h1>
//       {/* <Counter/> */}
//       <Bla/>
//     </div>
//   )
// }
// export default App


import Parent from "./components/Props/Parent";

function App(){
  return(
    <div>
      <h1>this is app</h1>
      <Parent/>
    </div>
  )
}
export default App