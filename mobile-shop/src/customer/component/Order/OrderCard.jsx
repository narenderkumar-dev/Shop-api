import React from 'react'
import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const OrderCard = () => {
    const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src='' alt=''/>
                    <div className='ml-5 space-y-2'>
                        <p className=''>Men Slim Mid Rise Black Jeans</p>
                        <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                        <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                    </div>
                </div>
            </Grid>
            <Grid item xs={2}>
                <p>$10499</p>
            </Grid>
            <Grid item xs={4}>
                {true && <div>
                    <p>
                    <span>Deliverd On March 03</span>
                </p>
                <p className="text-xs">
                    Your item  has been delivered
                </p>
                </div>}
                {false && <p>
                    <span>
                    Expected Delivery On March 03
                    </span></p>}
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard