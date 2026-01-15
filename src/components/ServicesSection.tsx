import {
  Building2,
  Hammer,
  Paintbrush,
  Trees,
  Box,
  FileText,
} from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'New Building Design',
    description:
      'Concept එකෙන් Construction-ready plans දක්වා. ඔබගේ vision එකට අනුව modern homes, commercial buildings සහ mixed-use developments අපි design කරමු.',
  },
  {
    icon: Hammer,
    title: 'Renovation & Remodeling',
    description:
      'Thoughtful renovations හරහා existing spaces transform කරමින්, architectural heritage එකට ගෞරව දක්වමින් modernize කර, functionality උපරිම ලෙස වැඩි කරමු.',
  },
  {
    icon: Paintbrush,
    title: 'Interior Design',
    description:
      'ඔබගේ personality එක reflect වන stunning interiors create කිරීම අපගේ අරමුණයි. අපගේ designers විසින් beautiful, functional සහ timeless spaces craft කරනු ලැබේ.',
  },
  {
    icon: Trees,
    title: 'Exterior & Landscape',
    description:
      'ඔබගේ architecture එකට complement වන outdoor spaces design කිරීම අපගේ විශේෂත්වයයි. Gardens සිට driveways දක්වා cohesive exterior environments අප විසින් create කරනු ලැබේ.',
  },
  {
    icon: Box,
    title: '3D Visualization',
    description:
      'Project එක build වීමට පෙරම එය අවබෝධ කරගැනීමට, අපගේ photorealistic 3D renders සහ walkthroughs ඔබගේ vision එක ජීවමාන කරයි.',
  },
  {
    icon: FileText,
    title: 'Planning & Approvals',
    description:
      'Sri Lankan building regulations පිළිබඳ සියලු කටයුතු පහසුවෙන් manage කරමින්, documentation සහ approval processes සියල්ල ඔබ වෙනුවෙන් අප විසින් handle කරනු ලැබේ.',
  },
];

const ServicesSection = () => {
  return (
    <section id='services' className='section-padding bg-secondary-bg'>
      <div className='container-custom'>
        {/* Section Header */}
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <span className='inline-block text-sm font-medium text-supporting-green uppercase tracking-wider mb-4'>
            Our Services
          </span>
          <h2 className='heading-lg text-text-light mb-4'>
            Comprehensive Architecture & Design Solutions
          </h2>
          <p className='body-base text-text-muted'>
            From initial concept to final delivery, we provide end-to-end
            architectural services tailored to the Sri Lankan context.
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {services.map((service, index) => (
            <div
              key={service.title}
              className='group bg-primary-bg p-8 rounded-2xl border border-secondary-accent/30 hover:border-secondary-accent hover:shadow-elegant-lg transition-all duration-300 hover:-translate-y-1'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className='w-14 h-14 bg-supporting-green/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-accent group-hover:scale-110 transition-all duration-300'>
                <service.icon className='w-7 h-7 text-supporting-green group-hover:text-text-light transition-colors duration-300' />
              </div>
              <h3 className='heading-sm text-text-light mb-3'>
                {service.title}
              </h3>
              <p className='text-text-muted'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
