import React from 'react'
import { Link } from 'react-router-dom'
import cheerleaderblor from '../images/cheerleaderblor.mp4'
import ReactStars from 'react-stars'

const Fifth = ({ setactiveStep }) => {
    setactiveStep(4)

    return (
        <div className='flex flex-col items-center '>
            <div className='flex flex-col md:flex-row justify-center items-center gap-12 md:ml-28'>
                <video autoPlay muted loop className='h-[16rem] md:w-[24rem] lg:w-[32rem]' src={cheerleaderblor}></video>
                <div className='flex flex-col justify-center items-start gap-6 p-4 md:p-0 md:pl-8 lg:p-36 '>
                    <h6 className='text-3xl'>
                        You're on your way!
                    </h6>
                    <ReactStars size={24} color1={'#FFB000'} color2='#FFB000' value={5} />
                    <p className='italic font-light text-sm md:text-base lg:text-lg'>
                        "Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations."
                    </p>
                    <p className='italic font-light text-sm md:text-base lg:text-lg'>
                        - Jacob S.
                    </p>
                </div>
            </div>
            <Link to={'/sixth'} className={`h-12 w-36 bg-black rounded-md cursor-pointer text-white text-center flex justify-center items-center`}>
                Continue
            </Link>
        </div>
    )
}

export default Fifth
