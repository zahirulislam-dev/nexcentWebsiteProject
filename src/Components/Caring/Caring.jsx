import React from 'react'
import images18 from '../../assets/images/image18.png' 
import images19 from '../../assets/images/image19.png' 
import images20 from '../../assets/images/image20.png' 
import {BsArrowRight} from 'react-icons/bs'

const Caring = () => {
  return (
    <div className='bg-[#ffffff] pt-[48px] pb-[85px]'>
        <div className='max-w-container mx-auto'>
            <div>
                <div className='text-center'>
                    <h3 className='font-inter text-[36px] font-semibold text-primary mb-[8px]'>Caring is the new marketing</h3>
                    <p className='font-inter text-[16px] font-regular text-ash w-[628px] mb-[16px] ml-[260px]'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
                </div>
                    <div className='flex justify-between mb-[84px]'>
                        <div className='relative'>
                            <img src={images18} alt="" />
                            <div className='text-center py-[16px] px-[16px] h-[176px] w-[317px] bg-[#F5F7FA] rounded-[8px] shadow-shad2 absolute top-[185px] left-[26px] z-[1]'>
                                <p className='font-inter text-[20px] font-semibold text-ash w-[285px] mb-[16px]'>Creating Streamlined Safeguarding Processes with OneRen</p>
                            <div className='flex items-center justify-center'>
                                <a href="" className='font-inter text-[20px] font-semibold text-secondary'>Readmore</a>
                                <BsArrowRight className='text-secondary'/>
                            </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <img src={images19} alt="" />
                            <div className='text-center py-[16px] px-[16px] h-[176px] w-[317px] bg-[#F5F7FA] rounded-[8px] shadow-shad2 absolute top-[185px] left-[26px] z-[1]'>
                                <p className='font-inter text-[20px] font-semibold text-ash w-[285px] mb-[16px]'>What are your safeguarding responsibilities and how can you manage them?</p>
                            <div className='flex items-center justify-center'>
                                <a href="" className='font-inter text-[20px] font-semibold text-secondary'>Readmore</a>
                                <BsArrowRight className='text-secondary'/>
                            </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <img src={images20} alt="" />
                            <div className='text-center py-[16px] px-[16px] h-[176px] w-[317px] bg-[#F5F7FA] rounded-[8px] shadow-shad2 absolute top-[185px] left-[26px] z-[1]'>
                                <p className='font-inter text-[20px] font-semibold text-ash w-[285px] mb-[16px]'>Revamping the Membership Model with Triathlon Australia</p>
                            <div className='flex items-center justify-center'>
                                <a href="" className='font-inter text-[20px] font-semibold text-secondary'>Readmore</a>
                                <BsArrowRight className='text-secondary'/>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Caring