import React from 'react'
import Header from './Components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Components/Products'
import Cart from './Components/Cart'
import AfterCheckout from './Pages/AfterCheckout'
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/aftercheckout' element={<AfterCheckout/>}></Route>
      </Routes>
    </>
  );
}

export default App;
