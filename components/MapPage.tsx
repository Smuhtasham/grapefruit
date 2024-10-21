import dynamic from 'next/dynamic';

// Dynamically import PopulationFrequencyMap, with ssr disabled
const PopulationFrequencyMap = dynamic(() => import('./PopulationFrequency'), {
  ssr: false,
});

interface PropsType {
    onNext: () => void;
  }

const MapPage:React.FC<PropsType> = ({onNext}) => {
  const handleNext = () => {
    console.log('Generating report...');
  };

  return (
    <div>
      <PopulationFrequencyMap onNext={handleNext} />
    </div>
  );
};

export default MapPage;
