import { ArrowLeft, Info } from 'lucide-react'
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
              className="inline-flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-[0.15em] text-brand-blue hover:text-white transition-colors mb-8"
              href="#/"
            >
              <ArrowLeft size={12} /> Back to Home
            </a>
            <Reveal>
              <span className="font-mono text-sm font-bold uppercase text-brand-red tracking-[0.2em] block mb-3">Service 03</span>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase leading-none max-w-4xl">
                Hydronic Cooling and Heating Systems
              </h1>
              <p className="font-mono text-sm text-white/60 tracking-wider uppercase mt-4 max-w-2xl">
                Modern Comfort Redefined: The Ultimate Guide to Radiant Heating and Cooling
              </p>
            </Reveal>
          </Container>
        </section>

        {/* Introduction Section */}
        <section className="py-16 sm:py-24 border-b border-line bg-surface-muted">
          <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl uppercase text-ink mb-6">
                Redefining Indoor Comfort across Kuwait
              </h2>
              <div className="font-body text-sm leading-7 text-ink-soft space-y-4">
                <p>
                  Traditional heating and cooling systems rely on forced air distributed through ductwork, often resulting in drafts, uneven temperatures, noise, and the circulation of dust and allergens. Hydronic radiant systems offer a smarter approach to comfort by transforming floors, ceilings, and walls into active thermal surfaces that gently heat or cool a space.
                </p>
                <p>
                  At One World United, we specialize in the design, supply, and installation of advanced hydronic radiant systems across Kuwait. Our solutions are invisible, silent, energy-efficient, and environmentally sustainable, delivering exceptional indoor comfort and balanced temperatures throughout the year.
                </p>
                <p>
                  Experience a healthier, quieter, and more comfortable living environment with next generation radiant heating and cooling technology.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-white p-8 border border-line shadow-sm relative">
                <div className="absolute right-4 top-4 text-brand-blue">
                  <Info size={24} />
                </div>
                <h3 className="font-display text-lg uppercase text-ink mb-4">Did You Know?</h3>
                <p className="font-body text-sm leading-relaxed text-ink-soft italic">
                  &ldquo;Water is a far superior thermal conductor than air. A nominal 3/4-inch water pipe can transfer the same heat energy as a large 14x8-inch air duct, allowing a hydronic circulator to deliver the same thermal energy while reducing electrical consumption by up to 75% to 90% compared to a traditional air fan&rdquo;
                </p>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Technology Overview */}
        <section className="py-16 sm:py-24 border-b border-line bg-white">
          <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal>
              <div className="relative">
                <div className="absolute -right-4 -top-4 h-24 w-24 border border-brand-blue/20 bg-brand-blue/5" />
                <div className="absolute -bottom-4 -left-4 h-24 w-32 border border-line bg-white" />
                <img 
                  alt="Hydronic radiant climate piping layout underfloor" 
                  className="relative z-10 w-full object-cover aspect-[4/3] border border-line" 
                  src={radiantCutawayImg} 
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-display text-3xl uppercase text-ink mb-6">What is Hydronic Radiant Technology?</h2>
              <p className="font-body text-sm leading-relaxed text-ink-soft mb-6">
                Hydronic radiant systems utilize water as a heat-transfer medium, circulating it through an engineered network of durable plastic piping hidden behind finished surfaces.
              </p>
              <ul className="font-body text-sm text-ink-soft space-y-4">
                <li>• <strong>In Winter:</strong> Warm water gently circulates to emit uniform, infrared radiant heat, warming objects and people directly rather than just the air.</li>
                <li>• <strong>In Summer:</strong> Chilled water circulates through the same pipes, transforming surfaces into cooling panels that smoothly absorb sensible heat energy (such as solar gain and heat from lights or appliances) without the freezing drafts of traditional air conditioning.</li>
              </ul>
            </Reveal>
          </Container>
        </section>

        {/* Key Advantages */}
        <section className="py-16 sm:py-24 border-b border-line bg-surface-muted">
          <Container>
            <Reveal>
              <h2 className="font-display text-3xl uppercase text-ink mb-12 text-center">Key Advantages of Radiant Systems</h2>
            </Reveal>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: 'Invisible & Silent Wellbeing', desc: 'No bulky radiators or noisy wall units. Your climate control is completely integrated into the architecture, giving you total freedom of interior design.' },
                { title: 'Healthier Air Quality', desc: 'Because radiant systems eliminate convective air currents, there is a drastic reduction in dust, dust mites, and airborne impurities.' },
                { title: 'Unmatched Energy Efficiency', desc: 'Radiant systems operate at low temperatures in winter and moderate temperatures in summer, maximizing the efficiency of modern heat pumps and condensing boilers.' },
                { title: 'Lifetime Guarantee', desc: 'Our systems are manufactured to the highest standards of safety and quality, uniquely backed by a lifetime insurance guarantee for ultimate peace of mind.' }
              ].map((adv, idx) => (
                <Reveal className="bg-white p-6 border border-line flex flex-col justify-between" delay={idx * 0.05} key={idx}>
                  <div>
                    <h4 className="font-display text-lg uppercase text-ink mb-3">{adv.title}</h4>
                    <p className="font-body text-sm text-ink-soft leading-relaxed">{adv.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* 1. Radiant Floor Systems */}
        <section className="py-16 sm:py-24 border-b border-line bg-white">
          <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal>
              <h2 className="font-display text-3xl uppercase text-ink mb-6">1. Radiant Floor Systems</h2>
              <p className="font-body text-sm leading-relaxed text-ink-soft mb-6">
                The most widely adopted hydronic radiant solution for residential, commercial, hospitality, and healthcare projects. Installed beneath the finished floor, radiant floor systems provide gentle, uniform heating and cooling by transforming the entire floor surface into an active thermal emitter. Heat naturally rises from the floor, creating optimal comfort conditions with warm feet, balanced room temperatures, and improved energy efficiency.
              </p>
              <h4 className="font-mono text-sm font-bold text-brand-red uppercase tracking-widest mb-4">Key Benefits</h4>
              <ul className="font-body text-sm text-ink-soft space-y-3 leading-relaxed">
                <li>• <strong>Exceptional Comfort</strong> – Delivers uniform temperature distribution throughout the space, eliminating cold spots, drafts, and temperature fluctuations commonly associated with forced-air systems.</li>
                <li>• <strong>Energy Efficient Operation</strong> – Operates at lower water temperatures than conventional heating systems, reducing energy consumption and improving overall system efficiency.</li>
                <li>• <strong>Invisible Climate Control</strong> – Completely integrated within the floor structure, eliminating the need for visible radiators, fan coil units, or air vents and maximizing architectural freedom.</li>
                <li>• <strong>Improved Indoor Air Quality</strong> – Minimal air movement reduces the circulation of dust, allergens, and airborne particles, creating a healthier indoor environment.</li>
                <li>• <strong>Advanced Thermal Insulation</strong> – Utilizes innovative graphite-sintered EPS insulation panels engineered for superior thermal resistance, maximizing heat transfer to occupied spaces while minimizing energy losses.</li>
                <li>• <strong>Acoustic Performance</strong> – Designed to provide outstanding thermal comfort while significantly reducing impact and structural noise transmission, offering acoustic insulation values of up to 28–37 dB.</li>
                <li>• <strong>Fast and Efficient Installation</strong> – Available with a specialized Velcro® piping guide system that enables tool-free, high-speed installation, reducing labor time and improving project efficiency.</li>
                <li>• <strong>Compatible with Renewable Energy Sources</strong> – Ideal for integration with heat pumps, solar thermal systems, and other sustainable energy technologies.</li>
              </ul>
              <div className="mt-6 border-l-2 border-brand-blue pl-4 py-1">
                <h5 className="font-mono text-sm font-bold text-ink uppercase tracking-wide">Applications</h5>
                <p className="font-body text-sm text-ink-soft leading-relaxed mt-1">Suitable for luxury villas, apartments, offices, hotels, hospitals, schools, retail spaces, and high-performance buildings where superior comfort, energy efficiency, and architectural flexibility are priorities.</p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <img src={floorScreedImg} alt="Radiant floor screed layout" className="border border-line object-cover w-full aspect-[4/3] shadow-sm" />
            </Reveal>
          </Container>
        </section>

        {/* 2. Radiant Ceiling Systems */}
        <section className="py-16 sm:py-24 border-b border-line bg-surface-muted">
          <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal>
              <img src={ceilingCoolingImg} alt="Radiant ceiling panel installation" className="border border-line object-cover w-full aspect-[4/3] shadow-sm" />
            </Reveal>
            
            <Reveal delay={0.1}>
              <h2 className="font-display text-3xl uppercase text-ink mb-6">2. Radiant Ceiling Systems</h2>
              <p className="font-body text-sm leading-relaxed text-ink-soft mb-6">
                Radiant ceiling systems are increasingly becoming the preferred choice for luxury residences, high-end villas, penthouses, and architecturally designed homes where exceptional comfort, aesthetics, and performance are paramount. Integrated seamlessly within ceilings, these systems provide invisible heating and cooling by transforming the ceiling surface into an active thermal element, eliminating the need for visible air-conditioning units, grilles, or bulky ductwork.
              </p>
              <p className="font-body text-sm leading-relaxed text-ink-soft mb-6">
                Considered the gold standard for radiant cooling, ceiling systems gently absorb heat from occupants, furnishings, lighting, and interior surfaces, creating a naturally balanced indoor climate. The result is a level of comfort that closely resembles the pleasant sensation of being in a naturally cool environment, without drafts, noise, or uneven temperatures.
              </p>
              <h4 className="font-mono text-sm font-bold text-brand-red uppercase tracking-widest mb-4">Key Benefits</h4>
              <ul className="font-body text-sm text-ink-soft space-y-3 leading-relaxed">
                <li>• <strong>Luxury Comfort Without Compromise</strong> – Delivers uniform temperatures throughout the home, eliminating hot and cold spots while creating an exceptionally comfortable living environment.</li>
                <li>• <strong>Invisible Climate Control</strong> – Hidden entirely within the ceiling, preserving clean architectural lines, high ceilings, floor-to-ceiling glazing, and premium interior designs without the visual impact of conventional HVAC equipment.</li>
                <li>• <strong>Superior Cooling Performance</strong> – Absorbs heat evenly across the entire room, providing consistent cooling even in large open-plan living spaces and rooms with extensive glass facades.</li>
                <li>• <strong>Rapid Thermal Response</strong> – The low thermal mass of ceiling systems enables quick adjustments to indoor temperatures, ensuring comfort is maintained throughout the day.</li>
                <li>• <strong>Silent Operation</strong> – Operates without fans or moving air, creating a peaceful and luxurious indoor environment free from HVAC noise.</li>
                <li>• <strong>Healthier Indoor Environment</strong> – Significantly reduces air movement, limiting the circulation of dust, allergens, and airborne particles, contributing to improved indoor air quality.</li>
                <li>• <strong>Energy Efficient and Sustainable</strong> – Operates with moderate water temperatures and integrates seamlessly with heat pumps and renewable energy systems, reducing energy consumption while maintaining exceptional comfort.</li>
                <li>• <strong>Ideal for Modern Luxury Architecture</strong> – Particularly suited for contemporary villas featuring open-plan layouts, double-height spaces, large glazing areas, and minimalist interior designs.</li>
              </ul>
              <div className="border-t border-line mt-6 pt-6">
                <h4 className="font-display text-lg uppercase text-ink mb-2">The Preferred Choice for High-End Homes</h4>
                <p className="font-body text-sm text-ink-soft leading-relaxed mb-4">
                  For discerning homeowners, radiant ceiling systems offer a level of comfort that conventional air-conditioning systems cannot match. Instead of feeling cold air blowing through the home, occupants experience a naturally balanced indoor climate with stable temperatures, silent operation, and complete architectural freedom. The result is a sophisticated living environment that combines luxury, wellness, energy efficiency, and cutting-edge building technology.
                </p>
                <h5 className="font-mono text-sm font-bold text-ink uppercase tracking-wide">Applications</h5>
                <p className="font-body text-sm text-ink-soft leading-relaxed mt-1">Luxury villas, premium residences, penthouses, private estates, executive offices, boutique hotels, wellness spaces, and high-performance architectural projects where comfort, elegance, and sustainability are key priorities.</p>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* 3. Radiant Wall Systems */}
        <section className="py-16 sm:py-24 border-b border-line bg-white">
          <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal>
              <h2 className="font-display text-3xl uppercase text-ink mb-6">3. Radiant Wall Systems</h2>
              <p className="font-body text-sm leading-relaxed text-ink-soft mb-6">
                Radiant wall systems offer a sophisticated climate-control solution for luxury residences, private villas, penthouses, spas, and specialty spaces where data protection and architectural elegance are essential. Installed discreetly within wall structures, these systems transform interior surfaces into active heating and cooling elements, delivering exceptional thermal comfort without visible equipment, air diffusers, or intrusive mechanical systems.
              </p>
              <p className="font-body text-sm leading-relaxed text-ink-soft mb-6">
                In Kuwait's luxury residential market, radiant wall systems are often utilized in premium bathrooms, dressing rooms, wellness areas, home spas, prayer rooms, and high-end living spaces where occupants desire the highest levels of comfort and design freedom. They can also be integrated alongside radiant floor and ceiling systems to enhance performance in areas with large glazed facades, double-height spaces, or elevated cooling demands.
              </p>
              <h4 className="font-mono text-sm font-bold text-brand-red uppercase tracking-widest mb-4">Key Benefits</h4>
              <ul className="font-body text-sm text-ink-soft space-y-3 leading-relaxed">
                <li>• <strong>Premium Thermal Comfort</strong> – Provides gentle, even heating and cooling through radiant energy, creating a naturally balanced indoor environment without drafts or temperature fluctuations.</li>
                <li>• <strong>Invisible Integration</strong> – Completely concealed within finished walls, preserving valuable floor and ceiling space while maintaining clean architectural aesthetics.</li>
                <li>• <strong>Ideal for Luxury Bathrooms and Wellness Spaces</strong> – Creates warm, comfortable wall surfaces and enhances occupant comfort in bathrooms, spa facilities, steam room surroundings, and wellness areas.</li>
                <li>• <strong>Enhanced Performance for High-Load Spaces</strong> – Serves as an effective supplementary solution in rooms with extensive glazing, high ceilings, or increased solar heat gain, ensuring consistent comfort throughout the space.</li>
                <li>• <strong>Silent Operation</strong> – Functions without fans or moving air, contributing to a calm, peaceful, and luxurious indoor atmosphere.</li>
                <li>• <strong>Healthier Indoor Environment</strong> – Minimizes air movement and the circulation of dust and allergens, improving indoor air quality and occupant well-being.</li>
                <li>• <strong>Architectural Flexibility</strong> – Particularly suited to modern villas and bespoke residences where maintaining uninterrupted interior design and maximizing usable space are priorities.</li>
                <li>• <strong>Energy Efficient and Sustainable</strong> – Operates efficiently with low-temperature heating and high-temperature cooling water, making it an ideal partner for heat pumps and sustainable building technologies.</li>
              </ul>
              <div className="border-t border-line mt-6 pt-6">
                <h4 className="font-display text-lg uppercase text-ink mb-2">The Perfect Complement to Luxury Living</h4>
                <p className="font-body text-sm text-ink-soft leading-relaxed mb-4">
                  For Kuwait's discerning homeowners, radiant wall systems provide an additional layer of comfort that conventional air-conditioning systems cannot achieve. Whether used independently in intimate spaces or integrated with radiant floors and ceilings as part of a whole-home climate strategy, they deliver exceptional comfort, silent operation, and seamless architectural integration.
                </p>
                <h5 className="font-mono text-sm font-bold text-ink uppercase tracking-wide">Applications</h5>
                <p className="font-body text-sm text-ink-soft leading-relaxed mt-1">Luxury villas, master bathrooms, dressing rooms, private spas, wellness areas, prayer rooms, executive suites, boutique hospitality projects, and premium residential developments where comfort, wellness, and refined design are paramount.</p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <img src={wallPanelsImg} alt="Radiant wall loops detail" className="border border-line object-cover w-full aspect-[4/3] shadow-sm" />
            </Reveal>
          </Container>
        </section>

        {/* Installation Methods */}
        <section className="py-16 sm:py-24 border-b border-line bg-surface-muted">
          <Container>
            <Reveal>
              <h2 className="font-display text-3xl uppercase text-ink mb-4 text-center">Installation Methods: Tailored to Every Project</h2>
              <p className="font-body text-sm text-ink-soft text-center max-w-3xl mx-auto mb-12">
                Whether you are building a new luxury villa, developing a commercial property, or renovating an existing space, hydronic radiant systems can be adapted to suit virtually any construction method and structural requirement. Selecting the appropriate installation profile ensures optimal performance, efficiency, and long-term comfort.
              </p>
            </Reveal>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { 
                  title: 'Wet Systems (Screed-Based)', 
                  desc: 'The most common installation method for new construction projects. Hydronic piping is secured onto insulation panels and fully embedded within a concrete or flowing screed layer, creating a highly efficient thermal mass.', 
                  best: 'New residential and commercial developments, luxury villas, hotels, and high-performance buildings.',
                  advs: ['Excellent thermal stability and comfort.', 'Superior heat storage and gradual heat release.', 'Ideal for large floor areas and open-plan spaces.', 'Long service life with minimal maintenance.', 'Perfect integration with heat pumps and renewable energy systems.']
                },
                { 
                  title: 'Dry Systems (Screed-Free)', 
                  desc: 'A lightweight installation solution that eliminates the need for concrete screeds. Pipes are installed within specially engineered insulation panels featuring aluminum heat-distribution elements to ensure efficient thermal transfer.', 
                  best: 'Projects with structural weight limitations, fast-track construction schedules, and upper-floor installations.',
                  advs: ['Reduced structural load.', 'Faster installation and commissioning.', 'Immediate access to finished floor installation.', 'Rapid heating and cooling response times.', 'Suitable for both residential and commercial applications.']
                },
                { 
                  title: 'Low-Profile Renovation Systems', 
                  desc: 'Designed specifically for retrofit and renovation projects, low-profile systems allow radiant heating and cooling to be installed with minimal impact on existing floor heights. These ultra-thin solutions can often be integrated directly over existing substrates, reducing demolition and construction work.', 
                  best: 'Existing villas, apartment renovations, heritage properties, and refurbishment projects.',
                  advs: ['Minimal floor height increase.', 'Reduced construction time and disruption.', 'Preserves existing architectural elements.', 'Ideal for occupied buildings undergoing renovation.', 'Enables modern comfort without major structural modifications.']
                },
                { 
                  title: 'Modular Wall & Ceiling Systems', 
                  desc: 'Prefabricated radiant panels integrated into plasterboard or drywall assemblies provide a fast and efficient installation solution for walls and ceilings. These systems are particularly effective for radiant cooling and are increasingly popular in luxury residential and commercial interiors.', 
                  best: 'High-end villas, offices, hotels, healthcare facilities, and fast-track interior fit-outs.',
                  advs: ['Quick installation with no drying or curing time.', 'Ideal for radiant cooling applications.', 'Excellent architectural integration.', 'Lightweight and adaptable to modern construction methods.', 'Delivers silent, draft-free comfort while preserving interior aesthetics.']
                }
              ].map((method, i) => (
                <Reveal className="p-6 border border-line bg-white shadow-sm flex flex-col justify-between" delay={i * 0.05} key={i}>
                  <div>
                    <h4 className="font-display text-lg uppercase text-ink mb-3">{method.title}</h4>
                    <p className="font-body text-sm text-ink-soft leading-relaxed mb-4">{method.desc}</p>
                    <div className="mb-4">
                      <span className="font-mono text-sm font-bold text-brand-red uppercase block mb-1">Best For</span>
                      <p className="font-body text-sm text-ink-soft">{method.best}</p>
                    </div>
                  </div>
                  <div className="border-t border-line pt-4 mt-4">
                    <span className="font-mono text-sm font-bold text-brand-blue uppercase block mb-2">Advantages</span>
                    <ul className="font-body text-sm text-ink-soft space-y-1">
                      {method.advs.map((adv, idx) => (
                        <li key={idx}>• {adv}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
            
            <Reveal className="mt-12 text-center">
              <h4 className="font-display text-xl uppercase text-ink mb-4">Choosing the Right Solution</h4>
              <p className="font-body text-sm text-ink-soft max-w-3xl mx-auto leading-relaxed">
                Every project has unique requirements. Factors such as building structure, available floor height, construction timeline, thermal performance targets, and architectural design all influence the selection of the most suitable radiant installation method. By choosing the appropriate system, building owners can achieve exceptional comfort, energy efficiency, and long-term performance while maintaining complete design freedom.
              </p>
            </Reveal>
          </Container>
        </section>

        {/* Controls and Climate Management */}
        <section className="py-16 sm:py-24 bg-brand-black text-white">
          <Container className="grid gap-16 lg:grid-cols-[0.8fr_1fr]">
            <Reveal>
              <span className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-brand-red mb-3 block">System Intelligence</span>
              <h2 className="font-display text-3xl sm:text-4xl uppercase leading-tight mb-8">
                Intelligent Climate Management & Smart Controls
              </h2>
              <div className="font-body text-sm text-white/60 space-y-6 leading-relaxed">
                <p>
                  The performance of a radiant heating and cooling system depends not only on the quality of its installation but also on the intelligence of its control strategy. Advanced control systems ensure optimal comfort, energy efficiency, and reliable operation throughout the year by continuously monitoring and adjusting indoor conditions.
                </p>
                <p>
                  Unlike conventional HVAC systems, radiant solutions manage both heating and cooling through active surfaces. This requires precise control of water temperatures, room conditions, and humidity levels to maintain ideal comfort while preventing condensation during cooling operation.
                </p>
              </div>

              {/* Smart Monitoring */}
              <div className="mt-8 border-t border-white/10 pt-8">
                <h4 className="font-mono text-sm font-bold text-brand-blue uppercase tracking-widest mb-3">Smart Environmental Monitoring</h4>
                <p className="font-body text-sm text-white/50 mb-3">Modern radiant control systems continuously monitor:</p>
                <ul className="grid grid-cols-2 gap-2 font-body text-sm text-white/70">
                  <li>• Indoor air temperature</li>
                  <li>• Relative humidity</li>
                  <li>• Surface temperatures</li>
                  <li>• Occupancy patterns</li>
                  <li>• Outdoor weather conditions</li>
                  <li>• Energy consumption & performance</li>
                </ul>
                <p className="font-body text-sm text-white/50 mt-3">Using real-time data, the system automatically adjusts water flow rates, supply temperatures, and zone settings to maintain consistent comfort in every room.</p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-6">
                <div className="bg-white/5 p-6 border border-white/10">
                  <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-brand-blue">Advanced Humidity & Condensation Protection</h4>
                  <p className="font-body text-sm text-white/60 mt-2 leading-relaxed">
                    In cooling mode, humidity management is critical, particularly in regions with high outdoor temperatures and seasonal humidity variations. Intelligent control systems continuously calculate the dew point and automatically regulate cooling performance to prevent condensation from forming on floors, walls, or ceilings. When required, the system can coordinate with dedicated ventilation and dehumidification equipment to maintain ideal indoor humidity levels while maximizing cooling efficiency.
                  </p>
                </div>

                <div className="bg-white/5 p-6 border border-white/10">
                  <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-brand-blue">Zoned Comfort Control</h4>
                  <p className="font-body text-sm text-white/60 mt-2 leading-relaxed">
                    Every area of a home or building has different comfort requirements. Advanced zoning technology allows independent temperature control for individual rooms or zones, enabling occupants to customize conditions based on usage patterns and personal preferences.
                  </p>
                  <p className="font-body text-sm text-white/55 mt-2">Benefits include: Personalized comfort settings, Reduced energy consumption, Improved operational efficiency, Enhanced occupant satisfaction, Greater control over indoor environments.</p>
                </div>

                <div className="bg-white/5 p-6 border border-white/10">
                  <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-brand-blue">Integration with Modern Building Systems</h4>
                  <p className="font-body text-sm text-white/60 mt-2 leading-relaxed">
                    Radiant control platforms can be integrated with: Home automation systems, Building Management Systems (BMS), Smart thermostats, Heat pumps, Ventilation and fresh-air systems, Renewable energy solutions, Remote monitoring applications. This creates a fully connected indoor climate solution capable of optimizing comfort, efficiency, and energy performance.
                  </p>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Comfort Efficiency Peace of Mind */}
        <section className="py-16 sm:py-24 border-t border-white/10 bg-brand-black text-white text-center">
          <Container className="max-w-4xl">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-5xl uppercase mb-6">Comfort, Efficiency, and Peace of Mind</h2>
              <p className="font-body text-sm sm:text-base text-white/60 leading-relaxed">
                For luxury residences, premium commercial spaces, and high-performance buildings, intelligent controls transform radiant heating and cooling into a truly responsive climate management system. By automatically balancing temperature, humidity, and energy use, advanced controls ensure year-round comfort, silent operation, and maximum system efficiency with minimal user intervention.
              </p>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
