import React from 'react'
import logos1 from '../../assets/images/Logo1.png'
import logos2 from '../../assets/images/Logo2.png'
import logos3 from '../../assets/images/Logo3.png'
import logos4 from '../../assets/images/Logo4.png'
import logos5 from '../../assets/images/Logo5.png'
import logos6 from '../../assets/images/Logo6.png'

const Client = () => {
  return (
    <div className='bg-[#FFFFFF] py-[40px]'>
        <div className='max-w-container mx-auto'>
            <div className='text-center'>
                <h3 className='font-inter text-[36px] font-semibold text-primary mb-[8px]'>Our Clients</h3>
                <p className='font-inter text-[16px] font-regular text-ash mb-[51px]'>We have been working with some Fortune 500+ clients</p>
            </div>
            <div className='flex justify-between'>
                <img src={logos1} alt="" />
                <img src={logos2} alt="" />
                <img src={logos3} alt="" />
                <img src={logos4} alt="" />
                <img src={logos5} alt="" />
                <img src={logos6} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Client