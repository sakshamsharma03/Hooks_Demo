import React, { useState } from 'react'
import "./register.css"
import { json, useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate=useNavigate();
    const [input , setInput]=useState({
        name:"",
        email:"",
        password:"",
    });
    
    const handleChange=(e)=>
        {
            setInput({
                ...input,
                [e.target.name]: e.target.value,
            });
        }
    const handleSubmit=(e)=>{
        e.preventDefault();
        localStorage.setItem("user",JSON.stringify(input))
        navigate("/login")
    }
  return (
    <div className='main'>Create an Account
    <hr />
    <form onSubmit={handleSubmit}>
    <div className="inp">
        <input type="text" value={input.name} name='name' onChange={handleChange} placeholder='Name'/>
        <input type="email" value={input.email} name="email" onChange={handleChange} placeholder='Email'/>
        <input type="password" value={input.password} name='password' onChange={handleChange} placeholder='Password'/>
    </div>
    <div className="btn">
        <button type='submit'>Register</button>
    </div>
    </form>
    <div className="extra">
        Login to your Account. <a href="/login">Login here</a> 
    </div>
    </div>
  )
}

export default Register;