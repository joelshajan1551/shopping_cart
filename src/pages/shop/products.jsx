import React from "react";
import './shop.css'

export const Product = (props) => {
  const { id, productName, price, productimg } = props.data;
  return(
    <div className="product">
      <img src={productimg} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price} </p>
      </div>
      <button className="addtocartbtn">Add To Cart</button>
        
    </div>
  )
};
