import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'


const PrivateComponent = () => {
    // const navigate=useNavigate();
    const authentication=localStorage.getItem('data')
  return (

    authentication?<Outlet/>:<Navigate to="/login"/>
  )
}

export default PrivateComponent