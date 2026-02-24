import { Hero } from '../components/Hero'
import { TrustCloud } from '../components/TrustCloud'
import { BentoFeatures } from '../components/BentoFeatures'
import { StepsTimeline } from '../components/StepsTimeline'
import { SecurityScale } from '../components/SecurityScale'
import { Pricing } from '../components/Pricing'
import { CTASection } from '../components/CTASection'

export function Home() {
  return (
    <>
      <Hero />
      <TrustCloud />
      <BentoFeatures />
      <StepsTimeline />
      <SecurityScale />
      <Pricing />
      <CTASection />
    </>
  )
}
