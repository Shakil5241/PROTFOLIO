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
        It is a personal portfolio . Own pictures,
Facebook page link , portfolio styles & a whole lot more awaits inside.
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