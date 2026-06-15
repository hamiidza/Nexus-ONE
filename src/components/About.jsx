import { Globe, ShieldCheck, Users, TrendingUp, Factory, Award } from "lucide-react";

const TIMELINE = [
  {
    year: "1983",
    title: "Founded in Stuttgart",
    desc: "NEXUS Seal & Bearing established as a specialist supplier of precision sealing components to the German automotive and heavy machinery sectors.",
  },
  {
    year: "1991",
    title: "ISO 9001 First Certification",
    desc: "Achieved ISO 9001 quality management certification — among the first sealing manufacturers in southern Germany to do so.",
  },
  {
    year: "1999",
    title: "Expansion: Middle East Operations",
    desc: "Opened a regional logistics hub in Dubai (JAFZA) to serve petrochemical and oil & gas industries across the Gulf Cooperation Council.",
  },
  {
    year: "2006",
    title: "FDA & NSF 61 Authorization",
    desc: "Received full FDA 21 CFR and NSF/ANSI 61 certifications — enabling supply to food, beverage, pharmaceutical, and water treatment sectors.",
  },
  {
    year: "2014",
    title: "Bearing Precision Laboratory",
    desc: "Inaugurated an in-house metrology and fatigue testing laboratory certified to ISO 492 and DIN EN standards, eliminating third-party delays.",
  },
  {
    year: "2021",
    title: "Digital Supply Chain Initiative",
    desc: "Launched traceability platform providing customers with real-time material certificates, batch tracking, and EN 10204 3.1 documentation access.",
  },
  {
    year: "2024",
    title: "62 Countries Supplied",
    desc: "NEXUS products now support critical infrastructure across 62 nations — from North Sea offshore platforms to South-East Asian desalination plants.",
  },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Transparent Business Ethics",
    desc: "We publish our full certification matrix, testing methods, and material sourcing partners openly. No hidden specifications, no proprietary obfuscation — our customers engineer with complete data.",
  },
  {
    icon: Globe,
    title: "Supply Chain Resilience",
    desc: "Dual-sourced raw materials from European and Asian supply chains with minimum 180-day buffer stock held in Stuttgart and Dubai — engineered against single points of failure.",
  },
  {
    icon: Factory,
    title: "German Manufacturing Precision",
    desc: "All sealing compounds formulated and vulcanized in-house in Baden-Württemberg. Bearings sourced exclusively from ISO 492 P5/P6 certified mills in Germany, Japan, and Sweden.",
  },
  {
    icon: TrendingUp,
    title: "Engineering-Led Customization",
    desc: "Beyond catalogue: our application engineers calculate bearing L10h fatigue life, seal compression set, and chemical compatibility for your exact operating parameters.",
  },
];

const OFFICES = [
  {
    city: "Stuttgart, Germany",
    flag: "🇩🇪",
    role: "Global Headquarters & Manufacturing",
    address: "Industriestraße 47, 70565 Stuttgart",
    contact: "+49 711 92340 0",
  },
  {
    city: "Dubai, UAE",
    flag: "🇦🇪",
    role: "Middle East & Africa Distribution Hub",
    address: "JAFZA OneZone Tower, Jebel Ali Free Zone",
    contact: "+971 4 884 5000",
  },
  {
    city: "Singapore",
    flag: "🇸🇬",
    role: "Asia-Pacific Representative Office",
    address: "1 Changi Business Park, Singapore 486036",
    contact: "+65 6510 8400",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#121824]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 border border-[#F59E0B]/20 bg-[#F59E0B]/5 text-[#F59E0B] text-[10px] font-bold tracking-[0.3em] uppercase">
            <Award size={10} />
            Corporate Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#F8FAFC] leading-tight mb-4">
            Four Decades of<br />
            <span className="text-[#F59E0B]">German Engineering Heritage</span>
          </h2>
          <p className="text-[#94A3B8] text-base leading-relaxed">
            Founded in Stuttgart in 1983, NEXUS has grown from a regional seal supplier into a global critical-component partner — without compromising the engineering rigour that defines German industrial manufacturing.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-xs font-black tracking-[0.25em] uppercase text-[#F59E0B] mb-8">Company Timeline</h3>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[72px] top-0 bottom-0 w-px bg-gradient-to-b from-[#F59E0B]/60 via-[#F59E0B]/20 to-transparent hidden sm:block" />
            <div className="space-y-6">
              {TIMELINE.map((item, i) => (
                <div key={i} className="flex gap-6 sm:gap-8 group">
                  {/* Year */}
                  <div className="flex-shrink-0 w-16 sm:w-[60px] text-right">
                    <span className="text-xs font-black text-[#F59E0B] tracking-widest font-mono">{item.year}</span>
                  </div>
                  {/* Dot */}
                  <div className="hidden sm:flex flex-shrink-0 flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-[#F59E0B] border-2 border-[#121824] z-10 mt-0.5 group-hover:scale-150 transition-transform" />
                  </div>
                  {/* Content */}
                  <div className="flex-1 pb-6 border-b border-white/5 last:border-0">
                    <div className="font-bold text-sm text-[#F8FAFC] mb-1 group-hover:text-[#F59E0B] transition-colors">
                      {item.title}
                    </div>
                    <p className="text-[#94A3B8] text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-xs font-black tracking-[0.25em] uppercase text-[#F59E0B] mb-8">Our Commitments</h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {VALUES.map((val, i) => {
              const Icon = val.icon;
              return (
                <div
                  key={i}
                  className="group p-6 bg-[#1E293B] border border-white/5 hover:border-[#F59E0B]/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-[#F59E0B]/10 group-hover:bg-[#F59E0B]/20 transition-colors">
                      <Icon size={16} className="text-[#F59E0B]" />
                    </div>
                    <h4 className="font-black text-sm text-[#F8FAFC]">{val.title}</h4>
                  </div>
                  <p className="text-[#94A3B8] text-xs leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Global Offices */}
        <div>
          <h3 className="text-xs font-black tracking-[0.25em] uppercase text-[#F59E0B] mb-8">Global Presence</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {OFFICES.map((office, i) => (
              <div
                key={i}
                className="p-5 bg-[#1E293B]/60 border border-white/5 hover:border-[#F59E0B]/20 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{office.flag}</span>
                  <div>
                    <div className="font-black text-sm text-[#F8FAFC]">{office.city}</div>
                    <div className="text-[9px] font-bold text-[#F59E0B] tracking-wider uppercase">{office.role}</div>
                  </div>
                </div>
                <div className="text-[10px] text-[#94A3B8] leading-relaxed">{office.address}</div>
                <div className="text-[10px] text-[#94A3B8] mt-1 font-mono">{office.contact}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
