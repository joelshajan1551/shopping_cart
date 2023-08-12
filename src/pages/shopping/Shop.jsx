import React from "react";
import { PRODUCTS } from '../../products.js'

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shoptitle">
        <h1>JOEL's SHOP</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Products />
        ))}
      </div>
    </div>
  )
}