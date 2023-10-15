import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import GradeIcon from '@mui/icons-material/Grade';
import Cardsdata from '../CardsData';
import { useNavigate } from 'react-router-dom';




const Cart = ({ findItem, handleOrder, detail,number }) => {

  const navigate=useNavigate()
  
  //   const [detail, setdetail] = useState([]);
  //   console.log(findItem)

    


  //   const handleOrder = (id) => {
  //     console.log("order now", id)

  //     setdetail(findItem.filter((ele) => ele.id === id))




  //   }
const showdetail=()=>{
  navigate("/detail")
}





  return (
    <div>
      <div className='text-center'><h1>Cart Page</h1></div>
      <div className='d-flex justify-content-center align-items-center flex-column' onClick={showdetail}>
        {
          findItem.map((ele, key) => {
            if (findItem) {
              return (
                <div>

                  <div class="card flex-row" style={{
                    width: "40rem",
                    marginTop: "1rem",
                    marginLeft: "1rem"
                  }}>
                    <div className='d-flex align-items-center justify-content-center'>
                      <img src={ele.imgdata} style={{ width: "10rem", height: "14rem" }} class="card-img-top" alt="..." />
                    </div>

                    <div class="card-body">
                      <h5 class="card-title"><solid>Dish Detail</solid> </h5>

                      <div className='d-flex justify-content-between'>
                        <table>
                          <tr >
                            <td className='d-flex flex-row'><b>Dishes :</b><p class="card-text ml-2">{ele.address}</p></td>
                            <td className='d-flex flex-row'><b>Price :</b><p class="card-text ml-2">{ele.price}</p></td>

                            <td className='d-flex flex-row'><b>Qty:</b><p class="card-text ml-2">{number}</p></td>


                          </tr>
                        </table>
                        <table className=''>
                          <tr >
                            <td className='d-flex flex-row'><b>Rating :</b><p class="card-text ml-2">{ele.rating}<GradeIcon></GradeIcon></p></td>
                            <td className='d-flex flex-row'><b>Delete<DeleteIcon style={{ color: "red" }}></DeleteIcon></b><p class="card-text ml-2"></p></td>


                          </tr>
                        </table>
                      </div>
                      <div className='d-flex align-items-center justify-content-center mt-4'>
                        <a href="#" class="btn btn-primary" onClick={(e) => handleOrder(ele.id)}>Order Now</a>
                      </div>

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