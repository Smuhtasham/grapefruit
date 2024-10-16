"use client";
import React, { useEffect, useState } from "react";

const Report: React.FC = () => {
  const [reportData, setReportData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Dummy data for the report
  const dummyData = {
    proteinImageUrl: "https://via.placeholder.com/150", // Placeholder for the protein image
    drugs: ["Drug A", "Drug B", "Drug C"], // Example drugs
    goFunctions: [
      "Cellular component",
      "Biological process",
      "Molecular function",
    ], // GO function terms
    graphData: [
      { label: "A", value: 100 },
      { label: "B", value: 80 },
      { label: "C", value: 60 },
      { label: "D", value: 40 },
    ], // Example graph data
  };

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        // Simulate data fetch with a timeout
        setTimeout(() => {
          setReportData(dummyData); // Set the dummy data
          setLoading(false); // Loading finished
        }, 1000);
      } catch (error) {
        console.error("Error fetching report data:", error);
      }
    };

    fetchReportData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex h-[100vh] items-center ">
        <div className="flex flex-col gap-8  w-[80%] mx-auto rounded-xl h-[80vh] border-4 border-[#976CFB]">
          <div className="flex flex-col  gap-2">
            <h1 className="text-4xl flex mt-6 justify-center font-semibold text-red-500 mb-6">
              Report on XYZ Protein
            </h1>

            <div className="flex justify-center mb-4">
              <span className="bg-blue-300 p-2 w-[10%]">East Asia</span>
              <span className="bg-teal-300 p-2 w-[10%] ">Amish</span>
              <span className="bg-yellow-300 p-2 w-[10%]">Yoruba</span>
            </div>

            <h2 className="text-2xl flex justify-center font-semibold text-purple-600">
              Population Allele Frequency
            </h2>

            <div className="flex justify-evenly">
              <div className="flex flex-col">
                <div className="mb-4">
                  <img
                    src={reportData.proteinImageUrl}
                    alt="Protein Structure"
                    className="w-48"
                  />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Any FDA Drugs?</h3>
                  <div className="flex flex-wrap mb-4">
                    {reportData.drugs.map((drug: string, index: number) => (
                      <div key={index} className="bg-pink-200 p-2 m-1 rounded">
                        {drug}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2">GO Functions Tree</h3>
                <div className="border p-4 mb-4">
                  {reportData.goFunctions.map((func: string, index: number) => (
                    <div key={index}>{func}</div>
                  ))}
                </div>

                <h3 className="text-xl mb-2">Graph Representation</h3>
                <div className="flex">
                  {reportData.graphData.map(
                    (item: { label: string; value: number }, index: number) => (
                      <div
                        key={index}
                        style={{ width: "50px", margin: "0 10px" }}
                      >
                        <div
                          className="bg-red-300"
                          style={{ height: `${item.value}px` }}
                        />
                        <p className="text-center">{item.label}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
