import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id='contact' className='section-padding bg-cream'>
      <div className='container-custom'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-20'>
          {/* Left - Contact Info */}
          <div>
            <span className='inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4'>
              Get In Touch
            </span>
            <h2 className='heading-lg text-foreground mb-6'>
              Let's Start Your Project
            </h2>
            <p className='body-base text-muted-foreground mb-8'>
              Ready to transform your space? Reach out to us through any of the
              channels below. We're here to help bring your vision to life.
            </p>

            <div className='space-y-6'>
              {/* Phone */}
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0'>
                  <Phone className='w-5 h-5 text-primary' />
                </div>
                <div>
                  <div className='font-medium text-foreground mb-1'>Phone</div>
                  <a
                    href='tel:+94772709909'
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    +94 77 270 9909
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0'>
                  <MessageCircle className='w-5 h-5 text-green-600' />
                </div>
                <div>
                  <div className='font-medium text-foreground mb-1'>
                    WhatsApp
                  </div>
                  <a
                    href='https://wa.me/94772709909'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-muted-foreground hover:text-green-600 transition-colors'
                  >
                    +94 77 270 9909
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0'>
                  <Mail className='w-5 h-5 text-primary' />
                </div>
                <div>
                  <div className='font-medium text-foreground mb-1'>Email</div>
                  <a
                    href='mailto:hello@DigitalArchitecturalStudio.lk'
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    hello@DigitalArchitecturalStudio.lk
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0'>
                  <MapPin className='w-5 h-5 text-primary' />
                </div>
                <div>
                  <div className='font-medium text-foreground mb-1'>Office</div>
                  <p className='text-muted-foreground'>
                    42 Galle Road, Colombo 03
                    <br />
                    Sri Lanka
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className='mt-8'>
              <Button
                size='lg'
                className='bg-green-600 hover:bg-green-700 text-white'
                asChild
              >
                <a
                  href="https://wa.me/94772709909?text=Hi,%20I'm%20interested%20in%20architecture%20services"
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <MessageCircle className='w-5 h-5 mr-2' />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Map/Image placeholder */}
          <div className='relative'>
            <div className='bg-card rounded-2xl overflow-hidden shadow-elegant-lg aspect-square lg:aspect-auto lg:h-full min-h-[400px]'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.63168053146!2d79.7861644697754!3d6.921831999999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1704200000000!5m2!1sen!2sus'
                width='100%'
                height='100%'
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Digital Architectural Studio Location'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
