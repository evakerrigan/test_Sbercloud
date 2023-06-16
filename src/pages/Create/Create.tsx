import "./Create.css";
import { FormStep1 } from "../../components/FormStep1/FormStep1"
import { FormStep2 } from "../../components/FormStep2/FormStep2";
import { FormStep3 } from "../../components/FormStep3/FormStep3";
import { Dispatch, SetStateAction, useState } from "react";

export interface FormStepProps {
  setActiveStep: Dispatch<SetStateAction<number>>,
}

export const Create = () => {

  const [activeStep, setActiveStep] = useState(0);

  const FormStep = () => {
    switch (activeStep) {
      case 0:
        return <FormStep1 setActiveStep={setActiveStep} />;
      case 1:
        return <FormStep2 setActiveStep={setActiveStep} />;
      case 2:
        return <FormStep3 setActiveStep={setActiveStep} />;
    }
  }

  return (
    <div className="create">
      <div className="progressbar">
        <div
          className="progressbar__line"
          style={{ width: activeStep === 0 ? "0%" : activeStep === 1 ? "50%" : "100%" }}
        >
        </div>
        <div
          className="progressbar__dot dot1"
          style={{ backgroundColor: activeStep === 0 ? "#5558fa" : activeStep === 1 ? "#5558fa" : "#5558fa" }}
        >
          <div
            className="progressbar__image"
            style={{ backgroundImage: activeStep === 0 ? "url('src/assets/images/DotSmall.png')" : activeStep === 1 ? "url('/src/assets/images/CheckSmall.png')" : "url('/src/assets/images/CheckSmall.png')" }}
          >
          </div>
          <div
            className="progressbar__number"
            style={{ color: activeStep === 0 ? "#5558fa" : activeStep === 1 ? "#5558fa" : "#5558fa" }}
          >1</div>
        </div>
        <div
          className="progressbar__dot dot2"
          style={{ backgroundColor: activeStep === 0 ? "" : activeStep === 1 ? "#5558fa" : "#5558fa" }}
        >
          <div
            className="progressbar__image"
            style={{ backgroundImage: activeStep === 0 ? "" : activeStep === 1 ? "url('/src/assets/images/DotSmall.png')" : "url('/src/assets/images/CheckSmall.png')" }}
          >
          </div>
          <div
            className="progressbar__number"
            style={{ color: activeStep === 0 ? "" : activeStep === 1 ? "#5558fa" : "#5558fa" }}
          >2</div>
        </div>
        <div
          className="progressbar__dot dot3"
          style={{ backgroundColor: activeStep === 0 ? "" : activeStep === 1 ? "" : "#5558fa" }}
        >
          <div
            className="progressbar__image"
            style={{ backgroundImage: activeStep === 0 ? "" : activeStep === 1 ? "" : "url('/src/assets/images/DotSmall.png')" }}
          >
          </div>
          <div 
          className="progressbar__number"
          style={{ color: activeStep === 0 ? "" : activeStep === 1 ? "" : "#5558fa" }}
          >3</div>
        </div>
      </div>
      {FormStep()}
    </div>
  )
}