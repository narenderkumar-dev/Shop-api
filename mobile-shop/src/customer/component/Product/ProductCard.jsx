import React from 'react'
import "./ProductCard.css"
import mens_kurta from '../../../Data/men_kurta'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${product._id}`)} className='productCard w-[15rem] md:w-[12rem] m-3 transition-all cursor-pointer '>
      <div className='h-[20rem] md:h-[13rem]'>
        <img className='h-full w-full object-cover object-left-top' src={product.imageUrl} alt=""/>
      </div>
      <div className='textPart bg-white p-3'>
        <div>
          <p className='font-bold opacity-60'>{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div className=' flex items-center space-x-4'>
          <p className='font-semibold' >199</p>
          <p className='line-through opacity-50'>1999</p>
          <p className='text-green-600 font-semibold'>70%off</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard