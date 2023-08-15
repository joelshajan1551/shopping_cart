import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const Shopcontext = createContext(null);

const getdefaultcart = () => {
  let cart = {}
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0
  };
  return cart;
};

export const Shopcontextprovider = (props) => {
  const [cartitems, setcartitem] = useState(getdefaultcart());

  const addtocart = (itemid) => {

    setcartitem((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }))
  };

  const removefromcart = (itemid) => {
    setcartitem((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }))
  };

  const contextValue = { cartitems, addtocart, removefromcart };
  console.log(cartitems);


  return (
    <Shopcontext.Provider value={contextValue}>
      {props.children}
    </Shopcontext.Provider>
  )
};
