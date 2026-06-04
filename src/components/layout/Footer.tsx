import { Globe2, Mail } from 'lucide-react'
import { footerColumns } from '../../constants/site'
import { Container } from './Container'
import { LogoLockup } from './LogoLockup'

export function Footer() {
  return (
    <footer className="bg-brand-black py-14 text-white" id="contact">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <LogoLockup inverted />
            <p className="mt-5 max-w-sm font-body text-xs leading-5 text-white/45">General Trading & Contracting Co. W.L.L.</p>
            <div className="mt-8 flex gap-2">
              <a aria-label="Instagram" className="grid size-9 place-items-center border border-white/20 text-white/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-blue" href="#">
                <Mail aria-hidden size={15} />
              </a>
              <a aria-label="Website" className="grid size-9 place-items-center border border-white/20 text-white/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-blue" href="#">
                <Globe2 aria-hidden size={15} />
              </a>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {footerColumns.map((column) => {
              const Icon = column.icon
              return (
                <section key={column.title}>
                  <h2 className="font-mono text-label font-bold uppercase text-brand-blue">{column.title}</h2>
                  <div className="mt-4 space-y-2 font-body text-xs leading-5 text-white/75">
                    {column.lines.map((line) => (
                      <p className="flex gap-2" key={line}>
                        {Icon ? <Icon aria-hidden className="mt-0.5 shrink-0 text-white/45" size={13} /> : null}
                        <span>{line}</span>
                      </p>
                    ))}
                  </div>
                </section>
              )
            })}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 font-mono text-[9px] uppercase tracking-[0.12em] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 One World United. Engineered Excellence Reserved.</p>
          <div className="flex gap-5">
            <a className="hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-blue" href="#">Privacy Policy</a>
            <a className="hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-blue" href="#">Legal Notice</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
