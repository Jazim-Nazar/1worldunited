import weldingImage from '../../assets/images/portfolio-welding.png'
import { Container } from '../layout/Container'
import { SectionEyebrow } from '../ui/SectionEyebrow'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

export function AboutSection() {
  return (
    <section aria-labelledby="about-heading" className="bg-white py-section-sm sm:py-section" id="about">
      <Container className="grid items-center gap-12 lg:grid-cols-[1fr_0.82fr] lg:gap-16">
        <div>
          <Reveal>
            <SectionEyebrow color="red">Established 2007</SectionEyebrow>
            <SectionHeading id="about-heading">
              Pioneering
              <br />
              <span className="text-brand-blue">Industrial Excellence</span>
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 max-w-2xl space-y-5 font-body text-sm leading-7 text-ink-soft">
            <p>
              One World United General Trading & Contracting Co. W.L.L. is a veteran construction, maintenance, and management company in Kuwait. We are committed to providing services with immediate quality assurance, delivering elite-performance infrastructure compliant with API, ASME, and ISO standards.
            </p>
            <p>
              Our strength lies in our team of dedicated professionals. Combined with continuous technical mastery, we provide our clients with optimized solutions for complex construction, specialized engineering, and maintenance needs across industrial and commercial sectors.
            </p>
          </Reveal>
        </div>
        <div className="relative ml-auto w-full max-w-[520px]">
          <div className="absolute -right-5 -top-5 h-28 w-28 border border-brand-blue/30 bg-brand-blue/5" aria-hidden />
          <div className="absolute -bottom-5 -left-5 h-28 w-40 border border-line bg-white" aria-hidden />
          <img
            alt="Industrial technician working with high-pressure equipment"
            className="relative z-10 aspect-[4/5] w-full object-cover"
            height="650"
            loading="lazy"
            src={weldingImage}
            width="520"
          />
        </div>
      </Container>
    </section>
  )
}
