import Consumer from "./Consumer";

function App(){
  return(
    <div>
      <Consumer name="Raghav Ramesh" />
    </div>
  )
}

export default App


/*
--> Props in react Js
import College from "./College"
import Use from "./Use"
function App(){
  let userName="Sanjit"
  let age=20
  let email = "sanjit@gamil.com"
  // user object 
  let CollegeNames=['GU','DU','IIT']

  return (
    <div>
      <h1>Props in React JS</h1>
      <Use name={userName} age={age} email={email}/>
      <College names={CollegeNames[0]}/>
    </div>
  )
}
export default App;

*/

/*
-->Multiple Condition in reactJS

import { useState } from "react";

function App(){
  const [count, setCount] = useState(0);
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Counter</button>
      {
        count==0?<h1>Condition 0</h1>
        :count==1?<h1>Condition 1</h1>
        :count==2?<h1>Condition 2</h1>
        :count==3?<h1>Condition 3</h1>
        :count==4?<h1>Condition 4</h1>
        :count==5?<h1>Condition 5</h1>
        :count==6?<h1>Condition 6</h1>
        :<h1>other condition</h1>
      }
    </div>
  )
}
export default App;

*/

/*
-->Toggle and condition in React JS

mport { useState } from "react";
import User from "./user";
function App(){

const [display, setDisplay]=useState(true)
   return(
     <div>
     <h1>Toggle in reactJS</h1>
     <button onClick={()=>setDisplay(!display)} >Toggle</button>
     {
      display? <User />:null // conditional rendering
     }
     
     
     </div>
   )
}
export default App;
*/

/*

--> state in React Js
import { useState } from "react";
import Counter from "./Counter";
function App(){
  const [fruit, setFruit]= useState("Apple")
  const handleFruits=()=>{
    setFruit ("Banana")
    
  }
  return (
    <div>
      <h1>state in React Js</h1>
      <h1>{fruit}</h1>
      <button onClick={handleFruits}>change Fruit Name</button>
      <Counter />
    </div>
  )
}
export default App
*/


// import Header from "./Header"
// import ToDo from "./ToDo"
// import Login, {Password, Setting, UserKey} from "./UserComponent"  // password is inside curly braces because it is not a default export.

// function App() {  //function or component name must start with Capital letter
  // return (
    // for using multiple heading <h></h> tags we need them to write inside div tags(parents tag)
    // <div>
      
    // <h1>Hello Everyone this is project alpha</h1>
    // <h1>Learn from Basics</h1>
//        { <Fruit />  
//        <Color />
//        <Login />
//        <Password/>
//        <Setting />
//        <UserKey /> }
//        <ToDo />
//     </div>
//   )
// }
// if function name start with capital letter then it would be considerd as component otherwise it will be considered as normal function
// function Fruit(){
//   return(
//     <div>
//       <h1>First Component</h1>
//       <h2>second component</h2>
     
//     </div>
//   )
// }
// function Color(){
//   return(
//     <div>
//       <h1>Red Color</h1>
//     </div>
//   )
// }
// export default App;
