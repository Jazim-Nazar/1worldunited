import { stats } from '../../constants/site'
import { cn } from '../../utils/cn'
import { Container } from '../layout/Container'
import { CountUpNumber } from '../ui/CountUpNumber'
import { Reveal } from '../ui/Reveal'

export function StatsSection() {
  return (
    <section className="bg-surface-muted py-16 sm:py-24" aria-label="Company statistics">
      <Container className="grid gap-5 sm:grid-cols-3">
        {stats.map((stat, index) => (
          <Reveal delay={index * 0.08} key={stat.label}>
            <article className="bg-white px-6 py-10 text-center shadow-hard">
            <strong className={cn('block font-display text-stat font-normal', stat.accent === 'red' ? 'text-brand-red' : 'text-ink')}>
              <CountUpNumber end={Number.parseInt(stat.value, 10)} />
            </strong>
            <p className="mt-4 font-mono text-label font-bold uppercase text-ink">{stat.label}</p>
            </article>
          </Reveal>
        ))}
      </Container>
    </section>
  )
}
