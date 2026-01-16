import React from 'react'

const Footer = ({job}) => {
  return (
    <div>
      <hr className='border-zinc-200'/>
      <div className='flex items-center justify-between m-3 ml-5 mt-3'>
        <div className=''>
        <h3 className='text-[20px] font-medium'>${job.pay} </h3>
        <p className='text-[15px]'>{job.location} </p>
      </div>
      <button className='bg-black text-white px-6 h-10 rounded-2xl duration-900 hover:scale-90 '>Apply Now</button>
      </div>
      
    </div>
  )
}

export default Footer
