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
            <div className='test '>
            <img src="/Images/view-indian-food-arrangement_23-2148747716.jpg" className='w-100 home-image position-relative'></img>
            <div className='bg-dark position-absolute top-50 start-50' style={{width:"38rem",height:"12rem"}}></div>
            </div>
            <div className='d-flex justify-content-center align-items-center flex-column p-4 Restaurant-head'>
            
                
                <h2 className=''>Menu Serve</h2>
                <div><h5 className='small-font-color'>Prepare by our Chef on daily</h5></div>
            
                {/* <h5>Prepare by our Chef on daily</h5> */}
           
            </div>
           
           
            
            <div className=' bg-menu'>
<div className=' head-padding  container'>


                <div className='row gap-x-2 '>
                    {
                        Cardsdata.map((ele, key) => {
                            console.log(ele)
                            return (
                       
                                <div class=" col-md-4 d-flex flex-column justify-content-between p-4 ">
                                    <div className='card menu-card-shadow'>
                                    <img src={ele.imgdata} class="card-img-top" alt="..." style={{ height: "8rem" }} />
                                    <div class="card-body">
                                        <div className='d-flex justify-content-between'>
                                            <h5 class="card-title">{ele.rname}</h5>
                                            <div><img src="/Images/review.png" style={{ height: "2rem" }}></img>{ele.rating}</div>
                                            <button className='btn btn-border-none' onClick={e => handleClick(e, key)} key={key}>Menu</button>
                                        </div>
                                      
                                    </div>
                                    </div>
                                   
                                </div>

                            )
                        })

                        
                    }
                </div>

                </div>
            </div>
            

            <h1>home page</h1></div>
    )
}

export default Home