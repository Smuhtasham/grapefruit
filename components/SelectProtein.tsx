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
    <div className="flex h-[100vh] w-[80%] items-center">
      <div className="flex flex-col gap-8 justify-center items-center w-[80%] mx-auto rounded-xl h-[80vh] border-4 border-red-600">
        <div className="flex flex-col justify-center gap-8 items-center h-screen">
          {/* Title */}
          <div className="font-semibold text-6xl text-[#976CFB] mb-6">
            Select Protein
          </div>

          {/* Custom Protein Select Box */}
          <div className="relative w-[300px]">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="w-full py-3 px-4 border-2 text-center border-[#976CFB] text-[#976CFB] rounded-sm cursor-pointer text-xl"
            >
              {selectedProtein || "Select Protein"}
              <IoMdArrowDropdown className="inline-block ml-2" style={{ color: "red", fontSize: "20px" }} />
            </div>
            {isOpen && (
              <div className="absolute left-0 h-[250px] overflow-y-auto right-0 mt-1 bg-white border border-[#976CFB] rounded-md shadow-lg z-10">
                {proteins.map((protein) => (
                  <div
                    key={protein.id}
                    onClick={() => handleProteinSelect(protein.name)}
                    className="py-2 px-4 hover:bg-[#976CFB] hover:text-white cursor-pointer"
                  >
                    {protein.name}
                  </div>
                ))}
              </div>
            )}
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
