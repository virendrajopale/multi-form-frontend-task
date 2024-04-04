import React from 'react'
import lock from '../images/lock.png'

const Seventh = ({setactiveStep}) => {
  setactiveStep(5)

  return (
    <div className='flex flex-col justify-center items-center min-h-screen gap-12 px-4 sm:px-6 lg:px-8'>
      <h6 className='text-3xl text-center'>
        Learning paths based on your answers
      </h6>
      <p className='text-gray-500 font-light text-center'>
        Choose one to get started. You can switch anytime.
      </p>
      <div className='flex flex-col gap-6 md:flex-row'>
        <div className='relative'>
          <div className='w-full md:w-[24rem] p-4 border border-gray-400 rounded flex justify-center items-center gap-4'>
            <p className='font-light text-gray-700'>
              <b className='text-black font-bold'>Foundational Math</b> Build your foundational skills in algebra, geometry, and probability.
            </p>
            <img src={lock} className='h-32' alt='Lock Icon' />
          </div>
          <div className='absolute left-0 right-0 ml-auto mr-auto top-[-1rem] rounded-3xl bg-yellow-500 h-8 w-32 text-center'>
            <p className='uppercase text-xs font-semibold flex justify-center items-center h-full'>Most popular</p>
          </div>
        </div>
        <div className='w-full md:w-[24rem] p-4 border border-gray-400 rounded flex justify-center items-center gap-4'>
          <p className='font-light text-gray-700'>
            <b className='text-black font-bold'>Mathematical Thinking</b> Build your foundational skills in algebra, geometry, and probability.
          </p>
          <img src={lock} className='h-32' alt='Lock Icon' />
        </div>
      </div>
    </div>
  )
}

export default Seventh
