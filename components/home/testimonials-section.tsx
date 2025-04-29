'use client';

import { useRef, useEffect, useState } from 'react';
import { testimonials } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

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
      )
      .fromTo(cardsRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.4"
      );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from the businesses we've helped transform through our AI automation and Odoo implementation services.
          </p>
        </div>

        <div ref={cardsRef} className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="border border-border/50 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-2 h-full">
                          <div className="h-64 md:h-full relative">
                            <img
                              src={testimonial.image}
                              alt={testimonial.author}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-blue-500 rounded-full p-2">
                              <Quote className="h-6 w-6 text-white" />
                            </div>
                          </div>
                        </div>
                        <div className="md:col-span-3 p-8 flex flex-col justify-center">
                          <p className="text-lg md:text-xl mb-6 italic text-foreground">
                            "{testimonial.quote}"
                          </p>
                          <div>
                            <p className="font-semibold text-lg">{testimonial.author}</p>
                            <p className="text-muted-foreground">
                              {testimonial.position}, {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === activeIndex ? 'w-8 bg-blue-500' : 'w-2.5 bg-muted'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}