import { Grid } from '@mui/material'
import React from 'react'
import Achievement from './Achievement'
import MonthlyOverView from './MonthlyOverView'
import OrdersTableView from '../View/OrderTableView'
import ProductTable from '../Component/ProductTable'
import ProductTableView from '../View/ProductTableView'


const AdminDashboard = () => {
  return (
    <div className='p-10'>
      <Grid container spacing={2}>
        <Grid className='shadow-lg shadow-gray-600' item sm={12} md={4}>
          <Achievement/>
        </Grid>
        <Grid className='shadow-lg shadow-gray-600' item sm={12} md={8}>
          <MonthlyOverView/>
        </Grid>
        <Grid className='shadow-lg shadow-gray-600' item sm={12} md={6}>
          <OrdersTableView/>
        </Grid>
        <Grid className='shadow-lg shadow-gray-600' item sm={12} md={6}>
          <ProductTableView/>
        </Grid>
      </Grid>
    </div>
  )
}

export default AdminDashboard