"use client";
import { areaProteinData } from "@/Utils/areaProteinData";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface PropsType {
  onNext: () => void;
  setSelectedProtein: React.Dispatch<React.SetStateAction<string>>;
  setSelectedProteinId: React.Dispatch<React.SetStateAction<string>>;
  selectedProtein: string;
  selectedArea: string;
}

const SelectProtein: React.FC<PropsType> = ({
  onNext,
  selectedArea,
  setSelectedProtein,
  setSelectedProteinId,
  selectedProtein,
}) => {
  // New state for storing protein ID

  // Handle selecting a protein
  const handleProteinSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value;
    setSelectedProtein(selected);

    const selectedProteinObj = areaProteinData[selectedArea]?.find(
      (protein) => protein.name === selected
    );

    if (selectedProteinObj) {
      setSelectedProteinId(selectedProteinObj.id); // Set the protein ID state
    }
  };

  // Get proteins for the selected therapeutic area
  const proteins = areaProteinData[selectedArea] || [];

  return (
    <div className="flex h-[100vh] w-[80%] items-center">
      <div className="flex flex-col gap-8 justify-center items-center w-[80%] mx-auto rounded-xl h-[80vh] border-4 border-red-600">
        <div className="flex flex-col justify-center gap-8 items-center h-screen">
          {/* Title */}
          <div className="font-semibold text-6xl text-[#976CFB] mb-6">
            Select Protein
          </div>

          {/* Protein Select Box */}
          <div className="flex gap-2">
            <div className="relative w-[300px]">
              <select
                value={selectedProtein}
                onChange={handleProteinSelect}
                className="w-full py-3 px-4 border-2 text-center border-[#976CFB] text-[#976CFB] rounded-sm appearance-none text-xl focus:outline-none"
              >
                <option value="">Select Protein</option>
                {proteins.map((protein) => (
                  <option key={protein.id} value={protein.name}>
                    {protein.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center pointer-events-none">
              <IoMdArrowDropdown style={{ color: "red", fontSize: "20px" }} />
            </div>
          </div>


          {/* Select Button */}
          <button
            onClick={onNext}
            className="bg-[#FFCD6A] text-white font-semibold px-4 mt-6 rounded-full text-2xl"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectProtein;
