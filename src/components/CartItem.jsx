import React from 'react'
import {FcDeleteDatabase} from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/Slices/CartSlice';

import { toast } from 'react-hot-toast';
const CartItem = ({item,itemIndex}) => {

  const dispatch = useDispatch();
  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.error("Item removed");
  }
  return (
    <div className='px-5 py-4'>
      <div className='flex flex-row items-center justify-center border-b-[1px] border-gray-500 w-[50vw] p-5 gap-x-6 sm:items-center'>
        <div className='h-[180px]' >
          <img src={item.image} alt='img' className='w-[200px] h-full'/>
        </div>
        <div>
        <h1 className='font-bold text-[18px] '>{item.title}</h1>
       
        <p className=' text-gray-500 font-normal text-[14px] text-left'>
          {item.description.split(" ").slice(0,15).join(" ")+"..."}</p>
        <div className='flex mt-20 justify-between'>
            <p className='text-green-600 font-semibold text-[16px] '>${item.price}</p>
            <div onClick={removeFromCart} className='cursor-pointer'>
                <FcDeleteDatabase className='w-6 h-6'/>
            </div>
        </div>

      </div>
      </div>
    </div>
  )
}

export default CartItem
