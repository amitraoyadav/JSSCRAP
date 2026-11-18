import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS, getWhatsAppUrl } from '../data/jsscrapData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const HowItWorksSection: React.FC = () => {
  const startWhatsappUrl = getWhatsAppUrl(
    'Hello JSScrap, I want to start the scrapping process for my vehicle. What details should I send?'
  );

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#141816] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 lg:mb-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#A3E635] tracking-wide mb-2">
              Simple Four-Step Process
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              How Vehicle Scrapping Works With JSScrap
            </h2>
          </div>

          <a
            href={startWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-lg bg-[#84CC16] hover:bg-[#A3E635] text-[#071B12] text-sm font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 self-start lg:self-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0" />
            <span>Start on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </a>
        </div>

        {/* 4-Step Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {HOW_IT_WORKS_STEPS.map((item, idx) => (
            <div
              key={item.step}
              className="relative flex flex-col justify-between bg-[#1B221E] border border-white/10 rounded-xl p-6 sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-3xl font-bold text-[#A3E635] tabular-nums">
                    {item.step}
                  </span>
                  <span className="text-xs font-medium text-neutral-400 tabular-nums">
                    Step {idx + 1} of 4
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm sm:text-[15px] text-neutral-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
