import Image from "next/image";
import React, { useEffect } from "react";

interface LoadingVariationsProps {
  onNext: () => void; // Prop to call onNext after loading
}

const LoadingVariations: React.FC<LoadingVariationsProps> = ({ onNext }) => {
  useEffect(() => {
    // Set a timer to call onNext after 5 seconds
    const timer = setTimeout(() => {
      onNext();
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clear the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, [onNext]);

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
                {/* You can replace this with an image of citrus slice */}
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
