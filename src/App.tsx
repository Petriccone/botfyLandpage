import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import { LanguageContext } from './hooks/useLanguage'
import { translations } from './i18n/translations'
import type { Language } from './i18n/translations'
import { getPreferredLanguage } from './utils/locale'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

function ScrollToHash() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (pathname === '/' && hash) {
      const id = hash.slice(1)
      const el = document.getElementById(id)
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
    }
  }, [pathname, hash])
  return null
}

export default function App() {
  const [language, setLanguage] = useState<Language>(getPreferredLanguage)

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      <MotionConfig reducedMotion={isMobile ? 'always' : 'user'}>
        <BrowserRouter>
          <div className="min-h-screen bg-background text-white">
            <ScrollToHash />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </MotionConfig>
    </LanguageContext.Provider>
  )
}
