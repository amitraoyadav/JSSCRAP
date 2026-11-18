import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES, getWhatsAppUrl } from '../data/jsscrapData';
import { ResilientImage } from './ResilientImage';
import { WhatsAppIcon } from './WhatsAppIcon';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <p className="text-sm font-semibold text-[#15803D] tracking-wide mb-2">
            Our Vehicle Scrapping Services
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#141816] text-balance">
            Professional Scrap Buying for Every Vehicle Category
          </h2>
          <p className="mt-4 text-base text-[#4B5550] leading-relaxed">
            Whether you own a 15-year-old petrol car, an unused commuter bike, a
            scooty, or a commercial vehicle in Delhi NCR, JSScrap offers a
            straightforward way to get a quote on WhatsApp.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col bg-[#F7F9F8] rounded-xl border border-neutral-200 overflow-hidden transition-colors duration-200 hover:border-[#15803D]/50"
            >
              {/* 4:3 Image Container */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-200 relative">
                <ResilientImage
                  src={service.image}
                  alt={service.imageAlt}
                  fallbackLabel={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-medium text-[#4B5550] mb-2 tabular-nums">
                    <span>{service.index}</span>
                    <span>Delhi NCR</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#141816] tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-[15px] text-[#4B5550] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-neutral-200/80">
                  <a
                    href={getWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between gap-2 px-4 py-2.5 rounded-lg bg-[#0B281B] hover:bg-[#15803D] text-white text-sm font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15803D]"
                  >
                    <span className="inline-flex items-center gap-2 whitespace-nowrap">
                      <WhatsAppIcon className="w-4 h-4 text-[#A3E635] shrink-0" />
                      <span>Enquire on WhatsApp</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 shrink-0 opacity-80" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
