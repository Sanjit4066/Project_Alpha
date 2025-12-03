function ToDo(){
    function callFun(){
        alert("Function called")
    }
    return(
        <div>
            <h1>Sanjeet To Do's</h1>
            <img src="https://www.bing.com/ck/a?!&&p=f38d16abe7abf1952069e13bbe594fada7d38c899b0be6f12a2da8ec7c60e259JmltdHM9MTc2NDcyMDAwMA&ptn=3&ver=2&hsh=4&fclid=063c9dd8-20ea-6956-3a08-89fa2118684c&u=a1L2ltYWdlcy9zZWFyY2g_cT1hbmltYWwraW1nJmlkPTVDQjNCNUY2NEVENjM2QzA0ODI0NzY1MjNGODNGQjMyNTc5ODE4MzkmRk9STT1JQUNGSVI&ntb=1" 
            alt="Sanjeet Kushwaha"
            className="Photo"
            />
            <ul>
                <li>Invent new Traffic Lights</li>
                <li>Red for stop</li>
                <li>Blue For Run</li>
            </ul>
            <button onClick={callFun}>click me</button>
        </div>
    )
}
export default ToDo;