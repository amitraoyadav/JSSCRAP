import React, { useState } from 'react';
import { X, MapPin, Clock } from 'lucide-react';
import {
  DISPLAY_PHONE,
  BUSINESS_ADDRESS,
  OPERATING_HOURS,
  getWhatsAppUrl,
} from '../data/jsscrapData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Footer: React.FC = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const footerWhatsappUrl = getWhatsAppUrl(
    'Hello JSScrap, I would like to enquire about vehicle scrapping in Delhi NCR.'
  );

  return (
    <>
      <footer className="bg-[#09150F] text-neutral-300 border-t border-white/10 pb-20 md:pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            {/* Brand & Address Column */}
            <div className="md:col-span-5">
              <div className="font-display text-2xl font-extrabold text-white tracking-tight">
                JSScrap
              </div>
              <p className="mt-1 text-sm font-semibold text-[#A3E635]">
                Jishan Scrap
              </p>
              <p className="mt-3 text-sm text-neutral-300 leading-relaxed max-w-sm">
                Vehicle Scrapping Services in Delhi NCR. Professional scrap
                buying for old cars, bikes, scooties, accident-damaged, and
                commercial vehicles.
              </p>

              <div className="mt-4 space-y-1.5 text-sm text-neutral-300">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#A3E635] shrink-0" />
                  <span className="font-medium text-white">
                    {BUSINESS_ADDRESS}
                  </span>
                </p>
                <p className="flex items-center gap-2 text-xs text-neutral-400">
                  <Clock className="w-4 h-4 text-[#A3E635] shrink-0" />
                  <span>{OPERATING_HOURS}</span>
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h3 className="font-display text-sm font-semibold text-white tracking-wide mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    href="#scrap-guide"
                    className="hover:text-white transition-colors"
                  >
                    Documents &amp; Valuation
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setPrivacyOpen(true)}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact / WhatsApp Column */}
            <div className="md:col-span-4">
              <h3 className="font-display text-sm font-semibold text-white tracking-wide mb-4">
                WhatsApp Enquiry Desk
              </h3>
              <p className="text-sm text-neutral-300 mb-3">
                WhatsApp Number:{' '}
                <a
                  href={footerWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold tabular-nums hover:text-[#A3E635] transition-colors"
                >
                  {DISPLAY_PHONE}
                </a>
              </p>
              <a
                href={footerWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#15803D] hover:bg-[#166534] text-white text-sm font-semibold transition-colors whitespace-nowrap"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-neutral-400">
            <p>
              &copy; {new Date().getFullYear()} JSScrap (Jishan Scrap) ·{' '}
              {BUSINESS_ADDRESS}. All rights reserved.
            </p>
            <p>
              Pickup availability in Delhi NCR is subject to confirmation.
            </p>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {privacyOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-policy-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs"
        >
          <div className="bg-white text-[#141816] rounded-2xl border border-neutral-200 max-w-lg w-full p-6 sm:p-8 shadow-xl relative">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h2
                  id="privacy-policy-title"
                  className="font-display text-xl font-bold text-[#0B281B]"
                >
                  Privacy Policy — JSScrap (Jishan Scrap)
                </h2>
                <p className="text-xs text-[#4B5550] mt-1">
                  {BUSINESS_ADDRESS} · Delhi NCR
                </p>
              </div>
              <button
                type="button"
                onClick={() => setPrivacyOpen(false)}
                aria-label="Close privacy policy"
                className="p-2 rounded-lg text-[#4B5550] hover:bg-neutral-100 hover:text-[#141816] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-sm text-[#37413C] leading-relaxed">
              <p>
                JSScrap (Jishan Scrap), located at {BUSINESS_ADDRESS}, respects
                your privacy. This website does not collect, store, or sell
                personal browsing data or form submissions on external servers.
              </p>
              <p>
                When you choose to contact us via WhatsApp ({DISPLAY_PHONE}),
                any vehicle details, photographs, or location information you
                share are used strictly to provide a scrap valuation quotation,
                confirm pickup availability in Delhi NCR, and guide you through
                vehicle handover documentation.
              </p>
              <p>
                For any questions regarding your enquiry or documentation, please
                reach out directly on WhatsApp at {DISPLAY_PHONE}.
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setPrivacyOpen(false)}
                className="px-5 py-2.5 rounded-lg bg-[#0B281B] hover:bg-[#15803D] text-white text-sm font-semibold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
