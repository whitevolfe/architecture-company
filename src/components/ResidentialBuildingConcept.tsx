import residentConceptLogo from '@/assets/resident-conceptlogo.jpeg';
import residentConceptBuildingImg from '@/assets/resident-conceptbuilingimg-removebg-preview.png';

const ResidentialBuildingConcept = () => {
  return (
    <section className='w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-teal-50 to-teal-100 relative'>
      <div className='text-center max-w-3xl mx-auto mb-12'>
        <span className='inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4'>
          Residential Building Concept
        </span>
        <h2 className='heading-lg text-foreground mb-4'>
          Innovative living spaces designed for modern lifestyles
        </h2>
      </div>

      {/* Building Image - Bottom Right */}
      <div className='absolute bottom-4 right-4 lg:bottom-8 lg:right-8 z-10'>
        <img
          src={residentConceptBuildingImg}
          alt='Residential Building Concept'
          className='w-64 h-64 md:w-80 md:h-80 lg:w-[40rem] lg:h-[40rem] object-contain opacity-90'
        />
      </div>

      <div className='container-custom relative z-20'>
        {/* Left Content - Text Blocks */}
        <div className='max-w-4xl space-y-8'>
          {/* English Text Block */}
          <div className='rounded-lg p-6'>
            <p className='text-red-800 leading-relaxed text-lg md:text-xl'>
              For a peaceful and independent life, owning a home of your own is
              truly important. You may already have a vision for your dream
              home. There is a saying, "A home reflects the personality of its
              owner." This is where our involvement begins. Enhancing your ideas
              and presenting them in a more creative and professional manner is
              our responsibility. From planning, cost estimation, material
              selection, and coordination with professionals to interior design
              and 3D visualization, we are fully prepared to support every
              aspect of your journey.
            </p>
          </div>
          {/* Sinhala Text Block */}
          <div className=' backdrop-blur-sm rounded-lg p-6 '>
            <p className='text-red-800 leading-relaxed font-medium text-lg md:text-xl'>
              නිදහස් සාමකාමී ජීවිතයකට තමන්ගේම වූ නිවසක් හරිම වැදගත්. ඔබට අදහසක්
              තිබෙන්නට පුලුවන් ඔබේ නිවස ගැන. කියමනක් තියෙනවා "යකාගේ හැටියට
              විමානේ" කියලා. අපේ මැදිහත් වීම සිදුවන්නේ එතැනදී. ඔබේ අදහස වැඩි
              දියුණු කර වඩාත් නිර්මාණශීලීව වෘත්තීය මට්ටමින් ඉදිරිපත් කිරීම අපේ
              වගකීම වේ. සැලසුම්, ඇස්තමේන්තු, අමුද්‍රව්‍ය, වෘත්තිකයන්ගේ
              සම්බන්ධතා, ගෘහ අලංකරණ කටයුතු, ත්‍රිමාන සජීවීකරණය... මේ ඕනෑම
              කටයුත්තකට අපි සූදානම්...
            </p>
          </div>

          {/* Tamil Text Block */}
          <div className=' backdrop-blur-sm rounded-lg p-6 '>
            <p className='text-red-800 leading-relaxed font-medium text-lg md:text-xl'>
              அமைதியும் சுதந்திரமும் நிறைந்த வாழ்க்கைக்கு, சொந்த வீடு ஒன்றை
              கொண்டிருப்பது மிகவும் முக்கியமானது. உங்கள் கனவு இல்லம் குறித்து
              உங்களுக்கே ஒரு எண்ணம் இருக்கலாம். "ஒருவரின் விருப்பம் போலவே அவரது
              இல்லமும் அமையும்" என்ற சொல்லாடல் உள்ளது. அத்தகைய தருணத்தில்
              நாங்கள் உங்களுடன் இணைகிறோம். உங்கள் எண்ணங்களை மேலும் மேம்படுத்தி,
              படைப்பாற்றலுடனும் தொழில்முறை தரத்துடனும் வழங்குவது எங்களின்
              பொறுப்பு. திட்டமிடல், செலவுக் கணக்கீடு, கட்டுமானப் பொருட்கள்,
              தொழில்முறை நிபுணர்களின் ஒருங்கிணைப்பு, உள் அலங்காரம் மற்றும் 3D
              அனிமேஷன் உள்ளிட்ட அனைத்து சேவைகளையும் நாங்கள் வழங்கத் தயாராக
              உள்ளோம்.
            </p>
          </div>
        </div>

        {/* Logo at Bottom Left */}
        <div className='mt-8 lg:mt-12'>
          <img
            src={residentConceptLogo}
            alt='Company Logo'
            className='w-40 h-40 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain'
          />
        </div>
      </div>
    </section>
  );
};

export default ResidentialBuildingConcept;
