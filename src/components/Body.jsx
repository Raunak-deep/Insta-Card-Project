import React from 'react'

const Body = ({job}) => {
  return (
    <div className='ml-5 h-40 mb-2'>
      <div className='flex items-center gap-2'>
        <h2 className='text-2xl text-black font-medium'>{job.company}</h2> <span className='mt-2 text-sm'>{job.datePosted}</span>
      </div>
      <div>
        <h1 className='text-3xl font-bold'>{job.post}</h1>
      </div>
      <div className='flex gap-3'>
        <h4 className='rounded border-2 border-white px-2 font-medium'>{job.tag1} </h4>
        <h4 className='rounded border-2 border-white px-2 font-medium'> {job.tag2}</h4>
      </div>
    </div>
  )
}

export default Body
