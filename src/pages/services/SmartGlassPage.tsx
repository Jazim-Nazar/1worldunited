import { useState } from 'react'
import { ArrowLeft, Eye, EyeOff } from 'lucide-react'
import { Container } from '../../components/layout/Container'
import { Navbar } from '../../components/layout/Navbar'
import { Footer } from '../../components/layout/Footer'
import { Reveal } from '../../components/ui/Reveal'

// Import extracted images
import slidingDoorsImg from '../../assets/images/smart_glass__page_3_img_1.jpeg'
import remoteControlImg from '../../assets/images/smart_glass__page_4_img_1.jpeg'
import wellnessImg from '../../assets/images/smart_glass_wellness.png'

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
                Smart Glass Solutions
              </h1>
              <p className="font-mono text-sm text-white/60 tracking-wider uppercase mt-4 max-w-2xl">
                Smart Glass Solutions for Commercial, Residential, Wellness and Luxury Applications
              </p>
            </Reveal>
          </Container>
        </section>

        {/* Overview Section */}
        <section className="py-16 sm:py-24 border-b border-line bg-surface-muted">
          <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl uppercase text-ink mb-6">
                Advanced Glazing Technology
              </h2>
              <p className="font-body text-sm leading-7 text-ink-soft mb-6">
                Smart glass is an advanced glazing technology that allows glass surfaces to switch between transparent, translucent, and opaque states. It provides privacy on demand, energy efficiency, solar control, modern aesthetics, and smart-building integration.
              </p>
              <h4 className="font-mono text-sm font-bold text-brand-red uppercase tracking-widest mb-4">Main Technologies</h4>
              <p className="font-body text-sm leading-relaxed text-ink-soft">
                PDLC (Privacy Glass), SPD (Dynamic Tint Glass), Electrochromic Glass, Thermochromic Glass, and Photochromic Glass.
              </p>
            </Reveal>

            {/* Interactive Switcher Simulator */}
            <Reveal delay={0.1}>
              <div className="bg-white p-6 border border-line shadow-sm text-center">
                <h3 className="font-mono text-sm font-bold uppercase text-brand-red tracking-wider mb-6">
                  Interactive State Simulator
                </h3>
                
                {/* Simulator Box */}
                <div className="relative mx-auto max-w-md overflow-hidden border border-line aspect-[4/3]">
                  {/* Background image visible when glass is transparent */}
                  <img 
                    src={remoteControlImg} 
                    alt="Executive office boardroom view through smart glass window" 
                    className="absolute inset-0 w-full h-full object-cover select-none" 
                  />

                  {/* Smart Glass Pane Layer (applies blur and opaque overlay) */}
                  <div 
                    className={`absolute inset-0 transition-all duration-500 ease-in-out flex flex-col items-center justify-center p-4 ${
                      isGlassOpaque 
                        ? 'bg-white/90 backdrop-blur-[20px] opacity-100' 
                        : 'bg-white/10 backdrop-blur-[0px] opacity-0 pointer-events-none'
                    }`}
                  >
                    <EyeOff className="text-brand-blue mb-2" size={24} />
                    <span className="font-mono text-sm font-bold uppercase text-brand-blue tracking-widest block">Opaque State Active</span>
                    <span className="font-body text-sm text-ink-soft mt-1 block">Instant private enclosure complete.</span>
                  </div>
                </div>

                <div className="mt-6 flex justify-center gap-4">
                  <button
                    className={`flex items-center gap-1.5 px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider transition-colors duration-200 border ${
                      !isGlassOpaque 
                        ? 'bg-brand-blue text-white border-brand-blue' 
                        : 'bg-white text-ink border-line hover:bg-surface-muted'
                    }`}
                    onClick={() => setIsGlassOpaque(false)}
                    type="button"
                  >
                    <Eye size={12} /> ON (Transparent)
                  </button>
                  <button
                    className={`flex items-center gap-1.5 px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider transition-colors duration-200 border ${
                      isGlassOpaque 
                        ? 'bg-brand-blue text-white border-brand-blue' 
                        : 'bg-white text-ink border-line hover:bg-surface-muted'
                    }`}
                    onClick={() => setIsGlassOpaque(true)}
                    type="button"
                  >
                    <EyeOff size={12} /> OFF (Opaque)
                  </button>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Technology Comparison Table */}
        <section className="py-16 sm:py-24 border-b border-line bg-white">
          <Container className="max-w-4xl">
            <Reveal>
              <h2 className="font-display text-3xl uppercase text-ink mb-8 text-center">Technology & Description Matrix</h2>
              <div className="border border-line shadow-sm overflow-hidden">
                <table className="w-full text-left font-body text-sm border-collapse">
                  <thead>
                    <tr className="bg-brand-black text-white font-mono text-sm uppercase tracking-wider">
                      <th className="p-4 border-r border-white/10 w-1/3">Technology</th>
                      <th className="p-4">Brief Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { tech: 'PDLC (Privacy Glass)', desc: 'Uses liquid crystal technology to switch instantly between transparent and opaque states for privacy on demand.' },
                      { tech: 'SPD (Dynamic Tint Glass)', desc: 'Uses suspended particles to adjust the glass tint level, reducing glare and solar heat while maintaining visibility.' },
                      { tech: 'Electrochromic Glass', desc: 'Changes tint gradually through an electrical charge, providing energy savings and solar control for large glazing areas.' },
                      { tech: 'Thermochromic Glass', desc: 'Automatically darkens when exposed to higher temperatures, reducing heat gain without electricity.' },
                      { tech: 'Photochromic Glass', desc: 'Responds to sunlight and UV exposure by darkening automatically, similar to transition eyeglasses.' }
                    ].map((row, i) => (
                      <tr className="border-b border-line hover:bg-surface-muted/50 transition-colors" key={i}>
                        <td className="p-4 border-r border-line font-mono font-bold text-brand-blue uppercase text-sm tracking-wider">{row.tech}</td>
                        <td className="p-4 text-ink-soft leading-relaxed">{row.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Applications Section */}
        <section className="py-16 sm:py-24 border-b border-line bg-surface-muted">
          <Container>
            <Reveal>
              <h2 className="font-display text-3xl uppercase text-ink mb-12 text-center">Applications</h2>
            </Reveal>
            
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Commercial */}
              <Reveal className="bg-white p-8 border border-line shadow-sm" delay={0.05}>
                <h3 className="font-display text-xl uppercase text-ink mb-4">Commercial</h3>
                <p className="font-body text-sm text-ink-soft leading-relaxed">
                  Conference rooms, executive offices, hospitals, hotels, retail stores, airports, educational facilities, and luxury developments.
                </p>
                <img src={remoteControlImg} alt="Commercial smart glass partition" className="mt-6 border border-line object-cover h-48 w-full" />
              </Reveal>

              {/* Residential */}
              <Reveal className="bg-white p-8 border border-line shadow-sm" delay={0.1}>
                <h3 className="font-display text-xl uppercase text-ink mb-4">Residential</h3>
                <p className="font-body text-sm text-ink-soft leading-relaxed">
                  Bathrooms, home offices, living areas, skylights, luxury villas, penthouses, and smart homes.
                </p>
                <img src={slidingDoorsImg} alt="Residential smart glass divider" className="mt-6 border border-line object-cover h-48 w-full" />
              </Reveal>

              {/* Luxury Wellness */}
              <Reveal className="bg-white p-8 border border-line shadow-sm" delay={0.15}>
                <h3 className="font-display text-xl uppercase text-ink mb-4">Luxury Wellness & Fitness</h3>
                <p className="font-body text-sm text-ink-soft leading-relaxed">
                  Private gyms, wellness centers, indoor pools, spa suites, hammams, massage rooms, hydrotherapy zones, and resort facilities.
                </p>
                <img src={wellnessImg} alt="Luxury spa hammam area with smart glass wall partitions" className="mt-6 border border-line object-cover h-48 w-full" />
              </Reveal>
            </div>
          </Container>
        </section>

        {/* Advantages & Disadvantages */}
        <section className="py-16 sm:py-24 bg-brand-black text-white">
          <Container className="grid gap-16 lg:grid-cols-[0.8fr_1fr]">
            <Reveal>
              <span className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-brand-red mb-3 block">Analysis Parameters</span>
              <h2 className="font-display text-3xl sm:text-4xl uppercase leading-tight mb-8">
                Advantages & Disadvantages
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-mono text-sm font-bold text-brand-blue uppercase tracking-widest mb-2">Advantages</h4>
                  <p className="font-body text-sm text-white/75 leading-relaxed">
                    Instant privacy, premium aesthetics, smart-home integration, reduced need for blinds, improved hygiene, enhanced property value, and energy savings.
                  </p>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <h4 className="font-mono text-sm font-bold text-brand-red uppercase tracking-widest mb-2">Disadvantages</h4>
                  <p className="font-body text-sm text-white/75 leading-relaxed">
                    Higher initial investment, electrical requirements for some technologies, and specialized installation requirements.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="font-display text-2xl uppercase text-white mb-6">Recommended Technologies</h3>
              <div className="grid gap-4">
                {[
                  { title: 'PDLC (Privacy Applications)', text: 'Recommended for interior doors, office conference partitions, and bathrooms where rapid ON/OFF opacity switching is required.' },
                  { title: 'Electrochromic (Façades & Skylights)', text: 'Recommended for large exterior building envelopes and roof domes. Allows slow, smooth adjustments to sunlight intensity to block heat.' },
                  { title: 'SPD (Luxury Transportation)', text: 'Optimal for luxury cars, yachts, and premium boardrooms where glare levels must be dimmed manually via dimmer switches.' }
                ].map((adv) => (
                  <div className="bg-white/5 p-5 border border-white/10" key={adv.title}>
                    <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-brand-blue">{adv.title}</h4>
                    <p className="font-body text-sm text-white/60 mt-2 leading-relaxed">{adv.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
