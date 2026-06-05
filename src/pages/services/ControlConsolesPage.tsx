import { ArrowLeft, CheckCircle2, Shield, Settings, Cpu } from 'lucide-react'
import { Container } from '../../components/layout/Container'
import { Navbar } from '../../components/layout/Navbar'
import { Footer } from '../../components/layout/Footer'
import { Reveal } from '../../components/ui/Reveal'
import consoleImage from '../../assets/images/control_consoles.png'

export function ControlConsolesPage() {
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
              <span className="font-mono text-sm font-bold uppercase text-brand-red tracking-[0.2em] block mb-3">Service 05</span>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase leading-none max-w-4xl">
                Control Consoles & Furniture
              </h1>
              <p className="font-mono text-sm text-white/60 tracking-wider uppercase mt-4 max-w-2xl">
                ISO 11064 Compliant Dispatch Consoles & Command Center Furniture for 24/7 Mission-Critical Environments
              </p>
            </Reveal>
          </Container>
        </section>

        {/* Overview Section */}
        <section className="py-16 sm:py-24 border-b border-line bg-surface-muted">
          <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl uppercase text-ink mb-6">
                Ergonomically Engineered for Operational Command
              </h2>
              <div className="font-body text-sm leading-7 text-ink-soft space-y-4">
                <p>
                  One World United supplies and installs professional control room consoles and technical furniture designed to withstand the rigorous demands of continuous 24/7 operating environments. Every console is custom-engineered to optimize operator situational awareness, comfort, and productivity.
                </p>
                <p>
                  By strictly adhering to <strong>ISO 11064 (Ergonomic design of control centers)</strong>, we ensure that line-of-sight, reach zones, screen placements, and physical layouts work in absolute harmony to reduce operator fatigue and minimize critical response times.
                </p>
              </div>

              {/* Core Features Bullet Grid */}
              <div className="grid gap-4 mt-8 sm:grid-cols-2">
                {[
                  { title: 'Sit-to-Stand Motorized Control', desc: 'Sleek, dual-surface motorized actuators allowing independent height adjustments for keyboard and screen decks.' },
                  { title: 'High-Capacity Cable Management', desc: 'Integrated cable trays and energy chains protecting structural wiring bundles from strain during deck movement.' },
                  { title: 'Modular Extruded Steel Frame', desc: 'Heavy-duty steel cores offering ultimate stability and the flexibility to reconfigure console lengths in the future.' },
                  { title: 'Bespoke Finishing Options', desc: 'HPL (High-Pressure Laminate) worktops with impact-resistant polyurethane nose edges for maximum longevity.' },
                ].map((feat, i) => (
                  <div className="flex gap-3" key={i}>
                    <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={16} />
                    <div>
                      <h4 className="font-mono text-sm font-bold text-ink uppercase tracking-wide">{feat.title}</h4>
                      <p className="font-body text-sm text-ink-soft mt-1 leading-normal">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative">
                <div className="absolute -right-4 -top-4 h-24 w-24 border border-brand-blue/20 bg-brand-blue/5" />
                <div className="absolute -bottom-4 -left-4 h-24 w-32 border border-line bg-white" />
                <img 
                  alt="Modern mission control room consoles and display systems" 
                  className="relative z-10 w-full object-cover aspect-[4/3] border border-line" 
                  src={consoleImage} 
                />
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Technical Specs Grid */}
        <section className="py-16 sm:py-24 border-b border-line bg-white">
          <Container>
            <Reveal>
              <h2 className="font-display text-3xl uppercase text-ink mb-10 text-center">Technical Specifications & Engineering Standards</h2>
            </Reveal>
            
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Box 1 */}
              <Reveal className="p-6 border border-line bg-surface-muted" delay={0.05}>
                <Shield className="text-brand-blue mb-4" size={24} />
                <h3 className="font-display text-lg uppercase text-ink mb-3">Compliance & Standards</h3>
                <ul className="font-body text-sm text-ink-soft space-y-2 leading-relaxed">
                  <li>• <strong>ISO 11064</strong>: Ergonomic Control Rooms Design</li>
                  <li>• <strong>ANSI/BIFMA X5.5</strong>: Desk Products Standard</li>
                  <li>• <strong>EN 527</strong>: Office furniture - Worktables and desks</li>
                  <li>• <strong>NFPA 70 / NEC</strong>: National Electrical Code compliance</li>
                </ul>
              </Reveal>

              {/* Box 2 */}
              <Reveal className="p-6 border border-line bg-surface-muted" delay={0.1}>
                <Settings className="text-brand-blue mb-4" size={24} />
                <h3 className="font-display text-lg uppercase text-ink mb-3">Mechanical Specifications</h3>
                <ul className="font-body text-sm text-ink-soft space-y-2 leading-relaxed">
                  <li>• <strong>Framework</strong>: 12-gauge cold-rolled welded steel profiles</li>
                  <li>• <strong>Height Adjustment</strong>: Motorized telescoping columns (650mm to 1250mm)</li>
                  <li>• <strong>Load Capacity</strong>: Dynamic lift capacity up to 250 kg</li>
                  <li>• <strong>Worksurface</strong>: 25mm thick MDF core with ESD-safe HPL overlay</li>
                </ul>
              </Reveal>

              {/* Box 3 */}
              <Reveal className="p-6 border border-line bg-surface-muted" delay={0.15}>
                <Cpu className="text-brand-blue mb-4" size={24} />
                <h3 className="font-display text-lg uppercase text-ink mb-3">Electrical & IT Integration</h3>
                <ul className="font-body text-sm text-ink-soft space-y-2 leading-relaxed">
                  <li>• <strong>Power Distribution</strong>: Integrated power strips, dual circuits</li>
                  <li>• <strong>IT Bays</strong>: 19&quot; standard rackmount cabinets in lower console bays</li>
                  <li>• <strong>Cooling</strong>: Passive ventilation grilles with optional active quiet fans</li>
                  <li>• <strong>Monitor Mounting</strong>: Articulated gas-spring multi-display arms</li>
                </ul>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* Applications & Advantages */}
        <section className="py-16 sm:py-24 bg-brand-black text-white">
          <Container className="grid gap-16 lg:grid-cols-[0.8fr_1fr]">
            <Reveal>
              <span className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-brand-red mb-3 block">Deployment Fields</span>
              <h2 className="font-display text-3xl sm:text-4xl uppercase leading-tight mb-8">
                Where Reliability Meets High Performance
              </h2>
              <div className="grid gap-6">
                {[
                  { name: 'Oil & Gas Control Centers', desc: 'Central monitoring for refineries, SCADA networks, pipelines, and drilling operations.' },
                  { name: 'Power & Utility Dispatch', desc: 'Transmission grid management rooms and generation plant control rooms.' },
                  { name: 'Traffic & Transit Control', desc: 'Rail networks, airports, smart city surveillance, and municipal traffic hubs.' },
                  { name: 'Security & Emergency Operations (EOC)', desc: '911 response centers, crisis rooms, municipal dispatch, and high-security installations.' }
                ].map((ind, idx) => (
                  <div className="border-l-2 border-brand-blue pl-4 py-1" key={idx}>
                    <h4 className="font-body text-sm font-bold text-white">{ind.name}</h4>
                    <p className="font-body text-sm text-white/60 mt-1 leading-relaxed">{ind.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="font-display text-2xl uppercase text-white mb-6">The OWU Advantage</h3>
              <div className="grid gap-4">
                {[
                  { title: 'Turnkey Integration', text: 'We offer full-service control room integration: from architectural floor layout designs and console fabrication to structural raised floors and cabling.' },
                  { title: 'Acoustic & Lighting Design', text: 'Ensuring console layouts align perfectly with lighting angles to prevent screen glare and minimize echo across the operations floor.' },
                  { title: 'Custom Configuration', text: 'Tailored consoles constructed for specific operator numbers, curved configurations, and specific IT chassis constraints.' },
                  { title: 'Uncompromising Durability', text: 'All raw materials are certified scratch-resistant, impact-resistant, and structural steel structures are powder-coated for 24/7 multi-shift longevity.' }
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
