'use client'
import React from 'react'
import Image from 'next/image'

function DurgaLogo() {
  return (
    <div>
      <Image 
        src="/durgapujo.svg"
        alt="Durga Puja Logo"
        width={800}   // increased width
        height={1200} // increased height
        className="p-3 flex-grow-0 flex-shrink-0 h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96 fill-current"
      />
    </div>
  )
}

export default DurgaLogo



