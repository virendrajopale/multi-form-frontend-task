import React from 'react';
import arrow from '../images/leftarow.svg';
import { useNavigate } from 'react-router-dom';

const Stepper = ({ activeStep, totSteps }) => {
    const activeColor = (index) => activeStep >= index ? "bg-green-700" : "bg-gray-300";
    const isFinalStep = (index) => index === totSteps - 1;
    const navigate = useNavigate();

    const prev = () => {
        if (activeStep === 4) {
            navigate('/fourth');
        } else if (activeStep === 3) {
            navigate('third');
        } else if (activeStep === 2) {
            navigate('second');
        } else if (activeStep === 1) {
            navigate('/');
        }
    };

    return (
        <div className='flex items-center justify-center mt-10 p-6'>
         {activeStep===0?null: <img src={arrow} onClick={prev}  className='cursor-pointer pr-4'></img>}
            {Array.from({ length: totSteps }).map((_, index) => (
                <React.Fragment key={index}>
                    {isFinalStep(index) ? null : (
                        <div className={`h-1 w-full md:w-52 ${activeColor(index)} `}></div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Stepper;
