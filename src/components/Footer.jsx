import { Mail, Phone, MapPin, Linkedin, Globe, FileText } from "lucide-react";

const FOOTER_LINKS = {
  Products: [
    "Hydraulic & Cylinder Pack",
    "HVAC & Pump Pack",
    "Automotive & Transmission Pack",
    "Custom Engineering",
    "Technical Datasheets",
  ],
  Standards: [
    "ISO 492 Compliance",
    "ASTM D2000 Testing",
    "FDA / NSF 61 Certification",
    "EN 10204 Material Certs",
    "Laboratory Capabilities",
  ],
  Company: [
    "About NEXUS",
    "Engineering Team",
    "Quality Policy",
    "Supplier Code of Conduct",
    "Career Opportunities",
  ],
};

const COMPLIANCE_BADGES = [
  "ISO 9001:2015",
  "ISO 492",
  "ASTM D2000",
  "NSF/ANSI 61",
  "FDA 21 CFR",
  "RoHS Compliant",
  "REACH Compliant",
];

export default function Footer({ scrollTo }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0d1420] border-t border-white/5">
      {/* CTA Band */}
      <div className="bg-[#F59E0B]">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-[#121824] font-black text-xl leading-tight">
              Ready to specify the right sealing solution?
            </div>
            <div className="text-[#92600A] text-sm mt-1">
              Our engineers respond within one business day with a full technical recommendation.
            </div>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button className="bg-[#121824] text-[#F59E0B] hover:bg-[#1E293B] font-black text-xs tracking-widest uppercase px-6 py-3 transition-colors">
              Request Technical Catalog
            </button>
            <button className="border-2 border-[#121824] text-[#121824] hover:bg-[#121824] hover:text-[#F59E0B] font-black text-xs tracking-widest uppercase px-6 py-3 transition-all">
              Contact Engineering Team
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center gap-3 mb-5 group"
            >
              <div className="w-9 h-9 flex-shrink-0">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
                  <circle cx="20" cy="20" r="19" stroke="#F59E0B" strokeWidth="2" />
                  <circle cx="20" cy="20" r="13" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 2" />
                  <circle cx="20" cy="20" r="5" fill="#F59E0B" />
                  <circle cx="20" cy="7" r="2.5" fill="#F59E0B" opacity="0.85" />
                  <circle cx="20" cy="33" r="2.5" fill="#F59E0B" opacity="0.85" />
                  <circle cx="7" cy="20" r="2.5" fill="#F59E0B" opacity="0.85" />
                  <circle cx="33" cy="20" r="2.5" fill="#F59E0B" opacity="0.85" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-black tracking-widest text-[#F8FAFC] uppercase leading-none group-hover:text-[#F59E0B] transition-colors">NEXUS</div>
                <div className="text-[8px] font-semibold tracking-[0.25em] text-[#F59E0B] uppercase leading-none mt-0.5">SEAL &amp; BEARING</div>
              </div>
            </button>
            <p className="text-[#94A3B8] text-xs leading-relaxed mb-6 max-w-xs">
              German-engineered precision sealing and bearing solutions. ISO 492 P5/P6 precision class. FDA/NSF 61 food and water compliant. Supplied globally since 1983.
            </p>

            {/* Contact Details */}
            <div className="space-y-2.5 mb-6">
              <div className="flex items-start gap-2.5">
                <MapPin size={12} className="text-[#F59E0B] mt-0.5 flex-shrink-0" />
                <span className="text-[#94A3B8] text-xs">Industriestraße 47, 70565 Stuttgart, Germany</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={12} className="text-[#F59E0B] flex-shrink-0" />
                <span className="text-[#94A3B8] text-xs">+49 711 92340 0</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={12} className="text-[#F59E0B] flex-shrink-0" />
                <span className="text-[#94A3B8] text-xs">technical@nexusseal.de</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Globe, label: "Website" },
                { icon: FileText, label: "Catalog" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-8 h-8 border border-white/10 hover:border-[#F59E0B]/40 hover:bg-[#F59E0B]/10 flex items-center justify-center text-[#94A3B8] hover:text-[#F59E0B] transition-all"
                >
                  <Icon size={13} />
                </button>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <div className="text-[9px] font-black tracking-[0.25em] uppercase text-[#F59E0B] mb-4">{title}</div>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <button className="text-[#94A3B8] hover:text-[#F8FAFC] text-xs transition-colors text-left leading-tight">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Compliance Badges */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="text-[9px] font-black tracking-[0.25em] uppercase text-[#94A3B8]/50 mb-4">
            Compliance &amp; Certifications
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {COMPLIANCE_BADGES.map((badge) => (
              <span
                key={badge}
                className="text-[9px] font-bold tracking-wider px-2.5 py-1.5 border border-[#F59E0B]/20 text-[#94A3B8] bg-[#F59E0B]/5"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#94A3B8]/50 text-[10px] tracking-wider">
              © {year} NEXUS Seal & Bearing GmbH. All rights reserved. Registered in Stuttgart, Germany. HRB 123456.
            </p>
            <div className="flex gap-4">
              {["Privacy Policy", "Legal Notice (Impressum)", "Terms & Conditions"].map((link) => (
                <button key={link} className="text-[#94A3B8]/50 hover:text-[#94A3B8] text-[10px] tracking-wider transition-colors">
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
