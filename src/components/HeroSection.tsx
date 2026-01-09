import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ConsultationForm from './ConsultationForm';
import heroImage from '@/assets/hero-image.png';

const HeroSection = () => {
  return (
    <section
      id='consultation'
      className='relative min-h-screen flex items-center pt-20'
    >
      {/* Background Image */}
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='absolute inset-0 via-background/80 to-background/40' />
      </div>

      {/* Content */}
      <div className='container-custom relative z-10 py-12 md:py-20'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Left Content */}
          <div className='animate-fade-up'>
            <div className='inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6'>
              <span className='w-2 h-2 bg-accent rounded-full animate-pulse' />
              <span className='text-sm font-medium text-accent-foreground'>
                Premium Architecture Studio in Sri Lanka
              </span>
            </div>

            <h1 className='heading-xl text-foreground mb-6'>
              Modern Architecture &{' '}
              <span className='text-primary'>Smart Building</span> Solutions
            </h1>

            <p className='body-lg text-muted-foreground mb-4 max-w-lg'>
              Transform your vision into architectural masterpieces. From new
              builds to renovations, we bring world-class design to Sri Lanka.
            </p>

            <div className='flex flex-wrap gap-3 mb-8'>
              <span className='px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full'>
                New Buildings
              </span>
              <span className='px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full'>
                Renovations
              </span>
              <span className='px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full'>
                Interior & Exterior Design
              </span>
            </div>

            <div className='flex flex-col sm:flex-row gap-4'>
              <Button size='lg' asChild>
                <a href='#consultation'>Book Free Consultation</a>
              </Button>
              <Button size='lg' variant='outline' className='gap-2' asChild>
                <a
                  href="https://wa.me/94772709909?text=Hi,%20I'm%20interested%20in%20architecture%20services"
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <MessageCircle className='w-5 h-5' />
                  WhatsApp Now
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border'>
              <div>
                <div className='text-3xl md:text-4xl font-display font-bold text-primary'>
                  15+
                </div>
                <div className='text-sm text-muted-foreground'>
                  Years Experience
                </div>
              </div>
              <div>
                <div className='text-3xl md:text-4xl font-display font-bold text-primary'>
                  500+
                </div>
                <div className='text-sm text-muted-foreground'>
                  Projects Completed
                </div>
              </div>
              <div>
                <div className='text-3xl md:text-4xl font-display font-bold text-primary'>
                  98%
                </div>
                <div className='text-sm text-muted-foreground'>
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>

          {/* Right - Consultation Form */}
          <div className='animate-slide-in-right'>
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
