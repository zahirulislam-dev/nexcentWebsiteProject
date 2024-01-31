import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

const Demo = () => {
  return (
    <div className='bg-[#F5F7FA] py-[32px]'>
        <div className='max-w-container mx-auto'>
            <div className='text-center items-center justify-center'>
                <h2 className='font-inter text-[64px] font-semibold text-[#263238] w-[887px] mb-[32px] ml-[133px]'>Pellentesque suscipit fringilla libero eu.</h2>
                <div className='w-[200px] m-auto flex items-center justify-center bg-secondary rounded-[4px]'>
                    <a href="" className='font-inter text-[16px] font-medium text-white py-[14px] px-[32px]'>Get a Demo</a>
                    <BsArrowRight className='text-white'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Demo