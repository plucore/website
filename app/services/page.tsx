import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ServiceHero } from '@/components/services/service-hero';
import { CtaSection } from '@/components/home/cta-section';
import { serviceOfferings } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Services | TransformAI',
  description: 'Discover how TransformAI can transform your business with our AI automation and Odoo implementation services.',
};

export default function ServicesPage() {
  return (
    <>
      <ServiceHero 
        title="Our Services" 
        description="Comprehensive digital transformation solutions tailored to your business needs."
      />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Transform Your Business</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive suite of services is designed to help businesses of all sizes accelerate their digital transformation journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {serviceOfferings.map((service) => (
              <Card key={service.id} className="border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {service.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500/10 flex items-center justify-center mr-3 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                        </div>
                        <p className="text-foreground/80">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="default" className="w-full group">
                    <Link href={`/services/${service.id}`} className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Not Sure Which Service You Need?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team of experts can help you identify the right solutions for your specific business challenges.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Schedule a Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <CtaSection />
    </>
  );
}