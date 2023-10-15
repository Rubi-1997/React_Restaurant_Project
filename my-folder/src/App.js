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




function App() {
  console.log(Cardsdata)


  const [stateapp, setapp] = useState()
  const [findItem, setFindItem] = useState([])
  const [findState, setFindState] = useState([])
  const [content, setContent] = useState([])
  const [detail, setdetail] = useState([]);
  const [number, setNumber] = useState()




  const handleOrder = (id) => {

    // console.log("order now", id)

    setdetail(findItem.filter((ele) => ele.id === id))



  }


  console.log(detail)





  return (
    <div className="App">

      <BrowserRouter>
        <Nav stateapp={stateapp} />
        <Routes>
          <Route path="/" element={<Home />}>

          </Route>
          <Route path="/Restaurant" element={<Restaurant setapp={setapp} setFindState={setFindState} setFindItem={setFindItem} findItem={findItem} />}>

          </Route>

          <Route path="/login" element={<Login />}>

          </Route>
          <Route path="/Detail" element={<Detail detail={detail} setNumber={setNumber} />}>

          </Route>

          <Route path="/Cart" element={<Cart findState={findState} findItem={findItem} handleOrder={handleOrder} detail={detail} number={number} />}>

          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
