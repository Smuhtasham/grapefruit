"use client";
import React, { useState } from "react";

const SelectProtein = () => {
  const [selectedProtein, setSelectedProtein] = useState("");
  const proteins = ["Protein A", "Protein B", "Protein C", "Protein D"]; // Example data

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProtein(event.target.value);
  };

  return (
    <div className="flex h-[100vh] items-center ">
      <div className="flex flex-col gap-8 justify-center items-center w-[80%] mx-auto rounded-xl h-[80vh] border-4 border-red-600">
      <div className="flex flex-col justify-center gap-8 items-center h-screen">
        {/* Title */}
        <div className="font-bold text-6xl text-[#976CFB] mb-6">
          Select Protein
        </div>

        {/* Select Box */}
        <div className="relative w-[300px]">
          <select
            value={selectedProtein}
            onChange={handleSelect}
            className="w-full py-2 px-4 border text-center border-[#976CFB] text-[#976CFB] rounded-md appearance-none text-lg focus:outline-none" // No outline on focus
          >
            <option value="">[ ]</option> {/* Changed ( ) to { } */}
            {proteins.map((protein) => (
              <option key={protein} value={protein}>
                {protein}
              </option>
            ))}
          </select>

          {/* Dropdown Icon */}
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
          {/* <IoMdArrowDropdown /> */}
          </div>
        </div>

        {/* Select Button */}
        <button className="bg-[#FFCD6A] text-white font-bold py-2 px-8 mt-6 rounded-full text-lg">
          Select
        </button>
      </div>
    </div>
    </div>
  );
};

export default SelectProtein;
