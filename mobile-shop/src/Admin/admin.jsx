import { CssBaseline, Drawer, ListItemText, Toolbar, useTheme } from '@mui/material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, useMediaQuery } from '@mui/material';
import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import EmailIcon from "@mui/icons-material/Email";
import InboxIcon from "@mui/icons-material/Inbox";
import  DashboardIcon  from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AdminDashboard from './Component/Dashboard';
import CustomerTable from './Component/CustomerTable';
import ProductTable from './Component/ProductTable';
import OrdersTable from './Component/OrdersTable';
import CreateProductForm from './Component/CreateProductForm';




const menu=[
    {name: "Dashboard", path: "/admin",icon:<DashboardIcon/>},
    {name: "Products", path: "/admin/products",icon:<DashboardIcon/>},
    {name: "Customers", path: "/admin/customers",icon:<DashboardIcon/>},
    {name: "Orders", path: "/admin/orders",icon:<DashboardIcon/>},
    {name: "AddProduct", path: "/admin/product/create",icon:<DashboardIcon/>},
    // {name: "", path: "/admin"},
]


const Admin = () => {

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible,setSideBarVisible]=useState(false);
    const navigate = useNavigate();

    const drawer = (
        <Box
        sx={{
            overflow:"auto",
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            // border:"1px solid blue",
            height:"100%"
        }}
        >
<>
            {/* {isLargeScreen && <Toolbar/>} */}
            <List>
                {menu.map((item,index)=><ListItem key={item.name} disablePadding onClick={()=>navigate(item.path)}>
                    <ListItemButton>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText>{item.name}</ListItemText>
                    </ListItemButton>
                </ListItem>)}
            </List>
</>

            <List>
                <ListItem  disablePadding >
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon/>
                        </ListItemIcon>
                        <ListItemText>Account</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>

        </Box>
    )


  return (
    <div>
        <div className='flex h-full  sticky-top-0'>
             <CssBaseline/>

            <div className='w-[15%] border border-r-gray-300 h-full'>
                {drawer}
            </div>
            <div className='w-[85%] h-full ml-[15%]'>
                <Routes>
                    <Route path='/' element={<AdminDashboard/>}></Route>,
                    <Route path='/product/create' element={<CreateProductForm/>}></Route>,
                    <Route path='/products' element={<ProductTable/>}></Route>,
                    <Route path='/Orders' element={<OrdersTable/>}></Route>,
                    <Route path='/customers' element={<CustomerTable/>}></Route>
                </Routes>
            </div>
        </div>
    </div>
  )
}

export default Admin