import React from 'react';
import { Earrings } from '../../Data/Data';
import Product from './Product';
import "./Product.css"
const Products=()=> {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Earrings</h1>
      </div>
      <div className="products">
        {
          Earrings.map((product)=>(<Product data={product}/> ))
        }
        </div>
    </div>
  );
  
}
export default Products;