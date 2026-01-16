import React from 'react'
import Head from './Head'
import Body from './Body'
import Footer from './Footer'

const Card = ({job}) => {
  return (
    <div className='size-90 bg-white m-5 rounded-3xl shadow-2xl shadow-black hover:scale-106 transition-transform duration-700'>
      <Head job={job} />
      <Body job={job}/>
      <Footer job={job}/>
    </div>
  )
}

export default Card
