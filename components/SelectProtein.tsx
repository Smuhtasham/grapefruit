"use client";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface PropsType {
  onNext: () => void; // Define the type of the onNext prop
  onSelectProtein: (protein: string) => void; // New prop to handle protein selection
}

const SelectProtein: React.FC<PropsType> = ({ onNext, onSelectProtein }) => {
  const [selectedProtein, setSelectedProtein] = useState("");
  const proteins = ["Protein A", "Protein B", "Protein C", "Protein D"]; // Example data

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const protein = event.target.value;
    setSelectedProtein(protein);
    onSelectProtein(protein); // Call the function to handle protein selection
  };

  return (
    <div className="flex h-[100vh] w-[80%] items-center ">
      <div className="flex flex-col gap-8 justify-center items-center w-[80%] mx-auto rounded-xl h-[80vh] border-4 border-red-600">
        <div className="flex flex-col justify-center gap-8 items-center h-screen">
          {/* Title */}
          <div className="font-semibold text-6xl text-[#976CFB] mb-6">
            Select Protein
          </div>

          {/* Select Box */}
          <div className="flex gap-2">
            <div className="relative w-[300px]">
              <select
                value={selectedProtein}
                onChange={handleSelect} // Update selected protein and call onSelectProtein
                className="w-full py-3 px-4 border-2 text-center border-[#976CFB] text-[#976CFB] rounded-sm appearance-none text-xl focus:outline-none"
              >
                <option value="">[ ]</option> {/* Changed ( ) to { } */}
                {proteins.map((protein) => (
                  <option key={protein} value={protein}>
                    {protein}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center pointer-events-none">
              <IoMdArrowDropdown style={{ color: "red", fontSize: "20px" }} />
            </div>
          </div>

          {/* Select Button */}
          <button onClick={onNext} className="bg-[#FFCD6A] text-white font-semibold px-4 mt-6 rounded-full text-2xl">
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectProtein;
