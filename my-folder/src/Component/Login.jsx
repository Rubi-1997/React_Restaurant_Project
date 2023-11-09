import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./Login.css"


const Login = () => {
  const [data,setdata]=useState({email:"",password:""})
  const navigate=useNavigate()

  const handleChange=(e)=>{
      setdata({...data,[e.target.name]:e.target.value})
  }

  
  const handleSubmit=(e)=>{

    e.preventDefault();

    console.log(data)
   
    if(data.email!=="" || data.password!==""){
      localStorage.setItem("data",JSON.stringify(data));
      navigate("/")
    }
      else{
        alert("please enter email and password")
      }
    
      
  
   
  }  



  return (
    <>
    <div className='d-flex p-4 justify-content-center'>

   
<div class="card mb-3 justify-content-center login-shadow" style={{"width":"640px"}}>
  <div class="row g-0">
    <div class="col-md-5">
      <img src="/Images/joseph-gonzalez-fdlZBWIP0aM-unsplash (1).jpg" class="img-fluid rounded-start login-image" alt="..."/>
    </div>
    <div class="col-md-7 p-4 bg-menu">
      <div class="card-body">
      <form className=''>
    <div class="mb-3">
    <div><h4 className='text-center'>Login</h4></div>
       <div className='d-flex justify-content-center p-4'>
       <FacebookIcon className=''></FacebookIcon>
     <InstagramIcon></InstagramIcon>
       </div>
   <h6 className='text-center p-4 text-secondary'> For more delicious</h6>
       {/* <label for="exampleInputEmail1" class="form-label">Email address</label> */}
     <input type="email" placeholder='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"  value={data.email} onChange={handleChange} required/>
      
     </div>
   <div class="mb-3">
       {/* <label for="exampleInputPassword1" class="form-label">Password</label> */}
       <input type="password" placeholder='password' class="form-control" id="exampleInputPassword1"  name="password" value={data.password} onChange={handleChange} required/>
     </div>
     {/* <div class="mb-3 form-check">
       <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
       <label class="form-check-label" for="exampleCheck1">Check me out</label>
     </div> */}
     <button  className="btn btn-dark" onClick={(e)=>handleSubmit(e)}>Submit</button>
   </form>
      </div>
    </div>
  </div>
</div>
</div>

</>


  //   <div className='d-flex align-items-center justify-content-center '><form className='w-50 border p-4 mt-4 rounded'>
  //   <div class="mb-3">
  //     <div><h4 className=''>Login</h4></div>
  //     <div className='d-flex justify-content-center p-4'>
  //     <FacebookIcon className=''></FacebookIcon>
  //   <InstagramIcon></InstagramIcon>
  //     </div>
   
  //     {/* <label for="exampleInputEmail1" class="form-label">Email address</label> */}
  //     <input type="email" placeholder=' email' class="form-control w-50" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"  value={data.email} onChange={handleChange}/>
      
  //   </div>
  //   <div class="mb-3">
  //     {/* <label for="exampleInputPassword1" class="form-label">Password</label> */}
  //     <input type="password" placeholder=' password' class="form-control w-50" id="exampleInputPassword1"  name="password" value={data.password} onChange={handleChange}/>
  //   </div>
  //   <div class="mb-3 form-check">
  //     <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
  //     <label class="form-check-label" for="exampleCheck1">Check me out</label>
  //   </div>
  //   <button  className="btn btn-primary" onClick={(e)=>handleSubmit(e)}>Submit</button>
  // </form></div>
  )
}

export default Login