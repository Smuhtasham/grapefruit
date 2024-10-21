"use client"; 

import React, { useState } from "react";
import TherapeuticAreas from "./TherapeuticArea";
import SelectProtein from "./SelectProtein";
import LoadingVariations from "./LoadingVariations";
import PredictingFunctionality from "./PredictingFunctionality";
import PopulationFrequency from "./PopulationFrequency";
import Report from "./Report";


const Main = () => {
  const [step, setStep] = useState(0); // Track the current step
  const [selectedArea, setSelectedArea] = useState<string>(""); // State for selected therapeutic area
  const [selectedProtein, setSelectedProtein] = useState<string>(""); // State for selected protein
  const [selectedProteinId, setSelectedProteinId] = useState<string>("");


  // Function to go to the next component
  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  // Function to handle therapeutic area selection
  const handleAreaSelect = (area: string) => {
    setSelectedArea(area);
    setStep((prevStep) => prevStep + 1); // Move to the next step
  };

  return (
    <div className="flex flex-col items-center">
      {/* Render components based on the current step */}
      {step === 0 && <TherapeuticAreas onSelectArea={handleAreaSelect} />}
      {step === 1 && (
        <SelectProtein
          setSelectedProtein={setSelectedProtein}
          selectedProtein={selectedProtein}
          onNext={handleNextStep}
          selectedArea={selectedArea}
          setSelectedProteinId={setSelectedProteinId}
        />
      )}
      {step === 2 && (
        <LoadingVariations
          onNext={handleNextStep}
          selectedProteinId={selectedProteinId}
        />
      )}
      {step === 3 && (
        <PredictingFunctionality
          selectedArea={selectedArea}
          onNext={handleNextStep}
        />
      )}
      {/* {step === 4 && <PopulationFrequency onNext={handleNextStep} />}
      {step === 5 && <Report />} */}
    </div>
  );
};

export default Main;
