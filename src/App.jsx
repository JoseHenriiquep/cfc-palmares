import { useState } from 'react'
import BenefitsSection from './components/BenefitsSection/BenefitsSection'
import ExpectationsSection from './components/ExpectationsSection/ExpectationsSection'
import FinalCta from './components/FinalCta/FinalCta'
import FloatingWhatsapp from './components/FloatingWhatsapp/FloatingWhatsapp'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import ProofStrip from './components/ProofStrip/ProofStrip'
import RouteSection from './components/RouteSection/RouteSection'
import ServicesSection from './components/ServicesSection/ServicesSection'
import StorySection from './components/StorySection/StorySection'

function App() {
  const [selectedRoute, setSelectedRoute] = useState('primeira')

  const scrollToRoute = () => {
    document.getElementById('rota')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="site-shell">
      <main>
        <Hero onFindRoute={scrollToRoute} />
        <ProofStrip />
        <RouteSection selectedRoute={selectedRoute} onSelectRoute={setSelectedRoute} />
        <BenefitsSection />
        <ServicesSection onSelectRoute={setSelectedRoute} />
        <StorySection />
        <ExpectationsSection />
        <FinalCta />
      </main>

      <Footer />
      <FloatingWhatsapp />
    </div>
  )
}

export default App
