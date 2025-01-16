import Guidelines from '@/components/pages/code-of-conduct/Guidelines'
import BottomLines from '@/components/pages/home/BottomLines'
import TopLines from '@/components/pages/home/TopLines'
import React from 'react'

const page = () => {
  return (<>
   <TopLines className="absolute top-0 left-0 -ml-56 -mt-10 sm:-ml-28 sm:-mt-14 md:-ml-16 md:-mt-14 opacity-70 sm:p-5 " />
    <div className='mt-28'>
       <h2 className="font-Encode_Sans sm:text-xl lg:text-4xl text-center   uppercase text-hero">Community Guidelines</h2>
      <h1 className="font-iceberg text-4xl lg:text-7xl mt-6 dark:text-white text-onhold text-center ">  <span className="text-hero"> Anti Harassment Policy </span> <br/> For Members and Participants</h1>
      <h3 className="font-Encode_Sans text-md lg:text-xl mt-7 text-center dark:text-white text-onhold">To ensure a safe, supportive, and productive environment for all members, please follow these community guidelines: </h3>
    <Guidelines/>
    
    </div>
    <BottomLines className="float-right -mt-96 opacity-30 z-0" /></>
    
  )
}

export default page