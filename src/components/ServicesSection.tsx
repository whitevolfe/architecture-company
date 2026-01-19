import buildingDesignIcon from '../assets/BUILDING DESIGNING SERVICE (HOUSE PLANNING).png';
import modelingIcon from '../assets/3D MODELLING.png';
import interiorExteriorIcon from '../assets/INTERIOR AND EXTERIOR DESIGNING.png';
import boqIcon from '../assets/BOQ.png';
import detailDrawingsIcon from '../assets/DETAIL DRAWINGS.png';
import drawingOfficeIcon from '../assets/DRAWING OFFICE SERVICE AND PLANNING AGENT.png';
import remodelingIcon from '../assets/REMODELING & ALTERNATION SERVICE.png';
import constructionIcon from '../assets/BUILDING CONSTRUCTION.png';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const services = [
  {
    icon: buildingDesignIcon,
    title: 'BUILDING DESIGNING SERVICE',
    description: `A. House Planning (photos)\nB. Commercial Buildings (photos)\n  a) Apartments\n  b) Hostels\n  c) Hotels\n  d) Villas\n  e) Cabanas\n  f) Hospitals\n  g) Shopping Complex\n  h) Factory / Industrial\n  i) Cinema\n  j) Stadium\nC. Mix Residences`,
  },
  {
    icon: modelingIcon,
    title: '3D MODELLING (video)',
    description: `English: From the beginning of your construction, we recreate your land using computer aids and show you step by step how your building will be placed through 3D designs. We provide separate 3D designs for all floors and arrange all designs so you can see the entire building appearance. We provide photos/videos with before and after views of the building as per your requirements (for viewing by those living abroad).\n\nTamil: உங்கள் கட்டுமானத்தின் தொடக்கத்திலிருந்து, நாங்கள் கணினி உதவிகளைப் பயன்படுத்தி உங்கள் தரையை மறுஉருவாக்கி, 3D வடிவமைப்புகளின் மூலம் உங்கள் கட்டிடம் எவ்வாறு வைக்கப்படும் என்பதை படிப்படியாக உங்களுக்குக் காட்சி அளிக்கிறோம். அனைத்து தரைகளுக்கும் தனித்தனியாக 3D வடிவமைப்புகளை வழங்குகிறோம் மற்றும் அனைத்து வடிவமைப்புகளையும் ஏற்பாடு செய்கிறோம், எனவே நீங்கள் முழு கட்டிடத்தின் தோற்றத்தையும் காணலாம். உங்கள் தேவைகளுக்கு ஏற்ப கட்டிடத்தின் முன் மற்றும் பின் காட்சிகளுடன் புகைப்படங்கள்/வீடியோக்களை வழங்குகிறோம் (வெளிநாட்டில் வசிப்பவர்களுக்கு பார்வைக்கு).`,
  },
  {
    icon: interiorExteriorIcon,
    title: 'INTERIOR AND EXTERIOR DESIGNING (photos)',
    description: `English: We provide the overall appearance of your buildings including the exterior appearance, exterior surfaces and facade, walls, windows, doors and landscaping in a way that suits you at a very high level.\n\nInterior means the systems that serve rooms and areas, namely plumbing and electrical installations and power supply methods, as well as aesthetic elements in those spaces, wall color matching and suitable furniture introduction.\n\nTamil: உங்கள் கட்டிடங்களின் மொத்த தோற்றத்தை, வெளிப்புற தோற்றம், வெளிப்புற மேற்பரப்புகள் மற்றும் முகப்பு, சுவர்கள், ஜன்னல்கள், கதவுகள் மற்றும் நிலப்பரப்பு அலங்காரம் ஆகியவற்றை உள்ளடக்கியது, உங்களுக்கு ஏற்ற வகையில் மிக உயர்ந்த அளவில் வழங்குகிறோம்.\n\nஉள்துறை என்பது அறைகள் மற்றும் பகுதிகளுக்கு சேவை செய்யும் அமைப்புகளைக் குறிக்கிறது, அதாவது குழாய் மற்றும் மின்சார நிறுவல்கள் மற்றும் சக்தி வழங்கல் முறைகள், மற்றும் அந்த இடங்களில் உள்ள ஸ்டெத்திக் கூறுகள், சுவர் வண்ண பொருத்தம் மற்றும் பொருத்தமான உள்நாட்டு பொருட்கள் அறிமுகம்.`,
  },
  {
    icon: boqIcon,
    title: 'BOQ (ප්‍රමාණ පත්‍රය / Quantity Sheet / Estimation)',
    description: `English: We provide complete estimates with all necessary details for obtaining loans for all your requirements.\n\nTamil: உங்கள் எல்லா தேவைகளுக்கும் கடன்களைப் பெறுவதற்கான தேவையான எல்லா விவரங்களுடனும் முழுமையான மதிப்பீடுகளை வழங்குகிறோம்.`,
  },
  {
    icon: detailDrawingsIcon,
    title: 'DETAIL DRAWINGS',
    description: `A. Structure detail drawings - Structural details.\n  We provide detailed drawings for the structural details of your buildings, including concepts, beams, columns, slabs, etc., created and certified by relevant professionals.\n  Furthermore, we provide services to employ qualified officials to inspect whether the work is being carried out according to those notes during the construction of the building.\n\nB. ELECTRICAL DETAIL DRAWING - Electrical circuit details.\n  For guiding electrical installation and maintenance, we design the electrical system technically using lines, symbols and dimensions to represent the design visually.\n  In Sinhala, this is described as a diagram that shows how an electrical system like wiring for a house is set up.\n  Similarly, providing power in a way that suits the spaces of the house or building is also important for you to recognize.\n  Likewise, this circuit detail serves as a plan for electricians and a guide for future work.\n\nC. PLUMBING\n  01. INLET - Water pipe system.\n  02. WASTE WATER - Removing dirty water.\n  03. SEWAGE - Dirty water coming out of toilets.\n  04. STORM WATER MANAGEMENT - Rainwater management.\n\nD. OPENINGS\n  Doors, Windows, Arches, etc., openable spaces.\n\nE. ROOFING - Roof\n  Awareness about Roof Structure and Material.\n\nF. FINISHING - Building completion.\n  Awareness about Floor, Walls, Ceiling, Skirting, etc.\n\nG. LANDSCAPING\n  Detailed awareness about land decoration and providing that service.`,
  },
  {
    icon: drawingOfficeIcon,
    title:
      'DRAWING OFFICE SERVICE AND PLANNING AGENT - (සැලසුම් ඇඳීම් නියෝජිත හා කාර්යාල සේවාව)',
    description:
      'Drawing office services and planning agent services for architectural planning and office needs.',
  },
  {
    icon: remodelingIcon,
    title:
      'REMODELING & ALTERNATION SERVICE (පැරණි ගොඩනැගිල්ලට නව පෙනුමක්...)',
    description:
      'Remodeling and alteration services to give a new look to old buildings.',
  },
  {
    icon: constructionIcon,
    title: 'BUILDING CONSTRUCTION - (ගොඩනැගිලි ඉදිකිරීම්)',
    description: 'Building construction services.',
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

        {/* Services Accordion */}
        <div className='max-w-4xl mx-auto'>
          <Accordion type='single' collapsible className='space-y-4'>
            {services.map((service, index) => (
              <AccordionItem
                key={service.title}
                value={`item-${index}`}
                className='bg-primary-bg rounded-2xl border border-secondary-accent/30 hover:border-secondary-accent transition-all duration-300'
              >
                <AccordionTrigger className='px-8 py-6 hover:no-underline'>
                  <div className='flex items-center gap-4'>
                    <img
                      src={service.icon}
                      alt={service.title}
                      className='w-12 h-12 rounded-lg'
                    />
                    <h3 className='heading-sm text-text-light text-left'>
                      {service.title}
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className='px-8 pb-6'>
                  <div className='text-text-muted whitespace-pre-line'>
                    {service.description}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
