import { ArrowLeft, CheckCircle2, Shield, Zap, Thermometer } from 'lucide-react'
import { Container } from '../../components/layout/Container'
import { Navbar } from '../../components/layout/Navbar'
import { Footer } from '../../components/layout/Footer'
import { Reveal } from '../../components/ui/Reveal'
import bessImage from '../../assets/images/battery_storage.png'

export function BatteryStoragePage() {
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
              <span className="font-mono text-sm font-bold uppercase text-brand-red tracking-[0.2em] block mb-3">Service 06</span>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase leading-none max-w-4xl">
                Battery Energy Storage Systems
              </h1>
              <p className="font-mono text-sm text-white/60 tracking-wider uppercase mt-4 max-w-2xl">
                Utility-Scale Containerized Lithium-Ion Energy Storage for Grid Management and Industrial Backup
              </p>
            </Reveal>
          </Container>
        </section>

        {/* Overview Section */}
        <section className="py-16 sm:py-24 border-b border-line bg-surface-muted">
          <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl uppercase text-ink mb-6">
                Stabilizing Energy Flows with Smart Storage
              </h2>
              <div className="font-body text-sm leading-7 text-ink-soft space-y-4">
                <p>
                  One World United provides advanced, containerized Battery Energy Storage Systems (BESS) engineered to meet the dynamic demands of modern grids, renewable generators, and heavy industries. Our storage systems act as a critical buffer, storing electricity during periods of low demand and releasing it instantly during peak periods or outages.
                </p>
                <p>
                  Utilizing high-performance <strong>Lithium Iron Phosphate (LFP)</strong> cell chemistries, our BESS containers deliver superior thermal stability, long cycle life, and high round-trip efficiencies. Designed as self-contained, turnkey units, they feature integrated cooling, intelligent battery management systems (BMS), and advanced multi-level fire protection.
                </p>
              </div>

              {/* Core Features Bullet Grid */}
              <div className="grid gap-4 mt-8 sm:grid-cols-2">
                {[
                  { title: 'NFPA 855 Compliant Safety', desc: 'Equipped with target aerosol fire suppression, combustible gas detection, and thermal runaway monitoring.' },
                  { title: 'Liquid-Cooled Climate Systems', desc: 'Precision liquid cooling panels integrated within battery racks, maintaining cell-to-cell delta-T below 3°C.' },
                  { title: 'Advanced BMS & EMS Control', desc: 'Real-time monitoring of cell voltages, current, temperature, and State of Health (SOH) with SCADA telemetry.' },
                  { title: 'Pre-Packaged IP54 Containers', desc: 'Pre-wired 10ft, 20ft, or 40ft shipping container units designed for fast on-site commissioning and utility hookups.' },
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
                  alt="Outdoor containerized Battery Energy Storage Systems installation" 
                  className="relative z-10 w-full object-cover aspect-[4/3] border border-line" 
                  src={bessImage} 
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
                <h3 className="font-display text-lg uppercase text-ink mb-3">Safety & Certifications</h3>
                <ul className="font-body text-sm text-ink-soft space-y-2 leading-relaxed">
                  <li>• <strong>NFPA 855</strong>: Standard for the Installation of Stationary Energy Storage Systems</li>
                  <li>• <strong>UL 9540 / UL 9540A</strong>: Thermal Runaway Fire Testing</li>
                  <li>• <strong>IEC 62619</strong>: Safety requirements for industrial batteries</li>
                  <li>• <strong>UN 38.3</strong>: Transport safety standard for lithium batteries</li>
                </ul>
              </Reveal>

              {/* Box 2 */}
              <Reveal className="p-6 border border-line bg-surface-muted" delay={0.1}>
                <Zap className="text-brand-blue mb-4" size={24} />
                <h3 className="font-display text-lg uppercase text-ink mb-3">Electrical Metrics</h3>
                <ul className="font-body text-sm text-ink-soft space-y-2 leading-relaxed">
                  <li>• <strong>Chemistry</strong>: Lithium Iron Phosphate (LiFePO4 / LFP)</li>
                  <li>• <strong>System Voltage</strong>: 1000V DC / 1500V DC option</li>
                  <li>• <strong>Round-Trip Efficiency</strong>: &gt;90% (DC-to-DC)</li>
                  <li>• <strong>Cycle Life</strong>: &ge;6,000 cycles at 80% Depth of Discharge (DOD)</li>
                  <li>• <strong>C-Rate Options</strong>: 0.5C (energy storage) / 1.0C+ (power backup)</li>
                </ul>
              </Reveal>

              {/* Box 3 */}
              <Reveal className="p-6 border border-line bg-surface-muted" delay={0.15}>
                <Thermometer className="text-brand-blue mb-4" size={24} />
                <h3 className="font-display text-lg uppercase text-ink mb-3">Mechanical & Enclosure</h3>
                <ul className="font-body text-sm text-ink-soft space-y-2 leading-relaxed">
                  <li>• <strong>Enclosure Rating</strong>: IP54 / NEMA 3R outdoor container</li>
                  <li>• <strong>Thermal Management</strong>: Liquid glycol chiller loop / HVAC forced-air</li>
                  <li>• <strong>Operating Temp</strong>: -20°C to +50°C</li>
                  <li>• <strong>Fire Suppression</strong>: Novec 1230 / Stat-X aerosol with auto shutdown</li>
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
                Uninterrupted Energy Solutions for Utility and Enterprise
              </h2>
              <div className="grid gap-6">
                {[
                  { name: 'Grid Frequency Regulation', desc: 'Fast response regulation keeping power grid frequencies stable under transient loads.' },
                  { name: 'Renewable Integration', desc: 'Smoothing out the intermittency of utility-scale solar PV and wind generation.' },
                  { name: 'Peak Shaving & Load Levelling', desc: 'Shaving high electricity rate charges by discharging batteries during peak demand periods.' },
                  { name: 'Industrial Microgrids & UPS', desc: 'Critical standby power backup for petroleum refineries, data centers, and heavy process manufacturing.' }
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
                  { title: 'Turnkey Power Engineering', text: 'We handle everything from initial sizing calculations, layout designs, and battery containment, to civil base foundations and grid interconnection.' },
                  { title: 'Bespoke EMS Scripts', text: 'Our software teams deploy custom energy management scripts matching local utility load schedules and electricity billing algorithms.' },
                  { title: 'High Safety Integration', text: 'Our battery racks incorporate multi-level fuses, contactors, and automated disconnect switches to ensure complete isolation in the event of anomalies.' },
                  { title: 'Robust Thermal Tuning', text: 'Specially configured HVAC ventilation and glycol liquid chiller profiles optimized to withstand Kuwait’s harsh desert ambient temperatures.' }
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
