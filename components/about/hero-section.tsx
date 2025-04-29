'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export function AboutHeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    timeline
      .fromTo(titleRef.current, 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8 }
      )
      .fromTo(textRef.current, 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8 }, 
        '-=0.6'
      )
      .fromTo(imageRef.current, 
        { x: 40, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1 }, 
        '-=0.8'
      );
  }, []);

  return (
    <section className="pt-16 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <h1 
              ref={titleRef}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            >
              About TransformAI
            </h1>
            <div ref={textRef} className="space-y-4 text-lg text-muted-foreground">
              <p>
                Founded in 2015, TransformAI is a leading digital transformation consultancy dedicated to helping businesses harness the power of artificial intelligence and enterprise resource planning to achieve operational excellence.
              </p>
              <p>
                Our team of experts brings together deep technological expertise and business acumen to deliver tailored solutions that drive real results. We don't just implement technology; we transform business processes and empower organizations to thrive in the digital age.
              </p>
              <p>
                With a proven track record of success across industries including manufacturing, healthcare, finance, and retail, we pride ourselves on our client-centered approach and commitment to delivering measurable ROI.
              </p>
            </div>
          </div>
          <div 
            ref={imageRef}
            className="mt-10 lg:mt-0 lg:col-span-6"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="TransformAI team meeting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-lg font-medium">Our mission is to make digital transformation accessible to businesses of all sizes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}