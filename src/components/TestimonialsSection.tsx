import { Star, Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import buildingConcept1 from '@/assets/building-concept1.png';
import buildingConcept2 from '@/assets/building-conceptnew.jpeg';
import buildingConcept3 from '@/assets/building-concept3.png';

const testimonials = [
  {
    name: 'Rajitha Perera',
    role: 'Homeowner, Colombo',
    content:
      'Digital Architectural Studio අපේ dream home යථාර්ථයක් බවට පරිවර්තනය කළා. Modern Sri Lankan living පිළිබඳ ඔවුන්ගේ attention to detail සහ understanding ඉතා exceptionalයි. 3D visualization අපට නිවැරදිව දැකගැනීමට උදව් කළා.',
    rating: 5,
  },
  {
    name: 'Nimali Fernando',
    role: 'Business Owner, Kandy',
    content:
      'අපේ boutique hotel renovation සඳහා අපි ඔවුන් hire කළා. Team එක stunning design deliver කළා, heritage එකට ගෞරව දක්වමින් modern comforts එකතු කරමින්. Highly professional සහ සෑම විටම schedule එකට අනුව ක්‍රියා කළා.',
    rating: 5,
  },
  {
    name: 'Ashan De Silva',
    role: 'Property Developer, Galle',
    content:
      'Digital Architectural Studio සමඟ multiple projects වල work කිරීම අතිශය සතුටකි. ඔවුන්ගේ designs innovative, practical සහ සෑම විටම budget තුළම වේ. ඔවුන් Sri Lankan market එක හොඳින් understand කරති.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id='testimonials' className='section-padding bg-background'>
      <div className='container-custom'>
        {/* Section Header */}
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <span className='inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4'>
            Testimonials
          </span>
          <h2 className='heading-lg text-foreground mb-4'>
            What Our Clients Say
          </h2>
          <p className='body-base text-muted-foreground'>
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className='relative max-w-4xl mx-auto'>
          <Carousel
            className='w-full'
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className='bg-card p-8 rounded-2xl border border-border hover:border-accent/30 hover:shadow-elegant-lg transition-all duration-300'>
                    {/* Quote Icon */}
                    <div className='w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6'>
                      <Quote className='w-5 h-5 text-accent' />
                    </div>

                    {/* Rating */}
                    <div className='flex gap-1 mb-4'>
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className='w-4 h-4 fill-accent text-accent'
                          />
                        ),
                      )}
                    </div>

                    {/* Content */}
                    <p className='text-foreground mb-6 leading-relaxed'>
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className='flex items-center gap-4'>
                      <div className='w-12 h-12 bg-primary rounded-full flex items-center justify-center'>
                        <span className='text-primary-foreground font-medium'>
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className='font-medium text-foreground'>
                          {testimonial.name}
                        </div>
                        <div className='text-sm text-muted-foreground'>
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Residential Building Concept */}
        {/* <div className='text-center max-w-3xl mx-auto mb-16 mt-16'>
          <h2 className='heading-lg text-foreground mb-4'>
            Residential Building Concept
          </h2>
          <p className='body-base text-muted-foreground'>
            Explore our innovative residential building concepts designed to
            inspire modern living.
          </p>
        </div> */}

        {/* Concept Images Grid */}
      </div>
    </section>
  );
};

export default TestimonialsSection;
