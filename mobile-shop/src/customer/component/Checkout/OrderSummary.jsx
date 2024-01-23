import React, { useEffect } from "react";
import AddressDetailCard from "../AddressCard/AddressCard";
import { Button } from "@mui/material";
import CartItem from "../Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {getOrderById} from '../../../State/Order/Action'

const OrderSummary = () => {

  const dispatch = useDispatch();
  const location = useLocation();
  const {order} = useSelector(store=>store);
  const searchParams = URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");

  useEffect(()=>{
    dispatch(getOrderById(orderId))
  },[orderId])

  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressDetailCard address={order.order?.shippingAddress}/>
      </div>
      <div className="mt-10">
        <div className="lg:grid grid-cols-3  relative">
          <div className="col-span-2">
            {/* {[1, 1, 1, 1].map(() => (
              <CartItem />
            ))} */}
            {order.order?.orderItems.map((item)=>{
              <CartItem item={item}/>
            })}
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border">
              <p className="uppercase font-bold opacity-60 pb-4">
                Price Details
              </p>
              <hr />
              <div className="space-y-3 font-semibold mb-10">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>${order.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Discount</span>
                  <span className="text-green-600">${order.order?.discount}</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Delivery Charges</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span className="font-bold">Total Charges</span>
                  <span className="text-green-600">${order.order?.totalDiscountedPrice}</span>
                </div>
              </div>
              <Button
                variant="conatined"
                className="w-full mt-5"
                sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
