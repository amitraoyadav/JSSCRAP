import React from 'react';
import { FileText, Scale, ShieldCheck } from 'lucide-react';
import { getWhatsAppUrl } from '../data/jsscrapData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const AboutTrustSection: React.FC = () => {
  const trustWhatsappUrl = getWhatsAppUrl(
    'Hello JSScrap, I would like to understand the valuation, pickup, and required documentation process for scrapping my vehicle.'
  );

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Editorial Trust Statement */}
          <div className="lg:col-span-6">
            <p className="text-sm font-semibold text-[#15803D] tracking-wide mb-2">
              About Jishan Scrap (JSScrap)
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#141816] text-balance">
              Your Vehicle Deserves a Responsible Goodbye
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[#37413C] leading-relaxed">
              At JSScrap, we aim to make vehicle scrapping simple, convenient
              and transparent. Contact our team to understand the valuation,
              pickup and required documentation process.
            </p>
            <p className="mt-4 text-base text-[#4B5550] leading-relaxed">
              Operating as Jishan Scrap across Delhi NCR, we help car, bike,
              scooty, and commercial vehicle owners dispose of old or damaged
              vehicles responsibly without unnecessary middlemen or confusion.
            </p>

            <div className="mt-8">
              <a
                href={trustWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#15803D] hover:bg-[#166534] text-white text-sm sm:text-base font-semibold transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B281B]"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Discuss Process on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Transparent Process Pillars (No fake stats or reviews) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-xl bg-[#F7F9F8] border border-neutral-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center shrink-0">
                <Scale className="w-5 h-5 text-[#15803D]" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-[#141816]">
                  Transparent Valuation Guidance
                </h3>
                <p className="mt-1.5 text-sm sm:text-[15px] text-[#4B5550] leading-relaxed">
                  Share clear photos and vehicle details on WhatsApp so our team
                  can explain how the scrap price quotation is calculated.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#F7F9F8] border border-neutral-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-[#15803D]" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-[#141816]">
                  Clear Documentation Checklist
                </h3>
                <p className="mt-1.5 text-sm sm:text-[15px] text-[#4B5550] leading-relaxed">
                  We guide owners on ownership verification and standard
                  handover paperwork required under applicable norms.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#F7F9F8] border border-neutral-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#15803D]" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-[#141816]">
                  Direct Communication, Zero Runaround
                </h3>
                <p className="mt-1.5 text-sm sm:text-[15px] text-[#4B5550] leading-relaxed">
                  Connect directly with Jishan Scrap on WhatsApp to confirm
                  pickup availability, pricing, and timing in one conversation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
