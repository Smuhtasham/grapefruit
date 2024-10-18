"use client";
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

// Updated GeoJSON URL
const geoUrl =
  "https://raw.githubusercontent.com/datasets/geo-boundaries-world-110m/master/countries.geojson";

// Define the type for data points
interface DataPoint {
  name: string;
  coordinates: [number, number]; // Longitude and Latitude
  markerOffset: number;
}

interface PropsType {
  onNext: () => void; // Define the type of the onNext prop
}

// Define the type for Geographies props
interface GeographiesProps {
  geographies: {
    id: string; // Unique identifier for each geography
    properties: any; // You can specify more detailed properties if you need
  }[];
}

const PopulationFrequencyMap: React.FC<PropsType> = ({onNext}) => {
  // Data points representing some cities and their population frequency (or whatever metric)
  const data: DataPoint[] = [
    {
      name: "Los Angeles",
      coordinates: [-118.2437, 34.0522],
      markerOffset: 15,
    },
    { name: "London", coordinates: [-0.1278, 51.5074], markerOffset: 15 },
    { name: "Tokyo", coordinates: [139.6503, 35.6762], markerOffset: 15 },
  ];

  return (
    <div className="flex h-[100vh] w-[80%] items-center ">
      <div className="flex flex-col gap-8 justify-center items-center w-[80%] mx-auto rounded-xl h-[80vh] border-4 border-red-600">
        <div className="flex flex-col py-6">
          <h1 className="text-4xl font-semibold text-purple-500 mb-6">
            Comparing Population Frequency
          </h1>

          {/* World Map */}
          <div className="w-full max-w-3xl">
            <ComposableMap projection="geoMercator" width={800} height={400}>
              <Geographies geography={geoUrl}>
                {({ geographies }: { geographies: GeographiesProps["geographies"] }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.id} // Use geo.id for the key
                      geography={geo}
                      fill="#fff" // Light green color
                      stroke="#000"
                    />
                  ))
                }
              </Geographies>

              {/* Markers for cities */}
              {data.map(({ name, coordinates, markerOffset }) => (
                <Marker key={name} coordinates={coordinates}>
                  <circle r={10} fill="#F53" stroke="#fff" strokeWidth={2} />
                  <text
                    textAnchor="middle"
                    y={markerOffset}
                    style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                  >
                    {name}
                  </text>
                </Marker>
              ))}
            </ComposableMap>
          </div>

          <button onClick={onNext} className="mt-6 px-8 py-3 bg-yellow-400 text-white font-semibold text-xl rounded-full hover:bg-yellow-500 transition duration-200">
            Generate a Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopulationFrequencyMap;
