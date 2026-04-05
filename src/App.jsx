
import { useState, useEffect, useRef } from "react"; 

  

const Icon = ({ name, size = 20, color = "currentColor", strokeWidth = 1.5 }) => { 

  const paths = { 

    check: "M4 12l5 5L20 7", 

    star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z", 

    menu: "M3 12h18M3 6h18M3 18h18", 

    x: "M18 6L6 18M6 6l12 12", 

    chevronDown: "M6 9l6 6 6-6", 

    chevronRight: "M9 18l6-6-6-6", 

    shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", 

    truck: "M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", 

    refresh: "M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15", 

    award: "M12 15a7 7 0 100-14 7 7 0 000 14zM8.21 13.89L7 23l5-3 5 3-1.21-9.12", 

    zap: "M13 2L3 14h9l-1 8 10-12h-9l1-8z", 

    package: "M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16zM3.27 6.96L12 12.01l8.73-5.05M12 22.08V12", 

    arrowRight: "M5 12h14M12 5l7 7-7 7", 

    arrowDown: "M12 5v14M5 12l7 7 7-7", 

    plus: "M12 5v14M5 12h14", 

    minus: "M5 12h14", 

    info: "M12 22a10 10 0 100-20 10 10 0 000 20zM12 8h.01M11 12h1v4h1", 

    backpack: "M4 20V10a8 8 0 0116 0v10a2 2 0 01-2 2H6a2 2 0 01-2-2zM9 2a3 3 0 006 0M8 14h8", 

    sliders: "M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6", 

    heart: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z", 

    shoppingBag: "M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0", 

  }; 

  return ( 

    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"> 

      <path d={paths[name]} /> 

    </svg> 

  ); 

}; 

  

const PRODUCT_IMG = "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80"; 

const STRAP_IMG = "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=600&q=80"; 

const COMMUTER_IMG = "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"; 

const CITY_IMG = "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80"; 

  

const NAV_LINKS = ["Features", "How it works", "Reviews", "Shop"]; 

  

function Navbar({ cartCount }) { 

  const [open, setOpen] = useState(false); 

  const [scrolled, setScrolled] = useState(false); 

  useEffect(() => { 

    const h = () => setScrolled(window.scrollY > 40); 

    window.addEventListener("scroll", h); 

    return () => window.removeEventListener("scroll", h); 

  }, []); 

  const scroll = (id) => { 

    document.getElementById(id.toLowerCase().replace(/ /g, "-"))?.scrollIntoView({ behavior: "smooth" }); 

    setOpen(false); 

  }; 

  return ( 

    <nav style={{ position: "sticky", top: 0, zIndex: 200, background: scrolled ? "rgba(255,255,255,0.97)" : "#fff", borderBottom: "1px solid #e5e5e5", backdropFilter: "blur(8px)", transition: "box-shadow .3s", boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,.08)" : "none" }}> 

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}> 

        <div> 

          <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.3px" }}><span style={{ color: "#185FA5" }}>Carry</span> Comfort™</div> 

          <div style={{ fontSize: 9, color: "#999", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 1 }}>by Helen of Troy · NASDAQ: HELE</div> 

        </div> 

        <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="desktop-nav"> 

          {NAV_LINKS.map(l => ( 

            <button key={l} onClick={() => scroll(l)} style={{ background: "none", border: "none", fontSize: 13, color: "#444", cursor: "pointer", padding: "4px 0", fontWeight: 500 }}>{l}</button> 

          ))} 

          <button onClick={() => scroll("Shop")} style={{ background: "#185FA5", color: "#fff", border: "none", borderRadius: 8, padding: "9px 20px", fontSize: 13, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}> 

            <Icon name="shoppingBag" size={15} color="#fff" /> Shop — $39 

          </button> 

        </div> 

        <button onClick={() => setOpen(o => !o)} style={{ display: "none", background: "none", border: "none", cursor: "pointer" }} className="mobile-nav-btn"> 

          <Icon name={open ? "x" : "menu"} size={22} /> 

        </button> 

      </div> 

      {open && ( 

        <div style={{ borderTop: "1px solid #eee", background: "#fff", padding: "12px 24px 20px" }}> 

          {NAV_LINKS.map(l => ( 

            <button key={l} onClick={() => scroll(l)} style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", fontSize: 15, color: "#222", padding: "12px 0", borderBottom: "1px solid #f0f0f0", cursor: "pointer" }}>{l}</button> 

          ))} 

          <button onClick={() => scroll("Shop")} style={{ marginTop: 12, width: "100%", background: "#185FA5", color: "#fff", border: "none", borderRadius: 8, padding: 14, fontSize: 15, fontWeight: 600, cursor: "pointer" }}>Shop — $39</button> 

        </div> 

      )} 

      <style>{` 

        @media(max-width:768px){.desktop-nav{display:none!important}.mobile-nav-btn{display:block!important}} 

        @media(min-width:769px){.mobile-nav-btn{display:none!important}} 

      `}</style> 

    </nav> 

  ); 

} 

  

function Hero() { 

  return ( 

    <section style={{ background: "#f7f6f2" }}> 

      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 580, alignItems: "stretch" }} className="hero-grid"> 

        <div style={{ overflow: "hidden", background: "#e8e4dc", minHeight: 400 }}> 

          <img src={PRODUCT_IMG} alt="Carry Comfort on backpack straps" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} onError={e => { e.target.style.display = "none"; }} /> 

        </div> 

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "56px 48px" }}> 

          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#E6F1FB", color: "#185FA5", fontSize: 11, fontWeight: 600, padding: "5px 12px", borderRadius: 20, marginBottom: 20, letterSpacing: "0.06em", textTransform: "uppercase", width: "fit-content" }}> 

            <span style={{ width: 6, height: 6, background: "#185FA5", borderRadius: "50%", display: "inline-block" }} /> New · 2026 Launch 

          </div> 

          <h1 style={{ fontSize: 40, fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1px", marginBottom: 16, color: "#0d0d0d" }}> 

            Adjust your comfort.<br /><span style={{ color: "#185FA5" }}>Not your backpack.</span> 

          </h1> 

          <p style={{ fontSize: 16, color: "#666", lineHeight: 1.75, marginBottom: 32, maxWidth: 380 }}> 

            Three firmness modes on the bag you already own. Wrap on, clip in, and carry better from day one — no new backpack needed. 

          </p> 

          <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 28 }}> 

            <span style={{ fontSize: 38, fontWeight: 800, color: "#185FA5" }}>$39</span> 

            <span style={{ fontSize: 13, color: "#888" }}>Dual-pad kit · Free shipping</span> 

          </div> 

          <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 340 }}> 

            <button onClick={() => document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" })} style={{ background: "#185FA5", color: "#fff", border: "none", borderRadius: 8, padding: "15px 28px", fontSize: 15, fontWeight: 700, cursor: "pointer", letterSpacing: "0.01em" }}> 

              Add to cart 

            </button> 

            <button style={{ background: "#fff", color: "#185FA5", border: "2px solid #185FA5", borderRadius: 8, padding: "13px 28px", fontSize: 15, fontWeight: 600, cursor: "pointer" }}> 

              Also available on Amazon 

            </button> 

          </div> 

          <p style={{ fontSize: 12, color: "#999", marginTop: 14 }}>30-day money-back guarantee · Free returns</p> 

        </div> 

      </div> 

      <style>{`@media(max-width:768px){.hero-grid{grid-template-columns:1fr!important}}`}</style> 

    </section> 

  ); 

} 

  

function ProofBar() { 

  const items = [ 

    { num: "3", label: "Firmness modes" }, 

    { num: "< 2 min", label: "Install time" }, 

    { num: "Any bag", label: "Universal strap fit" }, 

    { num: "30-day", label: "Money-back guarantee" }, 

  ]; 

  return ( 

    <div style={{ borderTop: "1px solid #e5e5e5", borderBottom: "1px solid #e5e5e5", background: "#fff" }}> 

      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }} className="proof-grid"> 

        {items.map((it, i) => ( 

          <div key={i} style={{ padding: "24px 20px", textAlign: "center", borderRight: i < 3 ? "1px solid #e5e5e5" : "none" }}> 

            <div style={{ fontSize: 22, fontWeight: 800, color: "#185FA5", marginBottom: 4 }}>{it.num}</div> 

            <div style={{ fontSize: 12, color: "#888", letterSpacing: "0.02em" }}>{it.label}</div> 

          </div> 

        ))} 

      </div> 

      <style>{`@media(max-width:640px){.proof-grid{grid-template-columns:repeat(2,1fr)!important}.proof-grid>div:nth-child(2){border-right:none!important}.proof-grid>div:nth-child(3){border-right:1px solid #e5e5e5!important}}`}</style> 

    </div> 

  ); 

} 

  

function Modes() { 

  const modes = [ 

    { key: "soft", label: "Soft", title: "Light days", desc: "Gentle cushioning for short commutes and lighter loads. The liner stays pliable for a relaxed, comfortable carry.", fill: 30, color: "#378ADD", bg: "#E6F1FB", textColor: "#185FA5", trackBg: "#B5D4F4" }, 

    { key: "med", label: "Medium", title: "Everyday carry", desc: "Balanced support for a laptop plus daily essentials. Distributes weight without feeling stiff on a typical commute.", fill: 62, color: "#639922", bg: "#EAF3DE", textColor: "#3B6D11", trackBg: "#C0DD97" }, 

    { key: "firm", label: "Firm", title: "Heavy load days", desc: "Maximum support for all-day carry. Prevents shoulder fatigue under sustained weight on longer commutes.", fill: 96, color: "#EF9F27", bg: "#FAEEDA", textColor: "#854F0B", trackBg: "#FAC775" }, 

  ]; 

  return ( 

    <section id="features" style={{ borderBottom: "1px solid #e5e5e5" }}> 

      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)" }} className="modes-grid"> 

        {modes.map((m, i) => ( 

          <div key={m.key} style={{ padding: "48px 40px", borderRight: i < 2 ? "1px solid #e5e5e5" : "none", background: "#fafaf9" }}> 

            <span style={{ display: "inline-block", background: m.bg, color: m.textColor, fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 16 }}>{m.label}</span> 

            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>{m.title}</h3> 

            <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7, marginBottom: 24 }}>{m.desc}</p> 

            <div style={{ height: 5, background: "#e8e6e0", borderRadius: 3 }}> 

              <div style={{ height: 5, width: `${m.fill}%`, background: m.color, borderRadius: 3, transition: "width 1s" }} /> 

            </div> 

            <div style={{ fontSize: 11, color: m.textColor, marginTop: 5, fontWeight: 600 }}> 

              {m.fill < 40 ? "Low" : m.fill < 70 ? "Balanced" : "Maximum"} firmness 

            </div> 

          </div> 

        ))} 

      </div> 

      <style>{`@media(max-width:768px){.modes-grid{grid-template-columns:1fr!important}.modes-grid>div{border-right:none!important;border-bottom:1px solid #e5e5e5}}`}</style> 

    </section> 

  ); 

} 

  

function ProductShowcase() { 

  const [active, setActive] = useState(0); 

  const imgs = [ 

    { src: PRODUCT_IMG, label: "On the straps" }, 

    { src: STRAP_IMG, label: "Liner detail" }, 

    { src: COMMUTER_IMG, label: "In use" }, 

  ]; 

  return ( 

    <section style={{ background: "#f0ede8", padding: "80px 0" }}> 

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}> 

        <div style={{ textAlign: "center", marginBottom: 48 }}> 

          <div style={{ fontSize: 11, fontWeight: 700, color: "#185FA5", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>The product</div> 

          <h2 style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.5px" }}>Designed for the bag you already love.</h2> 

        </div> 

        <div style={{ display: "grid", gridTemplateColumns: "1fr 480px", gap: 24, alignItems: "start" }} className="showcase-grid"> 

          <div> 

            <div style={{ borderRadius: 16, overflow: "hidden", background: "#e0ddd8", aspectRatio: "4/3" }}> 

              <img src={imgs[active].src} alt={imgs[active].label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "opacity .3s" }} /> 

            </div> 

            <div style={{ display: "flex", gap: 10, marginTop: 12 }}> 

              {imgs.map((img, i) => ( 

                <button key={i} onClick={() => setActive(i)} style={{ flex: 1, aspectRatio: "4/3", borderRadius: 8, overflow: "hidden", border: active === i ? "3px solid #185FA5" : "2px solid transparent", cursor: "pointer", padding: 0, background: "#ddd" }}> 

                  <img src={img.src} alt={img.label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /> 

                </button> 

              ))} 

            </div> 

          </div> 

          <div style={{ background: "#fff", borderRadius: 16, padding: 36 }}> 

            <div style={{ fontSize: 11, fontWeight: 700, color: "#185FA5", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>What's in the kit</div> 

            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, letterSpacing: "-0.3px" }}>One kit. Both shoulders covered.</h3> 

            <p style={{ fontSize: 14, color: "#666", lineHeight: 1.75, marginBottom: 24 }}>Everything you need to upgrade any backpack — no tools, no permanent changes, nothing extra to buy.</p> 

            {[ 

              "2 magnetorheological strap liners", 

              "1 clip-on firmness controller (Soft / Medium / Firm)", 

              "Velcro wrap — fits any standard strap width", 

              "No permanent modification required", 

              "Illustrated setup guide included", 

              "30-day satisfaction guarantee", 

            ].map((item, i) => ( 

              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 0", borderBottom: i < 5 ? "1px solid #f0f0f0" : "none" }}> 

                <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#185FA5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}> 

                  <Icon name="check" size={11} color="#fff" strokeWidth={2.5} /> 

                </div> 

                <span style={{ fontSize: 14, color: "#333", lineHeight: 1.5 }}>{item}</span> 

              </div> 

            ))} 

            <button onClick={() => document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" })} style={{ marginTop: 24, width: "100%", background: "#185FA5", color: "#fff", border: "none", borderRadius: 8, padding: 14, fontSize: 14, fontWeight: 700, cursor: "pointer" }}> 

              Shop now — $39 

            </button> 

          </div> 

        </div> 

      </div> 

      <style>{`@media(max-width:900px){.showcase-grid{grid-template-columns:1fr!important}}`}</style> 

    </section> 

  ); 

} 

  

function HowItWorks() { 

  const steps = [ 

    { n: "01", icon: "backpack", title: "Wrap the liner", desc: "Wrap each liner around your existing shoulder strap. The Velcro backing holds it flat and flush against any strap width — no tools needed." }, 

    { n: "02", icon: "sliders", title: "Press it flat", desc: "Firmly press the pad against the strap. The magnetorheological layer is now positioned between your shoulder and the bag, ready to adjust." }, 

    { n: "03", icon: "zap", title: "Clip and select", desc: "Clip on the controller. Press once to cycle through Soft, Medium, or Firm. Done — you're carrying better immediately." }, 

  ]; 

  return ( 

    <section id="how-it-works" style={{ padding: "80px 0", background: "#fff" }}> 

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}> 

        <div style={{ textAlign: "center", marginBottom: 56 }}> 

          <div style={{ fontSize: 11, fontWeight: 700, color: "#185FA5", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>How it works</div> 

          <h2 style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.5px", marginBottom: 12 }}>Ready in under two minutes.</h2> 

          <p style={{ fontSize: 15, color: "#666", maxWidth: 440, margin: "0 auto" }}>No tools. No permanent changes. Just wrap, secure, and go.</p> 

        </div> 

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "#e5e5e5", borderRadius: 16, overflow: "hidden" }} className="steps-grid"> 

          {steps.map((s, i) => ( 

            <div key={i} style={{ background: "#fff", padding: "40px 32px" }}> 

              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}> 

                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#E6F1FB", display: "flex", alignItems: "center", justifyContent: "center" }}> 

                  <Icon name={s.icon} size={18} color="#185FA5" /> 

                </div> 

                <span style={{ fontSize: 13, fontWeight: 700, color: "#185FA5", letterSpacing: "0.06em" }}>{s.n}</span> 

              </div> 

              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{s.title}</h3> 

              <p style={{ fontSize: 14, color: "#666", lineHeight: 1.75 }}>{s.desc}</p> 

            </div> 

          ))} 

        </div> 

      </div> 

      <style>{`@media(max-width:768px){.steps-grid{grid-template-columns:1fr!important}}`}</style> 

    </section> 

  ); 

} 

  

function FeatureSplit() { 

  return ( 

    <section style={{ background: "#f7f6f2" }}> 

      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "stretch", minHeight: 480 }} className="split-grid"> 

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "64px 56px" }}> 

          <div style={{ fontSize: 11, fontWeight: 700, color: "#185FA5", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>Why it works</div> 

          <h2 style={{ fontSize: 30, fontWeight: 800, marginBottom: 16, letterSpacing: "-0.4px" }}>Upgrade the bag you already own.</h2> 

          <p style={{ fontSize: 15, color: "#666", lineHeight: 1.75, marginBottom: 28 }}> 

            Carry Comfort uses magnetorheological fabric — a material that changes stiffness in response to a magnetic field — to give you real-time control over how your straps feel. No new backpack needed. 

          </p> 

          {[ 

            { icon: "shield", label: "Safe near electronics", sub: "Human-safe magnetic field validated by PolyU research" }, 

            { icon: "refresh", label: "Switch modes anytime", sub: "One press cycles Soft → Medium → Firm while walking" }, 

            { icon: "award", label: "Built to last", sub: "Replacement liners available; backed by Helen of Troy quality" }, 

          ].map((f, i) => ( 

            <div key={i} style={{ display: "flex", gap: 14, marginBottom: 20 }}> 

              <div style={{ width: 40, height: 40, borderRadius: 10, background: "#E6F1FB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}> 

                <Icon name={f.icon} size={18} color="#185FA5" /> 

              </div> 

              <div> 

                <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 2 }}>{f.label}</div> 

                <div style={{ fontSize: 13, color: "#888", lineHeight: 1.5 }}>{f.sub}</div> 

              </div> 

            </div> 

          ))} 

        </div> 

        <div style={{ background: "#e8e4dc", overflow: "hidden", minHeight: 400 }}> 

          <img src={CITY_IMG} alt="Urban commuter with backpack" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /> 

        </div> 

      </div> 

      <style>{`@media(max-width:768px){.split-grid{grid-template-columns:1fr!important}}`}</style> 

    </section> 

  ); 

} 

  

function ComparisonTable() { 

  const rows = [ 

    { feature: "Dual pads (both shoulders)", cc: true, optech: false, zpacks: true, generic: false }, 

    { feature: "Adjustable firmness modes", cc: true, optech: false, zpacks: false, generic: false }, 

    { feature: "Retrofit — works on any bag", cc: true, optech: true, zpacks: true, generic: true }, 

    { feature: "No permanent modification", cc: true, optech: true, zpacks: true, generic: true }, 

    { feature: "Controller included", cc: true, optech: false, zpacks: false, generic: false }, 

    { feature: "30-day guarantee", cc: true, optech: false, zpacks: false, generic: false }, 

  ]; 

  const cols = [ 

    { key: "cc", label: "Carry Comfort™", price: "$39", highlight: true }, 

    { key: "optech", label: "OP/TECH Shoulder Cush", price: "$17–26" }, 

    { key: "zpacks", label: "Zpacks Shoulder Pads", price: "$29.95" }, 

    { key: "generic", label: "Generic Amazon pads", price: "~$15" }, 

  ]; 

  return ( 

    <section style={{ padding: "80px 0", background: "#fff" }}> 

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}> 

        <div style={{ textAlign: "center", marginBottom: 48 }}> 

          <div style={{ fontSize: 11, fontWeight: 700, color: "#185FA5", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Compare</div> 

          <h2 style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.5px" }}>See how we stack up.</h2> 

        </div> 

        <div style={{ overflowX: "auto" }}> 

          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}> 

            <thead> 

              <tr> 

                <th style={{ padding: "12px 16px", textAlign: "left", color: "#888", fontSize: 12, fontWeight: 600, borderBottom: "2px solid #e5e5e5" }}>Feature</th> 

                {cols.map(c => ( 

                  <th key={c.key} style={{ padding: "12px 16px", textAlign: "center", borderBottom: "2px solid #e5e5e5", background: c.highlight ? "#E6F1FB" : "#fff", borderRadius: c.highlight ? "8px 8px 0 0" : 0 }}> 

                    <div style={{ fontSize: 13, fontWeight: 700, color: c.highlight ? "#185FA5" : "#333" }}>{c.label}</div> 

                    <div style={{ fontSize: 12, color: c.highlight ? "#378ADD" : "#888", fontWeight: 500, marginTop: 2 }}>{c.price}</div> 

                  </th> 

                ))} 

              </tr> 

            </thead> 

            <tbody> 

              {rows.map((r, ri) => ( 

                <tr key={ri} style={{ borderBottom: "1px solid #f0f0f0" }}> 

                  <td style={{ padding: "14px 16px", color: "#333", fontSize: 13 }}>{r.feature}</td> 

                  {cols.map(c => ( 

                    <td key={c.key} style={{ padding: "14px 16px", textAlign: "center", background: c.highlight ? "#f0f7ff" : "#fff" }}> 

                      {r[c.key] 

                        ? <div style={{ width: 22, height: 22, borderRadius: "50%", background: c.highlight ? "#185FA5" : "#e0e0e0", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="check" size={12} color={c.highlight ? "#fff" : "#666"} strokeWidth={2.5} /></div> 

                        : <span style={{ fontSize: 18, color: "#ccc" }}>—</span>} 

                    </td> 

                  ))} 

                </tr> 

              ))} 

            </tbody> 

          </table> 

        </div> 

      </div> 

    </section> 

  ); 

} 

  

function Quote() { 

  return ( 

    <section style={{ background: "#042C53", padding: "80px 24px", textAlign: "center" }}> 

      <div style={{ maxWidth: 700, margin: "0 auto" }}> 

        <div style={{ fontSize: 48, color: "#378ADD", lineHeight: 0.5, marginBottom: 16, fontFamily: "Georgia, serif" }}>"</div> 

        <blockquote style={{ fontSize: 22, fontStyle: "italic", color: "#fff", lineHeight: 1.5, fontWeight: 300, marginBottom: 24 }}> 

          My shoulder stopped hurting after the first week. I carry a laptop every day — I didn't expect a strap add-on to make this much difference. 

        </blockquote> 

        <div style={{ fontSize: 14, color: "#85B7EB", fontWeight: 600 }}>Marcus T.</div> 

        <div style={{ fontSize: 13, color: "#378ADD", marginTop: 4 }}>Software engineer · NYC transit commuter</div> 

      </div> 

    </section> 

  ); 

} 

  

function Reviews() { 

  const reviews = [ 

    { name: "Marcus T.", role: "Software engineer · NYC", rating: 5, text: "My shoulder stopped hurting after the first week. I carry a 15-inch laptop every day and genuinely didn't expect a strap add-on to make this much difference." }, 

    { name: "Priya S.", role: "Consultant · Chicago", rating: 5, text: "Firm mode on heavy days is exactly what I needed. One press while walking and you feel the difference immediately. It's completely seamless." }, 

    { name: "James K.", role: "Designer · San Francisco", rating: 4, text: "Installed in two minutes, works perfectly on my old bag. Way smarter than buying a whole new backpack just for better shoulder support." }, 

  ]; 

  return ( 

    <section id="reviews" style={{ padding: "80px 0", background: "#f7f6f2" }}> 

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}> 

        <div style={{ textAlign: "center", marginBottom: 48 }}> 

          <div style={{ fontSize: 11, fontWeight: 700, color: "#185FA5", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Reviews</div> 

          <h2 style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.5px" }}>What commuters are saying.</h2> 

        </div> 

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }} className="reviews-grid"> 

          {reviews.map((r, i) => ( 

            <div key={i} style={{ background: "#fff", borderRadius: 16, padding: 28, border: "1px solid #e8e6e0" }}> 

              <div style={{ display: "flex", gap: 3, marginBottom: 14 }}> 

                {[...Array(5)].map((_, si) => ( 

                  <svg key={si} width="14" height="14" viewBox="0 0 24 24" fill={si < r.rating ? "#EF9F27" : "#E0E0E0"} stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg> 

                ))} 

              </div> 

              <p style={{ fontSize: 14, color: "#444", lineHeight: 1.75, fontStyle: "italic", marginBottom: 16 }}>"{r.text}"</p> 

              <div style={{ fontSize: 13, fontWeight: 700 }}>{r.name}</div> 

              <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>{r.role}</div> 

            </div> 

          ))} 

        </div> 

      </div> 

      <style>{`@media(max-width:768px){.reviews-grid{grid-template-columns:1fr!important}}`}</style> 

    </section> 

  ); 

} 

  

function Pricing() { 

  const features = [ 

    "2 adjustable magnetorheological strap liners", 

    "1 clip-on firmness controller — Soft / Medium / Firm", 

    "Universal Velcro fit — any backpack, no tools", 

    "Illustrated setup guide included", 

    "Replacement liner availability", 

    "30-day satisfaction guarantee + free returns", 

  ]; 

  const trust = [ 

    { icon: "truck", label: "Free shipping", sub: "Ships in 2–4 business days" }, 

    { icon: "shield", label: "30-day guarantee", sub: "Full refund, no questions" }, 

    { icon: "refresh", label: "Free returns", sub: "Easy return process" }, 

  ]; 

  return ( 

    <section id="shop" style={{ padding: "80px 0", background: "#fff" }}> 

      <div style={{ maxWidth: 560, margin: "0 auto", padding: "0 24px" }}> 

        <div style={{ textAlign: "center", marginBottom: 36 }}> 

          <div style={{ fontSize: 11, fontWeight: 700, color: "#185FA5", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Pricing</div> 

          <h2 style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.5px", marginBottom: 8 }}>One kit. Both shoulders.</h2> 

          <p style={{ fontSize: 14, color: "#888" }}>Everything included. No subscriptions. No hidden fees.</p> 

        </div> 

        <div style={{ background: "#fff", border: "2px solid #185FA5", borderRadius: 20, padding: 40 }}> 

          <div style={{ textAlign: "center", marginBottom: 28 }}> 

            <div style={{ fontSize: 11, color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Carry Comfort™ Dual-Pad Kit</div> 

            <div style={{ fontSize: 60, fontWeight: 800, color: "#185FA5", lineHeight: 1 }}>$39</div> 

            <div style={{ fontSize: 13, color: "#888", marginTop: 6 }}>Free shipping · No subscription · Ships 2–4 days</div> 

          </div> 

          <div style={{ height: 1, background: "#e5e5e5", margin: "24px 0" }} /> 

          {features.map((f, i) => ( 

            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: i < features.length - 1 ? "1px solid #f5f5f5" : "none" }}> 

              <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#185FA5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}> 

                <Icon name="check" size={12} color="#fff" strokeWidth={2.5} /> 

              </div> 

              <span style={{ fontSize: 14, color: "#333" }}>{f}</span> 

            </div> 

          ))} 

          <button style={{ marginTop: 28, width: "100%", background: "#185FA5", color: "#fff", border: "none", borderRadius: 10, padding: 16, fontSize: 16, fontWeight: 700, cursor: "pointer", letterSpacing: "0.01em" }}> 

            Add to cart — carrycomfort.com 

          </button> 

          <button style={{ marginTop: 10, width: "100%", background: "#fff", color: "#185FA5", border: "2px solid #185FA5", borderRadius: 10, padding: 15, fontSize: 15, fontWeight: 600, cursor: "pointer" }}> 

            Also available on Amazon 

          </button> 

          <p style={{ textAlign: "center", fontSize: 12, color: "#999", marginTop: 14 }}>Secure checkout · 30-day money-back guarantee</p> 

        </div> 

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginTop: 24 }}> 

          {trust.map((t, i) => ( 

            <div key={i} style={{ background: "#f7f6f2", borderRadius: 12, padding: 16, textAlign: "center" }}> 

              <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}> 

                <Icon name={t.icon} size={20} color="#185FA5" /> 

              </div> 

              <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 2 }}>{t.label}</div> 

              <div style={{ fontSize: 11, color: "#888" }}>{t.sub}</div> 

            </div> 

          ))} 

        </div> 

      </div> 

    </section> 

  ); 

} 

  

function Footer() { 

  return ( 

    <footer style={{ background: "#042C53", padding: "40px 24px" }}> 

      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}> 

        <div> 

          <div style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}><span style={{ color: "#85B7EB" }}>Carry</span> Comfort™</div> 

          <div style={{ fontSize: 11, color: "#378ADD", marginTop: 4, letterSpacing: "0.06em", textTransform: "uppercase" }}>A Helen of Troy Limited product · NASDAQ: HELE</div> 

        </div> 

        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}> 

          {["Shop", "Support", "Returns", "Privacy", "About Helen of Troy"].map(l => ( 

            <a key={l} href="#" style={{ fontSize: 12, color: "#85B7EB", textDecoration: "none" }}>{l}</a> 

          ))} 

        </div> 

        <div style={{ fontSize: 11, color: "#185FA5" }}>© 2026 Helen of Troy Limited. All rights reserved.</div> 

      </div> 

    </footer> 

  ); 

} 

  

export default function App() { 

  return ( 

    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", color: "#1a1a1a", background: "#fff" }}> 

      <Navbar /> 

      <Hero /> 

      <ProofBar /> 

      <Modes /> 

      <ProductShowcase /> 

      <HowItWorks /> 

      <FeatureSplit /> 

      <ComparisonTable /> 

      <Quote /> 

      <Reviews /> 

      <Pricing /> 

      <Footer /> 

    </div> 

  ); 

} 
