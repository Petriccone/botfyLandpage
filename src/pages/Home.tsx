import { HeroKommo } from '../components/HeroKommo'
import { LovedBySection } from '../components/LovedBySection'
import { KommoAlternatingSections } from '../components/KommoAlternatingSections'
import { UniqueWaySection } from '../components/UniqueWaySection'
import { StepsTimeline } from '../components/StepsTimeline'
import { Pricing } from '../components/Pricing'
import { TestimonialsKommo } from '../components/TestimonialsKommo'
import { CTASection } from '../components/CTASection'

export function Home() {
  return (
    <>
      <HeroKommo />
      <LovedBySection />
      <KommoAlternatingSections />
      <UniqueWaySection />
      <StepsTimeline />
      <Pricing />
      <TestimonialsKommo />
      <CTASection />
    </>
  )
}
