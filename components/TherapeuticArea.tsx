"use client";
import React, { useEffect, useState } from "react";

interface TherapeuticAreasProps {
  onSelectArea: (area: string) => void; // Add a prop to handle area selection
}

const TherapeuticAreas: React.FC<TherapeuticAreasProps> = ({ onSelectArea }) => {
  const [therapeuticAreas, setTherapeuticAreas] = useState<string[]>([]);

  useEffect(() => {
    const fetchTherapeuticAreas = async () => {
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

  const handleAreaSelect = (area: string) => {
    onSelectArea(area); // Call the function to handle area selection
  };

  return (
    <>
      <div className="flex w-[80%] items-center ">
        <div className="flex flex-col gap-8 items-center w-[80%] mx-auto">
          <div className="font-semibold text-6xl text-[#112a54]">
            Select Therapeutic Area
          </div>

          {/* Therapeutic Area Options */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {therapeuticAreas.map((area) => (
              <button
                key={area}
                className="border-4 border-[#FC4C52] hover:bg-[#FC4C52] hover:text-white text-[#112a54] font-semibold py-3 px-6 rounded-full text-2xl"
                onClick={() => handleAreaSelect(area)} // Handle area selection on click
              >
                {area}
              </button>
            ))}
          </div>

          {/* General Button */}
          <button onClick={()=>{handleAreaSelect("General")}} className="bg-[#112a54] text-white w-[80%] py-4 rounded-full text-2xl font-semibold mt-8">
            General
          </button>
        </div>
      </div>
    </>
  );
};

export default TherapeuticAreas;
