import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCallButton from '@/components/FloatingCallButton';

export const metadata: Metadata = {
  title: 'Diablo Dents - Paintless Dent Removal East Bay',
  description: 'Expert paintless dent removal service in Pleasanton, Livermore, San Ramon, and surrounding East Bay areas. 20+ years experience, mobile service, satisfaction guaranteed.',
  keywords: 'paintless dent removal, PDR, dent repair, East Bay, Pleasanton, Livermore, San Ramon, Danville, Dublin, Blackhawk',
  openGraph: {
    title: 'Diablo Dents - Paintless Dent Removal East Bay',
    description: 'Expert paintless dent removal service in Pleasanton, Livermore, San Ramon, and surrounding East Bay areas.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-dark-bg text-white">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}
