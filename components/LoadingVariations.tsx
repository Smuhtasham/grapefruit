import Image from "next/image";
import React, { useEffect, useRef } from "react";

interface LoadingVariationsProps {
  onNext: () => void; // Prop to call onNext after loading
  selectedProteinId: string;
  setProteinSequence: React.Dispatch<React.SetStateAction<string>>;
}

const LoadingVariations: React.FC<LoadingVariationsProps> = ({
  onNext,
  selectedProteinId,
  setProteinSequence,
}) => {
  const hasFetched = useRef(false); // Ref to track if the fetch has occurred

  useEffect(() => {
    const fetchProteinData = async (proteinId: string) => {
      try {
        // const response = await fetch(`https://your-api-endpoint/protein/${proteinId}`);
        // if (!response.ok) {
        //   throw new Error("Failed to fetch protein data");
        // }
        // const data = await response.json(); // Parse JSON response

        // // Extract protein sequence and functional properties from the response
        // const proteinSequence = data.data.protein.sequence; // Assuming 'sequence' is part of the protein object
        // const goLabels = data.data.functional_properties?.go_labels || []; // Use optional chaining to avoid errors

        // // Set the protein sequence and data after fetching
        // setProteinSequence(proteinSequence);

        // Wait for 3 seconds before calling onNext
        setTimeout(() => {
          if (!hasFetched.current) {
            hasFetched.current = true; // Mark as fetched
            onNext();
          }
        }, 3000); // 3000 milliseconds = 3 seconds
      } catch (error) {
        console.error("Error fetching protein data:", error);
      }
    };

    // Call the fetch function when the component loads
    fetchProteinData(selectedProteinId);
  }, [selectedProteinId, setProteinSequence, onNext]); // Added dependencies

  return (
    <div className="flex h-[100vh] w-[80%] items-center">
      <div className="flex flex-col gap-8 justify-center items-center w-[80%] mx-auto rounded-xl h-[80vh] border-4 border-red-600">
        <div className="flex flex-col gap-8 items-center justify-center min-h-screen">
          <h1 className="text-6xl font-semibold text-[#976CFB] mb-6">
            Loading Variations
          </h1>
          <div className="relative">
            {/* Static Citrus Slice */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-60 h-60 rounded-full flex items-center justify-center">
                <Image
                  src={"/grape.png"}
                  height={180}
                  width={180}
                  alt="grapefruit"
                />
              </div>
            </div>

            {/* Rotating Arrows */}
            <div className="w-40 h-40 border-t-4 border-r-4 border-gray-300 rounded-full animate-spin-slow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingVariations;
