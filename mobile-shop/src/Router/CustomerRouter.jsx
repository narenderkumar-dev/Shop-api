import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart1 from '../customer/component/Cart/Cart'
import Product from '../customer/component/Product/ProductPage'
// import Navigation from '../customer/component/Navigation/Navigation'
import Homepages from '../customer/pages/Homepages/Homepages'
import Footer from '../customer/component/Footer/Footer'
import Header from '../customer/component/Navigation/Header'
import ProductDetails from '../customer/component/ProductDetails/ProductDetails'
import Check0ut from '../customer/component/Checkout/Checkout'
import Order from '../customer/component/Order/Order'
import OrderDetails from '../customer/component/Order/OrderDetails'

const CustomerRouter1 = () => {
  return (
    <div>
        <div>
          <Header/>
        </div>
        <Routes>
            <Route path='/login' element={<Homepages/>}></Route>
            <Route path='/register' element={<Homepages/>}></Route>
            <Route path='/' element={<Homepages/>}></Route>
            <Route path='/cart' element={<Cart1/>}></Route>
            <Route path='/:levelOne/:levelTwo ' element={<Product/>}></Route>
            <Route path='/product/:productId' element={<ProductDetails/>}></Route>
            <Route path='/checkout' element={<Check0ut/>}></Route>
            <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
            <Route path='/account/order' element={<Order/>}></Route>
        </Routes>
        
        <div>
        <Footer/>
      </div>
    </div>
  )
}

export default CustomerRouter1