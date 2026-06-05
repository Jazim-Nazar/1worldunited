import { useState } from 'react'
import { ArrowLeft, Check } from 'lucide-react'
import { Container } from '../../components/layout/Container'
import { Navbar } from '../../components/layout/Navbar'
import { Footer } from '../../components/layout/Footer'
import { Reveal } from '../../components/ui/Reveal'

// Import extracted images
import dataCenterImg from '../../assets/images/raised_floor_systems__page_2_img_1.jpeg'
import controlRoomImg from '../../assets/images/raised_floor_systems__page_3_img_1.jpeg'
import commandCenterImg from '../../assets/images/raised_floor_systems__page_4_img_1.jpeg'
import telecomRoomImg from '../../assets/images/raised_floor_systems__page_5_img_1.jpeg'
import cleanRoomImg from '../../assets/images/raised_floor_systems__page_6_img_1.jpeg'
import industrialPlantImg from '../../assets/images/raised_floor_systems__page_7_img_1.jpeg'
import substationImg from '../../assets/images/raised_floor_systems__page_8_img_1.jpeg'
import officeBuildingImg from '../../assets/images/raised_floor_systems__page_9_img_1.jpeg'

type FloorProfile = {
  id: string
  title: string
  image: string
  type: string
  finish: string
  layers: string[]
  app: string
}

const floorProfiles: FloorProfile[] = [
  {
    id: '01',
    title: '1. Data Center System',
    image: dataCenterImg,
    type: 'Heavy-Duty Steel Cementitious Panel + High-Flow Perforated Airflow Panels',
    finish: 'Anti-Static High-Pressure Laminate (HPL) with integral edge banding',
    layers: [
      '1. Top Tier Anti-Static HPL wear surface',
      '2. Die-formed, deep-drawn structural steel bottom pan (dome shape)',
      '3. Lightweight, advanced solid cementitious core filler matrix',
      '4. Flat steel top sheet electro-welded to the bottom pan'
    ],
    app: 'Mission-critical data centers, server farms, and heavy rack infrastructure corridors requiring managed underfloor cooling distribution.'
  },
  {
    id: '02',
    title: '2. Control Room System',
    image: controlRoomImg,
    type: 'Steel Cementitious Composite Rigid Panel System',
    finish: 'Premium High-Pressure Laminate (HPL) Finish (Acoustic and Scratch Resistant)',
    layers: [
      '1. Heavy-wear commercial grade High-Pressure Laminate (HPL) top sheet',
      '2. Rigid top steel plate structural tier',
      '3. High-density foaming structural cement core insulation layer',
      '4. Corrugated protective bottom steel plate with anti-corrosive primer'
    ],
    app: 'Continuous monitoring rooms, SCADA centers, power plant main control desks, and facility management hubs.'
  },
  {
    id: '03',
    title: '3. Command Center System',
    image: commandCenterImg,
    type: 'High-Density Calcium Sulphate Panel System',
    finish: 'Premium Heavy-Traffic Modular Carpet Tile Finish',
    layers: [
      '1. Modular textile carpet tile overlay (interlocking or magnetic backed)',
      '2. Galvanized steel sheet encapsulation layer (0.5mm top layer)',
      '3. Monolithic non-combustible fiber-reinforced high-density calcium sulphate core',
      '4. Galvanized steel sheet bottom backing plate for maximum deflection control'
    ],
    app: 'Military operation centers, emergency dispatch hubs, premium corporate boardrooms, and executive visual intelligence centers.'
  },
  {
    id: '04',
    title: '4. Telecom Room System',
    image: telecomRoomImg,
    type: 'Steel Cementitious Pedestal Access System',
    finish: 'Conductive Homogeneous Vinyl Tile Finish (Static Dissipative ESD)',
    layers: [
      '1. Static-dissipative conductive homogeneous tile finish with copper grounding strips',
      '2. Cold-rolled structural solid steel flat top plate',
      '3. Ultra-dense structural setting compound cement matrix core',
      '4. Die-formed spherical multi-pocket structural steel bottom tray'
    ],
    app: 'Telecommunication switching stations, cellular network baseline facilities, and digital PBX server closets.'
  },
  {
    id: '05',
    title: '5. Clean Room System',
    image: cleanRoomImg,
    type: 'Precision Solid or Perforated Die-Cast Aluminum Raised Floor System',
    finish: 'Specialized Clean-Room Grade Conductive Epoxy or Electroless Nickel Plating',
    layers: [
      '1. Ultra-smooth chemical and abrasion-resistant conductive epoxy finish layer',
      '2. Monolithic single-source die-cast structural aluminum alloy top face plate',
      '3. Integrated orthogonal vertical reinforcing ribs (cast as one single structure piece)',
      '4. Completely core-free, hollow layout to prevent particulate contamination or degassing'
    ],
    app: 'Semiconductor microelectronics fabrication facilities, pharmaceutical manufacturing spaces, and biomedical research clean labs.'
  },
  {
    id: '06',
    title: '6. Industrial Plant System',
    image: industrialPlantImg,
    type: 'Ultra Heavy-Duty Extra-Thick Steel Cementitious Access System',
    finish: 'Thick Anti-Wear Protective Galvanized Steel Shell or High-Impact Powder Coat',
    layers: [
      '1. High-gauge heavy-duty galvanized structural steel cover plate surface',
      '2. Premium high-tensile strength interior reinforcing steel plate matrix',
      '3. High-density, micro-fiber reinforced structural concrete core filler slurry',
      '4. Deep-stamped solid structural steel base tray profile'
    ],
    app: 'Light factory assembly lines, test laboratory floors with rolling equipment, and high-load industrial fabrication facilities.'
  },
  {
    id: '07',
    title: '7. Electrical Substation System',
    image: substationImg,
    type: 'High-Load Electrostatic Discharge (ESD) Rigid Pedestal Floor System',
    finish: 'Heavy-Duty High-Voltage Isolation Static-Control ESD Finish (Vinyl or HPL variant)',
    layers: [
      '1. Ultra-thick technical grade ESD tile wear surface layer with conductive backing',
      '2. Premium solid steel continuous top containment structural pan',
      '3. Fiber-reinforced mineral compound or ultra-dense solid cement core insulation layer',
      '4. Reinforced mechanical interlocking heavy steel frame perimeter structure'
    ],
    app: 'High-voltage transformer rooms, switchgear distribution vaults, and electrical equipment bays.'
  },
  {
    id: '08',
    title: '8. Office Building System',
    image: officeBuildingImg,
    type: 'High-Density Calcium Sulphate Core or Premium High-Density Woodcore Panels',
    finish: 'Bare Galvanized Steel Enclosure (Designed for subsequent loose-laid modular carpet or premium LVT overlays)',
    layers: [
      '1. Factory bare structural galvanized steel sheet outer shell enclosing all faces',
      '2. Premium high-density organic woodcore particle board OR mineral calcium sulphate core plate',
      '3. High-bonding technical compound structural adhesive binding interface layer',
      '4. Interlocking perimeter mechanical corner-lock or gravity-laid stringer support matrix'
    ],
    app: 'Commercial general multi-story corporate office blocks, administrative complexes, open-plan call centers, and banking workspace layouts.'
  }
]

export function RaisedFlooringPage() {
  const [activeTab, setActiveTab] = useState('01')
  const currentProfile = floorProfiles.find((p) => p.id === activeTab) || floorProfiles[0]

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
              <span className="font-mono text-sm font-bold uppercase text-brand-red tracking-[0.2em] block mb-3">Service 02</span>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase leading-none max-w-4xl">
                Raised Floor & Control Room Solutions
              </h1>
              <p className="font-mono text-sm text-white/60 tracking-wider uppercase mt-4 max-w-2xl">
                Raised Access Floor Systems — Engineered Flooring Solutions for Modern Technical Environments
              </p>
            </Reveal>
          </Container>
        </section>

        {/* Overview & What is Section */}
        <section className="py-16 sm:py-24 border-b border-line bg-surface-muted">
          <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl uppercase text-ink mb-6">
                Engineered Flooring Solutions for Modern Technical Environments
              </h2>
              <div className="font-body text-sm leading-7 text-ink-soft space-y-4">
                <p>
                  We supply and install high-performance Raised Access Floor Systems designed to provide flexible, organized, and efficient infrastructure management for commercial, industrial, and mission-critical facilities. Our raised flooring solutions create an accessible under floor void for power distribution, data cabling, HVAC airflow, and other building services while maintaining a clean, professional, and adaptable workspace.
                </p>
                <p>
                  Our systems are manufactured to meet international quality standards and are suitable for data centers, control rooms, command centers, offices, telecom facilities, electrical substations, and industrial automation environments.
                </p>
              </div>

              <div className="border-t border-line mt-8 pt-8">
                <h3 className="font-display text-xl uppercase text-ink mb-4">What is a Raised Access Floor?</h3>
                <p className="font-body text-sm leading-relaxed text-ink-soft">
                  A Raised Access Floor consists of modular floor panels supported by adjustable pedestals, creating an elevated floor space above the structural slab. This concealed service zone allows easy routing and maintenance of electrical, communication, instrumentation, and HVAC systems without disrupting operations.
                </p>
              </div>
            </Reveal>

            {/* Key Benefits */}
            <Reveal delay={0.1}>
              <div className="bg-white p-8 border border-line shadow-sm">
                <h3 className="font-display text-xl uppercase text-ink mb-6">Key Benefits</h3>
                <ul className="grid gap-4 sm:grid-cols-1 font-body text-sm text-ink-soft leading-normal">
                  {[
                    'Flexible cable and service management',
                    'Easy access for maintenance and upgrades',
                    'Improved airflow distribution',
                    'Enhanced workspace organization',
                    'Reduced downtime during modifications',
                    'Increased safety and aesthetics',
                    'Adaptable for future expansion',
                    'High load-bearing performance'
                  ].map((benefit, i) => (
                    <li className="flex gap-3 items-center" key={i}>
                      <span className="grid size-5 place-items-center bg-brand-blue/10 text-brand-blue shrink-0 rounded-full">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Profiles Tabs Section */}
        <section className="py-16 sm:py-24 border-b border-line bg-white">
          <Container>
            <Reveal>
              <h2 className="font-display text-3xl uppercase text-ink mb-2 text-center">Architectural Raised Floor Systems</h2>
              <p className="font-mono text-sm font-bold text-brand-red uppercase tracking-wider text-center mb-8">Technical Specifications & Application Matrices</p>
              <p className="font-body text-sm text-ink-soft text-center max-w-3xl mx-auto mb-12">
                This Section defines the technical structural criteria, core composition layers, and specialized architectural finishes for eight distinct engineered access floor profiles. Each configuration is optimized for targeted thermal, structural, acoustic, and static-dissipative performance required by modern industrial and commercial facilities.
              </p>
            </Reveal>

            {/* Tab Buttons */}
            <Reveal>
              <div className="flex flex-wrap gap-2 justify-center border-b border-line pb-6 mb-10">
                {floorProfiles.map((prof) => (
                  <button
                    className={`px-4 py-2 font-mono text-sm font-bold uppercase tracking-wider transition-colors duration-200 border ${
                      activeTab === prof.id
                        ? 'bg-brand-blue text-white border-brand-blue'
                        : 'bg-white text-ink border-line hover:bg-surface-muted hover:border-ink/20'
                    }`}
                    key={prof.id}
                    onClick={() => setActiveTab(prof.id)}
                    type="button"
                  >
                    {prof.title.replace(/^\d+\.\s*/, '')}
                  </button>
                ))}
              </div>
            </Reveal>

            {/* Tab Content */}
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start" key={currentProfile.id}>
              <Reveal>
                <h3 className="font-display text-2xl uppercase text-ink mb-6">{currentProfile.title}</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-mono text-sm font-bold text-brand-red uppercase tracking-widest mb-1.5">Recommended Floor Type</h4>
                    <p className="font-body text-sm text-ink-soft font-bold leading-relaxed">{currentProfile.type}</p>
                  </div>

                  <div>
                    <h4 className="font-mono text-sm font-bold text-brand-red uppercase tracking-widest mb-1.5">Top Finish & Coating</h4>
                    <p className="font-body text-sm text-ink-soft leading-relaxed">{currentProfile.finish}</p>
                  </div>

                  <div>
                    <h4 className="font-mono text-sm font-bold text-brand-red uppercase tracking-widest mb-2">Core Architecture Layers</h4>
                    <ol className="font-body text-sm text-ink-soft space-y-2 pl-2">
                      {currentProfile.layers.map((layer, idx) => (
                        <li key={idx}>{layer}</li>
                      ))}
                    </ol>
                  </div>

                  <div className="border-t border-line pt-6">
                    <h4 className="font-mono text-sm font-bold text-brand-blue uppercase tracking-widest mb-1.5">Primary Application Case</h4>
                    <p className="font-body text-sm text-ink-soft leading-relaxed">{currentProfile.app}</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="relative">
                  <div className="absolute -right-4 -top-4 h-24 w-24 border border-brand-blue/20 bg-brand-blue/5" />
                  <div className="absolute -bottom-4 -left-4 h-24 w-32 border border-line bg-white" />
                  <img 
                    alt={currentProfile.title} 
                    className="relative z-10 w-full object-cover aspect-[4/3] border border-line" 
                    src={currentProfile.image} 
                  />
                </div>
              </Reveal>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
