import { ArrowLeft } from 'lucide-react'
import { Container } from '../../components/layout/Container'
import { Navbar } from '../../components/layout/Navbar'
import { Footer } from '../../components/layout/Footer'
import { Reveal } from '../../components/ui/Reveal'
import testContainerImage from '../../assets/images/high_pressure_system_page_1_img_2.jpeg'
import controlPanelImage from '../../assets/images/high_pressure_system_page_1_img_3.jpeg'
import monitorImage from '../../assets/images/high_pressure_system_page_2_img_1.jpeg'
import portableSkidImage from '../../assets/images/high_pressure_system_page_3_img_1.jpeg'

export function PressureTestingPage() {
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
              <span className="font-mono text-sm font-bold uppercase text-brand-red tracking-[0.2em] block mb-3">Service 01</span>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase leading-none max-w-4xl">
                High-Pressure Test Pumps & Fluid Systems
              </h1>
              <p className="font-mono text-sm text-white/60 tracking-wider uppercase mt-4 max-w-2xl">
                Hydrostatic & Pneumatic Pressure Testing Systems — Advanced High-Pressure Engineering & Turnkey Testing Infrastructure
              </p>
            </Reveal>
          </Container>
        </section>

        {/* Introduction Section */}
        <section className="py-16 sm:py-24 border-b border-line bg-surface-muted">
          <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl uppercase text-ink mb-6">
                Advanced High-Pressure Engineering & Turnkey Testing Infrastructure
              </h2>
              <div className="font-body text-sm leading-7 text-ink-soft space-y-4">
                <p>
                  OWU designs, fabricates, and supplies advanced hydrostatic and pneumatic pressure testing systems engineered for elite performance, total structural integrity, and uncompromising safety.
                </p>
                <p>
                  We deliver high-precision testing infrastructure for pipelines, valves, pressure vessels, heat exchangers, high-pressure hoses, tubing, cylinders, and critical oilfield process equipment.
                </p>
                <p>
                  By pairing heavy-duty mechanical fabrication with state-of-the-art pressure instrumentation, automated data acquisition (DAQ), and programmable logic control (PLC) architectures, OWU provides turnkey, compliance-ready systems. All solutions are custom-engineered to align with strict customer specifications and international testing standards, including API, ASME, and ISO.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative">
                <div className="absolute -right-4 -top-4 h-24 w-24 border border-brand-blue/20 bg-brand-blue/5" />
                <div className="absolute -bottom-4 -left-4 h-24 w-32 border border-line bg-white" />
                <img 
                  alt="High-pressure system monitoring displays" 
                  className="relative z-10 w-full object-cover aspect-[4/3] border border-line" 
                  src={monitorImage} 
                />
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Core Products & Systems Integration */}
        <section className="py-16 sm:py-24 border-b border-line bg-white">
          <Container>
            <Reveal>
              <h2 className="font-display text-3xl uppercase text-ink mb-10 text-center">Core Products & Systems Integration</h2>
            </Reveal>

            <div className="grid gap-12 lg:grid-cols-3">
              {/* Product 1 */}
              <Reveal className="p-6 border border-line bg-surface-muted flex flex-col justify-between" delay={0.05}>
                <div>
                  <h3 className="font-display text-xl uppercase text-ink mb-4">1. High-Pressure Hydrotest Bays & Blast Enclosures</h3>
                  <p className="font-body text-sm text-ink-soft mb-6 leading-relaxed">
                    OWU designs and constructs permanent Hydrotest Pressure Bays engineered to provide an elite, controlled environment for high-risk hydrostatic and pneumatic testing operations.
                  </p>
                  <ul className="font-body text-sm text-ink-soft space-y-3 leading-relaxed">
                    <li>• <strong>Structural Safety:</strong> Heavy-duty reinforced steel construction, blast-resistant multi-layered test enclosures, and automated safety interlock systems that prevent bay entry while pressurized.</li>
                    <li>• <strong>System Automation:</strong> High-pressure pumping systems integrated with automated test sequences, pneumatic isolation valves, and remote operation capabilities to remove personnel from the live testing zone.</li>
                    <li>• <strong>Advanced Control:</strong> Features multi-sensor arrays, proportional control valves, and integrated digital pressure monitoring for smooth, stepped pressure ramping.</li>
                    <li>• <strong>Applications:</strong> Production valve testing, pressure vessel qualification, pipeline component verification, and high-pressure oilfield equipment certification.</li>
                  </ul>
                </div>
                <img src={controlPanelImage} alt="Control panel for hydrotest bay" className="mt-6 border border-line object-cover h-48 w-full" />
              </Reveal>

              {/* Product 2 */}
              <Reveal className="p-6 border border-line bg-surface-muted flex flex-col justify-between" delay={0.1}>
                <div>
                  <h3 className="font-display text-xl uppercase text-ink mb-4">2. Containerized Mobile Pressure Test Systems</h3>
                  <p className="font-body text-sm text-ink-soft mb-6 leading-relaxed">
                    Our Containerized Pressure Test Systems package a fully self-contained, high-pressure testing facility inside a rugged, standard ISO container—engineered specifically for rapid deployment to remote oilfields and harsh environments.
                  </p>
                  <ul className="font-body text-sm text-ink-soft space-y-3 leading-relaxed">
                    <li>• <strong>Mobility & Durability:</strong> Fully structural ISO container modifications featuring integrated climate-controlled operator control rooms, heavy-duty industrial flooring, robust internal lighting, and auxiliary power distribution.</li>
                    <li>• <strong>Operational Readiness:</strong> Rapid deployment and commissioning capabilities, making them highly suited for pipeline hydrotesting, offshore platforms, refinery shutdowns, and remote EPC construction projects.</li>
                    <li>• <strong>Safety Isolation:</strong> Built-in blast wall partitions that visually and physically isolate the operator workstation from the high-pressure pumping and manifold zone.</li>
                  </ul>
                </div>
                <img src={testContainerImage} alt="Mobile container pressure testing lab" className="mt-6 border border-line object-cover h-48 w-full" />
              </Reveal>

              {/* Product 3 */}
              <Reveal className="p-6 border border-line bg-surface-muted flex flex-col justify-between" delay={0.15}>
                <div>
                  <h3 className="font-display text-xl uppercase text-ink mb-4">3. Portable & Field Service Test Units</h3>
                  <p className="font-body text-sm text-ink-soft mb-6 leading-relaxed">
                    Engineered for field maintenance, rig-site testing, and rapid-response operations, our Portable Pressure Test Systems deliver robust, high-pressure generation in a highly maneuverable format.
                  </p>
                  <ul className="font-body text-sm text-ink-soft space-y-3 leading-relaxed">
                    <li>• <strong>Power Versatility:</strong> Available in compact, heavy-duty wheeled skids or crash-framed configurations driven by electric motors, pneumatic air-driven liquid pumps, or diesel engines.</li>
                    <li>• <strong>Precision Control:</strong> Outfitted with rugged digital pressure gauges, high-accuracy manual needle valves, and multi-port manifolds for testing multiple lines simultaneously.</li>
                    <li>• <strong>Applications:</strong> On-site equipment recertification, pipeline maintenance, wellhead valve verification, and field commissioning activities.</li>
                  </ul>
                </div>
                <img src={portableSkidImage} alt="Portable and field service pressure test skid" className="mt-6 border border-line object-cover h-48 w-full" />
              </Reveal>
            </div>
          </Container>
        </section>

        {/* Digital Instrumentation Section */}
        <section className="py-16 sm:py-24 border-b border-line bg-surface-muted">
          <Container>
            <Reveal>
              <h2 className="font-display text-3xl uppercase text-ink mb-6 text-center">Digital Instrumentation, Telemetry & Data Logging</h2>
              <p className="font-body text-sm text-ink-soft max-w-3xl mx-auto text-center mb-12">
                Accurate monitoring and unalterable test documentation are critical for strict regulatory compliance and quality assurance. OWU integrates premium digital hardware and legacy chart tracking to cover all verification preferences.
              </p>
            </Reveal>

            <div className="grid gap-8 lg:grid-cols-2">
              <Reveal className="bg-white p-8 border border-line">
                <h3 className="font-display text-xl uppercase text-ink mb-4">Digital Pressure Recording Systems & SCADA</h3>
                <p className="font-body text-sm text-ink-soft mb-4">
                  Our digital suites replace traditional manual logging with automated, real-time data acquisition systems (DAQ) that deliver high-accuracy pressure measurement and traceable test certification.
                </p>
                <ul className="font-body text-sm text-ink-soft space-y-3">
                  <li>• <strong>Automation & HMIs:</strong> PLC-based automation systems paired with touchscreen Human-Machine Interfaces (HMI) for real-time graphical pressure-trend displays and automated leak detection analysis.</li>
                  <li>• <strong>Smart Features:</strong> Multi-channel data acquisition, secure local data storage, network connectivity for remote engineering review, and automated PDF test report generation.</li>
                  <li>• <strong>Sensors & Telemetry:</strong> Industrial-grade, high-accuracy pressure transmitters, digital pressure calibrators, temperature monitoring loops, and wireless telemetry options for long-distance monitoring.</li>
                </ul>
              </Reveal>

              <Reveal className="bg-white p-8 border border-line" delay={0.08}>
                <h3 className="font-display text-xl uppercase text-ink mb-4">Norma Chart Recorders</h3>
                <p className="font-body text-sm text-ink-soft mb-4">
                  For operations requiring permanent mechanical records and traditional traceable test documentation, we supply and seamlessly integrate industry-proven Norma Chart Recorders.
                </p>
                <ul className="font-body text-sm text-ink-soft space-y-3">
                  <li>• <strong>Traceability:</strong> High-precision, continuous physical chart recording for hydrostatic and pneumatic testing.</li>
                  <li>• <strong>Field Reliability:</strong> Fully mechanical or battery-backed options designed to withstand harsh field environments, ensuring compliance-ready documentation for regulatory inspections.</li>
                </ul>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* Specifications Table */}
        <section className="py-16 sm:py-24 border-b border-line bg-white">
          <Container className="max-w-4xl">
            <Reveal>
              <h2 className="font-display text-3xl uppercase text-ink mb-8 text-center">Technical Specifications & System Components</h2>
              <p className="font-body text-sm text-ink-soft text-center mb-8">
                Our testing systems utilize a rigorous selection of premium high-pressure components to guarantee continuous uptime and safe operation under extreme cyclical loading:
              </p>
              <div className="border border-line shadow-sm overflow-hidden">
                <table className="w-full text-left font-body text-sm border-collapse">
                  <thead>
                    <tr className="bg-brand-black text-white font-mono text-sm uppercase tracking-wider">
                      <th className="p-4 border-r border-white/10 w-1/3">System Component</th>
                      <th className="p-4">Specifications & Engineering Standard</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { comp: 'High-Pressure Pumps', spec: 'Air-driven liquid pumps (e.g., Haskel/Maximator or equivalent) and electric-driven triplex plunger pumps capable of generating up to 2,000+ bar (30,000+ PSI).' },
                      { comp: 'Piping & Manifolds', spec: 'Autoclave-style medium and high-pressure cone-and-thread fittings, heavy-wall duplex or 316/316L stainless steel tubing, and high-pressure rated needle/ball valves.' },
                      { comp: 'Automation & Controls', spec: 'Industrial Siemens/Allen-Bradley PLCs, high-resolution touch HMIs, and custom SCADA software scripts featuring automated pressure hold-time alerts and safety shutdown protocols.' },
                      { comp: 'Instrumentation Accuracy', spec: 'Pressure transmitters and digital test gauges featuring up to ±0.05% Full Scale (FS) accuracy, with valid calibration certificates traceable to international bodies.' },
                      { comp: 'Pneumatic Testing Modules', spec: 'Integrated high-pressure gas boosters for specialized gas/pneumatic testing, complete with automated venting systems and nitrogen bottle manifold racks.' }
                    ].map((row, i) => (
                      <tr className="border-b border-line hover:bg-surface-muted/50 transition-colors" key={i}>
                        <td className="p-4 border-r border-line font-mono font-bold text-brand-blue uppercase text-sm tracking-wider">{row.comp}</td>
                        <td className="p-4 text-ink-soft leading-relaxed">{row.spec}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Capabilities Section */}
        <section className="py-16 sm:py-24 border-b border-line bg-surface-muted">
          <Container>
            <Reveal>
              <h2 className="font-display text-3xl uppercase text-ink mb-10 text-center">Comprehensive Engineering & Fabrication Capabilities</h2>
              <p className="font-body text-sm text-ink-soft text-center max-w-2xl mx-auto mb-12">
                OWU provides single-source accountability. We manage the entire lifecycle of your pressure testing infrastructure through a specialized in-house workflow:
              </p>
            </Reveal>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {[
                { title: 'System Design & Engineering', desc: 'Custom 3D CAD modeling, finite element analysis (FEA) for blast walls, hydraulic circuit schematics, and P&ID development.' },
                { title: 'Mechanical & Structural', desc: 'Heavy structural steel welding, enclosure fabrication, and precision pipefitting executed by certified technicians.' },
                { title: 'Electrical Control Panels', desc: 'In-house assembly of certified electrical control panels, PLC programming, instrumentation calibration, and functional loop testing.' },
                { title: 'Testing & QA', desc: 'Rigorous Factory Acceptance Testing (FAT) at our facility followed by Site Acceptance Testing (SAT), leveling, installation, and field commissioning.' },
                { title: 'Operator Training', desc: 'On-site technical training covering system operations, high-pressure safety protocols, software data logging, and routine maintenance calibration.' }
              ].map((step, i) => (
                <Reveal className="p-5 border border-line bg-white shadow-sm flex flex-col justify-between" delay={i * 0.05} key={i}>
                  <div>
                    <span className="font-mono text-sm font-bold text-brand-red uppercase block mb-3">Phase 0{i+1}</span>
                    <h4 className="font-display text-sm uppercase text-ink mb-2">{step.title}</h4>
                    <p className="font-body text-sm text-ink-soft leading-relaxed">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* Industries Served & Advantage */}
        <section className="py-16 sm:py-24 bg-brand-black text-white">
          <Container className="grid gap-16 lg:grid-cols-[0.8fr_1fr]">
            <Reveal>
              <span className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-brand-red mb-3 block">Deployment Sectors</span>
              <h2 className="font-display text-3xl sm:text-4xl uppercase leading-tight mb-8">
                Industries We Serve
              </h2>
              <p className="font-body text-sm text-white/60 mb-6 leading-relaxed">
                Our high-pressure testing solutions support critical infrastructure, manufacturing, and service companies worldwide:
              </p>
              <div className="grid gap-4">
                {[
                  { name: 'Oil & Gas / Oilfield Service Providers', desc: 'High-pressure test bays for blowout preventers (BOPs), Christmas trees, and downhole tools.' },
                  { name: 'Refineries & Petrochemical Facilities', desc: 'Shutdown testing equipment, heat exchanger bundle verification, and valve recertification units.' },
                  { name: 'EPC Contractors & Construction', desc: 'Large-scale pipeline hydrotesting manifolds and containerized mobile field stations.' },
                  { name: 'Marine, Offshore & Heavy Utilities', desc: 'Power generation pressure loop certification and ruggedized offshore-ready test skids.' }
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
                  { title: 'Engineering Excellence', text: 'Custom-engineered systems built around your specific dimensional constraints, pressure requirements, and target workflows.' },
                  { title: 'Safety-First Culture', text: 'Multi-tiered safety features—including blast walls, safety interlocks, and automated emergency vent valves—are integrated into the fundamental design of every system.' },
                  { title: 'Turnkey Execution', text: 'From initial concept and structural engineering to software integration, onsite commissioning, and technician training.' },
                  { title: 'Dedicated After-Sales Support', text: 'Rapid deployment for system calibration, preventative maintenance, critical spare parts supply, and software upgrades.' }
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

        {/* Contact Consultation */}
        <section className="py-16 sm:py-24 bg-brand-blue text-white text-center">
          <Container className="max-w-3xl">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-5xl uppercase mb-6">Engineering Consultation & Quotes</h2>
              <p className="font-body text-sm sm:text-base leading-relaxed mb-8">
                Whether your facility requires a fixed high-pressure hydrotest bay, a mobile containerized testing station, or a specialized digital data logging upgrade, our engineering team can design a system to match your operational parameters. Contact OWU today to consult with a technical specialist, review your testing criteria, and receive a detailed engineering proposal.
              </p>
              <a 
                className="inline-block bg-white text-brand-blue font-mono text-sm font-bold uppercase tracking-widest px-8 py-4 hover:bg-brand-black hover:text-white transition-colors"
                href="#/#contact"
              >
                Consult an Engineer
              </a>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
