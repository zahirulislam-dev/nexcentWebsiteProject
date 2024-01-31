import React from 'react'
import panas from '../../assets/images/pana.png'

const Design = () => {
  return (
    <div className='bg-[#ffffff] py-[48px]'>
        <div className='max-w-container mx-auto'>
            <div className='flex justify-between items-center'>
                <div>
                    <img src={panas} alt="" />
                </div>
                <div>
                    <h2 className='font-inter text-[36px] font-semibold text-primary w-[601px] mb-[16px]'>How to design your site footer like we did</h2>
                    <p className='font-inter text-[14px] font-regular text-ash w-[601px] mb-[32px]'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                    <a href="" className='font-inter text-[16px] font-medium text-white bg-secondary py-[14px] px-[32px] rounded-[4px]'>Learn More</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Design