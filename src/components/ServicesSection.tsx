import { useState } from 'react';
import buildingDesignIcon from '../assets/BUILDING DESIGNING SERVICE (HOUSE PLANNING).png';
import modelingIcon from '../assets/3D MODELLING.png';
import interiorExteriorIcon from '../assets/INTERIOR AND EXTERIOR DESIGNING.png';
import boqIcon from '../assets/BOQ.png';
import detailDrawingsIcon from '../assets/DETAIL DRAWINGS.png';
import drawingOfficeIcon from '../assets/DRAWING OFFICE SERVICE AND PLANNING AGENT.png';
import remodelingIcon from '../assets/REMODELING & ALTERNATION SERVICE.png';
import constructionIcon from '../assets/BUILDING CONSTRUCTION.png';
import serviceBgImage from '../assets/servicesection-bg.png';

const services = [
  {
    icon: buildingDesignIcon,
    title: 'BUILDING DESIGNING SERVICE',
    description: `A. Residencial Buildings - "යකාගේ හැටියට විමානෙ"\n\nB. Commercial Buildings\n  a) Apartments\n  b) Hostels\n  c) Hotels\n  d) Villas\n  e) Cabanas\n  f) Hospitals\n  g) Shopping Complex\n  h) Factory / Industrial\n  i) Cinema\n  j) Stadium\n\nC. Mix Residences`,
  },
  {
    icon: modelingIcon,
    title: '3D MODELLING',
    description: `ඔබේ නිර්මාණය ආරම්භයේ සිටම පිහිටි ඉඩම පරිගණක ආධාරයෙන් ප්‍රතිනිර්මාණය කර, ඒ තුළ ඔබේ ගොඩනැගිල්ල පිහිටවන ආකාරය ත්‍රිමාන සැලසුම් මගින් පියවරෙන් පියවර ඔබ දැනුවත් කිරීමේ සේවය.\nසියලුම මහල් සඳහා වෙන වෙනම ත්‍රිමාන සැලසුම් ලබා දෙන අතර සියලුම සැලසුම් එක්කර මුළු ගොඩනැගිල්ලේ පෙනුම ඔබට දැක ගැනීමට සැලැස්වීම.\nඅවශ්‍යතාවය පරිදි ගොඩනැගිල්ල සෑදීමට පෙර පසු පෙනුම සහිත ඡායාරූප / වීඩියෝ දර්ශන (පිටරට වෙසෙන අයට නැරඹීම සඳහා) ලබා දීමේ සේවය.`,
  },
  {
    icon: interiorExteriorIcon,
    title: 'INTERIOR AND EXTERIOR DESIGNING',
    description: `ඔබේ ගොඩනැගිල්ලේ   බාහිර පෙනුම (Exterior) නොහොත් බාහිර පෘෂ්ඨයන් සහ මුහුණත, වහලය, බිත්ති, ජනෙල්, දොරවල් සහ භූමි අලංකරණය ඇතුළුව සමස්ත පෙනුම ඔබට ගැළපෙන ආකාරයෙන් ඉතා ඉහල මට්ටමින් ලබා දීමේ සේවය.\nඅභ්‍යන්තරය (Interior) යන්නෙන් අදහස් කරන්නේ කාමර, කොටස් සහ ඒවාට සේවය කරන පද්ධති එනම් ජලනල හා විදුලි ආලෝකය හා ආලෝකය සපයන ආකාරය වැනි අභ්‍යන්තර අවකාශයන් මෙන්ම එම අවකාශයන් තුළ ඇති සෞන්දර්යාත්මක අංග,බිත්ති වල සමබර වර්ණ ගැලපීම සහ ගැළපෙන ගෘහ භාණ්ඩ හඳුන්වා දීමේ සේවය.`,
  },
  {
    icon: boqIcon,
    title: 'BOQ (ප්‍රමාණ පත්‍රය / Quantity Sheet / Estimation)',
    description: `Costing /Material List / ලී තුන්ඩුව / බඩු  ලයිස්තුව)\nඔබගේ සියලුම අවශ්‍යතා පරිදි ණය ලබා ගැනීමේ ක්‍රමවේදයන් සදහා පූර්ණ අනුමැතියන් සහිත ඇස්තමේන්තු ලබාදීම.`,
  },
  {
    icon: detailDrawingsIcon,
    title: 'DETAILING (වඩාත් පැහැදිලි රූප සටහන් මගින් නිශ්චිත තොරතුරු ලබාදීම)',
    description: `A. Structure detail drawings - ව්‍යුහමය තොරතුරු දැක්වීම.\n\nඔබේ ගොඩනැගිල්ලේ ව්‍යුහාත්මක තොරතුරු සඳහා අදාළා concept වැර ගැන්වුම් කම්බි, අත්තිවාරම් (Base, Beams, collems, slabs) ආදියේ විශේෂ තොරතුරු ඇඳ අදාළ වෘත්තිකයන් ලවා සහතික කර ලබාදීම.\nතවද, ගොඩනැගිල්ල සාදන අවස්ථාවේදී එම සටහන්වලට අනුව කටයුතු පවතින්නේ ද යන්න සොයා බැලීම සඳහා සුදුසුකම් ලත් නිලධාරීන් යෙදවීමේ සේවයද ඔබට ලබාගත හැක.\n\nB. ELECTRICAL DETAIL DRAWING - විදුලි පරිපථ තොරතුරු.\n\nවිදුලි ස්ථාපනය හා නඩත්තුව සඳහා මඟ පෙන්වීම උදෙසා රේඛා, සංකේත සහ මානයන් භාවිතා කරමින් විදුලි පද්ධතියක සැලසුම දෘශ්‍යමය වශයෙන් නිරූපණය කරන තාක්ෂණික චිත්‍ර සඳහා ඔබ යොමු කිරීම.\nසිංහලෙන්, මෙය නිවසක් සඳහා රැහැන් ඇදීම වැනි විදුලි පද්ධතියක් සකස් කර ඇති ආකාරය පෙන්වන රූප සටහනක් හෝ සැලැස්මක් ලෙස විස්තර කෙරේ. එමෙන්ම නිවස හෝ ගොඩනැගිල්ලේ අවකාශයන්ට ගැළපෙන ආකාරයට ආලෝකය ලබා දීමේ වැදගත් කමද ඔබට හඳුනා ගතහැක. \nඑමෙන්ම එය විදුලි කාර්මිකයන් සඳහා සැලැස්මක් සහ අනාගත වැඩ සඳහා යොමුවක් ලෙස ද මෙම  පරිපථ තොරතුරු සේවය උපකාරී වනු ඇත.\n\nC. PLUMBING \n\n01. INLET - ජල නල පද්ධතිය.\n\n02. WASTE WATER - අපවිත්‍ර ජල බැහැර කිරීම.\n\n03. SEWAGE - වැසිකිළි වලින් පිටවන අපජලය\n\n04. STOME WATER MANAGEMENT - වැසි ජලය කළමනාකරණය\n\nD. OPENINGS\nDoors (දොර), Windows (ජනේල), Archs (ආරුක්කු) යනාදී විවෘත කල හැකි අවකාශ.\n\nE. ROOFING - වහල\nවහලේ Structure (ව්‍යුහය) හා Material (අමුද්‍රව්‍ය) පිළිබඳ දැනුවත් කිරීම.\n\nF. FINISHING - ගොඩනැගිල්ලේ නිමාව.\nFloor (පොලව), Walls (බිත්ති), Cealing (සිවිලිම), Skerting (නිමි පෙනුමක් ලබා දීම) වැනි දෑ පිළිබඳ දැනුවත් කිරීම.\n\nG. LANDSCAPING \nගෙවතු අලංකරණය පිළිබඳ සවිස්තරාත්මක දැනුවත් කිරීම හා එම සේවාව සැපයීම.`,
  },
  {
    icon: drawingOfficeIcon,
    title:
      'DRAWING OFFICE SERVICE AND PLANNING AGENT - (සැලසුම් ඇඳීම් නියෝජිත හා කාර්යාල සේවාව)',
    description:
      'සැලසුම් ඇඳීම් සේවාවන් සහ සැලසුම් නියෝජිත සේවාවන් වාස්තු විද්‍යාත්මක සැලසුම් සහ කාර්යාල අවශ්‍යතා සඳහා.',
  },
  {
    icon: remodelingIcon,
    title:
      'REMODELING & ALTERNATION SERVICE (පැරණි ගොඩනැගිල්ලට නව පෙනුමක්...)',
    description:
      'පැරණි ගොඩනැගිල්ලන්ට නව පෙනුමක් ලබා දීම සඳහා ප්‍රතිසංස්කරණ සහ වෙනස් කිරීමේ සේවාවන්.',
  },
  {
    icon: constructionIcon,
    title: 'BUILDING CONSTRUCTION - (ගොඩනැගිලි ඉදිකිරීම්)',
    description: 'ගොඩනැගිලි ඉදිකිරීමේ සේවාවන්.',
  },
];

const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section
      id='services'
      className='section-padding'
      style={{
        backgroundImage: `url(${serviceBgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='container-custom'>
        {/* Section Header */}
        <div className='text-center max-w-3xl mx-auto mb-56'>
          <span className='inline-block text-sm font-medium text-supporting-green uppercase tracking-wider mb-4'>
            Our Services
          </span>
          <h2 className='heading-lg text-supporting-green mb-4'>
            Comprehensive Architecture & Design Solutions
          </h2>
          <p className='body-base text-supporting-green'>
            From initial concept to final delivery, we provide end-to-end
            architectural services tailored to the Sri Lankan context.
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-20'>
          {services.map((service, index) => (
            <div key={index} className='flex flex-col items-center'>
              <button
                onClick={() => toggleService(index)}
                className='relative transition-all duration-700 hover:-translate-y-4 hover:scale-[1.05] group flex justify-center items-center mb-4'
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className='w-32 h-32 object-contain transition-transform duration-500 group-hover:scale-110'
                />
              </button>
              {expandedService === index && (
                <div className='text-center max-w-xs'>
                  <h3 className='text-lg font-semibold text-supporting-green mb-2'>
                    {service.title}
                  </h3>
                  <p className='text-sm text-foreground whitespace-pre-line'>
                    {service.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
