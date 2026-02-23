import { Hero } from '../components/Hero'
import { PainPoints } from '../components/PainPoints'
import { Platform } from '../components/Platform'
import { FeaturesGrid } from '../components/FeaturesGrid'
import { StepsTimeline } from '../components/StepsTimeline'
import { SecurityScale } from '../components/SecurityScale'
import { Pricing } from '../components/Pricing'
import { CTASection } from '../components/CTASection'

export function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <Platform />
      <FeaturesGrid />
      <StepsTimeline />
      <SecurityScale />
      <Pricing />
      <CTASection />
    </>
  )
}
