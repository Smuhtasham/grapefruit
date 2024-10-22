"use client";

import React, { useState } from "react";
import TherapeuticAreas from "./TherapeuticArea";
import SelectProtein from "./SelectProtein";
import LoadingVariations from "./LoadingVariations";
import PredictingFunctionality from "./PredictingFunctionality";
import Report from "./Report";
import PopulationFrequencyMap from "./PopulationFrequencyMap";
import Image from "next/image";
import { RiHome2Fill } from "react-icons/ri";
import { ImArrowLeft } from "react-icons/im";
import { FaArrowLeft } from "react-icons/fa";
import { TbArrowBigUp } from "react-icons/tb";
import { MdHome } from "react-icons/md";

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
  const handleback = () => {
    if (step == 3) {
      setStep((prevStep) => prevStep - 2);
    } else setStep((prevStep) => prevStep - 1); // Move to the next step
  };
  const handlehome = () => {
    setSelectedArea("");
    setSelectedProtein("");
    setSelectedProteinId("");
    setStep(0); // Move to the next step
  };

  return (
    <>
      <div className="relative background-image flex flex-col">
        <div className="flex justify-between px-6 pt-4">
          <Image src={"/Logo.svg"} width={180} height={150} alt="logo" />{" "}
          {step != 0 && (
            <div
              className="flex flex-col text-[#112a54] items-center cursor-pointer"
              onClick={() => handlehome()}
            >
              <MdHome className="text-[36px]" />
              <span className="text-[10px] ">Home</span>
            </div>
          )}
        </div>
        <div className="flex h-[80vh] justify-center">
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
          {step === 4 && <PopulationFrequencyMap onNext={handleNextStep} />}
          {step === 5 && <Report />}
        </div>
        {step != 0 && (
          <div
            className="absolute left-5 bottom-5 flex flex-col justify-center items-center text-[#112a54] cursor-pointer"
            onClick={() => handleback()}
            title="Back" >
            <FaArrowLeft className="text-[32px]" />
          </div>
        )}
      </div>
    </>
  );
};

export default Main;
