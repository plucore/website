'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { teamMembers } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Twitter } from 'lucide-react';

export function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

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

    gsap.utils.toArray('.team-card').forEach((card: any, i) => {
      gsap.fromTo(card,
        { y: 60, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          delay: 0.2 * i,
          scrollTrigger: {
            trigger: teamRef.current,
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
    <section ref={sectionRef} className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our experts bring together deep technological expertise and business acumen to drive digital transformation.
          </p>
        </div>

        <div 
          ref={teamRef} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <Card className="overflow-hidden border-border/50 transition-all duration-300 hover:shadow-md hover:border-primary/20 h-full">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="h-64 w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex space-x-2">
                      <a href="#" className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors">
                        <Linkedin className="h-5 w-5 text-white" />
                      </a>
                      <a href="#" className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors">
                        <Twitter className="h-5 w-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-blue-500 mb-3">{member.position}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}