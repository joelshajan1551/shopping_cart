import React, { useContext } from 'react'
import { Shopcontext } from "../../context/shop-context";

export const Cartitem = (props) => {
  const { id, productName, price, productimg } = props.data;
  const { cartitems, addtocart, removefromcart } = useContext(Shopcontext);

  return (
    <div className="cartitem">
      <img src={productimg} />
      <div className="description">
        <p>
          {" "}
          <b>{productName}</b>
        </p>
        <p>{price}</p>
        <div className="counthandler">
          <button onClick={() => removefromcart(id)}> - </button>
          <input value={cartitems[id]} />
          <button onClick={() => addtocart(id)}> + </button>

        </div>
      </div>
    </div>
  )
}