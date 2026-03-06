import { HeroKommo } from '../components/HeroKommo'
import { LovedBySection } from '../components/LovedBySection'
import { ProblemSection } from '../components/ProblemSection'
import { WhatIsBotfy } from '../components/WhatIsBotfy'
import { Capabilities } from '../components/Capabilities'
import { GlobeSection } from '../components/3d/globe/GlobeSection'
import { StepsTimeline } from '../components/StepsTimeline'
import { ComparisonTable } from '../components/ComparisonTable'
import { TestimonialsKommo } from '../components/TestimonialsKommo'
import { Pricing } from '../components/Pricing'
import { FAQSection } from '../components/FAQSection'
import { CTASection } from '../components/CTASection'

export function Home() {
  return (
    <>
      <HeroKommo />
      <LovedBySection />
      <ProblemSection />
      <WhatIsBotfy />
      <Capabilities />
      <GlobeSection />
      <StepsTimeline />
      <ComparisonTable />
      <TestimonialsKommo />
      <Pricing />
      <FAQSection />
      <CTASection />
    </>
  )
}
