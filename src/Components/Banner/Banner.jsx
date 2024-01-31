import React from 'react'
import Banners from '../../assets/images/bannerPic.png'

const Banner = () => {
  return (
    <div className='bg-[#F5F7FA]'>
        <div className='max-w-container mx-auto'>
            <div className='flex py-[96px] justify-between items-center'>
                <div className=''>
                    <h1 className='font-inter text-[64px] font-semibold text-primary w-[546px]'>Lessons and insights <span className='text-secondary'>from 8 years</span></h1>
                    <p className='font-inter text-[16px] font-regular text-ash mt-[16px] mb-[32px]'>Where to grow your business as a photographer: site or social media?</p>
                    <a href="" className='font-inter text-[16px] font-medium text-white bg-secondary py-[14px] px-[32px] rounded-[4px]'>Register</a>
                </div>
                <div className=''>
                    <img src={Banners} alt="Banners" />
                </div>
            </div>
            <div className='flex justify-center pb-[20px]'>
                <svg className='mr-[8px]' xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <circle cx="5" cy="5" r="5" fill="#4CAF4F"/>
                </svg>

                <svg className='mr-[8px]' xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <circle opacity="0.3" cx="5" cy="5" r="5" fill="#4CAF4F"/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <circle opacity="0.3" cx="5" cy="5" r="5" fill="#4CAF4F"/>
                </svg>
            </div>
        </div>
    </div>
  )
}

export default Banner