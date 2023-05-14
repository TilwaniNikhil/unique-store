import React, { useContext } from 'react'
import "./Product.css"
import { ShopContext } from '../../context/ShopContextProvider';
const Product = (props) => {
    const {id,name,price,image}= props.data;
    const {addToCart,cartItems}= useContext(ShopContext);
    const cartItemAmount = cartItems[id]
  return (
    <div className="product">
        <img src={image}/>
        <div className='description'>
            <p>
                <b>{name}</b>
            </p>
            <p>
                ${price}
            </p>
        </div>
        <button className='addToCartBttn' onClick={()=>addToCart(id)}>
            Add To Cart
            {
                cartItemAmount > 0 && <>({cartItemAmount})</>
            }    
        </button>
    </div>
  )
}
export default Product;