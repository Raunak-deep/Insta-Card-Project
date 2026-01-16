import React from 'react'

const Head = ({job}) => {
  return (
    <div className='flex items-center justify-between  h-25 mb-2'>
      {/* Amazon Logo */}
        <div className='size-15 rounded-full border-zinc-200 border-2 flex items-center justify-center m-5'>
        <img className='rounded-full size-full p-1  object-cover  shadow-2xl shadow-black border-zinc-300 ' src={job.brandLogo} alt={job.company}/>
      </div>
       

     {/* Save logo */}
      <div className='border-2 border-zinc-400 w-25 h-10 m-10 flex items-center justify-center rounded-full'>
        <button className='text-[20px] text-black  '>Save</button>
        <img className='size-7' src="https://cdn.iconscout.com/icon/free/png-256/free-save-logo-icon-svg-download-png-2724646.png?f=webp" alt="Bookmark Logo" />
      </div>
    </div>
  )
}

export default Head
