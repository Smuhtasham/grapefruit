"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Report: React.FC = () => {
  const [reportData, setReportData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const data = [
    { name: "Category 1", value1: 3000, value2: 2000, value3: 1500 },
  ];

  // Dummy data for the report
  const dummyData = {
    proteinImageUrl: "https://via.placeholder.com/150", // Placeholder for the protein image
    drugs: ["Drug 1", "Drug 2", "Drug 3", "Drug 4"], // Example drugs
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
      <div className="flex h-[100vh] w-[80%] items-center ">
        <div className="flex flex-col w-[80%] mx-auto rounded-xl h-[90vh] overflow-y-auto border-4 border-[#976CFB]">
          <div className="flex flex-col">
            <h1 className="text-4xl flex my-2 justify-center font-semibold text-red-500 mb-">
              Report on XYZ Protein
            </h1>

            <div className="flex justify-center mb-4">
              <span className="bg-[#4287f5] p-2 w-[10%]">East Asia</span>
              <span className="bg-[#0095a6] p-2 w-[10%] ">Amish</span>
              <span className="bg-[#efff40] p-2 w-[10%]">Yoruba</span>
            </div>

            <h2 className="text-2xl flex justify-center font-semibold text-purple-600">
              Population Allele Frequency
            </h2>

            <div className="flex justify-evenly">
              <div className="flex flex-col">
                <div className="mb-4">
                  <Image
                    src={"/grape.png"}
                    width={100}
                    height={100}
                    alt="Protein Structure"
                  />
                </div>
                <div>
                  <h3 className="text-base text-center mb-2">Any FDA Drugs?</h3>
                  <div className="grid grid-cols-2">
                    {reportData.drugs.map((drug: string, index: number) => (
                      <div
                        key={index}
                        className="bg-[#fc888c] font-semibold rounded-3xl  text-white px-6 py-2 m-1"
                      >
                        {drug}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-xl mb-2">GO Functions Tree</h3>
                <div className="border p-4 mb-4">
                  {reportData.goFunctions.map((func: string, index: number) => (
                    <div key={index}>{func}</div>
                  ))}
                </div>

                <h3 className="text-xl">Graph Representation</h3>
                <div className="w-[380px] h-[28vh] ">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={data}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      barGap={-30} // Negative value to overlap bars horizontally
                      barCategoryGap="0%" // No gap between categories
                    >
                      <CartesianGrid />
                      <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={false}
                      />
                      <YAxis axisLine={false} tickLine={false} tick={false} />

                      {/* First Bar */}
                      <Bar
                        dataKey="value1"
                        fill="#fc888c"
                        radius={[50, 50, 0, 0]} // Rounded corners
                        barSize={60} // Bar width
                      />

                      {/* Second Bar */}
                      <Bar
                        dataKey="value2"
                        fill="#facc9d"
                        radius={[50, 50, 0, 0]} // Rounded corners
                        barSize={100} // Bar width
                      />

                      {/* Third Bar */}
                      <Bar
                        dataKey="value3"
                        fill="#b5d6a7"
                        radius={[50, 50, 0, 0]} // Rounded corners
                        barSize={140} // Bar width
                      />
                    </BarChart>
                  </ResponsiveContainer>
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
