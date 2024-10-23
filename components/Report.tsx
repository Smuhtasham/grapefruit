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
    goFunctions: ["Cellular component", "Biological process"],
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
    return (
      <div className="text-3xl font-semibold text-[#112a54]">Loading...</div>
    );
  }

  return (
    <>
      <div className="flex w-[80%] items-center ">
        <div className="flex flex-col w-[80%] mx-auto rounded-xl overflow-y-auto">
          <h1 className="text-4xl flex justify-center font-semibold text-[#112a54] py-2 ">
            Report on XYZ Protein
          </h1>

          <div className="flex flex-col gap-4 border-4 py-4 bg-white border-[#112a54]">
            <div className="flex justify-center text-center">
              <span className="bg-[#4287f5] text-semibold border border-[#595959] text-white  w-[20%]">
                East Asia
              </span>
              <span className="bg-[#0095a6] border border-[#595959] text-white  w-[20%] ">
                Amish
              </span>
              <span className="bg-[#efff40] border border-[#595959] text-black  w-[20%]">
                Yoruba
              </span>
            </div>

            <h2 className="text-2xl flex justify-center font-semibold text-[#966bfa]">
              Population Allele Frequency
            </h2>
            <div className="flex flex-col gap-8">
              <div className="flex items-center">
                <div className="w-[50%]">
                  <div className="flex justify-center items-center">
                    <img
                      src={"/proteinstructure.png"}
                      width={270}
                      height={115}
                      alt="Protein Structure"
                    />
                  </div>
                </div>
                <div className="w-[50%] flex flex-col items-center gap-2">
                  <h3 className="text-xl">GO Functions Tree</h3>
                  {/* <div className="border p-2 ">
                    {reportData.goFunctions.map(
                      (func: string, index: number) => (
                        <div key={index}>{func}</div>
                      )
                    )}
                  </div> */}
                  <img src="gofunction.png" alt="" className="w-[200px]"/>
                </div>
              </div>
              <div className="flex   ">
                <div className="w-[50%]  ">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[18px] text-[#112a54] font-semibold text-center ">Any FDA Drugs?</h3>
                    <div className="grid grid-cols-2  w-[80%] mx-auto">
                      {reportData.drugs.map((drug: string, index: number) => (
                        <div
                          key={index}
                          className="bg-[#112a54] font-semibold text-center rounded-3xl  text-white px-6 py-2 m-1"
                        >
                          {drug}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-[50%] flex flex-col items-center justify-center ">
                  <h3 className="text-xl">Graph Representation</h3>
                  <div className="w-full h-[28vh] flex justify-center">
                    <ResponsiveContainer width={"100%"} height="100%">
                      <BarChart
                      className="w-full"
                      maxBarSize={1299}
                      width={1200}
                        data={data}
                        margin={{ top: 20, right: 80, left: 20, bottom: 5 }}
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
                          barSize={120} // Bar width
                        />

                        {/* Second Bar */}
                        <Bar
                          dataKey="value2"
                          fill="#facc9d"
                          radius={[50, 50, 0, 0]} // Rounded corners
                          barSize={160} // Bar width
                        />

                        {/* Third Bar */}
                        <Bar
                          dataKey="value3"
                          fill="#b5d6a7"
                          radius={[50, 50, 0, 0]} // Rounded corners
                          barSize={200} // Bar width
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
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
