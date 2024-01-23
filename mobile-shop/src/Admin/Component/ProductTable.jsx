import React, { useEffect } from 'react';
import { Avatar, Button, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, findProducts } from '../../State/Product/Action';

const ProductTable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(store => store);
  console.log("product table component data",products);

  const handleProductDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };

  useEffect(() => {
    const data = {
      category:"",
      colors: [],
      sizes:[],
      minPrice: 0,
      maxPrice: 10000,
      minDiscount:0,
      sort: "price_low",
      pageNumber: 1,
      pageSize:1,
      stock:""
    };
    dispatch(findProducts(data));
  }, [dispatch, products.deletedProduct]);

  return (
    <div className='p-5'>
      <Card className='mt-2 '>
        <CardHeader title='All Products'/>
          <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="right">Category</TableCell>
                <TableCell align="right">Tile</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">quantity</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products?.product?.content?.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="right">
                    <Avatar src={item.imageUrl}></Avatar>
                  </TableCell>
                  <TableCell component="th" scope="row">
                      {item.title}
                  </TableCell>
                  <TableCell align="right">{item.category.name}</TableCell>
                  <TableCell align="right">{item.price}</TableCell>
                  <TableCell align="right">{item.quantity}</TableCell>
                  <TableCell align="right">
                    <Button  onClick={()=>handleProductDelete(item._id)} variant='outlined'>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default ProductTable;