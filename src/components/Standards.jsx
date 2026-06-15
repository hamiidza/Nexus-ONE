import { useState } from "react";
import { Award, FlaskConical, Microscope, BarChart3, CheckCircle2, AlertCircle, Info } from "lucide-react";

/* ── ISO 492 Tolerance Table ── */
function ISO492Card() {
  const classes = [
    { cls: "P0 (Normal)", boreTol: "±12 μm", outerTol: "±13 μm", runout: "25 μm", note: "General industrial use" },
    { cls: "P6 (High)", boreTol: "±8 μm", outerTol: "±9 μm", runout: "15 μm", note: "Machine tools, precision drives" },
    { cls: "P5 (Precision)", boreTol: "±5 μm", outerTol: "±6 μm", runout: "8 μm", note: "High-speed spindles, NEXUS standard" },
    { cls: "P4 (Super Precision)", boreTol: "±4 μm", outerTol: "±5 μm", runout: "5 μm", note: "Aerospace & metrology" },
  ];
  return (
    <div className="bg-[#0F172A] border border-white/5 p-6">
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2 bg-[#F59E0B]/10">
          <Award size={18} className="text-[#F59E0B]" />
        </div>
        <div>
          <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#F59E0B] mb-0.5">ISO 492</div>
          <h3 className="text-sm font-black text-[#F8FAFC]">Bearing Dimensional Tolerances</h3>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-white/10">
              {["Precision Class", "Bore Tolerance", "OD Tolerance", "Radial Runout", "Application"].map((h) => (
                <th key={h} className="text-left py-2 pr-4 text-[10px] font-bold tracking-wider uppercase text-[#94A3B8]">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {classes.map((row, i) => (
              <tr key={i} className={`border-b border-white/5 ${row.cls.includes("P5") ? "bg-[#F59E0B]/5" : ""}`}>
                <td className={`py-2.5 pr-4 font-bold ${row.cls.includes("P5") ? "text-[#F59E0B]" : "text-[#F8FAFC]"}`}>
                  {row.cls.includes("P5") && <span className="mr-1.5 text-[#F59E0B]">★</span>}
                  {row.cls}
                </td>
                <td className="py-2.5 pr-4 text-[#94A3B8] font-mono">{row.boreTol}</td>
                <td className="py-2.5 pr-4 text-[#94A3B8] font-mono">{row.outerTol}</td>
                <td className="py-2.5 pr-4 text-[#94A3B8] font-mono">{row.runout}</td>
                <td className="py-2.5 text-[#94A3B8] text-[10px]">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[10px] text-[#94A3B8] mt-3 italic">★ NEXUS standard supply class — confirmed P5/P6 on all bearing packs.</p>
    </div>
  );
}

/* ── ASTM D2000 Matrix ── */
function ASTMD2000Card() {
  const materials = [
    { name: "NBR Nitrile", comprSet: "Pass ≤25%", hardness: "70–90 Shore A", elongation: "≥150%", thermal: "120°C", rating: "BF/BG" },
    { name: "FKM Viton", comprSet: "Pass ≤15%", hardness: "75–90 Shore A", elongation: "≥100%", thermal: "200°C", rating: "HK" },
    { name: "EPDM", comprSet: "Pass ≤20%", hardness: "60–80 Shore A", elongation: "≥200%", thermal: "150°C", rating: "CA/CE" },
    { name: "Silicone", comprSet: "Pass ≤30%", hardness: "40–80 Shore A", elongation: "≥300%", thermal: "180°C", rating: "FC/GE" },
  ];
  return (
    <div className="bg-[#0F172A] border border-white/5 p-6">
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2 bg-[#F59E0B]/10">
          <BarChart3 size={18} className="text-[#F59E0B]" />
        </div>
        <div>
          <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#F59E0B] mb-0.5">ASTM D2000</div>
          <h3 className="text-sm font-black text-[#F8FAFC]">Rubber Classification Matrix</h3>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-white/10">
              {["Material", "Compression Set", "Hardness", "Elongation", "Max Temp", "D2000 Call"].map((h) => (
                <th key={h} className="text-left py-2 pr-4 text-[10px] font-bold tracking-wider uppercase text-[#94A3B8]">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {materials.map((row, i) => (
              <tr key={i} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                <td className="py-2.5 pr-4 font-bold text-[#F8FAFC]">{row.name}</td>
                <td className="py-2.5 pr-4 text-[#94A3B8]">{row.comprSet}</td>
                <td className="py-2.5 pr-4 text-[#94A3B8] font-mono">{row.hardness}</td>
                <td className="py-2.5 pr-4 text-[#94A3B8] font-mono">{row.elongation}</td>
                <td className="py-2.5 pr-4 text-[#F59E0B] font-bold">{row.thermal}</td>
                <td className="py-2.5">
                  <span className="text-[9px] font-mono font-bold text-[#F8FAFC] bg-[#1E293B] px-2 py-0.5 border border-white/10">{row.rating}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ── FDA & NSF Card ── */
function FDACard() {
  const certifications = [
    { cert: "FDA 21 CFR 177.2600", scope: "Rubber articles for repeated use in contact with food", status: "Certified", color: "#10B981" },
    { cert: "NSF/ANSI 61", scope: "Drinking water system components – direct contact with potable water", status: "Certified", color: "#10B981" },
    { cert: "3A Sanitary Standards", scope: "Dairy and food processing equipment seals", status: "Certified", color: "#10B981" },
    { cert: "EC 1935/2004", scope: "EU regulation on materials in contact with foodstuffs", status: "Certified", color: "#10B981" },
    { cert: "USP Class VI", scope: "Pharmaceutical-grade material biocompatibility", status: "On Request", color: "#F59E0B" },
  ];
  return (
    <div className="bg-[#0F172A] border border-white/5 p-6">
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2 bg-[#10B981]/10">
          <CheckCircle2 size={18} className="text-[#10B981]" />
        </div>
        <div>
          <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#10B981] mb-0.5">FDA / NSF 61</div>
          <h3 className="text-sm font-black text-[#F8FAFC]">Food, Pharma &amp; Water Compliance</h3>
        </div>
      </div>
      <div className="space-y-2">
        {certifications.map((cert, i) => (
          <div key={i} className="flex items-start gap-3 p-3 bg-[#1E293B]/50 border border-white/5">
            <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" style={{ background: cert.color }} />
            <div className="flex-1 min-w-0">
              <div className="font-bold text-xs text-[#F8FAFC] font-mono">{cert.cert}</div>
              <div className="text-[10px] text-[#94A3B8] mt-0.5 leading-relaxed">{cert.scope}</div>
            </div>
            <span
              className="text-[9px] font-black tracking-widest uppercase px-2 py-1 flex-shrink-0"
              style={{ background: `${cert.color}15`, color: cert.color, border: `1px solid ${cert.color}40` }}
            >
              {cert.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Laboratory Tests Card ── */
function LabCard() {
  const tests = [
    {
      icon: Microscope,
      name: "Durometer Hardness Testing",
      detail: "Shore A & Shore D (ASTM D2240). Every batch verified against specification within ±3 Shore units.",
    },
    {
      icon: FlaskConical,
      name: "Tensile Strength & Elongation",
      detail: "ASTM D412 ring method. Minimum tensile: 10 MPa FKM / 8 MPa NBR. Elongation at break confirmed per ASTM D2000.",
    },
    {
      icon: BarChart3,
      name: "Compression Set Testing",
      detail: "ASTM D395 Method B at elevated temperature (70°C / 22h). Compression set values below 25% for all dynamic seal grades.",
    },
    {
      icon: Award,
      name: "Bearing Fatigue Life (L10h)",
      detail: "ISO 281 dynamic load ratings. L10h calculated at operating speed and actual load — exceeds 30,000 hours for standard packs.",
    },
  ];
  return (
    <div className="bg-[#0F172A] border border-white/5 p-6">
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2 bg-[#F59E0B]/10">
          <FlaskConical size={18} className="text-[#F59E0B]" />
        </div>
        <div>
          <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#F59E0B] mb-0.5">In-House Laboratory</div>
          <h3 className="text-sm font-black text-[#F8FAFC]">Our Testing Capabilities</h3>
        </div>
      </div>
      <div className="space-y-4">
        {tests.map((t, i) => {
          const Icon = t.icon;
          return (
            <div key={i} className="flex gap-3">
              <div className="p-1.5 bg-[#F59E0B]/10 flex-shrink-0 h-fit mt-0.5">
                <Icon size={13} className="text-[#F59E0B]" />
              </div>
              <div>
                <div className="font-bold text-xs text-[#F8FAFC] mb-1">{t.name}</div>
                <p className="text-[10px] text-[#94A3B8] leading-relaxed">{t.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Standards Section ── */
export default function Standards() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { label: "ISO 492 Bearings", component: <ISO492Card /> },
    { label: "ASTM D2000 Rubber", component: <ASTMD2000Card /> },
    { label: "FDA / NSF 61", component: <FDACard /> },
    { label: "Lab Testing", component: <LabCard /> },
  ];

  return (
    <section id="standards" className="py-24 bg-[#0d1420]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 border border-[#F59E0B]/20 bg-[#F59E0B]/5 text-[#F59E0B] text-[10px] font-bold tracking-[0.3em] uppercase">
            <Award size={10} />
            Quality &amp; Compliance Dashboard
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#F8FAFC] leading-tight mb-4">
            International Standards<br />
            <span className="text-[#F59E0B]">&amp; Laboratory Certification</span>
          </h2>
          <p className="text-[#94A3B8] text-base leading-relaxed">
            Every NEXUS product is tested and documented against the international standards that govern critical industrial applications. Our quality chain is traceable from raw material to final pack.
          </p>
        </div>

        {/* Tabs (desktop) */}
        <div className="hidden md:flex gap-1 mb-8 border-b border-white/10">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-3 text-xs font-bold tracking-wider uppercase transition-all duration-200 border-b-2 -mb-px ${
                activeTab === i
                  ? "border-[#F59E0B] text-[#F59E0B] bg-[#F59E0B]/5"
                  : "border-transparent text-[#94A3B8] hover:text-[#F8FAFC]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content (desktop) */}
        <div className="hidden md:block">
          {tabs[activeTab].component}
        </div>

        {/* Stacked (mobile) */}
        <div className="md:hidden space-y-6">
          {tabs.map((tab) => (
            <div key={tab.label}>{tab.component}</div>
          ))}
        </div>

        {/* Summary compliance badges */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "ISO 492", sub: "Bearing Tolerances P5/P6" },
            { label: "ASTM D2000", sub: "Full Material Matrix" },
            { label: "NSF 61", sub: "Drinking Water Systems" },
            { label: "FDA 21 CFR", sub: "Food Contact Approved" },
          ].map((badge) => (
            <div
              key={badge.label}
              className="flex flex-col items-center justify-center p-4 bg-[#1E293B]/50 border border-white/5 text-center hover:border-[#F59E0B]/20 transition-colors"
            >
              <div className="text-[#F59E0B] text-lg font-black tracking-tight mb-1">{badge.label}</div>
              <div className="text-[10px] text-[#94A3B8] tracking-wide">{badge.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
