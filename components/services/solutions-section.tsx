'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Solution {
  title: string;
  description: string;
}

interface SolutionsSectionProps {
  title: string;
  description: string;
  solutions: Solution[];
}

export function SolutionsSection({ title, description, solutions }: SolutionsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);

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

    gsap.utils.toArray('.solution-card').forEach((card: any, i) => {
      gsap.fromTo(card,
        { y: 60, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          delay: 0.2 * i,
          scrollTrigger: {
            trigger: solutionsRef.current,
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
    <section ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div 
          ref={solutionsRef} 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {solutions.map((solution, idx) => (
            <Card 
              key={idx} 
              className="solution-card border-border/50 transition-all duration-300 hover:shadow-md hover:border-primary/20"
            >
              <CardHeader>
                <div className="bg-primary/5 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="font-bold text-primary">{idx + 1}</span>
                </div>
                <CardTitle className="text-xl">{solution.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {solution.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}