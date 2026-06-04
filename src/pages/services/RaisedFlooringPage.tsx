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
    title: 'Data Center System',
    image: dataCenterImg,
    type: 'Heavy-Duty Steel Cementitious Panel + High-Flow Perforated Airflow Panels',
    finish: 'Anti-Static High-Pressure Laminate (HPL) with integral edge banding',
    layers: [
      'Top Tier Anti-Static HPL wear surface',
      'Die-formed, deep-drawn structural steel bottom pan (dome shape)',
      'Lightweight, advanced solid cementitious core filler matrix',
      'Flat steel top sheet electro-welded to the bottom pan'
    ],
    app: 'Mission-critical data centers, server farms, and heavy rack infrastructure corridors requiring managed underfloor cooling distribution.'
  },
  {
    id: '02',
    title: 'Control Room System',
    image: controlRoomImg,
    type: 'Steel Cementitious Composite Rigid Panel System',
    finish: 'Premium High-Pressure Laminate (HPL) Finish (Acoustic and Scratch Resistant)',
    layers: [
      'Heavy-wear commercial grade High-Pressure Laminate (HPL) top sheet',
      'Rigid top steel plate structural tier',
      'High-density foaming structural cement core insulation layer',
      'Corrugated protective bottom steel plate with anti-corrosive primer'
    ],
    app: 'Continuous monitoring rooms, SCADA centers, power plant main control desks, and facility management hubs.'
  },
  {
    id: '03',
    title: 'Command Center System',
    image: commandCenterImg,
    type: 'High-Density Calcium Sulphate Panel System',
    finish: 'Premium Heavy-Traffic Modular Carpet Tile Finish',
    layers: [
      'Modular textile carpet tile overlay (interlocking or magnetic backed)',
      'Galvanized steel sheet encapsulation layer (0.5mm top layer)',
      'Monolithic non-combustible fiber-reinforced high-density calcium sulphate core',
      'Galvanized steel sheet bottom backing plate for maximum deflection control'
    ],
    app: 'Military operation centers, emergency dispatch hubs, premium corporate boardrooms, and executive visual intelligence centers.'
  },
  {
    id: '04',
    title: 'Telecom Room System',
    image: telecomRoomImg,
    type: 'Steel Cementitious Pedestal Access System',
    finish: 'Conductive Homogeneous Vinyl Tile Finish (Static Dissipative ESD)',
    layers: [
      'Static-dissipative conductive homogeneous tile finish with copper grounding strips',
      'Cold-rolled structural solid steel flat top plate',
      'Ultra-dense structural setting compound cement matrix core',
      'Die-formed spherical multi-pocket structural steel bottom tray'
    ],
    app: 'Telecommunication switching stations, cellular network baseline facilities, and digital PBX server closets.'
  },
  {
    id: '05',
    title: 'Clean Room System',
    image: cleanRoomImg,
    type: 'Precision Solid or Perforated Die-Cast Aluminum Raised Floor System',
    finish: 'Specialized Clean-Room Grade Conductive Epoxy or Electroless Nickel Plating',
    layers: [
      'Ultra-smooth chemical and abrasion-resistant conductive epoxy finish layer',
      'Monolithic single-source die-cast structural aluminum alloy top face plate',
      'Integrated orthogonal vertical reinforcing ribs (cast as one single structure piece)',
      'Completely core-free, hollow layout to prevent particulate contamination or degassing'
    ],
    app: 'Semiconductor microelectronics fabrication facilities, pharmaceutical manufacturing spaces, and biomedical research clean labs.'
  },
  {
    id: '06',
    title: 'Industrial Plant System',
    image: industrialPlantImg,
    type: 'Ultra Heavy-Duty Extra-Thick Steel Cementitious Access System',
    finish: 'Thick Anti-Wear Protective Galvanized Steel Shell or High-Impact Powder Coat',
    layers: [
      'High-gauge heavy-duty galvanized structural steel cover plate surface',
      'Premium high-tensile strength interior reinforcing steel plate matrix',
      'High-density, micro-fiber reinforced structural concrete core filler slurry',
      'Deep-stamped solid structural steel base tray profile'
    ],
    app: 'Light factory assembly lines, test laboratory floors with rolling equipment, and high-load industrial fabrication facilities.'
  },
  {
    id: '07',
    title: 'Electrical Substation System',
    image: substationImg,
    type: 'High-Load Electrostatic Discharge (ESD) Rigid Pedestal Floor System',
    finish: 'Heavy-Duty High-Voltage Isolation Static-Control ESD Finish (Vinyl or HPL variant)',
    layers: [
      'Ultra-thick technical grade ESD tile wear surface layer with conductive backing',
      'Premium solid steel continuous top containment structural pan',
      'Fiber-reinforced mineral compound or ultra-dense solid cement core insulation layer',
      'Reinforced mechanical interlocking heavy steel frame perimeter structure'
    ],
    app: 'High-voltage transformer rooms, switchgear distribution vaults, and electrical equipment bays.'
  },
  {
    id: '08',
    title: 'Office Building System',
    image: officeBuildingImg,
    type: 'High-Density Calcium Sulphate Core or Premium High-Density Woodcore Panels',
    finish: 'Bare Galvanized Steel Enclosure (Designed for subsequent loose-laid modular carpet or premium LVT overlays)',
    layers: [
      'Factory bare structural galvanized steel sheet outer shell enclosing all faces',
      'Premium high-density organic woodcore particle board OR mineral calcium sulphate core plate',
      'High-bonding technical compound structural adhesive binding interface layer',
      'Interlocking perimeter mechanical corner-lock or gravity-laid stringer support matrix'
    ],
    app: 'Commercial general multi-story corporate office blocks, administrative complexes, open-plan call centers, and banking workspace layouts.'
  }
]

export function RaisedFlooringPage() {
  const [activeTab, setActiveTab] = useState<string>('01')
  const currentProfile = floorProfiles.find(p => p.id === activeTab) || floorProfiles[0]

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
              <span className="font-mono text-label font-bold uppercase text-brand-red tracking-[0.2em] block mb-3">Service 02</span>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase leading-none max-w-4xl">
                Specialized Raised<br/>
                <span className="text-brand-blue">Access Flooring Systems</span>
              </h1>
              <p className="mt-6 max-w-2xl font-body text-sm sm:text-base leading-7 text-white/70">
                High-performance structural access floors designed to route power distribution, data cabling, and HVAC airflow in technical and mission-critical spaces.
              </p>
            </Reveal>
          </Container>
        </section>

        {/* What is access floor & Benefits */}
        <section className="py-20 border-b border-line">
          <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <Reveal>
              <h2 className="font-display text-3xl uppercase text-ink">
                Engineered Flooring Solutions for Modern Technical Environments
              </h2>
              <div className="mt-6 space-y-4 font-body text-sm leading-7 text-ink-soft">
                <p>
                  A Raised Access Floor consists of modular floor panels supported by adjustable pedestals, creating an elevated floor space above the structural slab. This concealed service zone allows easy routing and maintenance of electrical, communication, instrumentation, and HVAC systems without disrupting operations.
                </p>
                <p>
                  We supply and install systems manufactured to meet international quality standards. They are optimized for targeted thermal, structural, acoustic, and static-dissipative performance required by industrial and commercial clients.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-surface-muted p-8 border border-line shadow-hard">
                <h3 className="font-mono text-label font-bold uppercase text-brand-blue tracking-wider block mb-6">Key Benefits</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    'Flexible cable & service management',
                    'Easy access for maintenance & upgrades',
                    'Improved airflow distribution',
                    'Enhanced workspace organization',
                    'Reduced downtime during changes',
                    'High load-bearing performance',
                    'Increased safety and aesthetics',
                    'Adaptable for future expansion'
                  ].map((benefit) => (
                    <div className="flex gap-2.5 items-start text-xs font-body text-ink-soft" key={benefit}>
                      <span className="grid size-5 place-items-center bg-brand-blue/5 text-brand-blue border border-brand-blue/15 shrink-0 rounded-sm">
                        <Check size={12} />
                      </span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* 8 Systems Matrix Explorer */}
        <section className="py-20 bg-surface-muted/30 border-b border-line">
          <Container>
            <Reveal className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-label font-bold uppercase text-brand-red tracking-[0.2em]">Matrix</span>
              <h2 className="font-display text-3xl sm:text-4xl uppercase text-ink mt-3">Architectural Access Floor Profiles</h2>
              <p className="mt-4 font-body text-xs leading-5 text-ink-muted">
                Explore our eight distinct engineered access floor systems, each tailored to specific facility loads, electrical standards, and architectural requirements.
              </p>
            </Reveal>

            <div className="grid gap-8 lg:grid-cols-[0.85fr_2fr]">
              {/* Tabs list on the left */}
              <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 border-b lg:border-b-0 lg:border-r border-line pb-4 lg:pb-0 pr-0 lg:pr-4 shrink-0">
                {floorProfiles.map((profile) => (
                  <button
                    className={`px-4 py-3 text-left whitespace-nowrap lg:whitespace-normal font-display text-lg uppercase transition-all focus:outline-none border-l-2 ${
                      activeTab === profile.id 
                        ? 'border-brand-blue text-brand-blue bg-white shadow-hard' 
                        : 'border-transparent text-ink-muted hover:text-ink hover:bg-white/50'
                    }`}
                    key={profile.id}
                    onClick={() => setActiveTab(profile.id)}
                    type="button"
                  >
                    <span className="font-mono text-[9px] font-bold block mr-2 text-brand-red">Profile {profile.id}</span>
                    {profile.title}
                  </button>
                ))}
              </div>

              {/* Dynamic specs display pane on the right */}
              <div className="grid gap-8 lg:grid-cols-2 bg-white border border-line p-6 sm:p-10 shadow-hard min-h-[480px]">
                {/* Visual rendering */}
                <div className="relative group overflow-hidden border border-line bg-surface-muted flex items-center justify-center">
                  <img 
                    src={currentProfile.image} 
                    alt={currentProfile.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-brand-black/90 text-white font-mono text-[8px] uppercase tracking-wider px-2 py-1">
                    System Model {currentProfile.id}
                  </div>
                </div>

                {/* Technical data summary */}
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[10px] font-bold text-brand-blue uppercase tracking-wider block mb-2">Architectural Blueprint</span>
                    <h3 className="font-display text-3xl uppercase text-ink mb-6">{currentProfile.title}</h3>
                    
                    <div className="space-y-4">
                      <div className="border-t border-line pt-3">
                        <span className="font-mono text-[9px] font-bold text-brand-red uppercase block">Recommended Flooring Type</span>
                        <p className="font-body text-xs text-ink-soft leading-relaxed mt-1 font-semibold">{currentProfile.type}</p>
                      </div>

                      <div className="border-t border-line pt-3">
                        <span className="font-mono text-[9px] font-bold text-brand-red uppercase block">Top Finish & Coating</span>
                        <p className="font-body text-xs text-ink-soft leading-relaxed mt-1">{currentProfile.finish}</p>
                      </div>

                      <div className="border-t border-line pt-3">
                        <span className="font-mono text-[9px] font-bold text-brand-red uppercase block">Core Layers Composition</span>
                        <ul className="mt-2 space-y-1.5 font-body text-xs text-ink-soft pl-4 list-decimal">
                          {currentProfile.layers.map((layer, idx) => (
                            <li key={idx} className="leading-relaxed">{layer}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-line pt-4 mt-6 bg-surface-muted/40 p-4 border-l-2 border-brand-blue">
                    <span className="font-mono text-[8px] font-bold text-ink-muted uppercase block">Primary Application Case</span>
                    <p className="font-body text-xs text-ink-soft leading-relaxed mt-1 italic">{currentProfile.app}</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Quality, Standards and Materials summary */}
        <section className="py-20 border-b border-line">
          <Container className="grid gap-12 md:grid-cols-3">
            <Reveal className="p-6 border border-line bg-white shadow-hard relative">
              <span className="font-mono text-xs text-brand-red block mb-4">01 / LOAD PROFILE</span>
              <h4 className="font-display text-xl uppercase text-ink">Heavy-load engineering</h4>
              <p className="mt-3 font-body text-xs leading-relaxed text-ink-soft">
                All panels and steel/aluminum bases are load-rated. Designed to support heavy rack corridors, transformers, switchgear, and factory machinery vaults with zero deflection.
              </p>
            </Reveal>

            <Reveal className="p-6 border border-line bg-white shadow-hard relative" delay={0.08}>
              <span className="font-mono text-xs text-brand-red block mb-4">02 / ESD CONTROL</span>
              <h4 className="font-display text-xl uppercase text-ink">Static dissipation & Safety</h4>
              <p className="mt-3 font-body text-xs leading-relaxed text-ink-soft">
                Features conductive vinyl tile finishes, copper grounding strips, and HPL coverings engineered to dissipate electrostatic charges, preventing damage to sensitive microchips.
              </p>
            </Reveal>

            <Reveal className="p-6 border border-line bg-white shadow-hard relative" delay={0.16}>
              <span className="font-mono text-xs text-brand-red block mb-4">03 / STRUCTURAL CORE</span>
              <h4 className="font-display text-xl uppercase text-ink">Non-combustible composition</h4>
              <p className="mt-3 font-body text-xs leading-relaxed text-ink-soft">
                Utilizes high-density calcium sulphate panels, solid cementitious matrices, or woodcore materials wrapped in galvanized steel sheets for high thermal, acoustic, and fire resistance.
              </p>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
