import React from 'react'
import icons1 from '../../assets/images/Icon1.png'
import icons2 from '../../assets/images/Icon2.png'
import icons3 from '../../assets/images/Icon3.png'

const Community = () => {
  return (
    <div className='bg-[#FFFFFF]'>
        <div className='max-w-container mx-auto'>
                <div className='text-center'>
                    <h5 className='font-inter text-[36px] font-semibold text-primary w-[542px] mb-[8px] ml-[298px]'>Manage your entire community in a single system</h5>
                    <h6 className='font-inter text-[16px] font-regular text-ash mb-[40px]'>Who is Nextcent suitable for?</h6>
                </div>
                <div className='flex justify-between'>
                    <div className='bg-[#fff] shadow-shad rounded-[8px] text-center py-[24px] px-[24px]'>
                        <div><img src={icons1} alt="icons1" className='ml-[93px]'/></div>
                        <h3 className='font-inter text-[28px] font-bold text-primary w-[267px] mb-[8px]'>Membership Organisations</h3>
                        <p className='font-inter text-[14px] font-regular text-primary w-[251px]'>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                    <div className='bg-[#fff] shadow-boxshad rounded-[8px] text-center py-[24px] px-[24px]'>
                        <div><img src={icons2} alt="icons2" className='ml-[93px]'/></div>
                        <h3 className='font-inter text-[28px] font-bold text-primary w-[267px] mb-[8px]'>National Associations</h3>
                        <p className='font-inter text-[14px] font-regular text-primary w-[251px]'>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                    <div className='bg-[#fff] shadow-boxshad rounded-[8px] text-center py-[24px] px-[24px]'>
                        <div><img src={icons3} alt="icons3" className='ml-[77px]'/></div>
                        <h3 className='font-inter text-[28px] font-bold text-primary w-[231px]'>Clubs And Groups</h3>
                        <p className='font-inter text-[14px] font-regular text-primary w-[251px]'>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Community