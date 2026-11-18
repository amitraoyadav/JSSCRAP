import React, { useState } from 'react';
import { FileCheck2, IndianRupee, Wrench, Check, ArrowUpRight } from 'lucide-react';
import {
  DOCUMENT_CHECKLIST,
  VALUATION_FACTORS,
  HANDOVER_PREP_ITEMS,
  BUSINESS_ADDRESS,
  getWhatsAppUrl,
} from '../data/jsscrapData';
import { WhatsAppIcon } from './WhatsAppIcon';

type DetailTab = 'documents' | 'valuation' | 'handover';

export const ScrappingDetailsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<DetailTab>('documents');

  const checklistWhatsappUrl = getWhatsAppUrl(
    'Hello JSScrap, I have a question regarding vehicle documents, scrap valuation, and pickup handover.'
  );

  return (
    <section
      id="scrap-guide"
      className="py-20 lg:py-28 bg-[#F7F9F8] border-t border-neutral-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + Architectural Tab Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#15803D] tracking-wide mb-2">
              Complete Scrapping Guide · {BUSINESS_ADDRESS}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#141816] text-balance">
              Documentation, Valuation Factors &amp; Pickup Checklist
            </h2>
            <p className="mt-3 text-base text-[#4B5550] leading-relaxed">
              Everything vehicle owners in Delhi NCR need to prepare before
              scrapping an old car, bike, scooty, or commercial vehicle.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Vehicle scrapping information tabs"
            className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-lg border border-neutral-200 self-start"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'documents'}
              onClick={() => setActiveTab('documents')}
              className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-md transition-colors duration-150 whitespace-nowrap cursor-pointer ${
                activeTab === 'documents'
                  ? 'bg-[#0B281B] text-white'
                  : 'text-[#37413C] hover:text-[#141816] hover:bg-[#F4F7F5]'
              }`}
            >
              <FileCheck2 className="w-4 h-4 shrink-0" />
              <span>Required Documents</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'valuation'}
              onClick={() => setActiveTab('valuation')}
              className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-md transition-colors duration-150 whitespace-nowrap cursor-pointer ${
                activeTab === 'valuation'
                  ? 'bg-[#0B281B] text-white'
                  : 'text-[#37413C] hover:text-[#141816] hover:bg-[#F4F7F5]'
              }`}
            >
              <IndianRupee className="w-4 h-4 shrink-0" />
              <span>How Value Is Calculated</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'handover'}
              onClick={() => setActiveTab('handover')}
              className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-md transition-colors duration-150 whitespace-nowrap cursor-pointer ${
                activeTab === 'handover'
                  ? 'bg-[#0B281B] text-white'
                  : 'text-[#37413C] hover:text-[#141816] hover:bg-[#F4F7F5]'
              }`}
            >
              <Wrench className="w-4 h-4 shrink-0" />
              <span>Pickup &amp; Handover Prep</span>
            </button>
          </div>
        </div>

        {/* Active Panel Content */}
        {activeTab === 'documents' && (
          <div
            role="tabpanel"
            className="bg-white rounded-2xl border border-neutral-200 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-4 bg-[#0B281B] text-white p-7 sm:p-8 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold text-[#A3E635] tracking-wide mb-2">
                    Ownership &amp; Compliance
                  </p>
                  <h3 className="font-display text-2xl font-bold tracking-tight">
                    Standard Documents Checklist
                  </h3>
                  <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                    Keeping basic ownership documents ready ensures smooth
                    chassis verification and clean handover records at pickup.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/15">
                  <p className="text-xs text-neutral-300 mb-3">
                    Missing RC or have a financed/company vehicle? Ask our
                    Mayapuri desk directly.
                  </p>
                  <a
                    href={checklistWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#84CC16] hover:bg-[#A3E635] text-[#071B12] text-sm font-semibold transition-colors whitespace-nowrap"
                  >
                    <WhatsAppIcon className="w-4 h-4 shrink-0" />
                    <span>Confirm Documents on WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-8 divide-y divide-neutral-200">
                {DOCUMENT_CHECKLIST.map((doc) => (
                  <div
                    key={doc.code}
                    className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                  >
                    <div className="flex items-start gap-3.5">
                      <span className="w-6 h-6 rounded-full bg-[#ECFDF5] border border-[#15803D]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#15803D]" strokeWidth={2.5} />
                      </span>
                      <div>
                        <h4 className="font-display text-base sm:text-lg font-bold text-[#141816]">
                          {doc.title}
                        </h4>
                        <p className="mt-1 text-sm text-[#4B5550] leading-relaxed">
                          {doc.detail}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-[#15803D] whitespace-nowrap shrink-0 sm:pt-1">
                      {doc.code} · {doc.requirement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'valuation' && (
          <div role="tabpanel" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUATION_FACTORS.map((factor) => (
              <div
                key={factor.index}
                className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-7 flex items-start gap-4"
              >
                <span className="font-display text-2xl font-bold text-[#15803D] tabular-nums shrink-0">
                  {factor.index}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-[#141816]">
                    {factor.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-[15px] text-[#4B5550] leading-relaxed">
                    {factor.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'handover' && (
          <div role="tabpanel" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {HANDOVER_PREP_ITEMS.map((item) => (
              <div
                key={item.index}
                className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-7 flex items-start justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <span className="font-display text-2xl font-bold text-[#15803D] tabular-nums shrink-0">
                    {item.index}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#141816]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-[15px] text-[#4B5550] leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Strip Summary */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-4 rounded-xl bg-white border border-neutral-200">
          <div className="text-sm text-[#37413C]">
            <span className="font-semibold text-[#141816]">
              Payment Modes Supported:
            </span>{' '}
            UPI · IMPS / NEFT Bank Transfer · Instant Settlement at Handover
          </div>
          <a
            href={checklistWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#15803D] hover:text-[#0B281B] transition-colors whitespace-nowrap shrink-0"
          >
            <span>Ask Valuation Team</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
};
