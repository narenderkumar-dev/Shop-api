import { Routes, Route } from 'react-router-dom';
import './App.css';
import Cart1 from './customer/component/Cart/Cart';
import Check0ut from './customer/component/Checkout/Checkout';

import Footer from './customer/component/Footer/Footer';
import {Navigation} from './customer/component/Navigation/Navigation';
import Order from './customer/component/Order/Order';
import OrderDetails from './customer/component/Order/OrderDetails';
import OrderTracker from './customer/component/Order/OrderTracker';
import ProductCard from './customer/component/Product/ProductCard';
import ProductPage from './customer/component/Product/ProductPage';
import ProductDetails from './customer/component/ProductDetails/ProductDetails';

import Homepages from './customer/pages/Homepages/Homepages';
import CustomerRouter1 from './Router/CustomerRouter';
import AdminRouter from './Router/AdminRouter';

function App() {
  return (
    <div className="">
      <div >
      <Routes>
        <Route path='/*' element={<CustomerRouter1/>}></Route>
        <Route path='/Admin/*' element={<AdminRouter/>}></Route>
      </Routes>
      
      </div>
      
      <div >
      {/* <Homepages/> */}
      {/* <ProductPage/> */}
      {/* <ProductDetails/> */}
      {/* <Cart1/> */}
      {/* <Check0ut/> */}
      {/* <Order/> */}
      {/* <OrderDetails/> */}
      </div>
      {/* <div>
        <Footer/>
        
      </div> */}
    </div>
    
  );
}

export default App;
