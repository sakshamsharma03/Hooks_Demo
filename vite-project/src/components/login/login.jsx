import React, {useState}from 'react'
import Register from '../register/register'
import {Link,useNavigate} from "react-router-dom"
import "./login.css"
const Login = () => {
    const navigate=useNavigate();
    const [input , setInput]=useState({
        name:"",
        email:"",
        password:"",
    });
    const handleLogin=(e)=>
        {
             e.preventDefault();
             const logedUser=JSON.parse(localStorage.getItem("user"));
             if(input.email===logedUser.email && input.password===logedUser.password)
                {
                    localStorage.setItem("loggedin",true)
                    navigate("/")
                }
                else alert("Wrong Email or Password");
        }
  return (
    <div className='main'>Login to your Account
    <hr />
    <form onSubmit={handleLogin}>
    <div className="inp">
    <input type="email" value={input.email} name="email" onChange={(e)=>(setInput({
                ...input,
                [e.target.name]: e.target.value,
            }))} placeholder='Email'/>
     <input type="password" value={input.password} name='password' onChange={(e)=>(setInput({
                ...input,
                [e.target.name]: e.target.value,
            }))} placeholder='Password'/>
    </div>
    <div className="btn">
        <button type='submit'>Login</button>
    </div>
    <div className="extra">
        Don't have an account? <a href="/register">Register here</a> 
    </div>
    </form>
    </div>
  )
}

export default Login;