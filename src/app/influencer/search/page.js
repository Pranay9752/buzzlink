
"use client"
import NeoBorder from '@/components/global/border'
import React from 'react'
import influencerimg from '../../../../public/assets/img/influencerimg.jpg'
import Image from 'next/image'
 function InfluencerSearch() {
  return (
    <div className='flex flex-col justify-start items-center gap-2 p-4 '>
      <div className="relative w-full ">

        <input
          id="search"
          type="search"
          // onChange={}
          placeholder="Search Influencer"
          className={`w-full  rounded-full focus:outline-none 
                    border-black border-[3px] p-2.5 pl-11 text-black focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#fff99e]/30 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] 
                `}

        />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="absolute top-1/2 -translate-y-1/2 left-4 size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>

      </div>

      <div className='grid grid-cols-2 gap-x-2 gap-y-4 w-full overflow-y-auto h-[75vh]'>

        {
          Array(250).fill(0).map((item, index) => (<NeoBorder
            offset_x={2}
            offset_y={2}
            className="rounded-md p -3 mr-1 h-fit flex flex-col justify-start items-center gap-3 overflow-hidden"
          >
        {/* <Image
            src={influencerimg}
            alt={`Slide ${index + 1}`}
            className='h-52'
            // layout="fill"
            // objectFit="cover"
          /> */}

          </NeoBorder>))
        }

      </div>
    </div>
  )
}

export default InfluencerSearch