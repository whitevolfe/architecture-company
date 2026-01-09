const steps = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'ඔබගේ vision, requirements සහ budget ගැන අපි discuss කරමු. මෙය online හෝ on-site කළ හැක.',
  },
  {
    number: '02',
    title: 'Concept Design',
    description:
      'අපගේ architects ඔබේ brief එකට අනුව initial concepts සහ sketches create කරති.',
  },
  {
    number: '03',
    title: '3D Visualization',
    description:
      'ඔබගේ project photorealistic 3D renders සහ walkthroughs සමඟ life එකට එන හැටි දැකගන්න.',
  },
  {
    number: '04',
    title: 'Detailed Planning',
    description:
      'Complete technical drawings, structural plans සහ documentation සපයනු ලැබේ.',
  },
  {
    number: '05',
    title: 'Delivery',
    description:
      'Final plans construction සඳහා සූදානම් කර, build එකේදී ongoing support ලබා දෙයි.',
  },
];

const ProcessSection = () => {
  return (
    <section id='process' className='section-padding bg-cream'>
      <div className='container-custom'>
        {/* Section Header */}
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <span className='inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4'>
            Our Process
          </span>
          <h2 className='heading-lg text-foreground mb-4'>
            From Vision to Reality
          </h2>
          <p className='body-base text-muted-foreground'>
            අපගේ streamlined process මඟින් transparency, efficiency සහ
            exceptional results සැම stage එකේම ensure කරයි.
          </p>
        </div>

        {/* Process Steps */}
        <div className='relative'>
          {/* Connection Line - Desktop */}
          <div className='hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2' />

          <div className='grid md:grid-cols-3 lg:grid-cols-5 gap-8'>
            {steps.map((step, index) => (
              <div key={step.number} className='relative text-center group'>
                {/* Number Circle */}
                <div className='relative z-10 w-20 h-20 mx-auto mb-6 bg-background border-2 border-primary rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300'>
                  <span className='text-2xl font-display font-bold text-primary group-hover:text-primary-foreground transition-colors duration-300'>
                    {step.number}
                  </span>
                </div>

                {/* Arrow - Between steps on desktop */}
                {index < steps.length - 1 && (
                  <div className='hidden lg:block absolute top-10 left-full w-8 h-0.5 bg-primary/30 -translate-y-1/2 translate-x-6' />
                )}

                <h3 className='text-lg font-display font-semibold text-foreground mb-2'>
                  {step.title}
                </h3>
                <p className='text-sm text-muted-foreground'>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
