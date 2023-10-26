import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, } from "react-router-dom"
import Nav from './Component/Nav';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Home from './Component/Home';
import Restaurant from './Component/Restaurant';
import Cart from './Component/Cart';
import Login from './Component/Login';
import Address from './Component/Address';
import Cardsdata from './CardsData';
import { useEffect, useState } from 'react';
import Detail from './Component/Detail';
import { useNavigate } from 'react-router-dom';
import PrivateComponent from './Component/PrivateComponent';
import Logout from './Component/Logout';




function App() {
  console.log(Cardsdata)


  const [stateapp, setapp] = useState()
  let [findItem, setFindItem] = useState([])
  const [findState, setFindState] = useState([])
  const [content, setContent] = useState([])
  const [detail, setdetail] = useState([]);
  const [counter, setCounter] = useState(1)
  const [itemId, setItemId] = useState(0)
  const [data, setData] = useState([])

  const navigate = useNavigate()




  // const handleOrder = (id) => {

  //   // console.log("order now", id)

  //   setdetail(findItem.filter((ele) => ele.id === id))



  // }




  const showdetail = (id) => {

    setdetail(findItem.filter((ele) => ele.id === id))
    // setFindItem(findItem.filter((ele) => ele.id === id))


    navigate("/detail")


  }
  const handleClick1 = (id) => {
    let currentItem = [...findItem]

    let updateItem = currentItem.map((ele) => {

      if (ele.id === id) {
        return { ...ele, qnty: ele.qnty - 1 }
      }
      else {
        return ele
      }

    });
    currentItem = updateItem
    console.log(currentItem)
    setdetail(currentItem.filter((ele) => ele.id === id))
    setFindItem(currentItem)


  }


  const handleClick2 = (id) => {
    let currentItem = [...findItem]

    let updateItem = currentItem.map((ele) => {

      if (ele.id === id) {
        return { ...ele, qnty: ele.qnty + 1 }
      }
      else {
        return ele
      }

    });
    currentItem = updateItem
    console.log(currentItem)
    setdetail(currentItem.filter((ele) => ele.id === id))
    setFindItem(currentItem)



  }

  const DeleteCartItem = (id) => {
    setFindItem(findItem.filter((ele) => ele.id !== id))
    setdetail(detail.filter((ele) => ele.id !== id))
    console.log("delete item", id)
    setapp(findItem.length - 1)
  }

  return (
    <div className="App">

      <Nav stateapp={stateapp} />
      <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route element={<PrivateComponent />}>
         
          <Route path="/Restaurant" element={<Restaurant setapp={setapp} setFindState={setFindState} setFindItem={setFindItem} findItem={findItem} />}></Route>
          <Route path="/Detail" element={<Detail detail={detail} findItem={findItem} counter={counter} DeleteCartItem={DeleteCartItem} handleClick1={handleClick1} handleClick2={handleClick2} itemId={itemId} />}></Route>

          <Route path="/Cart" element={<Cart findState={findState} setapp={setapp} counter={counter} findItem={findItem} detail={detail} showdetail={showdetail} itemId={itemId} DeleteCartItem={DeleteCartItem} />}></Route>
        </Route>
{
  localStorage.getItem('data')?<Route path="/logout" element={<Logout/>}></Route>: <Route path="/login" element={<Login />}></Route>
}
       
        

      </Routes>



    </div>
  );
}

export default App;
