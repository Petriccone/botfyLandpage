import { Hero } from '../components/Hero'
// Vercel deployment trigger
import { PainPoints } from '../components/PainPoints'
import { SolutionSection } from '../components/SolutionSection'
import { StepsTimeline } from '../components/StepsTimeline'
import { AfterActivate } from '../components/AfterActivate'
import { WhyBotfy } from '../components/WhyBotfy'
import { SecurityScale } from '../components/SecurityScale'
import { Pricing } from '../components/Pricing'
import { VisionSection } from '../components/VisionSection'
import { CTASection } from '../components/CTASection'

export function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <SolutionSection />
      <StepsTimeline />
      <AfterActivate />
      <WhyBotfy />
      <SecurityScale />
      <Pricing />
      <VisionSection />
      <CTASection />
    </>
  )
}
