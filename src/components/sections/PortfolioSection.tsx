import { portfolioItems } from '../../constants/site'
import { Container } from '../layout/Container'
import { Reveal } from '../ui/Reveal'
import { SectionEyebrow } from '../ui/SectionEyebrow'
import { SectionHeading } from '../ui/SectionHeading'

const portfolioLinks: Record<string, string> = {
  'High-Pressure Systems': '#/services/pressure-testing',
  'Access Floor Systems': '#/services/raised-flooring',
  'Radiant HVAC Solutions': '#/services/radiant-climate',
  'Smart Glass Glazing': '#/services/smart-glass',
}

export function PortfolioSection() {
  return (
    <section aria-labelledby="portfolio-heading" className="bg-white pb-section-sm pt-12 sm:pb-section">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <Reveal>
            <SectionEyebrow color="red">Services Showcase</SectionEyebrow>
            <SectionHeading id="portfolio-heading">Core Industrial Systems</SectionHeading>
          </Reveal>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioItems.map((item, index) => (
            <Reveal delay={index * 0.08} key={item.title}>
              <a
                href={portfolioLinks[item.title] || '#/'}
                className="group block relative overflow-hidden bg-surface-muted focus:outline-none focus:ring-2 focus:ring-brand-blue border border-line"
              >
                <article aria-label={`${item.title}: ${item.description}`}>
                  <img
                    alt={item.alt}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    height="650"
                    loading="lazy"
                    src={item.image}
                    width="520"
                  />
                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-brand-black/90 p-6 text-white transition-transform duration-300 group-hover:translate-y-0 group-focus:translate-y-0">
                    <h3 className="font-display text-2xl uppercase leading-none">{item.title}</h3>
                    <p className="mt-3 font-body text-sm leading-5 text-white/75">{item.description}</p>
                    <span className="inline-block mt-4 font-mono text-sm font-bold uppercase tracking-wider text-brand-blue group-hover:text-white transition-colors">
                      Learn More & Specs →
                    </span>
                  </div>
                </article>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

