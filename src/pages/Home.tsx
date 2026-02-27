import { HeroKommo } from '../components/HeroKommo'
import { LovedBySection } from '../components/LovedBySection'
import { SolutionsTabs } from '../components/SolutionsTabs'
import { StepsTimeline } from '../components/StepsTimeline'
import { ChannelsSection } from '../components/ChannelsSection'
import { WhyBotfyGrid } from '../components/WhyBotfyGrid'
import { TestimonialsKommo } from '../components/TestimonialsKommo'
import { Pricing } from '../components/Pricing'
import { FAQSection } from '../components/FAQSection'
import { CTASection } from '../components/CTASection'

export function Home() {
  return (
    <>
      <HeroKommo />
      <LovedBySection />
      <SolutionsTabs />
      <StepsTimeline />
      <ChannelsSection />
      <WhyBotfyGrid />
      <TestimonialsKommo />
      <Pricing />
      <FAQSection />
      <CTASection />
    </>
  )
}
