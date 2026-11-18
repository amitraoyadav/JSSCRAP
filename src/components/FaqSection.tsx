import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/jsscrapData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F4F7F5] border-t border-neutral-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-14">
          <p className="text-sm font-semibold text-[#15803D] tracking-wide mb-2">
            Frequently Asked Questions
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#141816] text-balance">
            Common Questions About Vehicle Scrapping
          </h2>
          <p className="mt-3 text-base text-[#4B5550]">
            Answers to the most common enquiries from vehicle owners in Delhi
            NCR.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `faq-panel-${idx}`;
            const buttonId = `faq-button-${idx}`;

            return (
              <div
                key={item.question}
                className="bg-white rounded-xl border border-neutral-200 overflow-hidden transition-colors duration-150"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAFDFB] transition-colors focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#15803D]"
                  >
                    <span className="font-display text-base sm:text-lg font-semibold text-[#141816]">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#15803D] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-6 pb-5 pt-1 text-sm sm:text-base text-[#4B5550] leading-relaxed border-t border-neutral-100"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
