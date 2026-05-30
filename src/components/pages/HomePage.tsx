import { Footer } from '../layout/Footer'
import { Navbar } from '../layout/Navbar'
import { AboutSection } from '../home/AboutSection'
import { ContactSection } from '../home/ContactSection'
import { HeroSection } from '../home/HeroSection'
import { ProjectsSection } from '../home/ProjectsSection'
import { ServiceSection } from '../home/ServiceSection'

export function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <ServiceSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}