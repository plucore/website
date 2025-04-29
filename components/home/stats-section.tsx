'use client';

import { useRef, useEffect } from 'react';
import { stats } from '@/lib/constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const counters = document.querySelectorAll('.stat-counter');
    
    counters.forEach((counter: any, i) => {
      const val = counter.textContent;
      counter.textContent = '0';
      
      gsap.to(counter, {
        innerText: val,
        duration: 2,
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        delay: 0.2 * i
      });
    });

    gsap.fromTo(statsRef.current,
      { y: 40, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                <span className="stat-counter">{stat.value}</span>
              </p>
              <p className="text-lg text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}