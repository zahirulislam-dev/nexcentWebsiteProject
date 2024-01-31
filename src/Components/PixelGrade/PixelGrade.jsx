import React from 'react'
import rafikis from '../../assets/images/rafiki.png'

const PixelGrade = () => {
  return (
    <div className='bg-[#FFFFFF] py-[52px]'>
        <div className='max-w-container mx-auto'>
            <div className='flex justify-between'>
                <div>
                    <img src={rafikis} alt="" />
                </div>
                <div>
                    <h2 className='font-inter text-[36px] font-semibold text-primary w-[601px] mb-[16px]'>The unseen of spending three years at Pixelgrade</h2>
                    <p className='font-inter text-[14px] font-regular text-ash w-[601px] mb-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                    <a href="" className='font-inter text-[16px] font-medium text-white bg-secondary py-[14px] px-[32px] rounded-[4px]'>Learn More</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PixelGrade