// components/intro/IntroCarousel.jsx
import React, { useState, useEffect } from "react";
import IntroSlideOne from "./IntroSlideOne";
import IntroSlideTwo from "./IntroSlideTwo";
import { useNavigate } from "react-router-dom";

const IntroCarousel = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem("seenIntro");
    if (hasSeenIntro) {
      navigate("/"); // ✅ Change this line
    }
  }, [navigate]);
  
  const handleFinish = () => {
    localStorage.setItem("seenIntro", "true");
    navigate("/"); // ✅ Change this line too
  };
  

  return (
    <>
      {step === 1 && <IntroSlideOne onNext={() => setStep(2)} />}
      {step === 2 && <IntroSlideTwo onDone={handleFinish} />}
    </>
  );
};

export default IntroCarousel;
