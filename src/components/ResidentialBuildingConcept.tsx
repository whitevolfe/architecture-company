import buildingConceptNew from '@/assets/building-conceptnew.jpeg';

const ResidentialBuildingConcept = () => {
  return (
    <section className='relative'>
      <div
        className='w-full h-[1800px] bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url(${buildingConceptNew})`,
        }}
      >
        {/* Optional overlay content can be added here */}
        <div className='absolute inset-0 bg-black/30 flex items-center justify-center'>
          <div className='text-center text-white'>
            <h2 className='text-4xl md:text-6xl font-bold mb-4'>
              Residential Building Concept
            </h2>
            <p className='text-xl md:text-2xl'>
              Innovative living spaces designed for modern lifestyles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidentialBuildingConcept;
