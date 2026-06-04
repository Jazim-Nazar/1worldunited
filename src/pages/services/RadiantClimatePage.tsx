import { ArrowLeft, Thermometer, Wind, Settings, Radio } from 'lucide-react'
import { Container } from '../../components/layout/Container'
import { Navbar } from '../../components/layout/Navbar'
import { Footer } from '../../components/layout/Footer'
import { Reveal } from '../../components/ui/Reveal'

// Import extracted images
import radiantCutawayImg from '../../assets/images/rdiant_heta_and_cool_page_3_img_1.jpeg'
import floorScreedImg from '../../assets/images/rdiant_heta_and_cool_page_4_img_1.jpeg'
import ceilingCoolingImg from '../../assets/images/rdiant_heta_and_cool_page_7_img_1.jpeg'
import wallPanelsImg from '../../assets/images/rdiant_heta_and_cool_page_9_img_1.jpeg'


export function RadiantClimatePage() {
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
              <span className="font-mono text-label font-bold uppercase text-brand-red tracking-[0.2em] block mb-3">Service 03</span>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase leading-none max-w-4xl">
                Hydronic Radiant<br/>
                <span className="text-brand-blue">Climate Solutions</span>
              </h1>
              <p className="mt-6 max-w-2xl font-body text-sm sm:text-base leading-7 text-white/70">
                Modern comfort redefined. Invisible, silent, and sustainable heating and cooling systems that transform floors, ceilings, and walls into active thermal surfaces.
              </p>
            </Reveal>
          </Container>
        </section>

        {/* Traditional HVAC vs Hydronic Radiant comparison */}
        <section className="py-20 border-b border-line">
          <Container className="grid gap-12 lg:grid-cols-2 items-center">
            <Reveal>
              <h2 className="font-display text-3xl uppercase text-ink">
                A Smarter Approach to Luxury Indoor Climate Control
              </h2>
              <div className="mt-6 space-y-4 font-body text-sm leading-7 text-ink-soft">
                <p>
                  Traditional forced-air systems rely on blowing air through bulky ductworks, often resulting in cold drafts, uneven temperatures, noisy operation, and the continuous circulation of dust and airborne allergens.
                </p>
                <p>
                  At One World United, we specialize in the design, supply, and installation of advanced hydronic radiant systems across Kuwait. Our solutions are invisible, silent, energy-efficient, and environmentally sustainable, delivering exceptional comfort all year round.
                </p>
              </div>

              {/* Thermal Conductor Callout */}
              <div className="mt-8 bg-brand-blue/5 border-l-4 border-brand-blue p-5 font-body text-xs text-ink-soft leading-6">
                <strong>Did you know?</strong> Water is a far superior thermal conductor than air. A nominal 3/4-inch water pipe can transfer the same heat energy as a large 14x8-inch air duct, allowing a hydronic circulator to deliver the same thermal capacity while reducing electrical fan consumption by up to <strong>75% to 90%</strong>.
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative border border-line shadow-hard overflow-hidden group">
                <img 
                  src={radiantCutawayImg} 
                  alt="Integrated radiant floors, walls and ceilings" 
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 bg-brand-black/95 text-white font-mono text-[9px] uppercase tracking-wider px-3 py-1 border-l-2 border-brand-red">
                  3D Integrated Surface Piping Scheme
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* The 3 Systems: Floors, Ceilings, Walls */}
        <section className="py-20 bg-surface-muted/30 border-b border-line">
          <Container>
            <Reveal className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-label font-bold uppercase text-brand-red tracking-[0.2em]">Ecosystem</span>
              <h2 className="font-display text-3xl sm:text-4xl uppercase text-ink mt-3">Three Dimensions of Radiant Comfort</h2>
              <p className="mt-4 font-body text-xs text-ink-muted leading-relaxed">
                We design and integrate active thermal loops into the structural framework of your building, offering customized solutions for floors, ceilings, and walls.
              </p>
            </Reveal>

            <div className="grid gap-10 md:grid-cols-3">
              {/* Floor system */}
              <Reveal className="bg-white border border-line p-6 shadow-hard flex flex-col justify-between" delay={0.05}>
                <div>
                  <img 
                    src={floorScreedImg} 
                    alt="Radiant Floor System Manifold" 
                    className="w-full aspect-[16/10] object-cover border border-line mb-6"
                  />
                  <h3 className="font-display text-2xl uppercase text-ink flex items-center gap-2">
                    <span className="text-brand-blue font-mono text-lg font-bold">1.</span> Radiant Floor
                  </h3>
                  <p className="mt-3 font-body text-xs leading-6 text-ink-soft">
                    The most widely adopted solution. Installed beneath finished floor surfaces (screeds, wood-inlay, or marble), providing gentle, uniform rising heat/cooling.
                  </p>
                  <ul className="mt-5 space-y-2 font-body text-[11px] text-ink-soft pl-4 list-disc">
                    <li>Eliminates cold spots and air drafts</li>
                    <li>Utilizes graphite-sintered EPS insulation panels</li>
                    <li>Velcro® piping guides for tool-free, fast setup</li>
                  </ul>
                </div>
              </Reveal>

              {/* Ceiling system */}
              <Reveal className="bg-white border border-line p-6 shadow-hard flex flex-col justify-between" delay={0.1}>
                <div>
                  <img 
                    src={ceilingCoolingImg} 
                    alt="Radiant Ceiling Panels" 
                    className="w-full aspect-[16/10] object-cover border border-line mb-6"
                  />
                  <h3 className="font-display text-2xl uppercase text-ink flex items-center gap-2">
                    <span className="text-brand-blue font-mono text-lg font-bold">2.</span> Radiant Ceiling
                  </h3>
                  <p className="mt-3 font-body text-xs leading-6 text-ink-soft">
                    The gold standard for radiant cooling in luxury residences and offices. Seamlessly integrated into plasterboard ceilings to absorb rising sensible heat loads.
                  </p>
                  <ul className="mt-5 space-y-2 font-body text-[11px] text-ink-soft pl-4 list-disc">
                    <li>Optimal for cooling without noisy fan-coils</li>
                    <li>Zero air movement means dust-free air</li>
                    <li>Preserves architectural ceiling heights</li>
                  </ul>
                </div>
              </Reveal>

              {/* Wall system */}
              <Reveal className="bg-white border border-line p-6 shadow-hard flex flex-col justify-between" delay={0.15}>
                <div>
                  <img 
                    src={wallPanelsImg} 
                    alt="Radiant Wall System" 
                    className="w-full aspect-[16/10] object-cover border border-line mb-6"
                  />
                  <h3 className="font-display text-2xl uppercase text-ink flex items-center gap-2">
                    <span className="text-brand-blue font-mono text-lg font-bold">3.</span> Radiant Wall
                  </h3>
                  <p className="mt-3 font-body text-xs leading-6 text-ink-soft">
                    Discreet wall-integrated piping loops. Ideal for localized high-comfort areas like luxury bathrooms, home spas, wellness zones, and prayer rooms.
                  </p>
                  <ul className="mt-5 space-y-2 font-body text-[11px] text-ink-soft pl-4 list-disc">
                    <li>Perfect for areas with large glazed facades</li>
                    <li>Concealed within finished drywall boards</li>
                    <li>Creates warm dry wall surfaces in wet areas</li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* Installation Profiles */}
        <section className="py-20 border-b border-line">
          <Container>
            <Reveal>
              <span className="font-mono text-label font-bold uppercase text-brand-blue tracking-[0.2em] block mb-3">Methods</span>
              <h2 className="font-display text-3xl sm:text-4xl uppercase text-ink mb-12">Tailored Installation Profiles</h2>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="p-6 border border-line bg-surface-muted/40">
                  <h4 className="font-display text-lg uppercase text-ink border-b border-line pb-2 mb-3">Wet Systems</h4>
                  <span className="font-mono text-[9px] text-brand-red uppercase block mb-3 font-bold">Screed-Based</span>
                  <p className="font-body text-xs text-ink-soft leading-relaxed mb-4">
                    Piping embedded inside a concrete or flowing screed layer, creating an efficient high-density thermal mass.
                  </p>
                  <span className="font-mono text-[9px] text-ink-muted uppercase block font-semibold">Best For: New Builds, Villas</span>
                </div>

                <div className="p-6 border border-line bg-surface-muted/40">
                  <h4 className="font-display text-lg uppercase text-ink border-b border-line pb-2 mb-3">Dry Systems</h4>
                  <span className="font-mono text-[9px] text-brand-red uppercase block mb-3 font-bold">Screed-Free</span>
                  <p className="font-body text-xs text-ink-soft leading-relaxed mb-4">
                    Lightweight panels featuring integrated aluminum heat-distribution plates to ensure high speed thermal transfers.
                  </p>
                  <span className="font-mono text-[9px] text-ink-muted uppercase block font-semibold">Best For: Weight-limit builds, upper floors</span>
                </div>

                <div className="p-6 border border-line bg-surface-muted/40">
                  <h4 className="font-display text-lg uppercase text-ink border-b border-line pb-2 mb-3">Low-Profile</h4>
                  <span className="font-mono text-[9px] text-brand-red uppercase block mb-3 font-bold">Renovations</span>
                  <p className="font-body text-xs text-ink-soft leading-relaxed mb-4">
                    Ultra-thin panels designed for direct installation over existing substrates with minimal impact on floor heights.
                  </p>
                  <span className="font-mono text-[9px] text-ink-muted uppercase block font-semibold">Best For: Renovations, heritage sites</span>
                </div>

                <div className="p-6 border border-line bg-surface-muted/40">
                  <h4 className="font-display text-lg uppercase text-ink border-b border-line pb-2 mb-3">Modular Panels</h4>
                  <span className="font-mono text-[9px] text-brand-red uppercase block mb-3 font-bold">Drywall Panels</span>
                  <p className="font-body text-xs text-ink-soft leading-relaxed mb-4">
                    Prefabricated loops integrated into drywall assemblies for extremely quick installation inside walls or ceilings.
                  </p>
                  <span className="font-mono text-[9px] text-ink-muted uppercase block font-semibold">Best For: Fast-track interior fitouts</span>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Intelligent Controls & BMS */}
        <section className="py-20 bg-brand-black text-white">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] items-center">
              <Reveal>
                <span className="font-mono text-label font-bold uppercase text-brand-red tracking-[0.2em] block mb-3">Automation</span>
                <h2 className="font-display text-3xl sm:text-4xl uppercase text-white">Intelligent Climate Management & Controls</h2>
                <p className="mt-5 font-body text-sm leading-7 text-white/70">
                  A premium radiant loop is only as good as the system brain controlling it. Unlike conventional HVAC, radiant solutions require precise management of water temperatures, humidity levels, and dew points to operate at max efficiency with zero risk of condensation.
                </p>

                <div className="mt-8 flex gap-4 items-center">
                  <div className="text-center p-4 border border-white/10 bg-white/5 w-1/2">
                    <span className="block font-display text-3xl text-brand-blue">100%</span>
                    <span className="font-mono text-[8px] uppercase tracking-wider text-white/50 block mt-1">Silent Operation</span>
                  </div>
                  <div className="text-center p-4 border border-white/10 bg-white/5 w-1/2">
                    <span className="block font-display text-3xl text-brand-red">Up to 75%</span>
                    <span className="font-mono text-[8px] uppercase tracking-wider text-white/50 block mt-1">Energy Reduction</span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="grid gap-6 sm:grid-cols-2">
                <div className="p-6 border border-white/10 bg-white/5">
                  <Thermometer className="text-brand-blue mb-4" size={22} />
                  <h4 className="font-mono text-[10px] font-bold uppercase tracking-wider text-white">Smart Environmental Monitoring</h4>
                  <p className="font-body text-[11px] text-white/60 leading-relaxed mt-2">
                    Tracks relative humidity, air temperature, surface loops, occupancy patterns, and outdoor weather, automatically tailoring flow rates in every zone.
                  </p>
                </div>

                <div className="p-6 border border-white/10 bg-white/5">
                  <Wind className="text-brand-blue mb-4" size={22} />
                  <h4 className="font-mono text-[10px] font-bold uppercase tracking-wider text-white">Dew Point Condensation Safety</h4>
                  <p className="font-body text-[11px] text-white/60 leading-relaxed mt-2">
                    Intelligent sensors compute local dew points and modulate cooling temperatures. Coordinates seamlessly with dedicated dehumidification.
                  </p>
                </div>

                <div className="p-6 border border-white/10 bg-white/5">
                  <Radio className="text-brand-blue mb-4" size={22} />
                  <h4 className="font-mono text-[10px] font-bold uppercase tracking-wider text-white">Zoned Comfort Control</h4>
                  <p className="font-body text-[11px] text-white/60 leading-relaxed mt-2">
                    Zoning controls allow independent, customizable temperature controls in every bedroom or zone, aligning with occupancy schedules.
                  </p>
                </div>

                <div className="p-6 border border-white/10 bg-white/5">
                  <Settings className="text-brand-blue mb-4" size={22} />
                  <h4 className="font-mono text-[10px] font-bold uppercase tracking-wider text-white">BMS & Smart Integration</h4>
                  <p className="font-body text-[11px] text-white/60 leading-relaxed mt-2">
                    Integrates directly with home automation, Building Management Systems (BMS), heat pumps, smart thermostats, and ventilation.
                  </p>
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
