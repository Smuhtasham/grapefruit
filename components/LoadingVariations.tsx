"use client"
import Image from "next/image";
import React, { useEffect, useRef } from "react";

interface ProteinData {
  id: string;
  name: string;
  gene: string;
  sequence: string;
  metadata: Record<string, any>;
  functional_properties?: {
    go_labels: number[];
  };
}

interface LoadingVariationsProps {
  onNext: () => void; // Prop to call onNext after loading
  selectedProteinId: string;
  setProteinSequence: React.Dispatch<React.SetStateAction<ProteinData | null>>;
}

const LoadingVariations: React.FC<LoadingVariationsProps> = ({
  onNext,
  selectedProteinId,
  setProteinSequence,
}) => {
  const hasFetched = useRef(false); // Ref to prevent calling onNext twice

  useEffect(() => {
    const fetchProteinData = async (proteinId: string) => {
      try {
        // Fetch protein sequence data from UniProt API
        const response = await fetch(
          `https://rest.uniprot.org/uniprotkb/${proteinId}.fasta`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch protein sequence");
        }

        const data = await response.text();

        // Parse the FASTA format to extract relevant information
        const lines = data.split("\n");
        const description = lines[0]; // First line for metadata, e.g., ">sp|P45379|TNNT2_HUMAN etc."
        const sequence = lines.slice(1).join(""); // The rest of the lines form the sequence

        // Extracting ID and name from description
        const [_, id, name] = description.split("|");
        const gene = "CYP3A4"; // This is hardcoded as an example, change it if your data provides the actual gene

        // Format the response in the required structure
        const proteinData: ProteinData = {
          id: id || proteinId,
          name: name || "Unknown Protein",
          gene: gene, 
          sequence: sequence.replace(/\n/g, ""), // Clean sequence data
          metadata: {}, // Add any metadata if needed
          functional_properties: {
            go_labels: [1, 5, 1234], // Placeholder for Gene Ontology labels, modify as needed
          },
        };

        // Store the fetched protein data in the state
        setProteinSequence(proteinData);

        // Ensure that onNext is only called once
        if (!hasFetched.current) {
          hasFetched.current = true; // Mark as fetched to prevent duplicate calls
          onNext();
        }
      } catch (error) {
        console.error("Error fetching sequence:", error);
      }
    };

    // Call the fetch function when the component loads
    fetchProteinData(selectedProteinId);
  }, [selectedProteinId, setProteinSequence, onNext]);

  return (
    <div className="flex h-[100vh] w-[80%] items-center ">
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
