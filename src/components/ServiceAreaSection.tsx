import React, { useState } from 'react';
import { MapPin, Info, ArrowUpRight, Building2, Clock } from 'lucide-react';
import {
  SERVICE_LOCATIONS,
  BUSINESS_ADDRESS,
  OPERATING_HOURS,
  getWhatsAppUrl,
} from '../data/jsscrapData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const ServiceAreaSection: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>('Mayapuri');

  const locationWhatsappUrl = getWhatsAppUrl(
    `Hello JSScrap, I want to check vehicle scrapping and pickup availability in ${selectedLocation}. Please share the details.`
  );

  return (
    <section
      id="service-area"
      className="py-20 lg:py-28 bg-[#F4F7F5] border-y border-neutral-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Narrative, Yard Address & Availability Notice */}
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-[#15803D] tracking-wide mb-2">
              Service Coverage · Delhi NCR
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#141816] text-balance">
              Vehicle Scrapping Services Across Delhi NCR
            </h2>
            <p className="mt-4 text-base text-[#4B5550] leading-relaxed">
              Dispatched from our Mayapuri, New Delhi hub. Select your locality
              below to enquire about scrap valuation and pickup scheduling.
            </p>

            {/* Primary Yard Address Card */}
            <div className="mt-6 p-5 rounded-xl bg-[#0B281B] text-white space-y-3">
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-[#A3E635] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-medium text-[#A3E635]">
                    JSScrap Yard &amp; Dispatch Hub
                  </p>
                  <p className="font-display text-base sm:text-lg font-bold text-white mt-0.5">
                    {BUSINESS_ADDRESS}
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-white/15 flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300">
                <Clock className="w-4 h-4 text-[#A3E635] shrink-0" />
                <span>{OPERATING_HOURS}</span>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-white border border-neutral-200 flex items-start gap-3">
              <Info className="w-5 h-5 text-[#15803D] shrink-0 mt-0.5" />
              <p className="text-sm text-[#37413C] leading-relaxed">
                Service and vehicle pickup availability is subject to
                confirmation based on exact address, vehicle condition, and
                scheduling.
              </p>
            </div>

            <div className="mt-7">
              <a
                href={locationWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#15803D] hover:bg-[#166534] text-white text-sm sm:text-base font-semibold transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B281B]"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>Check Pickup in {selectedLocation}</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>

          {/* Right Location Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {SERVICE_LOCATIONS.map((location) => {
                const isSelected = selectedLocation === location;
                return (
                  <button
                    key={location}
                    type="button"
                    onClick={() => setSelectedLocation(location)}
                    aria-pressed={isSelected}
                    className={`flex items-center gap-2.5 px-4 py-3.5 rounded-xl border text-left transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15803D] ${
                      isSelected
                        ? 'bg-[#0B281B] border-[#0B281B] text-white shadow-xs'
                        : 'bg-white border-neutral-200 text-[#141816] hover:border-[#15803D]/50 hover:bg-[#FAFDFB]'
                    }`}
                  >
                    <MapPin
                      className={`w-4 h-4 shrink-0 ${
                        isSelected ? 'text-[#A3E635]' : 'text-[#15803D]'
                      }`}
                      strokeWidth={1.8}
                    />
                    <span className="font-display font-semibold text-sm sm:text-[15px] truncate">
                      {location}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
