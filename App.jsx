import { useState } from "react";

const STEPS = [
  { id: 1, label: "Intake", duration: "1–2 hrs", icon: "📋" },
  { id: 2, label: "Setup", duration: "2–6 hrs", icon: "⚙️" },
  { id: 3, label: "Launch", duration: "Live", icon: "🚀" },
  { id: 4, label: "Handover", duration: "EOD", icon: "📦" },
];

const PLATFORMS = ["Meta (Facebook/Instagram)", "Google Ads", "Both Meta + Google"];
const INDUSTRIES = ["Retail", "Professional Services", "Real Estate", "Healthcare", "Education", "Food & Beverage", "Other"];

const initialForm = {
  businessName: "", contactName: "", email: "", phone: "",
  industry: "", offer: "", audience: "", budget: "", platform: "",
  goal: "", urgency: "today",
};

const initialLeads = [
  { id: 1, name: "Sipho Dlamini", source: "Meta", time: "08:42", status: "Hot", budget: "R8,500" },
  { id: 2, name: "Priya Naidoo", source: "Google", time: "10:15", status: "Warm", budget: "R5,200" },
  { id: 3, name: "Johan van Wyk", source: "Meta", time: "11:30", status: "Hot", budget: "R12,000" },
  { id: 4, name: "Fatima Moosa", source: "Google", time: "13:05", status: "New", budget: "R6,800" },
];

export default function App() {
  const [view, setView] = useState("home");
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [leads] = useState(initialLeads);
  const [filterStatus, setFilterStatus] = useState("All");

  const handleInput = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const handleSubmit = () => {
    if (!form.businessName || !form.email || !form.offer) return alert("Please fill in required fields.");
    setSubmitted(true);
  };

  const statusColor = s => ({ Hot: "#ef4444", Warm: "#f97316", New: "#3b82f6" }[s] || "#6b7280");
  const filtered = filterStatus === "All" ? leads : leads.filter(l => l.status === filterStatus);

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#0a0a0f", minHeight: "100vh", color: "#f0f0f5" }}>
      {/* NAV */}
      <nav style={{ background: "#0d0d18", borderBottom: "1px solid #1e1e3a", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: 8, background: "linear-gradient(135deg,#7c3aed,#2563eb)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 16 }}>H</div>
          <span style={{ fontWeight: 800, fontSize: 17, letterSpacing: 0.5 }}>Headbrid <span style={{ color: "#7c3aed" }}>Digital</span></span>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {[["home","Home"],["intake","Start Sprint"],["dashboard","Dashboard"],["how","How It Works"]].map(([v, l]) => (
            <button key={v} onClick={() => setView(v)} style={{ padding: "6px 14px", borderRadius: 6, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600, background: view === v ? "#7c3aed" : "transparent", color: view === v ? "#fff" : "#a0a0c0" }}>{l}</button>
          ))}
        </div>
      </nav>

      {/* HOME */}
      {view === "home" && (
        <div>
          <div style={{ textAlign: "center", padding: "80px 24px 60px", background: "linear-gradient(180deg,#0d0d25 0%,#0a0a0f 100%)" }}>
            <div style={{ display: "inline-block", background: "#1a1a3a", border: "1px solid #7c3aed44", borderRadius: 20, padding: "6px 16px", fontSize: 12, color: "#a78bfa", marginBottom: 20, fontWeight: 600 }}>🇿🇦 Gauteng's #1 SME Lead Agency · Est. 2011</div>
            <h1 style={{ fontSize: "clamp(32px,5vw,58px)", fontWeight: 900, lineHeight: 1.15, margin: "0 0 20px" }}>
              Get Real Leads in<br /><span style={{ background: "linear-gradient(90deg,#7c3aed,#2563eb)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>24 Hours. Guaranteed.</span>
            </h1>
            <p style={{ color: "#9090b0", fontSize: 18, maxWidth: 560, margin: "0 auto 36px", lineHeight: 1.6 }}>No audits. No retainers. No fluff. We launch high-converting Meta & Google campaigns for Johannesburg SMEs — fast.</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={() => setView("intake")} style={{ background: "linear-gradient(135deg,#7c3aed,#2563eb)", border: "none", color: "#fff", padding: "14px 32px", borderRadius: 10, fontWeight: 700, fontSize: 16, cursor: "pointer" }}>Start My Lead Sprint →</button>
              <button onClick={() => setView("how")} style={{ background: "transparent", border: "1px solid #7c3aed66", color: "#a78bfa", padding: "14px 32px", borderRadius: 10, fontWeight: 700, fontSize: 16, cursor: "pointer" }}>See How It Works</button>
            </div>
          </div>

          {/* STATS */}
          <div style={{ display: "flex", justifyContent: "center", gap: 24, padding: "40px 24px", flexWrap: "wrap" }}>
            {[["500+","SMEs Served"],["24hrs","First Lead Time"],["R5k+","Min. Ad Spend"],["12+","Years in Joburg"]].map(([n,l]) => (
              <div key={l} style={{ background: "#111120", border: "1px solid #1e1e3a", borderRadius: 12, padding: "24px 32px", textAlign: "center", minWidth: 140 }}>
                <div style={{ fontSize: 32, fontWeight: 900, color: "#7c3aed" }}>{n}</div>
                <div style={{ fontSize: 13, color: "#7070a0", marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>

          {/* FEATURES */}
          <div style={{ padding: "20px 24px 80px", maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontWeight: 800, fontSize: 26, marginBottom: 32 }}>Why Headbrid's Sprint Works</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 20 }}>
              {[
                ["⚡","Speed Over Perfection","Campaigns go live within hours — not weeks. First leads hit your inbox same day."],
                ["🎯","Precision Targeting","We zero in on your exact Joburg/Gauteng customer using proven audience frameworks."],
                ["📊","Performance Model","Pay-per-lead structures align our incentives with yours. You win, we win."],
                ["🛠️","Done-For-You Setup","Landing pages, ad creatives, tracking pixels — we handle it all from brief to launch."],
              ].map(([i,t,d]) => (
                <div key={t} style={{ background: "#111120", border: "1px solid #1e1e3a", borderRadius: 12, padding: 24 }}>
                  <div style={{ fontSize: 28, marginBottom: 12 }}>{i}</div>
                  <div style={{ fontWeight: 700, marginBottom: 8, fontSize: 15 }}>{t}</div>
                  <div style={{ color: "#8080a0", fontSize: 14, lineHeight: 1.6 }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* INTAKE FORM */}
      {view === "intake" && (
        <div style={{ maxWidth: 680, margin: "40px auto", padding: "0 24px 80px" }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "60px 24px" }}>
              <div style={{ fontSize: 64, marginBottom: 20 }}>🎉</div>
              <h2 style={{ fontWeight: 900, fontSize: 28, marginBottom: 12 }}>Sprint Activated!</h2>
              <p style={{ color: "#9090b0", fontSize: 16, marginBottom: 30 }}>We've received your brief for <strong style={{ color: "#a78bfa" }}>{form.businessName}</strong>. Your campaign manager will contact you within <strong style={{ color: "#a78bfa" }}>2 hours</strong> to kick off setup.</p>
              <div style={{ background: "#111120", border: "1px solid #7c3aed44", borderRadius: 12, padding: 24, textAlign: "left", marginBottom: 30 }}>
                <div style={{ fontWeight: 700, marginBottom: 12, color: "#a78bfa" }}>📋 Your Sprint Timeline</div>
                {[["Now – 2hrs","Campaign manager contacts you"],["2 – 8hrs","Creatives, funnel & ads built"],["8 – 24hrs","Campaign live & leads flowing"],["24hrs+","Dashboard access & handover"]].map(([t,d]) => (
                  <div key={t} style={{ display: "flex", gap: 12, marginBottom: 10, fontSize: 14 }}>
                    <span style={{ color: "#7c3aed", fontWeight: 700, minWidth: 90 }}>{t}</span>
                    <span style={{ color: "#c0c0e0" }}>{d}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => { setSubmitted(false); setForm(initialForm); setView("dashboard"); }} style={{ background: "linear-gradient(135deg,#7c3aed,#2563eb)", border: "none", color: "#fff", padding: "12px 28px", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>View Lead Dashboard</button>
            </div>
          ) : (
            <>
              <h2 style={{ fontWeight: 900, fontSize: 28, marginBottom: 6 }}>🚀 Start Your 24-Hour Lead Sprint</h2>
              <p style={{ color: "#8080a0", marginBottom: 32, fontSize: 14 }}>Fill in your brief — takes 5 minutes. Fields marked * are required.</p>

              {/* Progress Steps */}
              <div style={{ display: "flex", alignItems: "center", marginBottom: 36 }}>
                {STEPS.map((s, i) => (
                  <div key={s.id} style={{ display: "flex", alignItems: "center", flex: i < STEPS.length - 1 ? 1 : "none" }}>
                    <div onClick={() => setActiveStep(s.id)} style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
                      <div style={{ width: 36, height: 36, borderRadius: "50%", background: activeStep >= s.id ? "linear-gradient(135deg,#7c3aed,#2563eb)" : "#1a1a2e", border: activeStep >= s.id ? "none" : "1px solid #2a2a4a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>{s.icon}</div>
                      <div style={{ fontSize: 11, color: activeStep >= s.id ? "#a78bfa" : "#5050708", marginTop: 4, fontWeight: 600 }}>{s.label}</div>
                    </div>
                    {i < STEPS.length - 1 && <div style={{ flex: 1, height: 1, background: activeStep > s.id ? "#7c3aed" : "#1e1e3a", margin: "0 8px", marginBottom: 16 }} />}
                  </div>
                ))}
              </div>

              <div style={{ background: "#111120", border: "1px solid #1e1e3a", borderRadius: 16, padding: 28, display: "flex", flexDirection: "column", gap: 18 }}>
                {[
                  ["businessName","Business Name *","text","e.g. Joburg Plumbing Co"],
                  ["contactName","Your Name *","text","First & Last name"],
                  ["email","Email Address *","email","you@business.co.za"],
                  ["phone","WhatsApp / Phone","tel","+27 82 000 0000"],
                ].map(([k, l, t, ph]) => (
                  <div key={k}>
                    <label style={{ fontSize: 13, color: "#9090b0", fontWeight: 600, display: "block", marginBottom: 6 }}>{l}</label>
                    <input type={t} placeholder={ph} value={form[k]} onChange={e => handleInput(k, e.target.value)}
                      style={{ width: "100%", background: "#0d0d18", border: "1px solid #1e1e3a", borderRadius: 8, padding: "10px 14px", color: "#f0f0f5", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
                  </div>
                ))}

                <div>
                  <label style={{ fontSize: 13, color: "#9090b0", fontWeight: 600, display: "block", marginBottom: 6 }}>Industry</label>
                  <select value={form.industry} onChange={e => handleInput("industry", e.target.value)}
                    style={{ width: "100%", background: "#0d0d18", border: "1px solid #1e1e3a", borderRadius: 8, padding: "10px 14px", color: "#f0f0f5", fontSize: 14, outline: "none" }}>
                    <option value="">Select industry...</option>
                    {INDUSTRIES.map(i => <option key={i}>{i}</option>)}
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: 13, color: "#9090b0", fontWeight: 600, display: "block", marginBottom: 6 }}>Your Offer / Service *</label>
                  <textarea placeholder="e.g. Free roof inspection for Sandton homeowners — limited to 10 per week" value={form.offer} onChange={e => handleInput("offer", e.target.value)} rows={3}
                    style={{ width: "100%", background: "#0d0d18", border: "1px solid #1e1e3a", borderRadius: 8, padding: "10px 14px", color: "#f0f0f5", fontSize: 14, outline: "none", resize: "vertical", boxSizing: "border-box" }} />
                </div>

                <div>
                  <label style={{ fontSize: 13, color: "#9090b0", fontWeight: 600, display: "block", marginBottom: 6 }}>Target Audience</label>
                  <input placeholder="e.g. Homeowners in Sandton, ages 30–55, earning R25k+/month" value={form.audience} onChange={e => handleInput("audience", e.target.value)}
                    style={{ width: "100%", background: "#0d0d18", border: "1px solid #1e1e3a", borderRadius: 8, padding: "10px 14px", color: "#f0f0f5", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label style={{ fontSize: 13, color: "#9090b0", fontWeight: 600, display: "block", marginBottom: 6 }}>Ad Budget (ZAR/month)</label>
                    <input placeholder="e.g. R7,500" value={form.budget} onChange={e => handleInput("budget", e.target.value)}
                      style={{ width: "100%", background: "#0d0d18", border: "1px solid #1e1e3a", borderRadius: 8, padding: "10px 14px", color: "#f0f0f5", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ fontSize: 13, color: "#9090b0", fontWeight: 600, display: "block", marginBottom: 6 }}>Platform</label>
                    <select value={form.platform} onChange={e => handleInput("platform", e.target.value)}
                      style={{ width: "100%", background: "#0d0d18", border: "1px solid #1e1e3a", borderRadius: 8, padding: "10px 14px", color: "#f0f0f5", fontSize: 14, outline: "none" }}>
                      <option value="">Choose...</option>
                      {PLATFORMS.map(p => <option key={p}>{p}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: 13, color: "#9090b0", fontWeight: 600, display: "block", marginBottom: 10 }}>Urgency</label>
                  <div style={{ display: "flex", gap: 10 }}>
                    {[["today","Start Today"],["tomorrow","Tomorrow is fine"],["planning","Just Planning"]].map(([v, l]) => (
                      <button key={v} onClick={() => handleInput("urgency", v)}
                        style={{ flex: 1, padding: "9px 8px", borderRadius: 8, border: form.urgency === v ? "1px solid #7c3aed" : "1px solid #1e1e3a", background: form.urgency === v ? "#1a1035" : "#0d0d18", color: form.urgency === v ? "#a78bfa" : "#7070a0", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                        {l}
                      </button>
                    ))}
                  </div>
                </div>

                <button onClick={handleSubmit} style={{ background: "linear-gradient(135deg,#7c3aed,#2563eb)", border: "none", color: "#fff", padding: "14px", borderRadius: 10, fontWeight: 700, fontSize: 16, cursor: "pointer", marginTop: 8 }}>
                  🚀 Launch My Sprint
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* DASHBOARD */}
      {view === "dashboard" && (
        <div style={{ maxWidth: 900, margin: "40px auto", padding: "0 24px 80px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
            <div>
              <h2 style={{ fontWeight: 900, fontSize: 26, marginBottom: 4 }}>Lead Dashboard</h2>
              <p style={{ color: "#7070a0", fontSize: 13 }}>Live sprint results · Updated every 15 min</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", animation: "pulse 2s infinite" }} />
              <span style={{ fontSize: 13, color: "#22c55e", fontWeight: 600 }}>LIVE</span>
            </div>
          </div>

          {/* KPI Cards */}
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 16, marginBottom: 28 }}>
            {[["4","Total Leads","📥"],["2","Hot Leads","⚡"],["R32,500","Pipeline Value","💰"],["R812","Cost Per Lead","📊"]].map(([v,l,i]) => (
              <div key={l} style={{ background: "#111120", border: "1px solid #1e1e3a", borderRadius: 12, padding: 20 }}>
                <div style={{ fontSize: 22, marginBottom: 6 }}>{i}</div>
                <div style={{ fontSize: 28, fontWeight: 900, color: "#a78bfa" }}>{v}</div>
                <div style={{ fontSize: 12, color: "#6060808", marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>

          {/* Filter */}
          <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
            {["All","Hot","Warm","New"].map(s => (
              <button key={s} onClick={() => setFilterStatus(s)}
                style={{ padding: "6px 16px", borderRadius: 20, border: "1px solid", borderColor: filterStatus === s ? "#7c3aed" : "#1e1e3a", background: filterStatus === s ? "#1a1035" : "transparent", color: filterStatus === s ? "#a78bfa" : "#606090", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                {s}
              </button>
            ))}
          </div>

          {/* Lead Table */}
          <div style={{ background: "#111120", border: "1px solid #1e1e3a", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", padding: "12px 20px", background: "#0d0d18", fontSize: 12, color: "#505070", fontWeight: 700, borderBottom: "1px solid #1e1e3a", gap: 16 }}>
              {["LEAD NAME","SOURCE","TIME","STATUS","BUDGET"].map(h => <span key={h}>{h}</span>)}
            </div>
            {filtered.map((l, i) => (
              <div key={l.id} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", padding: "16px 20px", gap: 16, borderBottom: i < filtered.length - 1 ? "1px solid #0d0d18" : "none", alignItems: "center" }}>
                <div style={{ fontWeight: 600, fontSize: 15 }}>{l.name}</div>
                <div style={{ fontSize: 13, color: "#8080c0" }}>{l.source}</div>
                <div style={{ fontSize: 13, color: "#6060a0" }}>{l.time}</div>
                <div>
                  <span style={{ background: statusColor(l.status) + "22", color: statusColor(l.status), padding: "3px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{l.status}</span>
                </div>
                <div style={{ fontSize: 13, color: "#a0c0a0" }}>{l.budget}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 20, padding: 16, background: "#0d1a0d", border: "1px solid #22c55e33", borderRadius: 10, fontSize: 13, color: "#86efac" }}>
            💡 <strong>Tip:</strong> Hot leads have engaged 2+ times. Call within 30 minutes for best conversion rates.
          </div>
        </div>
      )}

      {/* HOW IT WORKS */}
      {view === "how" && (
        <div style={{ maxWidth: 820, margin: "40px auto", padding: "0 24px 80px" }}>
          <h2 style={{ fontWeight: 900, fontSize: 28, marginBottom: 8 }}>How the 24-Hour Sprint Works</h2>
          <p style={{ color: "#7070a0", marginBottom: 40, fontSize: 15 }}>From brief to first lead — no retainers, no fluff, no waiting weeks.</p>

          {[
            { step: "01", icon: "📋", title: "Intake (1–2 Hours)", color: "#7c3aed", items: ["Quick discovery form or 15-min WhatsApp call","Capture your offer, ideal customer, budget & goals","Agency reviews brief and assigns campaign manager","R5,000+ ad spend recommended for best results"] },
            { step: "02", icon: "⚙️", title: "Setup (2–6 Hours)", color: "#2563eb", items: ["Build high-converting landing page / lead funnel","Craft ad copy & creatives tailored to your audience","Launch Meta and/or Google Ads with precise targeting","Install tracking pixels, conversion events & retargeting"] },
            { step: "03", icon: "🚀", title: "Launch & Monitor (Live)", color: "#0891b2", items: ["Campaigns go live — traffic flows immediately","Real-time optimization of bids, audiences & creatives","First inquiries typically arrive within hours of launch","Agency monitors performance through the 24-hour window"] },
            { step: "04", icon: "📦", title: "Handover (End of Day)", color: "#16a34a", items: ["Leads delivered via dashboard + WhatsApp/email alerts","Full setup guide for client-side scaling","Optional: continue with monthly management package","Performance report with CPL, CTR & recommendations"] },
          ].map(({ step, icon, title, color, items }) => (
            <div key={step} style={{ display: "flex", gap: 24, marginBottom: 36 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: 52, height: 52, borderRadius: 12, background: color + "22", border: `1px solid ${color}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>{icon}</div>
                <div style={{ width: 1, flex: 1, background: "#1e1e3a", marginTop: 8 }} />
              </div>
              <div style={{ flex: 1, paddingBottom: 24 }}>
                <div style={{ fontSize: 11, color, fontWeight: 700, letterSpacing: 2, marginBottom: 4 }}>STEP {step}</div>
                <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 14 }}>{title}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {items.map(it => (
                    <div key={it} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: color, marginTop: 6, flexShrink: 0 }} />
                      <span style={{ fontSize: 14, color: "#c0c0e0", lineHeight: 1.5 }}>{it}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div style={{ background: "linear-gradient(135deg,#1a1035,#0d1a35)", border: "1px solid #7c3aed44", borderRadius: 16, padding: 28, textAlign: "center" }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>⚡</div>
            <h3 style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Ready to Sprint?</h3>
            <p style={{ color: "#8080b0", fontSize: 14, marginBottom: 20 }}>Johannesburg SMEs trust Headbrid for fast, no-nonsense lead generation since 2011.</p>
            <button onClick={() => setView("intake")} style={{ background: "linear-gradient(135deg,#7c3aed,#2563eb)", border: "none", color: "#fff", padding: "13px 28px", borderRadius: 9, fontWeight: 700, fontSize: 15, cursor: "pointer" }}>Start My 24-Hour Sprint →</button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <div style={{ borderTop: "1px solid #1e1e3a", padding: "20px 24px", textAlign: "center", fontSize: 12, color: "#404060" }}>
        © 2026 Headbrid Digital Marketing Services · Johannesburg, Gauteng · Est. 2011
      </div>
    </div>
  );
}