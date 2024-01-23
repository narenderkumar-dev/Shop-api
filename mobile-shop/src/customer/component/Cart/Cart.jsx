import { Button } from '@mui/material'
import CartItem from './CartItem'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {getCart} from '../../../State/Cart/Action'



const Cart1 = () => {
    const navigate=useNavigate();
    const {cart} = useSelector(store=>store);
    const dispatch = useDispatch();
    const handleCheckout=()=>{
        navigate('/checkout?step=2')
    }

    useEffect(()=>{
        dispatch(getCart())
    },[cart.updateCartItems,cart.deleteCartItem])

  return (
    <div className='mt-10'>
        <div className='lg:grid grid-cols-3 lg:px-16 relative'>
            
            <div className='col-span-2 space-y-5'>
                {cart.cart?.cartItems.map(()=><CartItem item={item}/>)}
            </div>
            <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 '>
                <div className='border shadow-xl rounded-lg px-2 py-2'>
                    <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
                    <hr/>
                    <div className='space-y-3 font-semibold mb-10'>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Price</span>
                            <span >{cart.cart?.totalPrice}</span>
                        </div>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Discount</span>
                            <span className='text-green-600'>{cart.cart?.discount}</span>
                        </div>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Delivery Charges</span>  
                            <span className='text-green-600'>Free</span>
                        </div>
                        <div className='flex justify-between pt-3 text-black'>
                            <span className='font-bold'>Total Charges</span>
                            <span className='text-green-600'>{cart.cart?.totalDiscountedPrice}</span>
                        </div>
                    </div>
                    <Button  onClick={handleCheckout}   variant='conatined' className='w-full mt-5' sx={{px:"2.5rem", py:".7rem", bgcolor:"skyBlue"}}>
                        <span className='text-green-800'>Checkout</span>
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart1