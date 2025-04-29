import { Metadata } from 'next';
import { AboutHeroSection } from '@/components/about/hero-section';
import { ValuesSection } from '@/components/about/values-section';
import { TeamSection } from '@/components/about/team-section';
import { CtaSection } from '@/components/home/cta-section';

export const metadata: Metadata = {
  title: 'About Us | TransformAI',
  description: 'Learn about TransformAI, our mission, values, and the expert team driving digital transformation through AI automation and Odoo implementation.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <ValuesSection />
      <TeamSection />
      <CtaSection />
    </>
  );
}