import React, { createContext } from "react";

export const shopcontext = createContext(null);

const getdefaultcart = () => {
  let cart = {}
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0
  };
  return cart;
};

export const shopcontextprovider = (props) => {
  const [cartitems, setcartitem] = useState();

  const addtocart = (itemid) => {
    setcartitem((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }))
  };

  const removefromcart = (itemid) => {
    setcartitem((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }))
  };

  const contextValue = { cartitems, addtocart, removefromcart };

  return <shopcontext.provider value={contextValue}>{props.children}</shopcontext.provider>
};
