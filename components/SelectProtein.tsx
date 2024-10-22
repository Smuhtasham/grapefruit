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
  const [isOpen, setIsOpen] = useState(false);

  // Handle selecting a protein
  const handleProteinSelect = (proteinName: string) => {
    setSelectedProtein(proteinName);
    const selectedProteinObj = areaProteinData[selectedArea]?.find(
      (protein) => protein.name === proteinName
    );

    if (selectedProteinObj) {
      setSelectedProteinId(selectedProteinObj.id); // Set the protein ID state
    }
    setIsOpen(false); // Close the dropdown after selection
  };

  // Get proteins for the selected therapeutic area
  const proteins = areaProteinData[selectedArea] || [];

  return (
    <div className="flex w-[80%] items-center">
      <div className="flex flex-col gap-8 py-10 justify-center items-center w-[80%] mx-auto">
          {/* Title */}
          <div className="font-semibold text-5xl text-[#112a54] mb-6">
            Select Protein
          </div>

          {/* Custom Protein Select Box */}
          <div className="flex gap-2">
            <div className="relative w-[300px]">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-3 px-4 border-[3px] text-center border-red-500 text-[#112a54] rounded-sm cursor-pointer text-xl"
              >
                {selectedProtein || "[ ]"}
              </div>
              {isOpen && (
                <div className="absolute left-0 h-[250px] overflow-y-scroll scrollbar-hide  right-0 mt-1 bg-white border border-[#112a54] rounded-md shadow-lg z-10">
                  {proteins.map((protein) => (
                    <div
                      key={protein.id}
                      onClick={() => handleProteinSelect(protein.name)}
                      className="py-2 px-4 hover:bg-[#112a54] hover:text-white cursor-pointer"
                    >
                      {protein.name}
                    </div>
                  ))}
                </div>
              )}
              
            </div>
          </div>

          {/* Select Button */}
          <button
            onClick={onNext}
            className="bg-[#112a54] text-white font-semibold px-4 mt-4 rounded-full text-xl"
          >
            Select
          </button>
        </div>
      </div>
  );
};

export default SelectProtein;
