import { ArrowLeft, CheckCircle2, Shield, Settings, Activity, Database, Cpu, Compass, HardHat } from 'lucide-react'
import { Container } from '../../components/layout/Container'
import { Navbar } from '../../components/layout/Navbar'
import { Footer } from '../../components/layout/Footer'
import { Reveal } from '../../components/ui/Reveal'
import testContainerImage from '../../assets/images/high_pressure_system_page_1_img_2.jpeg'
import controlPanelImage from '../../assets/images/high_pressure_system_page_1_img_3.jpeg'
import monitorImage from '../../assets/images/high_pressure_system_page_2_img_1.jpeg'

export function PressureTestingPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        {/* Subpage Hero */}
        <section className="bg-brand-black text-white relative py-20 border-b border-white/10">
          <Container>
            <a 
              className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-brand-blue hover:text-white transition-colors mb-8"
              href="#/"
            >
              <ArrowLeft size={12} /> Back to Home
            </a>
            <Reveal>
              <span className="font-mono text-label font-bold uppercase text-brand-red tracking-[0.2em] block mb-3">Service 01</span>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase leading-none max-w-4xl">
                Hydrostatic & Pneumatic<br/>
                <span className="text-brand-blue">Pressure Testing Systems</span>
              </h1>
              <p className="mt-6 max-w-2xl font-body text-sm sm:text-base leading-7 text-white/70">
                OWU designs, fabricates, and supplies advanced pressure testing solutions engineered for elite performance, total structural integrity, and uncompromising safety. Compliant with API, ASME, and ISO standards.
              </p>
            </Reveal>
          </Container>
        </section>

        {/* Introduction & Highlights */}
        <section className="py-20 border-b border-line">
          <Container className="grid gap-12 lg:grid-cols-2 items-center">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl uppercase text-ink">
                Advanced High-Pressure Engineering & Turnkey Testing Infrastructure
              </h2>
              <div className="mt-6 space-y-4 font-body text-sm leading-7 text-ink-soft">
                <p>
                  By pairing heavy-duty mechanical fabrication with state-of-the-art pressure instrumentation, automated data acquisition (DAQ), and programmable logic control (PLC) architectures, OWU provides turnkey, compliance-ready systems.
                </p>
                <p>
                  We deliver high-precision testing infrastructure for pipelines, valves, pressure vessels, heat exchangers, high-pressure hoses, tubing, cylinders, and critical oilfield process equipment. All solutions are custom-engineered to align with strict customer specifications and international testing standards.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative group overflow-hidden border border-line shadow-hard">
                <img 
                  src={testContainerImage} 
                  alt="Containerized Mobile Pressure Test System" 
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-brand-black/90 text-white font-mono text-[9px] uppercase tracking-wider px-3 py-1.5 border-l-2 border-brand-red">
                  Mobile Containerized Test Lab
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Core Products & Systems Integration */}
        <section className="py-20 bg-surface-muted/50 border-b border-line">
          <Container>
            <Reveal>
              <span className="font-mono text-label font-bold uppercase text-brand-blue tracking-[0.2em] block mb-3">Systems</span>
              <h2 className="font-display text-3xl sm:text-4xl uppercase text-ink mb-12">Core Products & Integration</h2>
            </Reveal>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Product 1 */}
              <Reveal className="bg-white p-8 border border-line shadow-hard relative flex flex-col justify-between" delay={0.05}>
                <div>
                  <div className="size-10 bg-brand-blue/5 text-brand-blue border border-brand-blue/20 grid place-items-center mb-6">
                    <Shield size={18} />
                  </div>
                  <h3 className="font-display text-2xl uppercase text-ink">1. Hydrotest Bays & Blast Enclosures</h3>
                  <p className="mt-4 font-body text-xs leading-6 text-ink-soft">
                    Permanent Hydrotest Pressure Bays engineered to provide an elite, controlled environment for high-risk hydrostatic and pneumatic testing operations.
                  </p>
                  <ul className="mt-6 space-y-2.5 font-body text-xs text-ink-soft">
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 bg-brand-red rounded-full mt-1.5 shrink-0" />
                      <span><strong>Structural Safety:</strong> Heavy-duty reinforced steel, blast-resistant multi-layer enclosures, safety interlocks.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 bg-brand-red rounded-full mt-1.5 shrink-0" />
                      <span><strong>Automation:</strong> High-pressure pumps integrated with automated test sequences and remote isolation valves.</span>
                    </li>
                  </ul>
                </div>
              </Reveal>

              {/* Product 2 */}
              <Reveal className="bg-white p-8 border border-line shadow-hard relative flex flex-col justify-between" delay={0.1}>
                <div>
                  <div className="size-10 bg-brand-blue/5 text-brand-blue border border-brand-blue/20 grid place-items-center mb-6">
                    <Settings size={18} />
                  </div>
                  <h3 className="font-display text-2xl uppercase text-ink">2. Containerized Mobile Test Systems</h3>
                  <p className="mt-4 font-body text-xs leading-6 text-ink-soft">
                    A fully self-contained, high-pressure testing facility inside a rugged, standard ISO container—engineered for rapid deployment.
                  </p>
                  <ul className="mt-6 space-y-2.5 font-body text-xs text-ink-soft">
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 bg-brand-red rounded-full mt-1.5 shrink-0" />
                      <span><strong>Mobility & Durability:</strong> Climate-controlled operator control rooms, industrial flooring, auxiliary power.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 bg-brand-red rounded-full mt-1.5 shrink-0" />
                      <span><strong>Safety Isolation:</strong> Built-in blast wall partitions that isolate the operator from high-pressure lines.</span>
                    </li>
                  </ul>
                </div>
              </Reveal>

              {/* Product 3 */}
              <Reveal className="bg-white p-8 border border-line shadow-hard relative flex flex-col justify-between" delay={0.15}>
                <div>
                  <div className="size-10 bg-brand-blue/5 text-brand-blue border border-brand-blue/20 grid place-items-center mb-6">
                    <Activity size={18} />
                  </div>
                  <h3 className="font-display text-2xl uppercase text-ink">3. Portable & Field Service Units</h3>
                  <p className="mt-4 font-body text-xs leading-6 text-ink-soft">
                    Engineered for field maintenance, rig-site testing, and rapid-response operations in a highly maneuverable format.
                  </p>
                  <ul className="mt-6 space-y-2.5 font-body text-xs text-ink-soft">
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 bg-brand-red rounded-full mt-1.5 shrink-0" />
                      <span><strong>Power Versatility:</strong> Available in wheeled skids or crash-frames driven by electric, pneumatic, or diesel.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 bg-brand-red rounded-full mt-1.5 shrink-0" />
                      <span><strong>Precision Control:</strong> Outfitted with digital pressure gauges, manual needle valves, and multi-port manifolds.</span>
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>

            {/* Sub-section: Telemetry & Logging */}
            <div className="mt-16 grid gap-12 lg:grid-cols-2 items-center bg-white border border-line p-8 lg:p-12 shadow-hard">
              <Reveal>
                <span className="font-mono text-label font-bold uppercase text-brand-red tracking-[0.2em] block mb-3">Monitoring</span>
                <h3 className="font-display text-3xl uppercase text-ink">Digital Instrumentation, Telemetry & Data Logging</h3>
                <p className="mt-4 font-body text-sm leading-6 text-ink-soft">
                  Accurate monitoring and unalterable test documentation are critical for strict regulatory compliance and quality assurance. OWU integrates premium digital hardware and legacy chart tracking to cover all verification preferences.
                </p>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div className="border-t border-line pt-4">
                    <h4 className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand-blue mb-2 flex items-center gap-1.5">
                      <Database size={12} /> Digital SCADA Systems
                    </h4>
                    <p className="font-body text-xs text-ink-soft leading-relaxed">
                      PLC-based automation paired with touchscreen HMIs for real-time pressure-trend graphing and automated leak detection.
                    </p>
                  </div>
                  <div className="border-t border-line pt-4">
                    <h4 className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand-blue mb-2 flex items-center gap-1.5">
                      <Cpu size={12} /> Norma Chart Recorders
                    </h4>
                    <p className="font-body text-xs text-ink-soft leading-relaxed">
                      Industry-proven mechanical chart recorders for continuous physical data logging in harsh field environments.
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.1} className="grid gap-4 grid-cols-2">
                <img 
                  src={controlPanelImage} 
                  alt="High-pressure piping manifold" 
                  className="border border-line aspect-square object-cover" 
                />
                <img 
                  src={monitorImage} 
                  alt="PLC pressure telemetry screen" 
                  className="border border-line aspect-square object-cover" 
                />
              </Reveal>
            </div>
          </Container>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 border-b border-line">
          <Container>
            <Reveal>
              <span className="font-mono text-label font-bold uppercase text-brand-blue tracking-[0.2em] block mb-3">Datasheet</span>
              <h2 className="font-display text-3xl sm:text-4xl uppercase text-ink mb-12">Technical Specifications & System Components</h2>
              
              <div className="overflow-x-auto border border-line shadow-hard">
                <table className="w-full text-left font-body text-xs border-collapse">
                  <thead>
                    <tr className="bg-brand-black text-white font-mono text-[10px] uppercase tracking-wider border-b border-line">
                      <th className="p-4 sm:p-5">System Component</th>
                      <th className="p-4 sm:p-5">Specifications & Engineering Standard</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    <tr className="hover:bg-surface-muted/30">
                      <td className="p-4 sm:p-5 font-bold text-ink">High-Pressure Pumps</td>
                      <td className="p-4 sm:p-5 text-ink-soft">
                        Air-driven liquid pumps (e.g., Haskel/Maximator) and electric-driven triplex plunger pumps capable of generating up to <strong>2,000+ bar (30,000+ PSI)</strong>.
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-muted/30">
                      <td className="p-4 sm:p-5 font-bold text-ink">Piping & Manifolds</td>
                      <td className="p-4 sm:p-5 text-ink-soft">
                        Autoclave-style medium and high-pressure cone-and-thread fittings, heavy-wall duplex or 316/316L stainless steel tubing, and high-pressure rated needle/ball valves.
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-muted/30">
                      <td className="p-4 sm:p-5 font-bold text-ink">Automation & Controls</td>
                      <td className="p-4 sm:p-5 text-ink-soft">
                        Industrial Siemens/Allen-Bradley PLCs, high-resolution touch HMIs, and custom SCADA software scripts featuring automated pressure hold-time alerts and safety shutdown protocols.
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-muted/30">
                      <td className="p-4 sm:p-5 font-bold text-ink">Instrumentation Accuracy</td>
                      <td className="p-4 sm:p-5 text-ink-soft">
                        Pressure transmitters and digital test gauges featuring up to <strong>±0.05% Full Scale (FS) accuracy</strong>, with valid calibration certificates traceable to international bodies.
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-muted/30">
                      <td className="p-4 sm:p-5 font-bold text-ink">Pneumatic Testing Modules</td>
                      <td className="p-4 sm:p-5 text-ink-soft">
                        Integrated high-pressure gas boosters for specialized gas/pneumatic testing, complete with automated venting systems and nitrogen bottle manifold racks.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Fabrication Workflow Capabilities */}
        <section className="py-20 bg-brand-black text-white">
          <Container>
            <Reveal>
              <span className="font-mono text-label font-bold uppercase text-brand-red tracking-[0.2em] block mb-3">Lifecycle</span>
              <h2 className="font-display text-3xl sm:text-4xl uppercase text-white mb-12">Engineering & Fabrication Capabilities</h2>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { title: 'System Design & Engineering', desc: 'Custom 3D CAD modeling, finite element analysis (FEA) for blast walls, hydraulic circuit schematics, and P&ID development.', icon: Compass },
                { title: 'Mechanical Fabrication', desc: 'Heavy structural steel welding, blast enclosure fabrication, and precision pipefitting executed by certified technicians.', icon: Settings },
                { title: 'Electrical Control Panels', desc: 'In-house assembly of certified electrical control panels, PLC programming, instrumentation calibration, and loop testing.', icon: Cpu },
                { title: 'Testing & QA', desc: 'Rigorous Factory Acceptance Testing (FAT) at our facility followed by Site Acceptance Testing (SAT) and commissioning.', icon: CheckCircle2 },
                { title: 'Operator Training', desc: 'On-site technical training covering system operations, high-pressure safety protocols, and software data logging.', icon: HardHat }
              ].map((step, idx) => {
                const Icon = step.icon
                return (
                  <Reveal key={step.title} delay={idx * 0.08} className="bg-white/5 p-6 border border-white/10 relative">
                    <span className="font-mono text-[9px] font-bold text-brand-red uppercase block mb-4">Phase 0{idx+1}</span>
                    <Icon className="text-brand-blue mb-4" size={24} />
                    <h3 className="font-display text-lg uppercase text-white tracking-wide">{step.title}</h3>
                    <p className="mt-3 font-body text-[11px] leading-relaxed text-white/60">{step.desc}</p>
                  </Reveal>
                )
              })}
            </div>
          </Container>
        </section>

        {/* Industries & The OWU Advantage */}
        <section className="py-20 border-b border-line">
          <Container className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <h3 className="font-display text-2xl uppercase text-ink mb-6">Industries We Serve</h3>
              <div className="space-y-4">
                {[
                  { name: 'Oil & Gas / Oilfield Service Providers', desc: 'High-pressure test bays for blowout preventers (BOPs), Christmas trees, and downhole tools.' },
                  { name: 'Refineries & Petrochemical Facilities', desc: 'Shutdown testing equipment, heat exchanger bundle verification, and valve recertification units.' },
                  { name: 'EPC Contractors & Construction', desc: 'Large-scale pipeline hydrotesting manifolds and containerized mobile field stations.' },
                  { name: 'Marine, Offshore & Heavy Utilities', desc: 'Power generation pressure loop certification and ruggedized offshore-ready test skids.' }
                ].map((ind) => (
                  <div className="border-l-2 border-brand-blue pl-4" key={ind.name}>
                    <h4 className="font-body text-xs font-bold text-ink">{ind.name}</h4>
                    <p className="font-body text-xs text-ink-soft mt-1 leading-relaxed">{ind.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="font-display text-2xl uppercase text-ink mb-6">The OWU Advantage</h3>
              <div className="grid gap-4">
                {[
                  { title: 'Engineering Excellence', text: 'Custom-engineered systems built around your specific dimensional constraints, pressure requirements, and target workflows.' },
                  { title: 'Safety-First Culture', text: 'Multi-tiered safety features—including blast walls, safety interlocks, and automated emergency vent valves—are integrated into the fundamental design of every system.' },
                  { title: 'Turnkey Execution', text: 'From initial concept and structural engineering to software integration, onsite commissioning, and technician training.' },
                  { title: 'Dedicated After-Sales Support', text: 'Rapid deployment for system calibration, preventative maintenance, critical spare parts supply, and software upgrades.' }
                ].map((adv) => (
                  <div className="bg-surface-muted p-5 border border-line" key={adv.title}>
                    <h4 className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand-red">{adv.title}</h4>
                    <p className="font-body text-xs text-ink-soft mt-2 leading-relaxed">{adv.text}</p>
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
