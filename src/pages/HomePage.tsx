import { Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/Navbar'
import { AboutSection } from '../components/sections/AboutSection'
import { HeroSection } from '../components/sections/HeroSection'
import { PartnerStrip } from '../components/sections/PartnerStrip'
import { PortfolioSection } from '../components/sections/PortfolioSection'
import { ServicesSection } from '../components/sections/ServicesSection'
import { StatsSection } from '../components/sections/StatsSection'

export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ServicesSection />
        <PortfolioSection />
        <PartnerStrip />
      </main>
      <Footer />
    </>
  )
}
