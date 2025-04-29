'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { Brain, LayoutGrid, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { serviceOfferings } from '@/lib/constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      }
    });

    timeline
      .fromTo(headingRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      );

    gsap.utils.toArray('.service-card').forEach((card: any, i) => {
      gsap.fromTo(card,
        { y: 60, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          delay: 0.2 + (i * 0.2),
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          } 
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="h-10 w-10 text-blue-500" />;
      case 'LayoutGrid':
        return <LayoutGrid className="h-10 w-10 text-blue-500" />;
      default:
        return <Brain className="h-10 w-10 text-blue-500" />;
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide end-to-end digital transformation solutions to help businesses thrive in the digital age.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8">
          {serviceOfferings.map((service) => (
            <Card key={service.id} className="service-card transition-all duration-300 hover:shadow-lg border border-border/50 hover:border-primary/20">
              <CardHeader>
                <div className="bg-primary/5 p-3 rounded-lg w-fit mb-4">
                  {renderIcon(service.icon)}
                </div>
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
                <Button asChild variant="ghost" className="w-full group">
                  <Link href={`/services/${service.id}`} className="flex items-center justify-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}