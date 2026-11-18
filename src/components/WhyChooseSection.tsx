import React from 'react';
import {
  Truck,
  IndianRupee,
  MessageCircle,
  ShieldCheck,
  ClipboardCheck,
  MapPin,
} from 'lucide-react';
import { WHY_CHOOSE_ITEMS, BenefitItem } from '../data/jsscrapData';

function renderBenefitIcon(name: BenefitItem['iconName']) {
  const iconProps = { className: 'w-5 h-5 text-[#15803D]', strokeWidth: 1.8 };
  switch (name) {
    case 'truck':
      return <Truck {...iconProps} />;
    case 'indian-rupee':
      return <IndianRupee {...iconProps} />;
    case 'message-circle':
      return <MessageCircle {...iconProps} />;
    case 'shield-check':
      return <ShieldCheck {...iconProps} />;
    case 'clipboard-check':
      return <ClipboardCheck {...iconProps} />;
    case 'map-pin':
      return <MapPin {...iconProps} />;
  }
}

export const WhyChooseSection: React.FC = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#F4F7F5] border-y border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#15803D] tracking-wide mb-2">
              The Jishan Scrap Advantage
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#141816] text-balance">
              Why Choose JSScrap – Jishan Scrap?
            </h2>
          </div>
          <p className="text-base text-[#4B5550] max-w-md leading-relaxed">
            Built for vehicle owners who want clear communication, fair scrap
            quotations, and dependable coordination across Delhi NCR.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-7 transition-colors duration-150 hover:border-[#15803D]/50"
            >
              <div className="w-11 h-11 rounded-lg bg-[#ECFDF5] border border-[#15803D]/15 flex items-center justify-center mb-5">
                {renderBenefitIcon(item.iconName)}
              </div>
              <h3 className="font-display text-lg font-bold text-[#141816] tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm sm:text-[15px] text-[#4B5550] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
