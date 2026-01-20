import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImage from '@/assets/website-logo.jpeg';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Process', href: '#process' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-elegant'
          : 'bg-transparent'
      }`}
    >
      <div className='container-custom'>
        <div className='flex items-center justify-between h-20'>
          {/* Logo */}
          <a href='#' className='flex items-center gap-2'>
            <img
              src={logoImage}
              alt='My Plan Architectural Studio Logo'
              className='h-10 w-auto'
            />
          </a>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center gap-8'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full'
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className='hidden lg:flex items-center gap-4'>
            <a
              href='https://wa.me/94772709909'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors'
            >
              <Phone className='w-4 h-4' />
              <span>+94 77 270 9909</span>
            </a>
            <Button variant='default' size='sm' asChild>
              <a href='#consultation'>Book Consultation</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='lg:hidden p-2'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className='w-6 h-6' />
            ) : (
              <Menu className='w-6 h-6' />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className='lg:hidden pb-6 animate-fade-in'>
            <div className='flex flex-col gap-4'>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className='text-base font-medium text-foreground py-2'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className='pt-4 border-t border-border'>
                <Button variant='default' className='w-full' asChild>
                  <a href='#consultation'>Book Consultation</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
