import React from 'react'
import {FaShoppingCart} from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

  const {cart} =useSelector((state)=>state);
  return (
    <div>
      <nav className='flex items-center h-20 max-w-6xl justify-between'>
        <NavLink to="/">
            <div className='ml-5'>
        <img src='https://ecomzy-shopping-cart.vercel.app/logo.png' className='h-14 ml-[120px]' alt='img'/> 
            </div>
        </NavLink>
      
        <div className='flex items-center font-medium text-slate-100 mr-5 gap-x-6' >
            <NavLink to='/'>
            <p>Home</p>
            </NavLink>

            <NavLink to='/cart'>
                <div className='relative'>
                <FaShoppingCart className='text-2xl'/>
                { cart.length>0 && (<span className='absolute -top-3 -right-5 bg-green-600 text-xs flex justify-center items-center animate-bounce rounded-full text-white w-5 h-5'>{cart.length}</span>)  }
                
                </div>
           
            </NavLink>
            
        </div>
      </nav>
    </div>
  )
}

export default Navbar
