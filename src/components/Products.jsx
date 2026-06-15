import { useState } from "react";
import { CheckCircle, Layers, Gauge, Thermometer, Droplets, ChevronDown, ChevronUp } from "lucide-react";

/* ── SVG Placeholder Images ── */
function ProductVisual({ type }) {
  if (type === "hydraulic") {
    return (
      <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="200" fill="#0F172A" />
        <circle cx="160" cy="100" r="70" fill="none" stroke="#F59E0B" strokeWidth="4" />
        <circle cx="160" cy="100" r="48" fill="none" stroke="#1E3A5F" strokeWidth="12" />
        <circle cx="160" cy="100" r="28" fill="#1E293B" stroke="#F59E0B" strokeWidth="2.5" />
        <circle cx="160" cy="100" r="10" fill="#F59E0B" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const r = 48;
          const x = 160 + r * Math.cos(rad);
          const y = 100 + r * Math.sin(rad);
          return <circle key={i} cx={x} cy={y} r="7" fill="#0F172A" stroke="#F59E0B" strokeWidth="1.5" />;
        })}
        <text x="160" y="180" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="monospace">Tapered Roller · FKM Viton · AS568</text>
      </svg>
    );
  }
  if (type === "hvac") {
    return (
      <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="200" fill="#0F172A" />
        <rect x="80" y="50" width="160" height="100" rx="4" fill="#1E293B" stroke="#F59E0B" strokeWidth="2" />
        <rect x="95" y="65" width="130" height="70" rx="2" fill="#0F172A" stroke="#2D3F5A" strokeWidth="1" />
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={105 + i * 24} y="75" width="14" height="50" rx="2" fill="#1E3A5F" stroke="#F59E0B" strokeWidth="1" strokeOpacity="0.6" />
        ))}
        <circle cx="160" cy="100" r="8" fill="#F59E0B" />
        <text x="160" y="175" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="monospace">Deep Groove Ball Bearing · EPDM/Silicone</text>
      </svg>
    );
  }
  if (type === "automotive") {
    return (
      <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="200" fill="#0F172A" />
        <ellipse cx="160" cy="100" rx="75" ry="75" fill="none" stroke="#F59E0B" strokeWidth="3" />
        <ellipse cx="160" cy="100" rx="55" ry="55" fill="none" stroke="#1E3A5F" strokeWidth="8" />
        <ellipse cx="160" cy="100" rx="32" ry="32" fill="#1E293B" stroke="#F59E0B" strokeWidth="2" />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const r = 55;
          const x = 160 + r * Math.cos(rad);
          const y = 100 + r * Math.sin(rad);
          return <rect key={i} x={x - 4} y={y - 10} width="8" height="20" rx="1" fill="#F59E0B" opacity="0.75"
            transform={`rotate(${deg + 90}, ${x}, ${y})`} />;
        })}
        <circle cx="160" cy="100" r="8" fill="#F59E0B" />
        <text x="160" y="188" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="monospace">Needle &amp; Ball Bearing · NBR Nitrile</text>
      </svg>
    );
  }
  return null;
}

/* ── Spec Row ── */
function SpecRow({ label, value, highlight }) {
  return (
    <div className={`flex justify-between items-center py-2 border-b border-white/5 last:border-0 ${highlight ? "text-[#F8FAFC]" : "text-[#94A3B8]"}`}>
      <span className="text-xs font-medium tracking-wider uppercase text-[#94A3B8]">{label}</span>
      <span className={`text-xs font-bold tracking-wide ${highlight ? "text-[#F59E0B]" : "text-[#F8FAFC]"}`}>
        {value}
      </span>
    </div>
  );
}

/* ── Product Data ── */
const PRODUCTS = [
  {
    id: "hydraulic",
    code: "NSB-HCP-401",
    name: "Hydraulic & Cylinder Pack",
    tagline: "Extreme Chemical & Pressure Environments",
    type: "hydraulic",
    badge: "Most Specified",
    description:
      "Engineered for heavy industrial hydraulic cylinders, manifolds, and high-pressure actuators. Viton (FKM) O-Rings paired with precision-ground Tapered Roller Bearings ensure zero-leakage performance under combined radial and axial loads.",
    specs: [
      { label: "O-Ring Material", value: "Viton™ FKM", highlight: true },
      { label: "Standard", value: "AS568 / DIN 3771" },
      { label: "Hardness", value: "80 Shore A ±5" },
      { label: "Temp. Range", value: "-20°C to +200°C" },
      { label: "Bearing Type", value: "Tapered Roller" },
      { label: "Precision Class", value: "ISO P6 / P5" },
      { label: "Max Load (Radial)", value: "≤ 120 kN" },
      { label: "Chemical Resistance", value: "Oils, Fuels, Acids" },
    ],
    certifications: ["ISO 492", "AS568", "ASTM D2000", "DIN 3771"],
    icon: Gauge,
    color: "#F59E0B",
  },
  {
    id: "hvac",
    code: "NSB-HVP-218",
    name: "HVAC & Pump Maintenance Pack",
    tagline: "FDA Food-Grade & NSF 61 Drinking Water Approved",
    type: "hvac",
    badge: "Food-Safe Certified",
    description:
      "Designed for water treatment plants, HVAC systems, food processing, and pharmaceutical installations. Silicone and EPDM O-Rings comply with FDA 21 CFR and NSF 61 requirements, paired with sealed, corrosion-resistant Deep Groove Ball Bearings.",
    specs: [
      { label: "O-Ring Materials", value: "Silicone / EPDM", highlight: true },
      { label: "FDA Compliance", value: "21 CFR 177.2600" },
      { label: "NSF Certification", value: "NSF/ANSI 61" },
      { label: "Temp. Range", value: "-60°C to +180°C" },
      { label: "Bearing Type", value: "Deep Groove Ball" },
      { label: "Internal Clearance", value: "C3 (Extra clearance)" },
      { label: "Seal Type", value: "2RS / ZZ Water-Resist." },
      { label: "Lubrication", value: "Food-Grade NLGI 2" },
    ],
    certifications: ["FDA 21 CFR", "NSF 61", "ISO 492", "3A Sanitary"],
    icon: Droplets,
    color: "#38BDF8",
  },
  {
    id: "automotive",
    code: "NSB-ADP-733",
    name: "Heavy Duty Automotive & Transmission Pack",
    tagline: "High-RPM Drivetrain & Gearbox Applications",
    type: "automotive",
    badge: "High-RPM Rated",
    description:
      "Purpose-built for automotive transmissions, differentials, high-performance gearboxes, and engine sealing. NBR Nitrile O-Rings deliver superior oil and fuel resistance, matched with high-RPM Needle and Ball Bearings rated for sustained dynamic loads.",
    specs: [
      { label: "O-Ring Material", value: "NBR Nitrile", highlight: true },
      { label: "Oil Resistance", value: "ASTM D2000 BF/BG" },
      { label: "Hardness", value: "70–90 Shore A" },
      { label: "Temp. Range", value: "-40°C to +120°C" },
      { label: "Bearing Type", value: "Needle / Ball (Hybrid)" },
      { label: "Max Speed (RPM)", value: "≤ 18,000 RPM" },
      { label: "Cage Material", value: "Polyamide PA66" },
      { label: "Grease Type", value: "Lithium Complex EP2" },
    ],
    certifications: ["ASTM D2000", "DIN 7716", "ISO 492", "SAE J200"],
    icon: Thermometer,
    color: "#EF4444",
  },
];

/* ── Product Card ── */
function ProductCard({ product, index }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = product.icon;

  return (
    <div className="group relative flex flex-col bg-[#1E293B] border border-white/5 hover:border-[#F59E0B]/30 transition-all duration-300 overflow-hidden">
      {/* Top accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Product visual */}
      <div className="relative h-48 bg-[#0F172A] overflow-hidden">
        <ProductVisual type={product.type} />
        {/* Overlay badge */}
        <div className="absolute top-3 left-3">
          <span
            className="text-[9px] font-black tracking-widest uppercase px-2 py-1"
            style={{ background: `${product.color}20`, color: product.color, border: `1px solid ${product.color}40` }}
          >
            {product.badge}
          </span>
        </div>
        {/* Part code */}
        <div className="absolute bottom-3 right-3">
          <span className="text-[9px] font-mono text-[#94A3B8]/60 bg-black/40 px-2 py-0.5">
            {product.code}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start gap-3 mb-3">
          <div
            className="p-2 flex-shrink-0 mt-0.5"
            style={{ background: `${product.color}15` }}
          >
            <Icon size={16} style={{ color: product.color }} />
          </div>
          <div>
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1" style={{ color: product.color }}>
              {product.tagline}
            </div>
            <h3 className="text-lg font-black text-[#F8FAFC] leading-tight">{product.name}</h3>
          </div>
        </div>

        <p className="text-[#94A3B8] text-sm leading-relaxed mb-5">{product.description}</p>

        {/* Specs table */}
        <div className="bg-[#121824] p-4 mb-5 flex-1">
          <div className="text-[9px] font-black tracking-[0.25em] uppercase text-[#F59E0B] mb-3">
            Technical Datasheet
          </div>
          {product.specs.slice(0, expanded ? product.specs.length : 4).map((spec) => (
            <SpecRow key={spec.label} {...spec} />
          ))}
          {product.specs.length > 4 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 w-full flex items-center justify-center gap-1.5 text-[#94A3B8] hover:text-[#F59E0B] text-[10px] font-bold tracking-wider uppercase transition-colors"
            >
              {expanded ? (
                <><ChevronUp size={12} /> Show Less</>
              ) : (
                <><ChevronDown size={12} /> +{product.specs.length - 4} More Specs</>
              )}
            </button>
          )}
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {product.certifications.map((cert) => (
            <span
              key={cert}
              className="text-[9px] font-bold tracking-wider px-2 py-1 border border-white/10 text-[#94A3B8]"
            >
              {cert}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button
          className="w-full flex items-center justify-center gap-2 border border-[#F59E0B]/40 hover:bg-[#F59E0B] hover:border-[#F59E0B] text-[#F59E0B] hover:text-[#121824] font-bold text-xs tracking-widest uppercase py-3 transition-all duration-200"
        >
          <Layers size={13} />
          Request Datasheet PDF
        </button>
      </div>
    </div>
  );
}

/* ── Products Section ── */
export default function Products() {
  return (
    <section id="products" className="py-24 bg-[#121824]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 border border-[#F59E0B]/20 bg-[#F59E0B]/5 text-[#F59E0B] text-[10px] font-bold tracking-[0.3em] uppercase">
            <CheckCircle size={10} />
            Premium Maintenance Pack Catalog
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#F8FAFC] leading-tight mb-4">
            Pre-Configured Industrial<br />
            <span className="text-[#F59E0B]">Sealing &amp; Bearing Packs</span>
          </h2>
          <p className="text-[#94A3B8] text-base leading-relaxed">
            Each NEXUS maintenance pack is engineered as a complete, application-specific solution — eliminating the risk of material mismatches, tolerance stack-ups, or certification gaps.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 p-4 border border-white/5 bg-[#1E293B]/50 text-center">
          <p className="text-[#94A3B8] text-xs tracking-wide">
            All packs are available with full material traceability documentation, EN 10204 3.1 material certificates, and RoHS compliance declarations.{" "}
            <button className="text-[#F59E0B] hover:underline font-semibold">Contact our technical team</button> for custom configurations.
          </p>
        </div>
      </div>
    </section>
  );
}
