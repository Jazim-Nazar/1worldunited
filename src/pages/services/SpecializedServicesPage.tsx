import { useState } from 'react'
import { ArrowLeft, CheckCircle2, Flame, Wind, Cable, Settings, Home } from 'lucide-react'
import { Container } from '../../components/layout/Container'
import { Navbar } from '../../components/layout/Navbar'
import { Footer } from '../../components/layout/Footer'
import { Reveal } from '../../components/ui/Reveal'

// Import tab-specific images
import pfpImg from '../../assets/images/pfp_fireproofing.png'
import blastingImg from '../../assets/images/dry_ice_blasting.png'
import miccImg from '../../assets/images/micc_cabling.png'
import maintenanceImg from '../../assets/images/industrial_maintenance.png'
import civilImg from '../../assets/images/civil_interior.png'

type SubService = {
  id: string
  name: string
  icon: React.ComponentType<{ className?: string; size?: number }>
  overview: string
  details: string[]
  specs: Record<string, string>
  image: string
}

const subServices: SubService[] = [
  {
    id: 'pfp',
    name: 'Passive Fire Protection',
    icon: Flame,
    overview: 'Protecting structural steel boundaries and critical assets from catastrophic high-temperature failure. We supply and apply intumescent fireproofing coatings and install certified fire barriers.',
    details: [
      'Intumescent Coatings: Thin-film coatings that swell in heat to form a carbonaceous protective char layer.',
      'Cementitious Fireproofing: Lightweight structural coatings protecting equipment columns and structural columns.',
      'Penetration Seals: Designing and sealing cable trays and piping wall penetrations with firestop compounds.',
      'Hydrocarbon Fire Rated: Systems tested to withstand rapid-rise hydrocarbon fire envelopes (UL 1709).'
    ],
    specs: {
      'Fire Rating Standard': 'UL 1709 / EN 13381-8',
      'Protection Duration': 'Up to 240 minutes (4 hours)',
      'Application Methods': 'Airless spray application / trowel-grade detailing',
      'Testing Procedures': 'DFT (Dry Film Thickness) gauge inspection, adhesion tests'
    },
    image: pfpImg
  },
  {
    id: 'blasting',
    name: 'Dry Ice Blasting',
    icon: Wind,
    overview: 'A non-abrasive, non-conductive, and eco-friendly cleaning process. Utilizes solid CO2 dry ice pellets accelerated to supersonic speeds to clean industrial equipment without water or chemical solvents.',
    details: [
      'Non-Conductive Cleaning: Safe to clean live electrical panels, motor stators, and transformer windings.',
      'No Secondary Waste: Dry ice pellets sublimate directly into CO2 gas upon impact, leaving only the removed contaminant.',
      'Non-Abrasive Action: Cleans delicate machinery tooling, sensors, and welds without scoring steel or damaging seals.',
      'Minimized Downtime: Allows equipment to be cleaned in-place without complete disassembly or water-drying delays.'
    ],
    specs: {
      'Blast Pressure Range': '20 to 140 PSI (1.4 to 9.6 bar)',
      'Dry Ice Feed Rate': '0.5 to 3.2 kg/minute',
      'Pellet Diameter': '3.0 mm high-density pellets',
      'Acoustic Levels': 'Requires standard hearing protection during operations'
    },
    image: blastingImg
  },
  {
    id: 'micc',
    name: 'MICC Cabling',
    icon: Cable,
    overview: 'Mineral Insulated Metal Sheathed Cabling installations engineered for critical fire-survival applications. Offers complete fire resistance, waterproof operation, and ultimate structural lifespan.',
    details: [
      'Absolute Fire Survival: Withstands temperatures exceeding 1000°C while continuing to carry power.',
      'Inorganic Construction: Copper sheath and magnesium oxide insulation are non-combustible and emit zero toxic gas.',
      'Explosion-Proof Shell: Copper tube sheath functions as a solid metallic conduit, preventing gas or vapor leaks.',
      'Space Optimization: Compact cabling diameters allow clean layouts in tight industrial cable vaults.'
    ],
    specs: {
      'Applicable Codes': 'BS EN 60702 / IEC 60702 / BS 6387 Category CWZ',
      'Operating Voltage': '500V / 750V heavy duty ratings',
      'Continuous Temp': 'Up to 250°C continuous operating temperature',
      'Fire Resistance': '950°C for 3 hours with mechanical shock and water'
    },
    image: miccImg
  },
  {
    id: 'maintenance',
    name: 'Industrial Maintenance',
    icon: Settings,
    overview: 'Preventative, predictive, and turnaround maintenance services built to extend the runtime and reliability of refinery process plants and rotating oilfield machinery.',
    details: [
      'Turnaround Engineering: Planning and deploying technicians during plant shutdowns to execute repair schedules.',
      'Equipment Overhaul: Servicing pumps, control valves, mechanical seals, and process filters.',
      'Static Equipment Inspections: Vessel thickness surveys, hydrostatic tests, and structural structural repair welds.',
      'Preventative Scheduling: Routine checks, vibration analysis, and laser alignment services.'
    ],
    specs: {
      'Inspection Standards': 'API 510 (Vessels) / API 570 (Piping)',
      'Welder Certification': 'ASME Sec IX structural and pipe welders',
      'Alignment Tolerances': 'Laser shaft alignments down to 0.01 mm',
      'NDT Capabilities': 'Dye penetrant, magnetic particle, and ultrasonic thickness'
    },
    image: maintenanceImg
  },
  {
    id: 'civil',
    name: 'Civil & Interior Works',
    icon: Home,
    overview: 'Technical civil engineering and clean control room interior fit-outs. We build durable equipment foundations and optimize architectural layouts for mission-critical technical rooms.',
    details: [
      'Control Room Fit-Outs: Installing modular clean partitions, anti-static paints, and acoustic ceiling panels.',
      'Concrete Foundations: Pouring heavy, vibration-isolated concrete plinths for generators, compressors, and pump skids.',
      'Trenching & Vaults: Fabricating reinforced concrete cable trenches, sump pits, and technical equipment vaults.',
      'Acoustic & Thermal Shields: Applying specialty insulation to control room walls to isolate machinery noise.'
    ],
    specs: {
      'Concrete Grades': 'C40/50 technical concrete configurations',
      'Acoustic Control': 'STC (Sound Transmission Class) ratings up to 55',
      'Static Dissipation': 'Anti-static epoxy floor coatings (<10^6 ohms resistance)',
      'Cleanliness Classes': 'ISO 14644-1 clean room classes compatibility'
    },
    image: civilImg
  }
]

export function SpecializedServicesPage() {
  const [activeTab, setActiveTab] = useState<string>('pfp')
  const currentService = subServices.find(s => s.id === activeTab) || subServices[0]
  const CurrentIcon = currentService.icon

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
              <span className="font-mono text-sm font-bold uppercase text-brand-red tracking-[0.2em] block mb-3">Service 09</span>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase leading-none max-w-4xl">
                Specialized Services
              </h1>
              <p className="font-mono text-sm text-white/60 tracking-wider uppercase mt-4 max-w-2xl">
                Passive Fire Protection, Dry Ice Blasting, MICC Cabling, Industrial Maintenance, and Technical Civil Works
              </p>
            </Reveal>
          </Container>
        </section>

        {/* Tab Switcher Section */}
        <section className="py-8 bg-surface-muted border-b border-line sticky top-16 z-30 shadow-sm">
          <Container>
            <div className="flex flex-wrap gap-2 md:justify-center">
              {subServices.map((tab) => {
                const isActive = activeTab === tab.id
                const TabIcon = tab.icon
                return (
                  <button
                    className={`flex items-center gap-2 px-5 py-3 font-mono text-sm font-bold uppercase tracking-wider transition-colors duration-200 border ${
                      isActive 
                        ? 'bg-brand-blue text-white border-brand-blue' 
                        : 'bg-white text-ink border-line hover:bg-surface-muted hover:border-ink/20'
                    }`}
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    type="button"
                  >
                    <TabIcon size={14} />
                    {tab.name}
                  </button>
                )
              })}
            </div>
          </Container>
        </section>

        {/* Active Content Overview */}
        <section className="py-16 sm:py-24 border-b border-line bg-white">
          <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal key={currentService.id}>
              <div className="flex items-center gap-3 mb-6">
                <CurrentIcon className="text-brand-blue shrink-0" size={28} />
                <h2 className="font-display text-3xl sm:text-4xl uppercase text-ink">
                  {currentService.name}
                </h2>
              </div>
              
              <p className="font-body text-sm leading-relaxed text-ink-soft mb-8">
                {currentService.overview}
              </p>

              {/* Core Features */}
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-brand-red mb-4">Core Deliverables</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {currentService.details.map((detail, idx) => {
                  const [title, desc] = detail.split(': ')
                  return (
                    <div className="flex gap-3" key={idx}>
                      <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={14} />
                      <div>
                        <h4 className="font-mono text-sm font-bold text-ink uppercase tracking-wide">{title}</h4>
                        <p className="font-body text-sm text-ink-soft mt-0.5 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative">
                <div className="absolute -right-4 -top-4 h-24 w-24 border border-brand-blue/20 bg-brand-blue/5" />
                <div className="absolute -bottom-4 -left-4 h-24 w-32 border border-line bg-white" />
                <img 
                  alt={currentService.name} 
                  className="relative z-10 w-full object-cover aspect-[4/3] border border-line" 
                  src={currentService.image} 
                />
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Active Content Specifications */}
        <section className="py-16 sm:py-24 border-b border-line bg-surface-muted" key={currentService.id + '-specs'}>
          <Container className="max-w-4xl">
            <Reveal>
              <h3 className="font-display text-2xl uppercase text-ink mb-8 text-center">Technical Parameters</h3>
              <div className="border border-line bg-white shadow-sm overflow-hidden">
                <table className="w-full text-left font-body text-sm border-collapse">
                  <thead>
                    <tr className="bg-brand-black text-white font-mono text-sm uppercase tracking-wider">
                      <th className="p-4 border-r border-white/10 w-1/3">Parameter</th>
                      <th className="p-4">Engineering Value / Standard</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(currentService.specs).map(([param, value], index) => (
                      <tr className="border-b border-line hover:bg-surface-muted/50 transition-colors" key={index}>
                        <td className="p-4 border-r border-line font-mono font-bold text-brand-blue uppercase text-sm tracking-wider">{param}</td>
                        <td className="p-4 text-ink-soft">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* General Specialized Services Advantage */}
        <section className="py-16 sm:py-24 bg-brand-black text-white">
          <Container className="grid gap-16 lg:grid-cols-[0.8fr_1fr]">
            <Reveal>
              <span className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-brand-red mb-3 block">Service Strengths</span>
              <h2 className="font-display text-3xl sm:text-4xl uppercase leading-tight mb-8">
                Pioneering Multi-Discipline Engineering and Maintenance
              </h2>
              <div className="font-body text-sm text-white/70 space-y-4">
                <p>
                  One World United operates as a highly specialized contracting arm, resolving niche engineering, civil, and maintenance problems for petroleum upstream and downstream complexes.
                </p>
                <p>
                  By deploying state-of-the-art tooling (such as dry-ice blasting machines, industrial spray pumps, and precision thickness checkers) and maintaining strict alignment with safety codes, we execute technical turnarounds and special installations with zero downtime tolerance.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="font-display text-2xl uppercase text-white mb-6">The OWU Advantage</h3>
              <div className="grid gap-4">
                {[
                  { title: 'Advanced Technical Tooling', text: 'We invest in high-efficiency industrial blasting chambers, airless spray systems, and heavy cable pulling equipment to ensure precise installations.' },
                  { title: 'Strict Safety Compliance', text: 'Our field crews are fully certified in hazardous workspace safety, confined spaces entry, and industrial scaffolding protection.' },
                  { title: 'Single-Source Responsibility', text: 'We offer civil foundation works, fire barrier sealing, clean control room partition walls, and specialized cabling under a single site management team.' },
                  { title: 'Uncompromising QC Reports', text: 'Every completed application includes complete Quality Control dossiers, including wet/dry film thickness gauges, concrete compression break tests, and MICC insulation insulation megger tests.' }
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
