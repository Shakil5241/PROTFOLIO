import React from 'react'
import "./productList.css"
import Product from '../product/product'
import { products } from '../../data'
const ProductList = () => {
  return (
    <div  className="p1">
        <div className="p1-texts">
        <h1 className="pl-title">Create & inspire. It's Shakil</h1>
        <p className="pl-desc">
          Shakil is a creative portfolio that your work has been waiting for.
          Beautiful homes, <br/>stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
        </div>
        <div className="p1-list">
        {products.map((item) => (
          <Product  key={item.id} img={item.img} link={item.link} />
        ))}
            
            
      </div>
    </div>
  );
};

export default ProductList