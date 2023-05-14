import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContextProvider';
import { CartItem } from './CartItem'
import { Earrings } from '../../Data/Data';
import "./Cart.css"
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const {cartItems,getTotalCartAmount} =useContext(ShopContext);
  const total = getTotalCartAmount();
  const navigate=useNavigate();
  return (
    <div className='cart'>
      <div >
        <h1>Your Cart Items </h1>
      </div>
      <div className='cartItems'>
      {
          Earrings.map((product)=>{
          if(cartItems[product.id] !==0 ){
                return <CartItem data={product}/>
                
          } 
        })
      }

      </div>
      {
          total > 0 ? 
          (
            <div className='checkout'>
            <p> SubTotal: ${total}</p>
            <button onClick={()=>navigate("../Products")}>Continue Shopping</button>
            <button>Checkout</button>
            </div>
          ):(
            <h1>Your Cart is Empty</h1>
          )}
    </div>
  )
}
export default Cart;