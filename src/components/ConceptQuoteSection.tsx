import architechPic2 from '@/assets/architechpic2.jpeg';
import architechPic3 from '@/assets/architechpic3.jpeg';
import architechPic4 from '@/assets/architechpic4.jpeg';

const ConceptQuoteSection = () => {
  return (
    <section className='section-padding bg-primary-bg'>
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
        <div className='grid md:grid-cols-3 gap-8 mt-16'>
          <div className='group relative overflow-hidden rounded-2xl'>
            <img
              src={architechPic2}
              alt='Architectural Concept 2'
              className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-primary-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
          </div>

          <div className='group relative overflow-hidden rounded-2xl'>
            <img
              src={architechPic3}
              alt='Architectural Concept 3'
              className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-primary-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
          </div>

          <div className='group relative overflow-hidden rounded-2xl'>
            <img
              src={architechPic4}
              alt='Architectural Concept 4'
              className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-primary-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConceptQuoteSection;
