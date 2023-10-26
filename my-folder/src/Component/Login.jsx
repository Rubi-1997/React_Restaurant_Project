import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [data,setdata]=useState({})
  const navigate=useNavigate()

  const handleChange=(e)=>{
      setdata({...data,[e.target.name]:e.target.value})
  }

  
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(data)
    localStorage.setItem("data",JSON.stringify(data));
   navigate("/")
  }  



  return (
    <div className='d-flex align-items-center justify-content-center'><form className='w-25 border p-4 mt-4 rounded'>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"  value={data.email} onChange={handleChange}/>
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1"  name="password" value={data.password} onChange={handleChange}/>
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button  className="btn btn-primary" onClick={(e)=>handleSubmit(e)}>Submit</button>
  </form></div>
  )
}

export default Login