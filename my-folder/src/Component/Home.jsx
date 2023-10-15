import React, { useState } from 'react'
import "./Home.css"
import Cardsdata from '../CardsData';
import { useNavigate } from 'react-router-dom';
import Restaurant from './Restaurant';

const Home = ({setapp}) => {
    const navigate = useNavigate()

    


    const handleClick = (e, key) => {
        // console.log(e.target);
        console.log('key index:', key);
        navigate('/Restaurant')
        
    
       
    }
    

    return (
        <div >
            <img src="/Images/view-indian-food-arrangement_23-2148747716.jpg" className='w-100 home-image'></img>
            <h2 className='mt-4 d-flex align-items-center justify-content-center mb-4'>Restaurants</h2>
            <div className='container'>

                <div className='row g-4'>
                    {
                        Cardsdata.map((ele, key) => {
                            console.log(ele)
                            return (

                                <div class="card col-md-6 d-flex flex-column justify-content-between ">
                                    <img src={ele.imgdata} class="card-img-top" alt="..." style={{ height: "20rem" }} />
                                    <div class="card-body">
                                        <div className='d-flex justify-content-between'>
                                            <h5 class="card-title">{ele.rname}</h5>
                                            <div><img src="/Images/review.png" style={{ height: "2rem" }}></img>{ele.rating}</div>
                                            <button className='btn btn-border-none' onClick={e => handleClick(e, key)} key={key}>Menu</button>
                                        </div>
                                      
                                    </div>
                                   
                                </div>

                            )
                        })

                        
                    }
                </div>


            </div>
            

            <h1>home page</h1></div>
    )
}

export default Home