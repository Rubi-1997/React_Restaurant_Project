import React, { useEffect, useState } from 'react'
import Cardsdata from '../CardsData'
import { NavLink, Navigate } from 'react-router-dom'


let count = 1


const Restaurant = ({ setapp, setFindState, setFindItem, findItem }) => {


  const [data, setData] = useState([])



  // const [cart, setcart] = useState()
  const handleCart = (e) => {
    console.log(e)
    console.log(Cardsdata)
    setData(Cardsdata.filter((ele) => ele.id === e))


    setFindState(e)

    setapp(findItem.length + 1)

  }


  // console.log(data)
  useEffect(() => {
    setFindItem([...findItem, ...data])
  }, [data])


  return (
    <div className='row d-flex align-items-center justify-content-center mt-4 '>
      {
        Cardsdata.map((ele, key) => {

          return (

            <div class="card mb-3 cartItem" style={{ "width": "580px" }} key={key}>
              <div class="row g-0">
                <div className='my-4'><h5 class="card-title"><b>Restaurant: </b><small class="text-muted">{ele.rname}</small></h5></div>
                <div class="col-md-4 align-items-center d-flex">
                  <img src={ele.imgdata} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">

                    <div className='d-flex justify-content-between'><p class="card-text"><b>Dishes:</b><small class="text-muted">{ele.address}</small></p>
                      <p class="card-text"><b>Ratings:</b><small class="text-muted">{ele.rating}</small></p>
                    </div>

                    <div className='d-flex justify-content-between'><p class="card-text"><b>Price:</b><small class="text-muted">{ele.price}</small></p>

                    </div>
                    <p class="card-text ml-4"><b>Overview:</b><small class="text-muted">{ele.somedata}</small></p>


                  </div>


                </div>

                <div className='d-flex align-items-center justify-content-center'>
                  <button className='btn btn-secondary' onClick={() => handleCart(ele.id)} >Add to cart</button>

                </div>
              </div>
            </div>
          )




        })
      }





    </div>
  )
}

export default Restaurant
