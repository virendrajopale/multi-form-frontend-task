import React, { useState } from 'react'
import student from '../images/student.png'
import lifelong from '../images/life.png'
import other from '../images/other.png'
import parent from '../images/parent.png'
import professional from '../images/professional.png'
import teacher from '../images/teacher.png'
import { Link, useNavigate } from 'react-router-dom'

const First = ({ setactiveStep }) => {
    setactiveStep(0)

    const usertypes = [
        {
            id: 1,
            img: student,
            text1: "Student",
            text2: " or soon to be enrolled"
        },
        {
            id: 2,
            img: professional,
            text1: "Professional",
            text2: " pursuing a career"
        },
        {
            id: 3,
            img: parent,
            text1: "Parent",
            text2: " of a school-age child"
        },
        {
            id: 4,
            img: lifelong,
            text1: "Lifelong learner",
            text2: null
        },
        {
            id: 5,
            img: teacher,
            text1: "Teacher",
            text2: null
        },
        {
            id: 6,
            img: other,
            text1: "Others",
            text2: null
        },
    ];

    const navigate = useNavigate()
    const [isSelected, setIsSelected] = useState(false)

    return (
        <div className='flex flex-col justify-start items-center pt-6  gap-6'>
            <h1 className='text-3xl text-center'>Which describes you best?</h1>
            <h3 className='text-gray-500 font-light text-[0.9rem] text-center'>This will help us personalize your experience.</h3>
            <div className='flex flex-col gap-3 pt-3 justify-center items-center pb-4'>
                {usertypes.map((user, index) => (
                    <div tabIndex={0} key={index} onClick={() => (setIsSelected(true))} className='w-full md:w-[32rem] h-16 p-2 border-[1px] rounded border-grey-300 hover:scale-[1.01] 
                    active:shadow-[0_3px_10px_0px_rgba(0,0,0,0.1)] active:border-yellow-400 
                    focus:shadow-[0_3px_10px_0px_rgba(0,0,0,0.1)] focus:border-yellow-400 duration-200 text-gray-400 font-light flex items-center gap-5 cursor-pointer'>
                        <img src={user.img} className='h-8 pl-6' alt={user.text1} />
                        <span><span className='text-black'>{user.text1}</span>{user.text2}</span>
                    </div>
                ))}
                <Link to={`${isSelected ? '/second' : "/"}`} className={`h-12 w-36  ${isSelected ? "bg-black" : "bg-gray-300"} rounded-md cursor-pointer text-white text-center flex justify-center items-center`}>
                    Continue
                </Link>
            </div>
        </div>
    )
}

export default First
