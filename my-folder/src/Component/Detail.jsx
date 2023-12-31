import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import GradeIcon from '@mui/icons-material/Grade';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';




const Detail = ({ detail,counter,handleClick1,handleClick2,itemId ,findItem,DeleteCartItem}) => {
  
   



    console.log(detail)

    

const handledetailOrder=()=>{
    alert("ordered")
    // setNumber(qty)
}










    return (
        <div className='text-center'>
            <div className='d-flex justify-content-center align-items-center mt-4'>


                {
                    detail.map((ele) => {
                        return <div>

                            <div class="card flex-row p-4 cartItem" style={{
                                width: "75rem",
                                marginTop: "1rem",
                                marginLeft: "1rem",
                                height: "25rem"

                            }}>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <img src={ele.imgdata} style={{ width: "30rem", height: "20rem" }} class="card-img-top" alt="..." />
                                </div>

                                <div class="card-body">
                                    <h5 class="card-title"><solid>Dish Detail</solid> </h5>

                                    <div className='d-flex justify-content-between'>
                                        <table>
                                            <tr className='p-2'>
                                                <td className='d-flex flex-row p-2'><b>Recipe name:</b><p class="card-text ml-2">{ele.rname}</p></td>
                                                <td className='d-flex flex-row p-2'><b>Dishes :</b><p class="card-text ml-2">{ele.address}</p></td>
                                                <td className='d-flex flex-row p-2'><b>Price :</b><p class="card-text ml-2">{ele.price}₹</p></td>

                                                <td className='d-flex flex-row p-2'><b>Qty: </b><p class="card-text ml-2"></p><div class="btn-group" role="group" aria-label="Basic outlined example">
                                                    <button type="button" class="btn btn-light" onClick={()=>handleClick1(ele.id)}>-</button>
                                                    <button type="button" class="btn btn-light">{ele.qnty}</button>
                                                    <button type="button" class="btn btn-light" onClick={()=>handleClick2(ele.id)}>+</button>
                                                </div></td>
                                                <td className='d-flex flex-row p-2' ><b>Total :</b><p class="card-text text-danger ml-2">{ele.price*ele.qnty}₹</p></td>



                                            </tr>
                                        </table>
                                        <table className=''>
                                            <tr >
                                                <td className='d-flex flex-row p-4'><b>Rating :</b><p class="card-text ml-2">{ele.rating}<GradeIcon style={{color:"green"}}></GradeIcon></p></td>
                                                <td className='d-flex flex-row p-4'><b>Delete<DeleteIcon style={{ color: "red" }} onClick={()=>DeleteCartItem(ele.id)}></DeleteIcon></b><p class="card-text ml-2"></p></td>


                                            </tr>
                                        </table>
                                    </div>

                                    <div className='d-flex justify-content-center align-items-center '><button className='btn btn-primary' onClick={handledetailOrder}>order</button></div>
                                </div>
                               
                            </div>


                            
                        </div>

                    })
                }


            </div>
        </div>
    )
}

export default Detail