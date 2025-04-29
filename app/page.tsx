import { HeroSection } from '@/components/home/hero-section';
import { ServicesSection } from '@/components/home/services-section';
// import { TestimonialsSection } from '@/components/home/testimonials-section';
// import { StatsSection } from '@/components/home/stats-section';
import { CtaSection } from '@/components/home/cta-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      {/* Stats and Testimonials sections commented out for future use */}
      {/* <StatsSection /> */}
      {/* <TestimonialsSection /> */}
      <CtaSection />
    </>
  );
}