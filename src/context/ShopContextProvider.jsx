import React, { createContext, useState } from 'react'
import { Earrings } from '../Data/Data';
export const ShopContext = createContext(null);
const getDefaultCart =()=>{
  let cart={};
  for(let i=1;i<Earrings.length+1;i++){
    cart[i]=0;
  }
  return cart;  
}
const ShopContextProvider = (props) => {
  const [cartItems,setCartItems]=useState(getDefaultCart());

  const getTotalCartAmount=()=>{
    let total=0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        let itemInfo=Earrings.find((product)=>product.id===Number(item));
        total += cartItems[item] * itemInfo.price
      }
    }
    return total;
  }

  const addToCart = (id)=>{ 
    setCartItems((prev)=>({...prev,[id]: prev[id]+1}))
  }
  const removeFromCart = (id)=>{ 
    setCartItems((prev)=>({...prev,[id]: prev[id]-1}))
  }

  const updateCartItemCount =(newAmount,itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:newAmount}))
  }

  const contextValue={cartItems,addToCart,removeFromCart,updateCartItemCount,getTotalCartAmount}
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
export default ShopContextProvider