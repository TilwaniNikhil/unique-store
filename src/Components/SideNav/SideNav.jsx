import React, { useState } from 'react';
import "./SideNav.css"
import{
    FaTh,
    FaUserAlt,
    FaShoppingBag,
    FaBars,
    FaHeart
}from   "react-icons/fa"
import { NavLink } from 'react-router-dom';
const SideNav=({children})=> {
    const[isOpen,setOpen]=useState(false);
    const toggle=()=>setOpen(!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaTh/>
        },
        {
            path:"/Products",
            name:"Products",
            icon:<FaShoppingBag/>
        },
        {
            path:"/Wishlist",
            name:"WishList",
            icon:<FaHeart />
        },
        {
            path:"/About",
            name:"About",
            icon:<FaUserAlt/>
        }
        
    ]
  return (
    <div class="container">
        <div style={{width:isOpen?"200px":"50px"}}className="sidenav">
            <div className="top-section">
                <h1 style={{display:isOpen?"block":"none"}} className="logo">goldury</h1>
                <div style={{marginLeft:isOpen?"50px":"0px"}}className="bars">
                    <FaBars onClick={toggle}/>
                </div>
            </div>  
            {
                menuItem.map((item,index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="acive">
                        <div className='icon'>{item.icon}</div>
                        <div style={{display:isOpen?"block":"none"}}  className='link_text'>{item.name}</div>

                    </NavLink>
                ))
            }  
        </div> 
       <main>{children}</main>
    </div>
  );
  
}
export default SideNav;