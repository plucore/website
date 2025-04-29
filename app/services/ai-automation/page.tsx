import { Metadata } from 'next';
import { ServiceHero } from '@/components/services/service-hero';
import { BenefitsSection } from '@/components/services/benefits-section';
import { SolutionsSection } from '@/components/services/solutions-section';
import { CtaSection } from '@/components/home/cta-section';
import { serviceOfferings } from '@/lib/constants';

const aiService = serviceOfferings.find(service => service.id === 'ai-automation');

export const metadata: Metadata = {
  title: 'AI Automation Services | Plucore',
  description: 'Transform your business processes with intelligent automation solutions from Plucore.',
};

export default function AIAutomationPage() {
  if (!aiService) return null;
  
  return (
    <>
      <ServiceHero 
        title={aiService.title} 
        description={aiService.description}
        image="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      <SolutionsSection 
        title="Our AI Automation Solutions"
        description="We offer a comprehensive suite of AI automation services to help businesses streamline operations, reduce costs, and drive innovation."
        solutions={aiService.solutions}
      />
      
      <BenefitsSection 
        title="Benefits of AI Automation"
        benefits={aiService.benefits}
        image="https://images.pexels.com/photos/7709018/pexels-photo-7709018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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