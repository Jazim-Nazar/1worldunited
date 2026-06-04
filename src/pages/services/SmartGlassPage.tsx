import { useState } from 'react'
import { ArrowLeft, Eye, EyeOff, ShieldCheck, Sun, Thermometer, Zap, Sparkles } from 'lucide-react'
import { Container } from '../../components/layout/Container'
import { Navbar } from '../../components/layout/Navbar'
import { Footer } from '../../components/layout/Footer'
import { Reveal } from '../../components/ui/Reveal'

// Import extracted images
import slidingDoorsImg from '../../assets/images/smart_glass__page_3_img_1.jpeg'
import remoteControlImg from '../../assets/images/smart_glass__page_4_img_1.jpeg'


export function SmartGlassPage() {
  const [isGlassOpaque, setIsGlassOpaque] = useState(false)

  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        {/* Subpage Hero */}
        <section className="bg-brand-black text-white relative py-20 border-b border-white/10">
          <Container>
            <a 
              className="inline-flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-[0.15em] text-brand-blue hover:text-white transition-colors mb-8"
              href="#/"
            >
              <ArrowLeft size={12} /> Back to Home
            </a>
            <Reveal>
              <span className="font-mono text-sm font-bold uppercase text-brand-red tracking-[0.2em] block mb-3">Service 04</span>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase leading-none max-w-4xl">
                Smart Glass<br/>
                <span className="text-brand-blue">Technologies</span>
              </h1>
              <p className="mt-6 max-w-2xl font-body text-sm sm:text-base leading-7 text-white/70">
                Advanced glazing technology allowing glass surfaces to switch instantly between transparent, translucent, and opaque states. Privacy on demand with integrated solar control.
              </p>
            </Reveal>
          </Container>
        </section>

        {/* Introduction & Highlights */}
        <section className="py-20 border-b border-line">
          <Container className="grid gap-12 lg:grid-cols-2 items-center">
            <Reveal>
              <h2 className="font-display text-3xl uppercase text-ink">
                Privacy on Demand & Smart Building Integration
              </h2>
              <div className="mt-6 space-y-4 font-body text-sm leading-7 text-ink-soft">
                <p>
                  Smart glass is a state-of-the-art glazing solution that utilizes active electrical currents or passive environmental responses to adjust light transmission. It transforms dynamic architectural spaces by combining visual control, thermal management, and clean detailing.
                </p>
                <p>
                  Perfect for corporate boardrooms, luxury hotel bathrooms, private wellness clinics, and high-end residential spaces, it eliminates the need for bulky dust-collecting blinds and curtains.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative border border-line shadow-hard overflow-hidden group">
                <img 
                  src={slidingDoorsImg} 
                  alt="Smart Glass Sliding Partition Walls" 
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 bg-brand-black/95 text-white font-mono text-sm uppercase tracking-wider px-3 py-1.5 border-l-2 border-brand-red">
                  Sliding Door Installation
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Interactive ON/OFF Simulator */}
        <section className="py-20 bg-surface-muted/30 border-b border-line">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
              <Reveal>
                <span className="font-mono text-sm font-bold uppercase text-brand-red tracking-[0.2em] block mb-3">Simulator</span>
                <h3 className="font-display text-3xl uppercase text-ink">Privacy Glazing Control Simulator</h3>
                <p className="mt-4 font-body text-sm leading-6 text-ink-soft">
                  See how Liquid Crystal PDLC technology works in real-time. Toggle the state below to switch between full transparency and a frosted opaque privacy screen.
                </p>

                {/* State Toggler Button */}
                <div className="mt-8 flex items-center gap-4">
                  <button
                    className={`font-mono text-sm uppercase tracking-wider font-bold px-6 py-3 border.5 transition-all flex items-center gap-2 ${
                      !isGlassOpaque 
                        ? 'bg-brand-blue border-brand-blue text-white shadow-hard' 
                        : 'bg-white border-line text-ink hover:bg-surface-muted'
                    }`}
                    onClick={() => setIsGlassOpaque(false)}
                    type="button"
                  >
                    <Eye size={14} /> State: ON (Transparent)
                  </button>

                  <button
                    className={`font-mono text-sm uppercase tracking-wider font-bold px-6 py-3 border.5 transition-all flex items-center gap-2 ${
                      isGlassOpaque 
                        ? 'bg-brand-red border-brand-red text-white shadow-hard' 
                        : 'bg-white border-line text-ink hover:bg-surface-muted'
                    }`}
                    onClick={() => setIsGlassOpaque(true)}
                    type="button"
                  >
                    <EyeOff size={14} /> State: OFF (Frosted Opaque)
                  </button>
                </div>

                <div className="mt-8 font-body text-sm text-ink-soft bg-white p-5 border border-line border-l-2 border-brand-blue leading-6">
                  <strong>How it works:</strong> In the <strong>ON state</strong>, an electric current aligns the polymer-dispersed liquid crystals (PDLC) inside the glass film, allowing light to pass directly. In the <strong>OFF state</strong>, crystals scatter light randomly, blocking visibility while still letting in diffuse natural light.
                </div>
              </Reveal>

              {/* Interactive Graphic Container */}
              <Reveal delay={0.1} className="flex flex-col items-center">
                <div className="relative w-full aspect-[4/3] border border-line bg-surface-muted overflow-hidden shadow-xl">
                  {/* Base bedroom interior view (Transparent view representation) */}
                  <img 
                    src={remoteControlImg} 
                    alt="Privacy glass bedroom divider" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Frosted glass overlay layer with absolute positioning and transition */}
                  <div 
                    className={`absolute inset-0 bg-white/80 backdrop-blur-lg flex items-center justify-center transition-all duration-500 ease-out border-[12px] border-black/10 ${
                      isGlassOpaque ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-[1.01] pointer-events-none'
                    }`}
                  >
                    <div className="bg-brand-black/90 text-white font-mono text-sm uppercase tracking-widest px-4 py-2 border-l border-brand-red">
                      Opaque Mode: Frosted Partition
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4 z-10 bg-brand-black/90 text-white font-mono text-sm uppercase tracking-widest px-2.5 py-1">
                    {!isGlassOpaque ? 'PDLC ON: Clear' : 'PDLC OFF: Private'}
                  </div>
                </div>
                <span className="font-body text-sm text-ink-muted mt-3 italic">
                  Interactive representation of active electro-chromic partitioning.
                </span>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* The 5 Technologies Overview */}
        <section className="py-20 border-b border-line">
          <Container>
            <Reveal>
              <span className="font-mono text-sm font-bold uppercase text-brand-blue tracking-[0.2em] block mb-3">Technologies</span>
              <h2 className="font-display text-3xl sm:text-4xl uppercase text-ink mb-12">Main Smart Glass Configurations</h2>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
                {[
                  { title: 'PDLC (Privacy Glass)', desc: 'Uses liquid crystal technology to switch instantly between transparent and opaque states for privacy on demand.', icon: EyeOff },
                  { title: 'SPD (Dynamic Tint)', desc: 'Uses suspended particles to adjust the glass tint level, reducing glare and solar heat while maintaining visibility.', icon: Sun },
                  { title: 'Electrochromic Glass', desc: 'Changes tint gradually through an electrical charge, providing energy savings and solar control for large glazing areas.', icon: Zap },
                  { title: 'Thermochromic Glass', desc: 'Automatically darkens when exposed to higher temperatures, reducing heat gain without electricity.', icon: Thermometer },
                  { title: 'Photochromic Glass', desc: 'Responds to sunlight and UV exposure by darkening automatically, similar to transition eyeglasses.', icon: Sparkles }
                ].map((tech) => {
                  const Icon = tech.icon
                  return (
                    <div className="p-6 border border-line bg-surface-muted/40 flex flex-col justify-between" key={tech.title}>
                      <div>
                        <Icon className="text-brand-blue mb-4" size={20} />
                        <h4 className="font-display text-lg uppercase text-ink mb-2">{tech.title}</h4>
                        <p className="font-body text-sm leading-relaxed text-ink-soft">{tech.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Applications */}
        <section className="py-20 bg-surface-muted/30 border-b border-line">
          <Container>
            <Reveal>
              <h3 className="font-display text-3xl uppercase text-ink mb-12 text-center">Structural Applications</h3>
            </Reveal>

            <div className="grid gap-8 md:grid-cols-3">
              <Reveal className="bg-white p-8 border border-line shadow-hard" delay={0.05}>
                <span className="font-mono text-sm text-brand-red block mb-4">01 / COMMERCIAL</span>
                <h4 className="font-display text-2xl uppercase text-ink mb-3">Corporate & Public Space</h4>
                <p className="font-body text-sm leading-6 text-ink-soft">
                  Office conference rooms, executive partitions, hospital clinic isolation rooms, hotel room partitioning, retail storefront mockups, and secure airport terminals.
                </p>
              </Reveal>

              <Reveal className="bg-white p-8 border border-line shadow-hard" delay={0.1}>
                <span className="font-mono text-sm text-brand-red block mb-4">02 / RESIDENTIAL</span>
                <h4 className="font-display text-2xl uppercase text-ink mb-3">Luxury Homes & Villas</h4>
                <p className="font-body text-sm leading-6 text-ink-soft">
                  Switchable bathroom window dividers, home offices, master suite partitions, facade skylights, residential entranceways, and smart house layouts.
                </p>
              </Reveal>

              <Reveal className="bg-white p-8 border border-line shadow-hard" delay={0.15}>
                <span className="font-mono text-sm text-brand-red block mb-4">03 / WELLNESS & FITNESS</span>
                <h4 className="font-display text-2xl uppercase text-ink mb-3">Spas & Private Suites</h4>
                <p className="font-body text-sm leading-6 text-ink-soft">
                  Private gyms, hammams, massage rooms, indoor pool enclosures, spa suites, luxury hydrotherapy zones, and specialized resort facilities.
                </p>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* Advantages & Disadvantages */}
        <section className="py-20 border-b border-line">
          <Container className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <h3 className="font-display text-2xl uppercase text-ink mb-6">Core Advantages</h3>
              <ul className="space-y-3 font-body text-sm text-ink-soft">
                {[
                  'Instant Privacy - Shift from clear view to opaque in under a second.',
                  'Premium Aesthetics - Clean minimalist glazing lines with no hanging fabric.',
                  'Smart-Home Integration - Controllable via automation, remotes, or voice.',
                  'Enhanced Property Value - Modernized facility infrastructure increases value.',
                  'Energy Savings - SPD & Electrochromic tinting reduces central cooling HVAC demand.',
                  'Improved Hygiene - Non-porous glass panels are easier to disinfect than curtains.'
                ].map((item, idx) => (
                  <li className="flex gap-2.5 items-start" key={idx}>
                    <span className="h-5 w-5 bg-brand-blue/5 text-brand-blue border border-brand-blue/15 grid place-items-center shrink-0 rounded-sm">
                      <ShieldCheck size={12} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="font-display text-2xl uppercase text-ink mb-6">Recommendations & Considerations</h3>
              <div className="space-y-4">
                <div className="bg-surface-muted p-5 border border-line">
                  <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-brand-red">PDLC Privacy Application</h4>
                  <p className="font-body text-sm text-ink-soft mt-1 leading-relaxed">
                    Recommended for interior doors, office conference partitions, and bathrooms where rapid ON/OFF opacity switching is required.
                  </p>
                </div>
                <div className="bg-surface-muted p-5 border border-line">
                  <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-brand-red">Electrochromic Facades & Skylights</h4>
                  <p className="font-body text-sm text-ink-soft mt-1 leading-relaxed">
                    Recommended for large exterior building envelopes and roof domes. Allows slow, smooth adjustments to sunlight intensity to block heat.
                  </p>
                </div>
                <div className="bg-surface-muted p-5 border border-line">
                  <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-brand-red">SPD Solar Shading</h4>
                  <p className="font-body text-sm text-ink-soft mt-1 leading-relaxed">
                    Optimal for luxury cars, yachts, and premium boardrooms where glare levels must be dimmed manually via dimmer switches.
                  </p>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
