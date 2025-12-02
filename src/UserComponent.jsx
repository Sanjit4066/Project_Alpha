function Login(){
    return(
        <div>
            <h1>User Login Successful</h1>
        </div>
    )
}
export default Login // only one component can be export as dafault from a module

export function Password(){
    return(
        <div>
            <h1>Enter your Password</h1>
        </div>
    )
}

export function Setting(){
    return(
        <div>
            <h1>Set Your Password</h1>
        </div>
    )
}

export const UserKey = "^%^&%$&&^$"