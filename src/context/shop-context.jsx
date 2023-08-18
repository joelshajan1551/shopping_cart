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

  const gettotalcartamount = () => {
    let totalamount = 0;
    console.log(cartitems);
    for (const item in cartitems) {
      console.log(item);
      if (cartitems[item] > 0) {

        let iteminfo = PRODUCTS.find((product) => product.id === Number(item));

        let stringWithoutCommas = iteminfo.price.replace(/,/g, '');
        let integerValue = parseInt(stringWithoutCommas);
        totalamount += cartitems[item] * integerValue
      }
    }
    console.log(totalamount);
    return totalamount;
  };

  const addtocart = (itemid) => {
    setcartitem((prev) => {
      // Check if the current item count is less than 12 before updating
      if (prev[itemid] < 12) {
        return { ...prev, [itemid]: prev[itemid] + 1 };
      } else {
        alert('maximum quantity reached')

        return prev; // Don't update the state if the limit is reached
      }
    });

  };

  const removefromcart = (itemid) => {
    setcartitem((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }))
  };

  const updatecartitemcount = (newamount, itemid) => {
    setcartitem((prev) => ({ ...prev, [itemid]: newamount }))
  }

  const contextValue = {
    cartitems,
    addtocart,
    removefromcart,
    updatecartitemcount,
    gettotalcartamount,
  };


  return (
    <Shopcontext.Provider value={contextValue}>
      {props.children}
    </Shopcontext.Provider>
  )
};
