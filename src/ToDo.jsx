function ToDo() {
    function callFun() {
        alert("Function called")
    }
    const fruit=(name)=>{
        alert(name); 
    }
    return (
        <div>
            <h1>Sanjeet To Do's</h1>
            <img
                src="https://picsum.photos/300"
                alt="test"
                className="Photo"
            />

            <ul>
                <li>Invent new Traffic Lights</li>
                <li>Red for stop</li>
                <li>Blue For Run</li>
            </ul>
            <button onClick={callFun}>click me</button> 
            <button onClick={()=>fruit("banana")}>Fruit</button>  
        </div>
    )   /*callFun is the definition we provided here onClick button if we call functiob by name() then it will call itself infinitely*/
}
export default ToDo;