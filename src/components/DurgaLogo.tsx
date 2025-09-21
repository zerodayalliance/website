'use client'
import React from 'react'
import Image from 'next/image'

function DurgaLogo() {
  return (
    <div>
      <Image 
        src="/durgapujo.svg"   // path from the public folder
        alt="Durga Puja Logo"
        width={800}
        height={593}
        className="p-3 flex-grow-0 flex-shrink-0 h-28 w-28 sm:h-48 sm:w-48 md:h-60 md:w-60 "
      />
    </div>
  )
}

export default DurgaLogo
