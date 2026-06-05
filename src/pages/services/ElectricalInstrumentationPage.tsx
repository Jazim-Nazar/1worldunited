import { ArrowLeft, CheckCircle2, Shield, Activity, Cpu, Zap, Bolt } from 'lucide-react'
import { Container } from '../../components/layout/Container'
import { Navbar } from '../../components/layout/Navbar'
import { Footer } from '../../components/layout/Footer'
import { Reveal } from '../../components/ui/Reveal'
import eiImage from '../../assets/images/electrical_instrumentation.png'

export function ElectricalInstrumentationPage() {
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
              <span className="font-mono text-sm font-bold uppercase text-brand-red tracking-[0.2em] block mb-3">Service 08</span>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase leading-none max-w-4xl">
                Electrical & Instrumentation
              </h1>
              <p className="font-mono text-sm text-white/60 tracking-wider uppercase mt-4 max-w-2xl">
                ATEX Certified Hazardous Area Electrical Works, Precision Instrument Calibration, and SCADA System Integrations
              </p>
            </Reveal>
          </Container>
        </section>

        {/* Overview Section */}
        <section className="py-16 sm:py-24 border-b border-line bg-surface-muted">
          <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl uppercase text-ink mb-6">
                Turnkey Industrial Power & Control Engineering
              </h2>
              <div className="font-body text-sm leading-7 text-ink-soft space-y-4">
                <p>
                  One World United provides integrated electrical and instrumentation (E&I) contracting services designed to keep industrial operations online, safe, and efficient. We manage complex projects across heavy engineering plants, petroleum refineries, and manufacturing centers.
                </p>
                <p>
                  From laying high-voltage power networks and installing motor control panels (MCC) to calibrating precision pressure transmitters and tuning PLC control loops, our certified E&I technicians ensure compliance with international <strong>IEC, NEC, and API standards</strong>.
                </p>
              </div>

              {/* Core Features Bullet Grid */}
              <div className="grid gap-4 mt-8 sm:grid-cols-2">
                {[
                  { title: 'ATEX / IECEx Certifications', desc: 'Expert installations inside Zone 1 & 2 hazardous environments including explosion-proof conduits and barrier glands.' },
                  { title: 'Precision Field Calibrations', desc: 'On-site transmitter, sensor, and flowmeter diagnostics and calibration using certified dry-block and test gauges.' },
                  { title: 'Control Loop Diagnostics', desc: 'Comprehensive loop checking, functional testing, and tuning from process sensors back to DCS/PLC control racks.' },
                  { title: 'LV / HV Cabling & Power', desc: 'Installation of heavy cable trays, medium-voltage cabling, substation switchgear, and grounding grids.' },
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
                  alt="Industrial electrical control panel wiring and instruments" 
                  className="relative z-10 w-full object-cover aspect-[4/3] border border-line" 
                  src={eiImage} 
                />
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Sub-Services Details */}
        <section className="py-16 sm:py-24 border-b border-line bg-white">
          <Container className="grid gap-12 lg:grid-cols-2">
            <Reveal className="p-8 border border-line bg-surface-muted relative">
              <Activity className="text-brand-blue mb-4 animate-pulse" size={28} />
              <h3 className="font-display text-2xl uppercase text-ink mb-4">Instrumentation Services</h3>
              <div className="font-body text-sm leading-relaxed text-ink-soft space-y-4">
                <p>
                  Operational precision depends entirely on instrumentation accuracy. We offer comprehensive diagnostic, calibration, and loop check services:
                </p>
                <ul className="space-y-2 pl-4 border-l border-brand-blue/50">
                  <li>• <strong>Field Calibrations</strong>: Calibrating smart pressure, level, temperature transmitters, and Coriolis/Magnetic flowmeters.</li>
                  <li>• <strong>Control Valves Servicing</strong>: Overhauling control valves, testing actuators, and calibrating digital valve positioners (HART/Foundation Fieldbus).</li>
                  <li>• <strong>DCS / PLC Integration</strong>: Program updates, SCADA screen edits, and input/output card replacements.</li>
                  <li>• <strong>Analytical Instruments</strong>: Maintaining gas chromatographs, toxic gas detectors, and ambient oxygen monitors.</li>
                </ul>
              </div>
            </Reveal>

            <Reveal className="p-8 border border-line bg-surface-muted relative" delay={0.08}>
              <Bolt className="text-brand-blue mb-4" size={28} />
              <h3 className="font-display text-2xl uppercase text-ink mb-4">Electrical Works</h3>
              <div className="font-body text-sm leading-relaxed text-ink-soft space-y-4">
                <p>
                  We build robust power systems designed to handle high loads and severe environments without interruption:
                </p>
                <ul className="space-y-2 pl-4 border-l border-brand-blue/50">
                  <li>• <strong>HV / LV Installations</strong>: Laying subsea, underground, and tray-routed power cables up to 33kV.</li>
                  <li>• <strong>Substation switchgear</strong>: Installing and testing electrical switchgear assemblies, transformers, and MCC layouts.</li>
                  <li>• <strong>Grounding & Safety</strong>: Building copper grounding grids, testing earth resistance, and installing lightning protection columns.</li>
                  <li>• <strong>Technical Lighting Systems</strong>: Installing explosion-proof high-bay LED lighting structures across process refinery structures.</li>
                </ul>
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
                <h3 className="font-display text-lg uppercase text-ink mb-3">Compliance & Codes</h3>
                <ul className="font-body text-sm text-ink-soft space-y-2 leading-relaxed">
                  <li>• <strong>IEC 60079</strong>: Explosive Atmospheres Standards</li>
                  <li>• <strong>IEEE / NEC</strong>: Electrical Safety Regulations</li>
                  <li>• <strong>ISA Standards</strong>: Instrumentation Symbols & Documentation</li>
                  <li>• <strong>NFPA 70E</strong>: Electrical Safety in the Workplace</li>
                </ul>
              </Reveal>

              {/* Box 2 */}
              <Reveal className="p-6 border border-line bg-surface-muted" delay={0.1}>
                <Zap className="text-brand-blue mb-4" size={24} />
                <h3 className="font-display text-lg uppercase text-ink mb-3">Electrical Capabilities</h3>
                <ul className="font-body text-sm text-ink-soft space-y-2 leading-relaxed">
                  <li>• <strong>Voltage Ranges</strong>: LV (24VDC - 415VAC), MV (3.3kV - 11kV), HV (up to 33kV)</li>
                  <li>• <strong>MCC Systems</strong>: Smart MCC panels with Modbus/Profibus linkages</li>
                  <li>• <strong>Cable Splicing</strong>: Certified heat-shrink and cold-shrink joints</li>
                  <li>• <strong>Insulation Test</strong>: Megger testing up to 5000V DC</li>
                </ul>
              </Reveal>

              {/* Box 3 */}
              <Reveal className="p-6 border border-line bg-surface-muted" delay={0.15}>
                <Cpu className="text-brand-blue mb-4" size={24} />
                <h3 className="font-display text-lg uppercase text-ink mb-3">Calibration & Systems</h3>
                <ul className="font-body text-sm text-ink-soft space-y-2 leading-relaxed">
                  <li>• <strong>HART / Fieldbus</strong>: Protocol configurations and loops diagnostics</li>
                  <li>• <strong>Test Equipment</strong>: Traceable to NIST standards with calibration reports</li>
                  <li>• <strong>PLC Platform Experience</strong>: Siemens, Allen Bradley, Yokogawa, Honeywell</li>
                  <li>• <strong>Loop Tolerances</strong>: System accuracy maintained down to &plusmn;0.1%</li>
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
                Ensuring Safe Power & Precision Control across Critical Assets
              </h2>
              <div className="grid gap-6">
                {[
                  { name: 'Refineries & Gas Storage Plants', desc: 'Gas compressors instrumentation, reactor safety ESD loops, and hazardous area lighting.' },
                  { name: 'Drilling Rigs & Oilfields', desc: 'High-reliability top-drive power cabling, mud pump control racks, and wellhead telemetry systems.' },
                  { name: 'Chemical Processing Facilities', desc: 'Intelligent acid-level transmitters, chemical-dosing controls, and ATEX cabling.' },
                  { name: 'Water Treatment & Power Plants', desc: 'Submersible water pump motors wiring, PLC controls for municipal filtration, and MV substations.' }
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
                  { title: 'Fully Certified Crew', text: 'Our E&I engineers are certified for hazardous area work (CompEx) and undergo continuous testing on KOC/KNPC electrical safety scripts.' },
                  { title: 'Traceable Calibrations', text: 'All E&I test kits are checked and calibrated in accredited laboratories yearly, providing fully traceable NIST calibration reports.' },
                  { title: 'Fast-Response Site Teams', text: 'We maintain fully-equipped E&I mobile units ready to deploy to oilfields and refineries for emergency troubleshooting and shutdown works.' },
                  { title: 'Integrated Solutions', text: 'Our E&I offerings hook directly into our mechanical pressure testing and control room floor projects, providing a singular E&I vendor footprint.' }
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
