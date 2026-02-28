import { HeroKommo } from '../components/HeroKommo'
import { LovedBySection } from '../components/LovedBySection'
import { FeaturesCinematic } from '../components/FeaturesCinematic'
import { PhilosophyManifesto } from '../components/PhilosophyManifesto'
import { ProtocolStack } from '../components/ProtocolStack'
import { TestimonialsKommo } from '../components/TestimonialsKommo'
import { Pricing } from '../components/Pricing'
import { FAQSection } from '../components/FAQSection'
import { CTASection } from '../components/CTASection'

export function Home() {
  return (
    <>
      <HeroKommo />
      <LovedBySection />
      <FeaturesCinematic />
      <PhilosophyManifesto />
      <ProtocolStack />
      <TestimonialsKommo />
      <Pricing />
      <FAQSection />
      <CTASection />
    </>
  )
}
