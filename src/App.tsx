import { useState, useEffect } from 'react'
import { LanguageContext } from './hooks/useLanguage'
import { translations } from './i18n/translations'
import type { Language } from './i18n/translations'
import { getPreferredLanguage } from './utils/locale'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { PainPoints } from './components/PainPoints'
import { Platform } from './components/Platform'
import { FeaturesGrid } from './components/FeaturesGrid'
import { StepsTimeline } from './components/StepsTimeline'
import { SecurityScale } from './components/SecurityScale'
import { Pricing } from './components/Pricing'
import { CTASection } from './components/CTASection'
import { Footer } from './components/Footer'

export default function App() {
  const [language, setLanguage] = useState<Language>(getPreferredLanguage)

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      <div className="min-h-screen bg-[#0a0a1a] text-white">
        <Navbar />
        <Hero />
        <PainPoints />
        <Platform />
        <FeaturesGrid />
        <StepsTimeline />
        <SecurityScale />
        <Pricing />
        <CTASection />
        <Footer />
      </div>
    </LanguageContext.Provider>
  )
}
