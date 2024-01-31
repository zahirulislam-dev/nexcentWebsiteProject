import React from 'react'
import images from '../../assets/images/image9.png'
import logos1 from '../../assets/images/Logo1.png'
import logos2 from '../../assets/images/Logo2.png'
import logos3 from '../../assets/images/Logo3.png'
import logos4 from '../../assets/images/Logo4.png'
import logos5 from '../../assets/images/Logo5.png'
import logos6 from '../../assets/images/Logo6.png'
import rights from '../../assets/images/Right.png'
import {BsArrowRight} from 'react-icons/bs'

const TimSmith = () => {
  return (
    <div className='bg-[#F5F7FA] py-[48px]'>
        <div className='max-w-container mx-auto'>
            <div className='flex'>
                <div className='w-[35%]'>
                    <img src={images} alt="images" />
                </div>
                <div className='w-[65%]'>
                <div>
                    <p className='font-inter text-[16px] font-medium text-ash w-[748px] mb-[16px]'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    <h5 className='font-inter text-[20px] font-medium text-secondary mb-[8px]'>Tim Smith</h5>
                    <p className='font-inter text-[16px] font-regular text-[#89939E] mb-[32px]'>British Dragon Boat Racing Association</p>
                </div>
                <div className='flex justify-between items-center'>
                    <img src={logos1} alt="" />
                    <img src={logos2} alt="" />
                    <img src={logos3} alt="" />
                    <img src={logos4} alt="" />
                    <img src={logos5} alt="" />
                    <img src={logos6} alt="" />
                    <a href="" className='font-inter text-[20px] font-semibold text-secondary'>Meet all customers</a>
                    <BsArrowRight className='text-secondary'/>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TimSmith