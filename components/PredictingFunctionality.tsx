"use client";
import { dummyProteinData } from "@/Utils/dummyProteinData";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface PropsType {
  onNext: () => void; // Define the type of the onNext prop
  selectedArea: string; // Add the selected therapeutic area as a prop
}

const PredictingFunctionality: React.FC<PropsType> = ({ onNext }) => {
  const [selectedGoLabel, setSelectedGoLabel] = useState(""); // State for selected GoLabel
  const [loading, setLoading] = useState(false); // State to manage loading

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGoLabel(event.target.value);
  };

  return (
    <div className="flex w-[80%] items-center ">
      <div className="flex flex-col gap-8 justify-center items-center w-[80%] mx-auto rounded-xl h-[50vh]">
        <div className="flex flex-col py-6 gap-8 items-center h-screen">
          <div className="font-semibold text-6xl text-[#112a54] mb-6">
            Predicting Functionality
          </div>

          {/* Loading State */}
          {loading ? (
            <div>Loading GoLabels...</div>
          ) : (
            <>
              <div className="flex gap-2">
                <div className="relative w-[300px]">
                  <select
                    value={selectedGoLabel}
                    onChange={handleSelect}
                    className="w-full py-2 px-4 border-[3px] text-center border-red-500 text-[#112a54] appearance-none text-lg focus:outline-none"
                  >
                    <option value="">[ ]</option>
                    {dummyProteinData.data.functional_properties.go_labels.map(
                      (prop) => (
                        <option key={prop} value={prop}>
                          {prop}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>

              {/* Select Button */}
              <button
                onClick={onNext}
                className="bg-[#112a54] text-white font-semibold px-4 mt-6 rounded-full text-xl"
              >
                Select
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PredictingFunctionality;
