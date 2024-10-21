"use client";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Dynamically import react-leaflet components with SSR disabled
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });
const Tooltip = dynamic(() => import('react-leaflet').then(mod => mod.Tooltip), { ssr: false });

interface DataPoint {
  name: string;
  coordinates: [number, number]; // Longitude and Latitude
}

interface PropsType {
  onNext: () => void;
}

const PopulationFrequencyMap: React.FC<PropsType> = ({ onNext }) => {
  const [isClient, setIsClient] = useState(false);
  const [dotIcon, setDotIcon] = useState<any>(null);

  useEffect(() => {
    setIsClient(true);

    // Dynamically import leaflet and create the dot icon after it's available
    const loadLeaflet = async () => {
      const L = (await import('leaflet')).default;

      const newDotIcon = L.divIcon({
        className: 'custom-dot', // Custom class for styling the dot
        html: '<div class="dot"></div>', // HTML content for the dot
        iconSize: [12, 12], // Size of the dot
        iconAnchor: [6, 6], // Center the dot
        popupAnchor: [0, -6], // Adjust popup position
      });

      setDotIcon(newDotIcon);
    };

    loadLeaflet();
  }, []);

  const data: DataPoint[] = [
    { name: 'Los Angeles', coordinates: [34.0522, -118.2437] },
    { name: 'London', coordinates: [51.5074, -0.1278] },
    { name: 'Tokyo', coordinates: [35.6762, 139.6503] },
  ];

  return (
    <div className="flex h-[100vh] w-[80%] items-center">
      <div className="flex flex-col gap-8 justify-center items-center w-[80%] mx-auto rounded-xl h-[80vh] border-4 border-red-600">
        <div className="flex flex-col py-6">
          <h1 className="text-4xl font-semibold text-purple-500 mb-6">
            Comparing Population Frequency
          </h1>

          {/* Only render the map on the client side */}
          {isClient && dotIcon && (
            <div className="w-full max-w-3xl h-[300px]">
              <MapContainer
                center={[20, 0]} // Initial map center, somewhere in the world
                zoom={2} // Zoom level
                style={{ height: '100%', width: '100%' }}
              >
                {/* TileLayer to show the map with default OpenStreetMap tiles */}
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {/* Markers */}
                {data.map(({ name, coordinates }) => (
                  <Marker
                    key={name}
                    position={[coordinates[0], coordinates[1]]}
                    icon={dotIcon} // Use the custom dot icon
                  >
                    <Popup>{name}</Popup>

                    {/* Tooltip to show the name on hover */}
                    <Tooltip permanent direction="top" offset={[0, -12]}>
                      {name}
                    </Tooltip>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          )}

          <button
            onClick={onNext}
            className="mt-6 px-8 py-3 bg-yellow-400 text-white font-semibold text-xl rounded-full hover:bg-yellow-500 transition duration-200"
          >
            Generate a Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopulationFrequencyMap;
