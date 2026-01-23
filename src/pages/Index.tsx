import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ConsultationForm from '@/components/ConsultationForm';
import ServicesSection from '@/components/ServicesSection';
import ResidentialBuildingConcept from '@/components/ResidentialBuildingConcept';
import PortfolioSection from '@/components/PortfolioSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className='min-h-screen'>
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ResidentialBuildingConcept />
      <PortfolioSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
