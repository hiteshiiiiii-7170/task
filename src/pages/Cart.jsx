import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem';

const Cart = () => { 

    const {cart} = useSelector((state)=>state);
    console.log(cart);
    const [totalAmount,setTotaAmount] = useState(0);

    useEffect(()=>{
        setTotaAmount( cart.reduce((acc,curr)=>acc+curr.price,0));
    },[cart])

  return (
    <div className='flex flex-col justify-center items-center'>
      {
        cart.length > 0 ? 
        (
            <div className='flex gap-x-10 w-full sm:flex-row'>


               <div className='flex flex-col justify-center items-center  '>
                {
                    cart.map((item,index)=>
                    {return <CartItem key={item.id} item={item} 
                    itemIndex = {index}/>})
                }
               </div>
             <div  className='flex  flex-col items-stretch mt-12 ml-16'>
               <div>
                <div className='text-green-600 font-semibold text-[24px]'>Your Cart</div>
                <div className='text-green-600 font-semibold text-[30px]'>Summary</div>
                <p className='text-black font-bold text-[16px] mt-12'>
                    <span>Total Items : {cart.length}</span>
                </p>
               </div>

               <div className='mb-[12px] flex flex-col gap-y-3'>
                <p className='text-black font-bold text-[20px] mt-16'>Total Amount : {totalAmount}</p>
                <button className='bg-green-500 rounded-lg p-1 text-white border-4 border-green-600 font-bold w-[280px]'>
                    Checkout Now
                </button>
               </div>

              </div>


            </div>
        )
        :
        (
            <div className='py-4  text-center flex flex-col items-center justify-center gap-y-4 mt-[160px]'> 
                <h1 className='text-[1.4rem] font-semibold '>Cart is Empty!!</h1>
                <Link to='/'>
                    <button className='bg-green-500 rounded-lg p-2 text-white border-4 border-green-600 font-bold '>
                        Shop Now
                    </button>
                </Link>
            </div>
        )
      }  
    </div>
  )
}

export default Cart;
