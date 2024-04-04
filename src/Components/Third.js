import React, { useEffect, useState } from 'react'
import pulley from '../images/pulleyblob.mp4'
import { Link } from 'react-router-dom'

const Third = ({ setactiveStep }) => {
  useEffect(()=>{

    setactiveStep(2)
  },[])

    return (
        <div className='flex flex-col pt-24 items-center  gap-12 '>
            <div className='flex flex-col md:flex-row justify-center items-center md:gap-20'>
                <video autoPlay muted loop className='h-[20rem] md:w-[40rem]' src={pulley}></video>
                <div className='flex flex-col justify-center items-start gap-6 md:pl-16 p-4'>
                    <h6 className='text-3xl text-center'>
                        You’re in the right place
                    </h6>
                    <p className='font-light '>
                        Brilliant gets you hands-on to help improve your professional
                        <br />
                        skills and knowledge. You'll interact with concepts and solve
                        <br />
                        fun problems in math, science, and computer science.
                    </p>
                </div>
            </div>
            <Link to={'/fourth'} className={`h-12 w-36 bg-black rounded-md cursor-pointer text-white text-center flex justify-center items-center`}>
                Continue
            </Link>
        </div>
    )
}

export default Third
