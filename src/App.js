import { useEffect, useState } from "react";
import Stepper from "./Components/Stepper";
import First from "./Components/First";
import { Route, Routes } from "react-router-dom";
import Second from "./Components/Second";
import Fourth from "./Components/Fourth";
import Third from "./Components/Third";


import Seventh from "./Components/Seventh";
import Fifth from './Components/Fifth'


function App() {
  const [activeStep, setactiveStep] = useState(0);
  const [stepperOn, setStepperOn] = useState(true);
  const totSteps=6;
  const goToNextStep = () => setactiveStep(prev => prev === totSteps - 1 ? prev : prev + 1)
  const goToPreviousStep = () => setactiveStep(prev => prev <= 0 ? prev : prev - 1)
  useEffect(()=>{
    activeStep===5?setStepperOn(false):setStepperOn(true)
  
  },[activeStep])
  
  return (
    <>
  {stepperOn? <Stepper activeStep={activeStep} totSteps={totSteps} goToPreviousStep={goToPreviousStep} setactiveStep={setactiveStep}/>:null}
   
   <Routes>
   <Route exact path="/" element={  <First setactiveStep={setactiveStep}/>}/>
   <Route exact path="/second" element={<Second setactiveStep={setactiveStep} />} />
   <Route exact path="/third" element={<Third setactiveStep={setactiveStep} />} />
   <Route exact path="/fourth" element={<Fourth setactiveStep={setactiveStep} />} />
   <Route exact path="/fifth" element={<Fifth setactiveStep={setactiveStep}/>} />
   <Route exact path="/sixth" element={<Seventh  setactiveStep={setactiveStep}/>} />

   
    
   </Routes>
   
    </>
  );
}

export default App;
