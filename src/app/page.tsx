import { Metadata } from 'next';
import Hero from '@/components/Hero';
import TrustBadges from '@/components/TrustBadges';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import BeforeAfter from '@/components/BeforeAfter';
import Testimonials from '@/components/Testimonials';
import ServiceAreas from '@/components/ServiceAreas';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Diablo Dents - Paintless Dent Removal East Bay',
  description: 'Expert paintless dent removal service in Pleasanton, Livermore, San Ramon, and surrounding East Bay areas. 20+ years experience, mobile service, satisfaction guaranteed. 89 five-star Google reviews.',
  keywords: 'paintless dent removal, PDR, dent repair, East Bay, Pleasanton, Livermore, San Ramon, Danville, Dublin, Blackhawk, door dings, hail damage',
  openGraph: {
    title: 'Diablo Dents - Paintless Dent Removal East Bay',
    description: 'Expert paintless dent removal service in Pleasanton, Livermore, San Ramon, and surrounding East Bay areas.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <Services />
      <HowItWorks />
      <BeforeAfter />
      <Testimonials />
      <ServiceAreas />
      <FAQ />
      <CTA />
    </>
  );
}
