'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';

export function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    timeline
      .fromTo(titleRef.current, 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8 }
      )
      .fromTo(subtitleRef.current, 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8 }, 
        '-=0.6'
      )
      .fromTo(buttonsRef.current, 
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
    <div className="relative overflow-hidden bg-gradient-to-b from-background to-accent/10 pt-16 pb-24 sm:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6 text-center lg:text-left">
            <h1 
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
            >
              <span className="block">Transform Your Business</span>
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                With AI & Odoo
              </span>
            </h1>
            <p 
              ref={subtitleRef}
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0"
            >
              Accelerate your digital transformation with our expert services in AI automation 
              and Odoo implementation. Unlock efficiency, reduce costs, and drive innovation.
            </p>
            <div 
              ref={buttonsRef}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white"
                asChild
              >
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <Link href="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
          <div 
            ref={imageRef}
            className="mt-16 lg:mt-0 lg:col-span-6"
          >
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Digital transformation visualization"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-card/80 backdrop-blur-md p-4 rounded-lg shadow-lg">
                    <p className="text-lg font-medium">Trusted by industry leaders</p>
                    <div className="mt-2 flex justify-between items-center">
                      <div className="space-y-1">
                        <div className="h-2 w-16 bg-blue-500 rounded-full"></div>
                        <div className="h-2 w-12 bg-blue-400 rounded-full"></div>
                      </div>
                      <div className="space-y-1">
                        <div className="h-2 w-14 bg-purple-500 rounded-full"></div>
                        <div className="h-2 w-10 bg-purple-400 rounded-full"></div>
                      </div>
                      <div className="space-y-1">
                        <div className="h-2 w-12 bg-green-500 rounded-full"></div>
                        <div className="h-2 w-16 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}