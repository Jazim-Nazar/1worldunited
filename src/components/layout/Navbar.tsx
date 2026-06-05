import { ChevronDown, Menu, X } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { navItems, dropdownServices } from '../../constants/site'
import { Container } from './Container'
import { LogoLockup } from './LogoLockup'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Desktop smooth scroll click interceptor
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const isHomePage = !window.location.hash.startsWith('#/services/')

    if (href === '#/') {
      if (isHomePage) {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
        window.history.pushState(null, '', '#/')
      }
    } else if (href.startsWith('#/#')) {
      const sectionId = href.split('#/#')[1]
      if (isHomePage) {
        e.preventDefault()
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          window.history.pushState(null, '', `#/#${sectionId}`)
        }
      }
    }
  }

  // Mobile smooth scroll click interceptor (closes drawer)
  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileOpen(false)
    const isHomePage = !window.location.hash.startsWith('#/services/')

    if (href === '#/') {
      if (isHomePage) {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
        window.history.pushState(null, '', '#/')
      }
    } else if (href.startsWith('#/#')) {
      const sectionId = href.split('#/#')[1]
      if (isHomePage) {
        e.preventDefault()
        const element = document.getElementById(sectionId)
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }, 150) // Small delay to let the drawer close transition start
          window.history.pushState(null, '', `#/#${sectionId}`)
        }
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-md" id="home">
      <Container className="flex h-16 items-center justify-between gap-4">
        <LogoLockup />
        
        {/* Desktop Navigation */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            if (item.label === 'Services') {
              return (
                <div 
                  className="relative" 
                  key={item.label}
                  ref={dropdownRef}
                >
                  <button
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                    className="flex items-center gap-1.5 font-mono text-xs md:text-[13px] font-bold uppercase tracking-[0.12em] text-ink transition hover:text-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    type="button"
                  >
                    Services
                    <ChevronDown 
                      className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} 
                      size={12} 
                    />
                  </button>

                  {/* Dropdown Menu Card */}
                  {dropdownOpen && (
                    <div 
                      className="absolute left-1/2 top-full mt-2 w-[480px] -translate-x-1/2 border border-line bg-white p-5 shadow-xl transition-all duration-200 animate-in fade-in slide-in-from-top-2"
                      role="menu"
                    >
                      <div className="grid gap-4">
                        {dropdownServices.map((service) => (
                          <a
                            className="group flex gap-4 p-2.5 transition hover:bg-surface-muted focus:outline-none focus:bg-surface-muted"
                            href={service.href}
                            key={service.id}
                            role="menuitem"
                            onClick={() => setDropdownOpen(false)}
                          >
                            <span className="font-mono text-sm font-bold text-brand-blue group-hover:text-brand-red transition-colors">
                              {service.id}
                            </span>
                            <div className="flex flex-col gap-1">
                              <span className="font-display text-sm uppercase tracking-wider text-ink group-hover:text-brand-blue transition-colors">
                                {service.title}
                              </span>
                              <span className="font-body text-sm text-ink-muted">
                                {service.description}
                              </span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            }

            return (
              <a
                className="relative font-mono text-xs md:text-[13px] font-bold uppercase tracking-[0.12em] text-ink transition hover:text-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
                href={item.href}
                key={item.label}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          aria-controls="mobile-menu"
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
          className="grid size-10 place-items-center border border-line text-ink focus:outline-none focus:ring-2 focus:ring-brand-blue md:hidden"
          onClick={() => setMobileOpen((value) => !value)}
          type="button"
        >
          {mobileOpen ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
        </button>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <nav 
          aria-label="Mobile navigation" 
          className="border-t border-line bg-white md:hidden max-h-[calc(100vh-4rem)] overflow-y-auto" 
          id="mobile-menu"
        >
          <Container className="grid gap-1 py-4">
            {navItems.map((item) => {
              if (item.label === 'Services') {
                return (
                  <div className="grid border-b border-line/50 pb-2" key={item.label}>
                    <button
                      className="flex w-full items-center justify-between py-3.5 text-left font-mono text-sm font-bold uppercase tracking-[0.12em] text-ink"
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      type="button"
                    >
                      Services
                      <ChevronDown 
                        className={`transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`} 
                        size={14} 
                      />
                    </button>
                    {mobileDropdownOpen && (
                      <div className="pl-4 grid gap-1 border-l-2 border-brand-blue/30 bg-surface-muted/30 mt-1">
                        {dropdownServices.map((service) => (
                          <a
                            className="flex flex-col py-2.5 pr-3"
                            href={service.href}
                            key={service.id}
                            onClick={() => {
                              setMobileOpen(false)
                              setMobileDropdownOpen(false)
                            }}
                          >
                            <span className="font-display text-[13px] uppercase tracking-wide text-ink">
                              {service.title}
                            </span>
                            <span className="font-body text-sm text-ink-muted leading-relaxed mt-0.5">
                              {service.description}
                            </span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <a
                  className="border-b border-line/50 py-4 font-mono text-sm font-bold uppercase tracking-[0.12em] text-ink"
                  href={item.href}
                  key={item.label}
                  onClick={(e) => handleMobileNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              )
            })}
          </Container>
        </nav>
      )}
    </header>
  )
}
