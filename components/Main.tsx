import React from "react";
import TherapeuticAreas from "./TherapeuticArea";
import SelectProtein from "./SelectProtein";
import LoadingVariations from "./LoadingVariations";
import PredictingFunctionality from "./PredictingFunctionality";
import PopulationFrequency from "./PopulationFrequency";
import Report from "./Report";

const Main = () => {
  return (
    <>      
          <TherapeuticAreas />
          <SelectProtein/>
          <LoadingVariations/>
          <PredictingFunctionality />
          <PopulationFrequency/>
          <Report/>
    </>
  );
};

export default Main;
