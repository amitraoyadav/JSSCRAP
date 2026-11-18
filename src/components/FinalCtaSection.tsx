import React, { useState } from 'react';
import { Phone, ArrowUpRight, CheckCircle2, MapPin, Clock } from 'lucide-react';
import {
  DISPLAY_PHONE,
  BUSINESS_ADDRESS,
  OPERATING_HOURS,
  SERVICE_LOCATIONS,
  getWhatsAppUrl,
} from '../data/jsscrapData';
import { WhatsAppIcon } from './WhatsAppIcon';

const VEHICLE_TYPES = [
  'Old Car (Hatchback / Sedan / SUV)',
  'Old Bike / Motorcycle',
  'Old Scooty / Scooter',
  'Accident-Damaged Vehicle',
  'Commercial Vehicle / Van / Pickup',
];

const VEHICLE_CONDITIONS = [
  'Running / Drivable',
  'Non-Running / Immobile',
  'Accident-Damaged / Total Loss',
];

const RC_OPTIONS = [
  'Original / Digital RC Available',
  'RC Lost or Pending',
];

export const FinalCtaSection: React.FC = () => {
  const [vehicleType, setVehicleType] = useState(VEHICLE_TYPES[0]);
  const [vehicleModel, setVehicleModel] = useState('');
  const [condition, setCondition] = useState(VEHICLE_CONDITIONS[0]);
  const [rcStatus, setRcStatus] = useState(RC_OPTIONS[0]);
  const [locality, setLocality] = useState(SERVICE_LOCATIONS[0]);
  const [errorMsg, setErrorMsg] = useState('');
  const [sentNotice, setSentNotice] = useState(false);

  const directChatUrl = getWhatsAppUrl(
    'Hello JSScrap, I am ready to scrap my old vehicle. Please share the quotation and pickup process.'
  );

  const trimmedModel = vehicleModel.trim();
  const customMessage = `Hello JSScrap, I want to scrap my vehicle.\n- Vehicle Type: ${vehicleType}\n- Model / Year: ${trimmedModel || 'To be shared'}\n- Condition: ${condition}\n- RC Status: ${rcStatus}\n- Location: ${locality}, Delhi NCR\nPlease share a scrap price quotation and pickup availability.`;
  const customWhatsappUrl = getWhatsAppUrl(customMessage);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (trimmedModel.length < 2) {
      e.preventDefault();
      setErrorMsg(
        'Please enter your vehicle name or year (e.g., Swift 2010 or Activa 2012).'
      );
      setSentNotice(false);
      return;
    }
    setErrorMsg('');
    setSentNotice(true);
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-[#0B281B] text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Primary CTA & Mayapuri Hub Details */}
          <div className="lg:col-span-6">
            <p className="text-sm font-semibold text-[#A3E635] tracking-wide mb-3">
              Jishan Scrap · WhatsApp Desk
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance leading-[1.1]">
              Ready to Scrap Your Old Vehicle?
            </h2>
            <p className="mt-5 text-base sm:text-lg text-neutral-200 leading-relaxed max-w-xl">
              Get in touch with JSScrap today. Send your vehicle details on
              WhatsApp and get started.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href={directChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#84CC16] hover:bg-[#A3E635] text-[#071B12] font-display font-bold text-base tracking-wide transition-colors duration-150 whitespace-nowrap shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>CHAT WITH US ON WHATSAPP</span>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 space-y-3">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <a
                  href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2.5 text-white hover:text-[#A3E635] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#A3E635]" />
                  <span className="font-display text-lg font-semibold tabular-nums">
                    {DISPLAY_PHONE}
                  </span>
                </a>
                <span className="inline-flex items-center gap-2 text-sm text-neutral-200">
                  <MapPin className="w-4 h-4 text-[#A3E635] shrink-0" />
                  <span>{BUSINESS_ADDRESS}</span>
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                <Clock className="w-4 h-4 text-[#A3E635] shrink-0" />
                <span>{OPERATING_HOURS}</span>
              </div>
            </div>
          </div>

          {/* Right Quick WhatsApp Quote Builder */}
          <div className="lg:col-span-6">
            <div className="bg-[#113525] border border-white/15 rounded-2xl p-6 sm:p-8 space-y-4">
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  Send Quick Vehicle Details on WhatsApp
                </h3>
                <p className="mt-1 text-sm text-neutral-300">
                  Select your vehicle details to open a structured WhatsApp
                  quotation request.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="vehicle-type"
                    className="block text-xs font-semibold text-neutral-200 mb-1.5"
                  >
                    Vehicle Category
                  </label>
                  <select
                    id="vehicle-type"
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                    className="w-full rounded-lg bg-[#092016] border border-white/20 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#A3E635]"
                  >
                    {VEHICLE_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="vehicle-model"
                    className="block text-xs font-semibold text-neutral-200 mb-1.5"
                  >
                    Vehicle Model &amp; Year
                  </label>
                  <input
                    id="vehicle-model"
                    type="text"
                    placeholder="e.g. WagonR 2010 / Activa 2013"
                    value={vehicleModel}
                    onChange={(e) => {
                      setVehicleModel(e.target.value);
                      if (errorMsg) setErrorMsg('');
                      if (sentNotice) setSentNotice(false);
                    }}
                    className="w-full rounded-lg bg-[#092016] border border-white/20 px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-400 focus:outline-none focus:border-[#A3E635]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="vehicle-condition"
                    className="block text-xs font-semibold text-neutral-200 mb-1.5"
                  >
                    Current Condition
                  </label>
                  <select
                    id="vehicle-condition"
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    className="w-full rounded-lg bg-[#092016] border border-white/20 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#A3E635]"
                  >
                    {VEHICLE_CONDITIONS.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="rc-status"
                    className="block text-xs font-semibold text-neutral-200 mb-1.5"
                  >
                    RC Document Status
                  </label>
                  <select
                    id="rc-status"
                    value={rcStatus}
                    onChange={(e) => setRcStatus(e.target.value)}
                    className="w-full rounded-lg bg-[#092016] border border-white/20 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#A3E635]"
                  >
                    {RC_OPTIONS.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="vehicle-locality"
                  className="block text-xs font-semibold text-neutral-200 mb-1.5"
                >
                  Area in Delhi NCR
                </label>
                <select
                  id="vehicle-locality"
                  value={locality}
                  onChange={(e) => setLocality(e.target.value)}
                  className="w-full rounded-lg bg-[#092016] border border-white/20 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#A3E635]"
                >
                  {SERVICE_LOCATIONS.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              {errorMsg && (
                <p role="alert" className="text-xs font-medium text-[#FCA5A5]">
                  {errorMsg}
                </p>
              )}

              {sentNotice && !errorMsg && (
                <p
                  role="status"
                  className="text-xs font-medium text-[#A3E635] flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>
                    Opening WhatsApp with your pre-filled vehicle enquiry.
                  </span>
                </p>
              )}

              <a
                href={customWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-white hover:bg-[#F4F7F5] text-[#0B281B] font-semibold text-sm transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3E635]"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#15803D] shrink-0" />
                <span>Send Details on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
