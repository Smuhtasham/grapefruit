import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { DivIcon } from 'leaflet';

// Define a custom dot icon for the markers
const dotIcon: DivIcon = L.divIcon({
  className: 'custom-dot', // Custom class for styling the dot
  html: '<div class="dot"></div>', // HTML content for the dot
  iconSize: [12, 12], // Size of the dot
  iconAnchor: [6, 6], // Center the dot
  popupAnchor: [0, -6], // Adjust popup position
});

interface DataPoint {
  name: string;
  coordinates: [number, number]; // Longitude and Latitude
}

interface PropsType {
  onNext: () => void;
}

const PopulationFrequencyMap: React.FC<PropsType> = ({ onNext }) => {
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

          {/* Leaflet Map */}
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
