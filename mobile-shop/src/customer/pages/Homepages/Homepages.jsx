import React from 'react'
import MainCarousel from '../../component/Homecarousel/maincarousel'    
import HomeSectionCarousel from '../../component/HomeSectionCarousel/HomeSectionCarousel'
// import ProductCardSlider from '../../component/latest/ProductCardSlider'
import mens_kurta from "../../../Data/men_kurta";
import Footer from '../../component/Footer/Footer';
import Category from '../../component/Category/Category';
import Category_home from '../../component/Category/Category';
import Product from '../../component/Product/ProductPage';





const Homepages = () => {
  return (
    <div className='space-y-5'> 
        
       <div>
       <MainCarousel/>
       </div>
        <div >
          <HomeSectionCarousel data={mens_kurta} sectionName={"Top products"}/>
          {/* <HomeSectionCarousel  data={mens_kurta} sectionName={"Latest Arrival"}/> */}
          
        </div>
        {/* <Category_home/> */}
        {/* <Productsid/> */}
        {/* <Homepages/> */}
      <Product/>
      {/* <ProductDetails/> */}
      {/* <Cart1/> */}
      {/* <Check0ut/> */}
      {/* <Order/> */}
      {/* <OrderDetails/> */}
        
    </div>
  )
}

export default Homepages