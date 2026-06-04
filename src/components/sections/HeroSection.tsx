import { Container } from '../layout/Container'
import { Reveal } from '../ui/Reveal'

export function HeroSection() {
  return (
    <section className="bg-brand-black text-white">
      <Container className="flex min-h-[330px] flex-col items-center justify-center py-24 text-center sm:min-h-[470px] sm:py-32 lg:min-h-[620px]">
        <Reveal>
          <h1 className="max-w-5xl font-display text-hero uppercase">
            Engineering The Future
            <br />
            Of Industry
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-7 max-w-[520px] text-center font-body text-sm leading-5 text-white/80 sm:text-sm">
            One World United is a premier construction, maintenance, and management powerhouse in Kuwait. Delivering elite-performance engineering solutions since 2007.
          </p>
        </Reveal>
        <Reveal delay={0.22}>
          <div className="mt-20 flex flex-col items-center gap-4 sm:mt-28">
            <span className="font-mono text-sm font-bold uppercase tracking-[0.28em] text-white">Scroll To Explore</span>
            <span className="h-12 w-px bg-brand-blue" aria-hidden />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
