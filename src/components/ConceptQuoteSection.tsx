import architechPic2 from '@/assets/architechpic2.jpeg';
import architechPic3 from '@/assets/architechpic3.jpeg';
import architechPic4 from '@/assets/architechpic4.jpeg';
import buildingConceptNew from '@/assets/building-conceptnew.jpeg';

const ConceptQuoteSection = () => {
  return (
    <section
      className='section-padding'
      style={{
        backgroundImage: `url(${buildingConceptNew})`,
        backgroundSize: '100vw auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className='container-custom'>
        {/* Section Header */}
        <div className='text-center max-w-4xl mx-auto mb-16'>
          <h2 className='heading-lg text-text-light mb-6'>
            Residential Building Concept
          </h2>
          <div className='space-y-6'>
            {/* Sinhala Quote */}
            <blockquote className='text-2xl md:text-3xl font-display text-supporting-green italic mb-4'>
              "යකාගෙ◌් හැටියට විමානෙ"
            </blockquote>

            {/* Tamil Quote */}
            <blockquote className='text-xl md:text-2xl font-display text-primary-accent italic mb-4'>
              "வானத்தில் வாழ்க்கை" (Concept in Tamil)
            </blockquote>

            {/* English Quote */}
            <blockquote className='text-lg md:text-xl font-display text-text-light italic'>
              "Living like in an airplane"
            </blockquote>
          </div>
        </div>

        {/* Image Gallery */}
        <div className='grid md:grid-cols-3 gap-8 mt-16'></div>
      </div>
    </section>
  );
};

export default ConceptQuoteSection;
