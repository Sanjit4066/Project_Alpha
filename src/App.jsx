// import Header from "./Header"
import ToDo from "./ToDo"
// import Login, {Password, Setting, UserKey} from "./UserComponent"  // password is inside curly braces because it is not a default export.

function App() {  //function or component name must start with Capital letter
  return (
    // for using multiple heading <h></h> tags we need them to write inside div tags(parents tag)
    <div>
      <Header />
      <h1>Hello Everyone this is project alpha</h1>
      <h1>Learn from Basics</h1>
       {/* <Fruit />  
       <Color />
       <Login />
       <Password/>
       <Setting />
       <UserKey /> */}
       <ToDo />
    </div>
  )
}
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
export default App