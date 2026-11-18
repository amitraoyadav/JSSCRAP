import React from 'react';
import { ArrowDownRight, Truck, IndianRupee, MessageSquare } from 'lucide-react';
import { HERO_IMAGE, getWhatsAppUrl, DISPLAY_PHONE } from '../data/jsscrapData';
import { ResilientImage } from './ResilientImage';
import { WhatsAppIcon } from './WhatsAppIcon';

export const HeroSection: React.FC = () => {
  const heroWhatsappUrl = getWhatsAppUrl(
    'Hello JSScrap, I want to scrap my vehicle. Please share the details and scrap price quotation.'
  );

  return (
    <section
      id="home"
      className="relative bg-[#0B281B] text-white overflow-hidden"
    >
      {/* Full-width background photograph with measured contrast scrim */}
      <div className="relative min-h-[580px] lg:min-h-[660px] flex flex-col justify-between">
        <div className="absolute inset-0 z-0">
          <ResilientImage
            src={HERO_IMAGE}
            alt="Modern vehicle recycling and scrapping bay at JSScrap Delhi NCR"
            loading="eager"
            fallbackLabel="JSScrap Automotive Recycling Facility"
            className="w-full h-full object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#071B12]/95 via-[#0B281B]/85 to-[#0B281B]/50"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#071B12] via-transparent to-[#071B12]/30"
          />
        </div>

        {/* Hero Primary Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-24 lg:pb-16">
          <div className="max-w-3xl">
            <p className="text-sm sm:text-base font-medium text-[#A3E635] tracking-wide mb-4">
              Jishan Scrap · E-117, Mayapuri, New Delhi · Delhi NCR
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[60px] font-bold tracking-tight leading-[1.08] text-white text-balance">
              Sell Your Old Vehicle. Get The Best Scrap Value.
            </h1>

            <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-200 leading-relaxed max-w-2xl">
              Your Trusted Vehicle Scrapping Partner in Delhi NCR. Hassle-Free
              Pickup, Competitive Scrap Prices and Professional Service.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <a
                href={heroWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#84CC16] hover:bg-[#A3E635] text-[#071B12] font-semibold text-base transition-colors duration-150 whitespace-nowrap shrink-0 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Get Price on WhatsApp</span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-medium text-base transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3E635]"
              >
                <span>Explore Our Services</span>
                <ArrowDownRight className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>
        </div>

        {/* Full-width 3-column selling points strip anchored at hero base */}
        <div className="relative z-10 border-t border-white/15 bg-[#071B12]/75 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15">
              <div className="py-5 md:pr-6 flex items-start gap-3.5">
                <Truck
                  className="w-5 h-5 text-[#A3E635] shrink-0 mt-0.5"
                  strokeWidth={1.75}
                />
                <div>
                  <p className="font-display font-semibold text-base text-white">
                    Free Vehicle Pickup
                  </p>
                  <p className="text-sm text-neutral-300 mt-0.5">
                    Subject to service availability across Delhi NCR
                  </p>
                </div>
              </div>

              <div className="py-5 md:px-6 flex items-start gap-3.5">
                <IndianRupee
                  className="w-5 h-5 text-[#A3E635] shrink-0 mt-0.5"
                  strokeWidth={1.75}
                />
                <div>
                  <p className="font-display font-semibold text-base text-white">
                    Competitive Scrap Prices
                  </p>
                  <p className="text-sm text-neutral-300 mt-0.5">
                    Fair valuation for cars, bikes, scooties &amp; fleets
                  </p>
                </div>
              </div>

              <div className="py-5 md:pl-6 flex items-start gap-3.5">
                <MessageSquare
                  className="w-5 h-5 text-[#A3E635] shrink-0 mt-0.5"
                  strokeWidth={1.75}
                />
                <div>
                  <p className="font-display font-semibold text-base text-white">
                    Convenient WhatsApp Booking
                  </p>
                  <p className="text-sm text-neutral-300 mt-0.5 tabular-nums">
                    Direct assistance on {DISPLAY_PHONE}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
