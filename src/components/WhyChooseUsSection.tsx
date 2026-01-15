import { Target, Eye, Users } from 'lucide-react';

const visionMissionData = [
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'වාසස්ථාන හෙවත් ගොඩනැගිලි අවශ් යතාව වසර දහස් ගානක අතීතයක් තියෙන දෙයක්. ආදිකාලෙන් ගල් ගුහා, ගස් බෙන වැනි තැන් වලත් මානවයා ජීවිතය ගත කළා. මේ වෙනකොට තාක්ෂණයේ සහ විද් යාවේ දියුණුවත් සමග නූතන මිනිසා කලාත්මක වූත් විවිධ වූත් විචිත් රවත් වූත් උත්කර්ෂවත් වඩාත් පහසුකම් සහිත නව ආරක ගඩනැගිලි ඉදිකිරීම් ක් රමවේද අනුගමනය කරනවා.',
    englishDescription:
      'Housing or building requirements have a history of thousands of years. From ancient times, humans lived in stone caves and tree houses. But with the advancement of technology and science, modern man follows the practice of building new, artistic, diverse, strange, progressive and more comfortable spaces.',
  },
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'ඔබව හැකිතාක් දුරකට සම්ප් රදානුකූල තාක්ෂණයෙන් සහ අමුද් රව් ය වලින් මුදවා වෙනස් ආරක, බෙහෙවින් මිල අඩු වඩාත් කල්පවතින අමු ද් රව් ය සමග නව තාක්ෂණයෙන් යුත් ගෙයක්/ගොඩනැගිල්ලක් සාදා ගැනීමට මග පෙන්වන එක... අපි ඔබේ අවශ් යතාවය තේරැම් ගන්නවා. පවතින වෙළෙඳ පොල සමග ඔබේ නිවස හො ගොඩනැගිල්ල සඳහා යන අමුද් රව් ය සහ පුහුණු නුපුහුණු ශ් රමය සමග සමස්ත මිල ගණන් බලනවා. ඉන් පසු එම අමු ද් රව් ය වෙනස් කරමින් වඩා අඩු මිලකට ඉහල කල්පැවැත්මක් හා ප් රමිතියකින් යුත් අමු ද් රව් ය ආෙශ කරනවා. කොෙහාමටත් අවසානයේදී ඔබට සමාන් ය වෙළෙඳ පොලට වඩා 30% ක් පමණ අඩු මිලකට ඔබේ නිවස/ගොඩනැගිල්ල තනා දෙනවා.',
    englishDescription:
      'To guide you as much as possible to save on technology and materials and create a new, very low-cost, more sustainable house/building with new technology using different materials... We analyze your requirements. We calculate the total cost including materials and skilled/unskilled labor for your house or building with existing market prices. Then we source materials that are cheaper with higher sustainability and efficiency by changing those materials. Finally, we build your house/building at a price that is about 30% cheaper than the equivalent market rate.',
  },
  {
    icon: Users,
    title: 'Who We Are',
    description:
      "At My Plan, we are a digital-first architectural studio bridging the gap between imaginative design and technical precision. We started this studio with a simple belief: every project is a story waiting to be told. As a digital architectural studio, we use technology to foster deeper collaboration with our clients, ensuring transparency and clarity at every stage of the design journey. We don't just draw plans; we build digital environments that allow you to experience your space before the first brick is laid. By leveraging advanced 3D modelling and sustainable design practices, our team and digital strategists transform complex ideas into functional, breathtaking realities. We believe that great architecture should be accessible, intuitive, and perfectly tailored to the modern world.",
    englishDescription:
      'At My Plan, we are a digital-first architectural studio bridging the gap between imaginative design and technical precision. We started this studio with a simple belief: every project is a story waiting to be told. As a digital architectural studio, we use technology to foster deeper collaboration with our clients, ensuring transparency and clarity at every stage of the design journey.',
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id='about' className='section-padding bg-secondary-bg'>
      <div className='container-custom'>
        {/* Section Header */}
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <span className='inline-block text-sm font-medium text-supporting-green uppercase tracking-wider mb-4'>
            About My Plan
          </span>
          <h2 className='heading-lg text-text-light mb-4'>
            Our Vision, Mission & Values
          </h2>
          <p className='body-base text-text-muted'>
            Transforming architectural dreams into reality through innovative
            design and sustainable practices.
          </p>
        </div>

        {/* Vision Mission Grid */}
        <div className='grid lg:grid-cols-3 gap-8 lg:gap-12'>
          {visionMissionData.map((item, index) => (
            <div
              key={item.title}
              className='group bg-primary-bg p-8 rounded-2xl border border-secondary-accent/30 hover:border-secondary-accent hover:shadow-elegant-lg transition-all duration-300'
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className='w-16 h-16 bg-primary-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-accent group-hover:scale-110 transition-all duration-300'>
                <item.icon className='w-8 h-8 text-primary-accent group-hover:text-text-light transition-colors duration-300' />
              </div>
              <h3 className='heading-md text-text-light mb-4'>{item.title}</h3>
              <p className='text-supporting-green text-sm leading-relaxed mb-4'>
                {item.englishDescription}
              </p>
              <details className='group/details'>
                <summary className='text-secondary-accent hover:text-primary-accent cursor-pointer text-sm font-medium transition-colors duration-200'>
                  Read in Sinhala/Tamil →
                </summary>
                <p className='text-text-muted text-sm leading-relaxed mt-3 pt-3 border-t border-secondary-accent/20'>
                  {item.description}
                </p>
              </details>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className='mt-20 grid grid-cols-2 md:grid-cols-4 gap-8'>
          <div className='text-center'>
            <div className='text-4xl md:text-5xl font-display font-bold text-primary-accent mb-2'>
              15+
            </div>
            <div className='text-supporting-green text-sm'>
              Years of Excellence
            </div>
          </div>
          <div className='text-center'>
            <div className='text-4xl md:text-5xl font-display font-bold text-primary-accent mb-2'>
              500+
            </div>
            <div className='text-supporting-green text-sm'>
              Projects Completed
            </div>
          </div>
          <div className='text-center'>
            <div className='text-4xl md:text-5xl font-display font-bold text-primary-accent mb-2'>
              98%
            </div>
            <div className='text-supporting-green text-sm'>
              Client Satisfaction
            </div>
          </div>
          <div className='text-center'>
            <div className='text-4xl md:text-5xl font-display font-bold text-primary-accent mb-2'>
              30%
            </div>
            <div className='text-supporting-green text-sm'>Cost Savings</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
