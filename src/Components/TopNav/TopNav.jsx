import React from 'react'
import{Link} from "react-router-dom"
import {FaShoppingCart} from "react-icons/fa"
import "./TopNav.css"
import Cart from '../../Pages/Cart/Cart'

export const TopNav = () => {
  return (
    <div className="top_nav">
      The goldury.com
      <div className='nav_cart'>
        <Link to ="/Cart"><FaShoppingCart /></Link>
      
      </div>
      
    </div>
  )
}
