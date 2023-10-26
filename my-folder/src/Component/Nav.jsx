import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Nav = ({ stateapp }) => {


    let data = stateapp
    console.log(data)
    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-light bg-color">
                <div class="container-fluid">
                    <a class="navbar-brand fs-3 text-bold" href="#">Restaurant</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/" class="nav-link active" aria-current="page">Home</Link>

                            </li>

                            <li class="nav-item">
                                <Link to="/Restaurant" class="nav-link active" aria-current="page">Restaurant</Link>

                            </li>

{
    localStorage.getItem('data')?<li class="nav-item">
    <Link to="/logout" class="nav-link active" aria-current="page">Logout</Link>

</li>:<li class="nav-item">
                                <Link to="/login" class="nav-link active" aria-current="page">Login</Link>

                            </li>
}
                            
                           

                        </ul>

                    </div>
                </div>
                <li class="nav-item d-flex justify-content-end">
                    <Link to="/Cart" class="nav-link active ms-auto" aria-current="page"><ShoppingCartIcon className='position-relative' /><span class="position-absolute top-75 start-75 translate-middle badge rounded-pill bg-danger">
                        {stateapp}</span>
                        <span class="visually-hidden">unread messages</span></Link>

                </li>
            </nav>
        </div>
    )
}

export default Nav