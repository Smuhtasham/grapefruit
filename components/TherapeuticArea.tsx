"use client";
import React, { useEffect, useState } from "react";

const TherapeuticAreas = () => {
  const [therapeuticAreas, setTherapeuticAreas] = useState<string[]>([]);

  // Simulating fetching data from backend
  useEffect(() => {
    // Fetch the therapeutic areas from your backend here
    // Example: fetching from an API
    const fetchTherapeuticAreas = async () => {
      // Replace this with your API call
      const areasFromBackend = [
        "Cardiovascular",
        "Renal",
        "Respiratory",
        "Neurological",
        "Hematology",
        "Oncology",
      ];
      setTherapeuticAreas(areasFromBackend);
    };

    fetchTherapeuticAreas();
  }, []);

  return (
    <>
    <div className="flex h-[100vh] items-center ">
    <div className="flex flex-col gap-8 justify-center overflow-y-auto items-center w-[80%] mx-auto rounded-xl h-[80vh] border-4 border-red-600">
      <div className="font-semibold text-6xl text-[#976CFB]">
        Select Therapeutic Area
      </div>

      {/* Therapeutic Area Options */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        {therapeuticAreas.map((area) => (
          <button
            key={area}
            className="bg-[#FD4B51] text-white font-semibold py-3 px-6 rounded-full text-2xl"
          >
            {area}
          </button>
        ))}
      </div>

      {/* General Button */}
      <button className="bg-[#FFCD6A] text-white py-6 px-44 rounded-full text-2xl font-semibold mt-8">
        General
      </button>
      </div>
      </div>
    </>
  );
};

export default TherapeuticAreas;
