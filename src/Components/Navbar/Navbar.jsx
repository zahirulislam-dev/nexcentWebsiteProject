import React from 'react'
import logo from '../../assets/images/Logo.png'

const Navbar = () => {
  return (
    <div className='bg-[#F5F7FA]'>
        <div className='max-w-container mx-auto py-[30px]'>
            <div className='flex items-center'>
            <div className='w-[20%]'>
                <img src={logo} alt="logo" />
            </div>
            <div className='w-[60%]'>
                <ul className='flex justify-between'>
                    <li><a href="" className='font-inter text-base font-medium text-[#18191F]'>Home</a></li>
                    <li><a href="" className='font-inter text-base font-medium text-[#18191F]'>Service</a></li>
                    <li><a href="" className='font-inter text-base font-medium text-[#18191F]'>Feature</a></li>
                    <li><a href="" className='font-inter text-base font-medium text-[#18191F]'>Product</a></li>
                    <li><a href="" className='font-inter text-base font-medium text-[#18191F]'>Testimonial</a></li>
                    <li><a href="" className='font-inter text-base font-medium text-[#18191F]'>FAQ</a></li>
                </ul>
            </div>
            <div className='w-[20%]'>
                <div className='flex justify-end items-center'>
                    <a href="" className='font-inter text-sm font-medium text-secondary'>Login</a>
                    <a href="" className='font-inter text-sm font-medium text-white ml-[14px] px-[20px] py-[10px] rounded-md bg-secondary'>Sign up</a>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar