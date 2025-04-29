'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react';

interface BenefitsSectionProps {
  title: string;
  benefits: string[];
  image: string;
}

export function BenefitsSection({ title, benefits, image }: BenefitsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      }
    });

    timeline
      .fromTo(contentRef.current,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8 }
      )
      .fromTo(imageRef.current,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={contentRef}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{title}</h2>
            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mr-3 mt-0.5" />
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          <div ref={imageRef} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-70"></div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src={image} 
                alt="Service Benefits"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}