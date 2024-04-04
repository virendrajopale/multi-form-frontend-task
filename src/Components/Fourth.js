import React, { useState } from 'react'
import eq1 from '../images/eq1.png'
import eq2 from '../images/eq2.png'
import eq3 from '../images/eq3.png'
import eq4 from '../images/eq4.png'
import { Link } from 'react-router-dom'

const Fourth = ({ setactiveStep }) => {
    setactiveStep(3)

    const mathtypes = [
        {
            id: 1,
            img: eq1,
            text1: 'Arithmetic',
            text2: 'Introductory'
        },
        {
            id: 2,
            img: eq2,
            text1: 'Basic Algebra',
            text2: 'Foundational'
        },
        {
            id: 3,
            img: eq3,
            text1: 'Intermediate Algebra',
            text2: 'Intermediate'
        },
        {
            id: 4,
            img: eq4,
            text1: 'Calculus',
            text2: 'Advanced'
        },
    ]

    const [isSelected, setIsSelected] = useState(false)

    const handleSelection = () => {
        setIsSelected(true)
    }

    return (
        <>
            <div className='flex flex-col justify-evenly items-center pt-6 h-[85vh] gap-6 '>
                <div className='flex flex-col justify-between items-center gap-6'>
                    <h1 className='text-3xl text-center'>What is your math comfort level?</h1>
                    <h3 className='font-light text-[1rem] text-center'>Choose the highest level you feel confident in — you can always adjust later.</h3>
                </div>
                <div className='flex flex-wrap gap-3 pt-5 justify-center items-center pb-2'>
                    {mathtypes.map((user, index) => (
                        <div tabIndex={0} key={index} onClick={handleSelection} className='w-[12rem] md:w-[14rem] h-44 p-2 border-[1px] rounded border-grey-300 hover:scale-[1.01] active:shadow-[0_3px_10px_0px_rgba(0,0,0,0.1)] active:border-yellow-400 focus:shadow-[0_3px_10px_0px_rgba(0,0,0,0.1)] focus:border-yellow-400 duration-200 text-gray-400 font-light flex flex-col justify-center items-center gap-5 cursor-pointer'>
                            <img src={user.img} className='h-11' alt={user.text1} />
                            <div className='flex flex-col items-center gap-2'>
                                <h1 className='text-black'>{user.text1}</h1>
                                <h1>{user.text2}</h1>
                            </div>
                        </div>
                    ))}
                </div>
                <Link to={isSelected ? '/fifth' : "/fourth"} className={`h-12 w-36 ${isSelected ? "bg-black" : "bg-gray-300"} rounded-md cursor-pointer text-white text-center flex justify-center items-center`}>
                    Continue
                </Link>
            </div>
        </>
    )
}

export default Fourth
