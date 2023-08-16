import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { Shopcontext } from "../../context/shop-context";
import { Cartitem } from './cart-item'
import './cart.css'

import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartitems, gettotalcartamount } = useContext(Shopcontext);
  const totalamount = gettotalcartamount()
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartitems">
        {PRODUCTS.map((product) => {
          if (cartitems[product.id] !== 0) {
            return (
              <Cartitem data={product} key={product.id} />
            )
          }
        })}
      </div>
      {totalamount > 0 ? (
        <div className="checkout">

          <p>subtotal: ₹{totalamount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  )
}