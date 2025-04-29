'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';

interface ServiceHeroProps {
  title: string;
  description: string;
  image?: string;
}

export function ServiceHero({ title, description, image }: ServiceHeroProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

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
      .fromTo(buttonRef.current, 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8 }, 
        '-=0.6'
      );
  }, []);

  const heroImage = image || "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70 z-10"></div>
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Service Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-20 py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            {title}
          </h1>
          <p 
            ref={textRef}
            className="text-xl text-white/90 mb-8"
          >
            {description}
          </p>
          <div ref={buttonRef}>
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50"
              asChild
            >
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}