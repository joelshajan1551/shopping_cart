import React from "react";
import { PRODUCTS } from '../../products.js'
import { Product } from "./products.jsx";
// import "./shop.css"
export const Shop = () => {
  return (
    <div className="shop">
      <div className="shoptitle">
        <h1>JOEL's SHOP</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  )
}