import React,{useContext} from "react";
import {PRODUCTS} from "../../products";
import { Shopcontext} from "../../context/shop-context";
import {Cartitem} from './cart-item'
import './cart.css'

export const Cart = () => {
  const { cartitems, gettotalcartamount } = useContext(Shopcontext);
  const totalamount = gettotalcartamount()
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartitems">
        {PRODUCTS.map((product)=>{
          if (cartitems[product.id]!==0){
            return(
              <Cartitem data={product} key={product.id}/>
            )
          }
        })}
      </div>

      <div className="checkout">
        <p>subtotal: ₹{totalamount}</p>
        <button>Continue Shopping</button>
        <button>Checkout</button>
      </div>
    </div>
  )
}