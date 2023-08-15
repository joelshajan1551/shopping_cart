import React, { useContext } from "react";
import './shop.css'
import { Shopcontext } from '../../context/shop-context'

export const Product = (props) => {
  const { id, productName, price, productimg } = props.data;
  const { addtocart, cartitems } = useContext(Shopcontext);
  const cartitemamount = cartitems[id]
  return (
    <div className="product">
      <img src={productimg} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ₹{price} </p>
      </div>
      <button className="addtocartbtn" onClick={() => addtocart(id)}>
        Add To Cart
      </button>
      {cartitemamount > 0 && <div>Qty:({cartitemamount})</div>}


    </div>
  )
};
