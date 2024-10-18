"use client";
import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface PropsType {
  onNext: () => void; // Define the type of the onNext prop
  selectedArea: string; // Add the selected therapeutic area as a prop
}

const PredictingFunctionality: React.FC<PropsType> = ({ onNext, selectedArea }) => {
  const [selectedProtein, setSelectedProtein] = useState("");
  const [proteins, setProteins] = useState<string[]>([]); // State to hold fetched proteins
  const [loading, setLoading] = useState(false); // State to manage loading

  useEffect(() => {
    const fetchProteins = async () => {
      // Set loading state
      setLoading(true);

      try {
        // Replace this with your actual API call
        const response = await fetch(`/api/proteins?therapeutic_area=${selectedArea}`);
        const data = await response.json();
        
        // Extract proteins from the data (adjust based on your actual response structure)
        const proteinList = data.proteins || []; // Assume data has a proteins property
        setProteins(proteinList);
      } catch (error) {
        console.error("Error fetching proteins:", error);
      } finally {
        setLoading(false); // Reset loading state
      }
    };

    fetchProteins();
  }, [selectedArea]);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProtein(event.target.value);
  };

  return (
    <div className="flex h-[100vh] w-[80%] items-center ">
      <div className="flex flex-col gap-8 justify-center items-center w-[80%] mx-auto rounded-xl h-[80vh] border-4 border-red-600">
        <div className="flex flex-col justify-center gap-8 items-center h-screen">
          {/* Title */}
          <div className="font-semibold text-6xl text-[#976CFB] mb-6">
            Predicting Functionality
          </div>

          {/* Loading State */}
          {loading ? (
            <div>Loading proteins...</div> // Display loading message
          ) : (
            <>
              {/* Select Box */}
              <div className="flex gap-2">
                <div className="relative w-[300px]">
                  <select
                    value={selectedProtein}
                    onChange={handleSelect}
                    className="w-full py-2 px-4 border text-center border-[#976CFB] text-[#976CFB] rounded-md appearance-none text-lg focus:outline-none"
                  >
                    <option value="">[Select a Protein]</option>
                    {proteins.map((protein) => (
                      <option key={protein} value={protein}>
                        {protein} {/* Assuming protein has id and name properties */}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center pointer-events-none">
                  <IoMdArrowDropdown style={{ color: "red", fontSize: "20px" }} />
                </div>
              </div>

              {/* Select Button */}
              <button onClick={onNext} className="bg-[#FFCD6A] text-white font-bold py-2 px-8 mt-6 rounded-full text-lg">
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
