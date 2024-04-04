import React, { useState } from 'react'
import Stepper from './Stepper'
import book from '../images/book.png'
import math from '../images/math.png'
import earth from '../images/earth.png'
import graph from '../images/graph.png'
import target from '../images/target.png'
import someelse from '../images/someelse.png'
import { Link, useNavigate } from 'react-router-dom'

const Second = ({ setactiveStep }) => {
    setactiveStep(1)

    const learntypes = [
        {
            id: 1,
            img: graph,
            text: "Learning specific skills to advance my career"
        },
        {
            id: 2,
            img: earth,
            text: "Exploring new topics I'm interested in"
        },
        {
            id: 3,
            img: math,
            text: "Refreshing my math foundations"
        },
        {
            id: 4,
            img: target,
            text: "Exercising my brain to stay sharp"
        },
        {
            id: 5,
            img: someelse,
            text: "Excelling in school"
        },
    ]

    const [isSelected, setIsSelected] = useState(false)

    return (
        <>
            <div className='flex flex-col justify-start  items-center pt-6  gap-5 p-2'>
                <h1 className='text-3xl text-center'>Which are you most interested in?</h1>
                <h3 className='text-gray-500 text-center font-light text-[0.9rem]'>Choose just one. This will help us get you started (but won't limit your experience).</h3>
                <div className='flex flex-col gap-3 pt-5 justify-center items-center'>
                    {learntypes.map((user, index) => (
                        <div tabIndex={0} key={index} onClick={() => (setIsSelected(true))} className='w-full md:w-[32rem] h-16 p-2 border-[1px] 
                        rounded border-grey-300 hover:scale-[1.01] active:shadow-[0_3px_10px_0px_rgba(0,0,0,0.1)]
                         active:border-yellow-400 focus:shadow-[0_3px_10px_0px_rgba(0,0,0,0.1)]
                         focus:border-yellow-400 duration-200 text-gray-400 
                         font-light flex items-center gap-5 cursor-pointer'>
                            <img src={user.img} className='h-6 md:h-8 pl-6' alt={user.text} />
                            <span className='text-black'>{user.text}</span>
                        </div>
                    ))}
                    <Link to={`${isSelected ? '/third' : "/second"}`} className={`h-12 w-36 ${isSelected ? "bg-black" : "bg-gray-300"} rounded-md cursor-pointer text-white text-center flex justify-center items-center`}>
                        Continue
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Second
