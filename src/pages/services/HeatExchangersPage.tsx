import { ArrowLeft, CheckCircle2, Shield, Settings, Hammer } from 'lucide-react'
import { Container } from '../../components/layout/Container'
import { Navbar } from '../../components/layout/Navbar'
import { Footer } from '../../components/layout/Footer'
import { Reveal } from '../../components/ui/Reveal'
import heatImage from '../../assets/images/heat_exchangers.png'

export function HeatExchangersPage() {
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
              <span className="font-mono text-sm font-bold uppercase text-brand-red tracking-[0.2em] block mb-3">Service 07</span>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase leading-none max-w-4xl">
                Heat Exchangers
              </h1>
              <p className="font-mono text-sm text-white/60 tracking-wider uppercase mt-4 max-w-2xl">
                ASME-Stamped Industrial Heat Transfer Systems, Custom Bundle Fabrication, and Maintenance Services
              </p>
            </Reveal>
          </Container>
        </section>

        {/* Overview Section */}
        <section className="py-16 sm:py-24 border-b border-line bg-surface-muted">
          <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl uppercase text-ink mb-6">
                Optimizing Thermal Efficiency in Demanding Environments
              </h2>
              <div className="font-body text-sm leading-7 text-ink-soft space-y-4">
                <p>
                  One World United specializes in the custom engineering, supply, fabrication, and field maintenance of high-performance industrial heat transfer systems. We deliver thermal management solutions designed to operate under severe temperatures, extreme pressures, and corrosive chemical processes.
                </p>
                <p>
                  Our heat exchangers are manufactured in strict compliance with <strong>ASME Section VIII (Div 1 & 2)</strong> and <strong>TEMA (Tension Member Association) standards</strong>. We handle both thermal design calculations (utilizing HTRI modeling software) and physical fabrication, ensuring absolute performance reliability.
                </p>
              </div>

              {/* Core Features Bullet Grid */}
              <div className="grid gap-4 mt-8 sm:grid-cols-2">
                {[
                  { title: 'TEMA Shell & Tube Designs', desc: 'Custom configurations including floating heads, U-tube bundles, and fixed tube sheets designed for process fluids.' },
                  { title: 'Fin-Fan Air Coolers', desc: 'Heavy-duty air-cooled exchangers featuring tension-wrapped fins and high-efficiency fan drives for high temperature operations.' },
                  { title: 'Gasketed & Welded Plates', desc: 'High-turbulency plate heat exchangers offering compact footprints and rapid thermal transfer rates.' },
                  { title: 'Turnkey Maintenance & Retubing', desc: 'Complete site turnaround services including bundle extraction, high-pressure hydro-cleaning, and full retubing.' },
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
                  alt="Industrial shell and tube heat exchanger unit" 
                  className="relative z-10 w-full object-cover aspect-[4/3] border border-line" 
                  src={heatImage} 
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
                <h3 className="font-display text-lg uppercase text-ink mb-3">Codes & Stampings</h3>
                <ul className="font-body text-sm text-ink-soft space-y-2 leading-relaxed">
                  <li>• <strong>ASME Sec VIII Div 1 & 2</strong>: Pressure Vessels</li>
                  <li>• <strong>TEMA Class R, C, & B</strong>: Shell & Tube Exchangers</li>
                  <li>• <strong>API 660</strong>: Shell-and-tube Exchangers for General Refinery Service</li>
                  <li>• <strong>API 661</strong>: Air-Cooled Heat Exchangers</li>
                </ul>
              </Reveal>

              {/* Box 2 */}
              <Reveal className="p-6 border border-line bg-surface-muted" delay={0.1}>
                <Settings className="text-brand-blue mb-4" size={24} />
                <h3 className="font-display text-lg uppercase text-ink mb-3">Material Options</h3>
                <ul className="font-body text-sm text-ink-soft space-y-2 leading-relaxed">
                  <li>• <strong>Carbon Steel</strong>: SA-516 Gr. 70, SA-106 Gr. B</li>
                  <li>• <strong>Stainless Steel</strong>: SS304/304L, SS316/316L</li>
                  <li>• <strong>Duplex Alloys</strong>: Duplex 2205, Super Duplex 2507</li>
                  <li>• <strong>Exotic Materials</strong>: Titanium (Gr. 2), Monel, Inconel</li>
                  <li>• <strong>Fin Materials</strong>: Aluminum (tension-wrapped/embedded)</li>
                </ul>
              </Reveal>

              {/* Box 3 */}
              <Reveal className="p-6 border border-line bg-surface-muted" delay={0.15}>
                <Hammer className="text-brand-blue mb-4" size={24} />
                <h3 className="font-display text-lg uppercase text-ink mb-3">Testing & Inspection</h3>
                <ul className="font-body text-sm text-ink-soft space-y-2 leading-relaxed">
                  <li>• <strong>Hydrostatic testing</strong>: up to 1.5x design pressure</li>
                  <li>• <strong>Nondestructive Testing (NDT)</strong>: Radiography, Ultrasonic</li>
                  <li>• <strong>Eddy Current testing</strong>: for tube thickness inspections</li>
                  <li>• <strong>Helium Leak Testing</strong>: for high-integrity tubesheet joints</li>
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
                Providing Core Thermal Exchange for Downstream and Utilities
              </h2>
              <div className="grid gap-6">
                {[
                  { name: 'Petroleum Refineries', desc: 'Crude pre-heat trains, vacuum distillers, cat crackers, and sulfur recovery coolers.' },
                  { name: 'Petrochemical Plants', desc: 'Reactor temperature controls, monomer chillers, and gas condensates.' },
                  { name: 'Power Generation Facilities', desc: 'Surface condensers, boiler feed-water heaters, and turbine lube-oil coolers.' },
                  { name: 'Offshore Processing Platforms', desc: 'Titanium seawater-cooled exchangers resisting harsh marine environments.' }
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
                  { title: 'Thermal Modeling (HTRI)', text: 'We employ state-of-the-art HTRI software to model heat transfer rates, preventing fouling risks and optimizing shell fluid speeds.' },
                  { title: 'Qualified ASME Welders', text: 'All pressure boundary welds are performed by ASME Section IX certified structural welders with full metallurgical traceability.' },
                  { title: 'Turnaround Optimization', text: 'Our field crews deploy during shutdowns to manage bundle extractions, tubes hydro-blasting (10,000+ PSI), and localized tubes replacements.' },
                  { title: 'Severe Service Engineering', text: 'Custom cladding and overlay options (such as overlaying tubesheets with Hastelloy or Titanium) to prevent corrosion under extreme chemical environments.' }
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
