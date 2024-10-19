// Dummy variation analysis data
export const dummyVariationAnalysisData = {
  data: {
    properties: [
      {
        go_label: "012313",
        protein_cams: [0.1, 0.2, 0.3, 0.4, 0.5],
        variations_analysis: {
          ri_is: "rs748804579",
          populations: {
            population_1: { frequency: "5%", description: "European descent" },
            population_2: { frequency: "10%", description: "Asian descent" }
          }
        }
      },
      {
        go_label: "456789",
        protein_cams: [0.6, 0.7, 0.8, 0.9, 1.0],
        variations_analysis: {
          ri_is: "rs123456789",
          populations: {
            population_1: { frequency: "3%", description: "African descent" },
            population_2: { frequency: "12%", description: "Hispanic descent" }
          }
        }
      }
    ]
  }
};
