import { Metadata } from 'next';
import { ServiceHero } from '@/components/services/service-hero';
import { BenefitsSection } from '@/components/services/benefits-section';
import { SolutionsSection } from '@/components/services/solutions-section';
import { CtaSection } from '@/components/home/cta-section';
import { serviceOfferings } from '@/lib/constants';

const odooService = serviceOfferings.find(service => service.id === 'odoo-implementation');

export const metadata: Metadata = {
  title: 'Odoo Implementation Services | Plucore',
  description: 'Streamline your business operations with our comprehensive Odoo implementation services.',
};

export default function OdooImplementationPage() {
  if (!odooService) return null;
  
  return (
    <>
      <ServiceHero 
        title={odooService.title} 
        description={odooService.description}
        image="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
      />
      
      <SolutionsSection 
        title="Our Odoo Implementation Solutions"
        description="We provide end-to-end Odoo implementation services to help businesses streamline operations and improve efficiency."
        solutions={odooService.solutions}
      />
      
      <BenefitsSection 
        title="Benefits of Odoo Implementation"
        benefits={odooService.benefits}
        image="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      {/* Case studies section commented out for future use */}
      {/*
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            ... Case studies content ...
          </div>
        </div>
      </section>
      */}
      
      <CtaSection />
    </>
  );
}