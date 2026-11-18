/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { VehiclesAcceptedSection } from './components/VehiclesAcceptedSection';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { AboutTrustSection } from './components/AboutTrustSection';
import { ScrappingDetailsSection } from './components/ScrappingDetailsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#141816] overflow-x-clip">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <WhyChooseSection />
        <HowItWorksSection />
        <VehiclesAcceptedSection />
        <ServiceAreaSection />
        <AboutTrustSection />
        <ScrappingDetailsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
