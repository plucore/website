'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  CircleOff, 
  BadgeCheck, 
  HeartHandshake, 
  LightbulbIcon, 
  Rocket 
} from 'lucide-react';

const values = [
  {
    title: "Innovation",
    icon: LightbulbIcon,
    description: "We constantly explore cutting-edge technologies and methodologies to deliver innovative solutions that keep our clients ahead of the curve."
  },
  {
    title: "Excellence",
    icon: BadgeCheck,
    description: "We are committed to excellence in everything we do, from the quality of our technical implementations to the service we provide our clients."
  },
  {
    title: "Partnership",
    icon: HeartHandshake,
    description: "We build lasting partnerships with our clients, working collaboratively to understand their unique challenges and develop tailored solutions."
  },
  {
    title: "Results-Driven",
    icon: Rocket,
    description: "We measure our success by the tangible business outcomes we create for our clients, focusing on ROI and long-term value."
  },
  {
    title: "Integrity",
    icon: CircleOff,
    description: "We operate with complete transparency and honesty, building trust through ethical business practices and straightforward communication."
  }
];

export function ValuesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

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

    gsap.utils.toArray('.value-card').forEach((card: any, i) => {
      gsap.fromTo(card,
        { y: 60, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          delay: 0.1 * i,
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 80%",
          } 
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The principles that guide us in delivering exceptional service and transformative solutions.
          </p>
        </div>

        <div 
          ref={valuesRef} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((value, idx) => (
            <div 
              key={idx} 
              className="value-card bg-card rounded-lg p-6 shadow-sm border border-border/50 transition-all duration-300 hover:shadow-md hover:border-primary/20"
            >
              <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}