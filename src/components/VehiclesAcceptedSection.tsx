import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ACCEPTED_VEHICLES, getWhatsAppUrl } from '../data/jsscrapData';
import { ResilientImage } from './ResilientImage';
import { WhatsAppIcon } from './WhatsAppIcon';

type FilterType = 'all' | 'four-wheeler' | 'two-wheeler' | 'damaged' | 'commercial';

const FILTERS: { id: FilterType; label: string }[] = [
  { id: 'all', label: 'All Vehicles' },
  { id: 'four-wheeler', label: 'Old Cars' },
  { id: 'two-wheeler', label: 'Bikes & Scooters' },
  { id: 'damaged', label: 'Accidental & Damaged' },
  { id: 'commercial', label: 'Commercial' },
];

export const VehiclesAcceptedSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredVehicles =
    activeFilter === 'all'
      ? ACCEPTED_VEHICLES
      : ACCEPTED_VEHICLES.filter((v) => v.category === activeFilter);

  return (
    <section id="vehicles-accepted" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#15803D] tracking-wide mb-2">
              Vehicles We Accept
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#141816] text-balance">
              Cars, Two-Wheelers, Damaged &amp; Commercial Vehicles
            </h2>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter accepted vehicle categories"
            className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F4F7F5] rounded-lg border border-neutral-200 self-start"
          >
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#15803D] ${
                    isActive
                      ? 'bg-[#0B281B] text-white shadow-xs'
                      : 'text-[#37413C] hover:text-[#141816] hover:bg-white/70'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="group relative rounded-xl overflow-hidden border border-neutral-200 bg-[#141816] aspect-[4/3]"
            >
              <ResilientImage
                src={vehicle.image}
                alt={vehicle.imageAlt}
                fallbackLabel={vehicle.label}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
              />
              {/* Measured Contrast Scrim */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#071B12]/95 via-[#071B12]/40 to-transparent"
              />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col justify-end">
                <p className="text-xs text-[#A3E635] font-medium mb-1">
                  {vehicle.subtitle}
                </p>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-xl font-bold text-white tracking-tight">
                    {vehicle.label}
                  </h3>
                  <a
                    href={getWhatsAppUrl(vehicle.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Get quote for ${vehicle.label} on WhatsApp`}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/15 hover:bg-[#84CC16] text-white hover:text-[#071B12] backdrop-blur-md border border-white/20 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3E635]"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>Get Quote</span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
