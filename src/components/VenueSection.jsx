import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Calendar, Clock, Sparkles } from 'lucide-react';
import { GoldenDivider, MandalaCorner } from './Ornaments';

/**
 * Section 7: Wedding Venue
 * Royal Indian Parchment / Royal Plaque Invitation Card Style (Without Photo):
 * - Ornate double gold notched borders with filigree corners
 * - Royal Kalash / Shubh Mandap crest motif at the top
 * - Prominent venue name "Dwivedi Niwash" & landmark "Near Shiv Mandir, Sasamusa"
 * - Event date & muhurat quick badge
 * - "Get Directions on Google Maps" royal action button
 */
export default function VenueSection({ weddingDetails }) {
  return (
    <section
      id="venue"
      className="relative py-8 sm:py-12 px-4 text-[#2A050D] overflow-hidden"
      style={{
        backgroundImage: `url('/invitation_floral_bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#FAF5EB'
      }}
    >
      {/* Light subtle overlay so the floral & palace background stays clear and vivid */}
      <div className="absolute inset-0 bg-[#FAF5EB]/10 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="font-cinzel text-xs sm:text-sm tracking-[0.3em] text-[#8B1E3F] uppercase font-bold block mb-1">
            शुभ विवाह स्थल • Sacred Destination
          </span>
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold maroon-text-gradient tracking-wide uppercase">
            Wedding Venue
          </h2>
          <GoldenDivider className="mt-3" />
        </motion.div>

        {/* Royal Parchment Plaque Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="w-full relative max-w-2xl mx-auto"
        >
          {/* Top Royal Kalash / Mandap Crest Motif */}
          <div className="flex justify-center -mb-5 relative z-20">
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#420711] via-[#7B1832] to-[#420711] p-1 border-2 border-[#D4AF37] shadow-[0_6px_20px_rgba(74,14,23,0.35)] flex items-center justify-center">
              <div className="w-full h-full rounded-full border border-dashed border-[#FFE89E]/70 flex items-center justify-center bg-[#520A17]">
                <Sparkles className="w-6 h-6 text-[#FFE89E]" />
              </div>
            </div>
          </div>

          {/* Main Card Body */}
          <div className="relative rounded-3xl pt-10 pb-8 px-6 sm:px-12 bg-gradient-to-b from-[#FFFDF9] via-[#FAF4EA] to-[#F5ECE0] border-2 border-[#D4AF37]/70 shadow-[0_20px_50px_rgba(74,14,23,0.12)] text-center overflow-hidden">
            
            {/* Fine Inner Border */}
            <div className="absolute inset-2.5 rounded-2xl border border-dashed border-[#D4AF37]/50 pointer-events-none" />

            {/* Corner Gold Notches */}
            <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-[#8B1E3F]" />
            <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-[#8B1E3F]" />
            <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-[#8B1E3F]" />
            <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-[#8B1E3F]" />

            {/* Hindi Blessing Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FAF0E6] border border-[#D4AF37]/60 mb-3 shadow-xs">
              <span className="text-[#8B1E3F] text-xs">ॐ</span>
              <span className="font-cinzel text-[11px] sm:text-xs tracking-[0.25em] text-[#8B1E3F] uppercase font-bold">
                Manglik Karyakram Sthal
              </span>
              <span className="text-[#8B1E3F] text-xs">ॐ</span>
            </div>

            {/* Venue Name in Calligraphic & Serif */}
            <h3 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold maroon-text-gradient tracking-wide mb-1.5 mt-2">
              {weddingDetails.venueName}
            </h3>

            <p className="font-serif-royal italic text-base sm:text-lg text-[#8B1E3F] font-semibold tracking-wide">
              {weddingDetails.city}
            </p>

            <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-4" />

            {/* Address & Landmark Info Box */}
            <div className="max-w-md mx-auto space-y-3.5 my-4">
              <div className="p-3.5 sm:p-4 rounded-xl bg-white/70 border border-[#D4AF37]/40 shadow-xs flex items-center justify-center gap-3">
                <MapPin className="w-5 h-5 text-[#8B1E3F] shrink-0" />
                <span className="font-serif-royal text-sm sm:text-base text-[#2A050D] font-medium leading-relaxed">
                  {weddingDetails.fullAddress}
                </span>
              </div>

              {/* Date & Muhurat Quick Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/60 border border-[#D4AF37]/35 text-xs">
                  <Calendar className="w-4 h-4 text-[#8B1E3F]" />
                  <span className="font-cinzel font-bold text-[#4A0E17]">
                    {weddingDetails.dateText}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/60 border border-[#D4AF37]/35 text-xs">
                  <Clock className="w-4 h-4 text-[#8B1E3F]" />
                  <span className="font-cinzel font-semibold text-[#4A0E17]">
                    07:00 PM Onwards
                  </span>
                </div>
              </div>
            </div>

            <p className="font-serif-royal italic text-xs sm:text-sm text-[#4A0E17]/80 max-w-lg mx-auto mt-4 leading-relaxed">
              "आप सभी सपरिवार पधारकर वर-वधु को अपना स्नेह, प्यार एवं मंगलमय आशीर्वाद प्रदान करें।"
            </p>

            {/* Action Button: Get Directions on Google Maps */}
            <div className="pt-6 border-t border-[#D4AF37]/30 mt-6 max-w-sm mx-auto">
              <a
                href={weddingDetails.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#671420] via-[#8B1E3F] to-[#4A0E17] text-[#FAF5EB] font-cinzel font-semibold text-xs tracking-widest uppercase hover:brightness-110 active:scale-95 transition-all shadow-[0_6px_20px_rgba(103,20,32,0.3)] cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-[#FFE89E]" />
                <span>Open in Google Maps &rarr;</span>
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
