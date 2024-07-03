import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import GradeIcon from '@mui/icons-material/Grade';
import "./Cart.css"






const Cart = ({ findItem, detail, showdetail,counter,itemId,setapp,DeleteCartItem}) => {


  
  
  


  


console.log(findItem.length)



  return (
    <div>
      <div className='text-center'><h1>Cart</h1></div>
      <div className='d-flex justify-content-center align-items-center flex-column ' >
        {
          findItem.map((ele, key) => {
            if (findItem) {
              return (
                <div >

                  <div class="card flex-row cartItem p-2" style={{
                    width: "37rem",
                    marginTop: "1rem",
                    marginLeft: "1rem"
                  }}>
                    <div className='d-flex align-items-center justify-content-center ' onClick={()=>showdetail(ele.id,ele.qty)}>
                      <img src={ele.imgdata} style={{ width: "10rem", height: "8rem" }} class="card-img-top" alt="..." />
                    </div>

                    <div class="card-body">
                     
                      <div className='d-flex justify-content-between'>
                        <table>
                          <tr >
                            <td className='d-flex flex-row'><b>Dishes :</b><p class="card-text ml-2">{ele.address}</p></td>
                            <td className='d-flex flex-row'><b>Price :</b><p class="card-text ml-2">{ele.price}₹</p></td>

                            <td className='d-flex flex-row'><b>Qty:</b><p class="card-text ml-2">{ele.qnty}</p></td>
                            <td className='d-flex flex-row ' ><b>Total :</b><p class="card-text text-danger ml-2">{ele.price*ele.qnty}₹</p></td>


                          </tr>
                        </table>
                        <table className=''>
                          <tr >
                            <td className='d-flex flex-row'><b>Rating :</b><p class="card-text ml-2">{ele.rating}<GradeIcon style={{color:"green"}}></GradeIcon></p></td>
                            <td className='d-flex flex-row'><b>Delete<DeleteIcon style={{ color: "red" }} onClick={()=>DeleteCartItem(ele.id)}></DeleteIcon></b><p class="card-text ml-2"></p></td>
                            

                          </tr>
                        </table>
                      </div>
                      {/* <div className='d-flex align-items-center justify-content-center mt-4'>
                        <button class="btn btn-primary" onClick={(e) => handleOrder(ele.id)}>Order Now</button>
                      </div> */}

                    </div>
                  </div>



                </div>

              )
            }

          })
        }

      </div>

    </div>
  )
}

export default Cart