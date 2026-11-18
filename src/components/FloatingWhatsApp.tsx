import React from 'react';
import { Phone } from 'lucide-react';
import { DISPLAY_PHONE, getWhatsAppUrl } from '../data/jsscrapData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl(
    'Hello JSScrap, I want to scrap my vehicle. Please share the scrap price and pickup details.'
  );

  return (
    <>
      {/* Desktop & Tablet Floating WhatsApp Button (Bottom Right) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with JSScrap on WhatsApp"
        className="hidden md:inline-flex fixed bottom-6 right-6 z-40 items-center gap-2.5 px-5 py-3.5 rounded-full bg-[#15803D] hover:bg-[#166534] text-white font-semibold text-sm shadow-lg border border-white/15 transition-transform duration-150 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B281B]"
      >
        <WhatsAppIcon className="w-5 h-5 text-[#A3E635] shrink-0" />
        <span className="whitespace-nowrap">WhatsApp Scrap Quote</span>
      </a>

      {/* Mobile Fixed Bottom Enquiry Bar (56px height, 44px touch targets) */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0B281B] border-t border-white/15 px-3 h-14 flex items-center justify-between gap-2 shadow-lg">
        <a
          href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`}
          aria-label={`Call ${DISPLAY_PHONE}`}
          className="inline-flex items-center justify-center gap-1.5 px-3.5 h-11 rounded-lg bg-white/10 text-white text-xs font-semibold whitespace-nowrap shrink-0"
        >
          <Phone className="w-4 h-4 text-[#A3E635]" />
          <span className="tabular-nums">Call</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-4 rounded-lg bg-[#84CC16] hover:bg-[#A3E635] text-[#071B12] text-xs font-bold whitespace-nowrap"
        >
          <WhatsAppIcon className="w-4 h-4 shrink-0" />
          <span>Get Scrap Price on WhatsApp</span>
        </a>
      </div>
    </>
  );
};
