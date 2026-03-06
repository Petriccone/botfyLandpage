import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import type { Language } from '../i18n/translations'

const languages: { code: Language; label: string }[] = [
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
]

export function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleHashClick = (e: React.MouseEvent, id: string) => {
    setMobileOpen(false)
    if (location.pathname === '/') {
      e.preventDefault()
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      e.preventDefault()
      navigate(`/#${id}`)
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-[padding,background-color,border-color,box-shadow] duration-300 ${scrolled ? 'bg-white/[0.97] md:bg-white/95 md:backdrop-blur-xl border-b border-gray-100 py-3 shadow-sm' : 'bg-white/95 md:bg-white/80 md:backdrop-blur-md py-4'}`}>
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 no-underline flex-shrink-0">
          <div
            className="relative w-[34px] h-[34px] rounded-[9px] flex-shrink-0 flex items-center justify-center"
            style={{ background: 'linear-gradient(145deg, #7c3aed, #3a08a2)' }}
          >
            <span className="text-white font-display font-extrabold text-[19px] leading-none select-none">b</span>
            <div className="absolute top-[4px] right-[4px] w-[7px] h-[7px] rounded-full bg-white/30 border border-white/60" />
          </div>
          <span className="font-display font-bold text-[18px] tracking-tight text-text-primary leading-none">botfy</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          <Link
            to="/#capabilities"
            onClick={(e) => handleHashClick(e, 'capabilities')}
            className="px-4 py-2 text-[13px] font-medium text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-gray-50 no-underline"
          >
            {t.nav.product}
          </Link>

          <Link
            to="/#use-cases"
            onClick={(e) => handleHashClick(e, 'use-cases')}
            className="px-4 py-2 text-[13px] font-medium text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-gray-50 no-underline"
          >
            {t.nav.solutions}
          </Link>

          <Link
            to="/#pricing"
            onClick={(e) => handleHashClick(e, 'pricing')}
            className="px-4 py-2 text-[13px] font-medium text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-gray-50 no-underline"
          >
            {t.nav.pricing}
          </Link>

          <Link
            to="/about"
            className="px-4 py-2 text-[13px] font-medium text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-gray-50 no-underline"
          >
            {t.nav.aboutUs}
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Language */}
          <div className="hidden lg:flex items-center gap-3 border-r border-gray-200 pr-4 mr-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`cursor-pointer text-[11px] font-bold tracking-widest transition-colors ${language === lang.code ? 'text-text-primary' : 'text-text-muted hover:text-text-secondary'}`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <a
            href="/login"
            className="no-underline hidden lg:inline-flex"
          >
            <span className="text-[13px] font-medium text-text-secondary hover:text-text-primary transition-colors cursor-pointer px-3">
              {t.nav.login}
            </span>
          </a>

          <a
            href="/register"
            className="no-underline inline-flex items-center h-9 px-5 rounded-full bg-accent-purple text-white hover:bg-accent-purple/90 text-[12px] font-bold transition-[background-color] duration-200 shadow-md shadow-brand-primary/30"
          >
            {t.nav.startFreeTrial}
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="cursor-pointer inline-flex items-center justify-center p-2 text-text-secondary hover:text-text-primary lg:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col gap-5 lg:hidden shadow-lg max-h-[calc(100dvh-64px)] overflow-y-auto">
          <div className="flex flex-col gap-1">
            <Link
              to="/#capabilities"
              onClick={(e) => handleHashClick(e, 'capabilities')}
              className="px-4 py-3 text-base font-medium text-text-secondary no-underline rounded-xl hover:bg-gray-50"
            >
              {t.nav.product}
            </Link>
            <Link
              to="/#use-cases"
              onClick={(e) => handleHashClick(e, 'use-cases')}
              className="px-4 py-3 text-base font-medium text-text-secondary no-underline rounded-xl hover:bg-gray-50"
            >
              {t.nav.solutions}
            </Link>
            <Link
              to="/#pricing"
              onClick={(e) => handleHashClick(e, 'pricing')}
              className="px-4 py-3 text-base font-medium text-text-secondary no-underline rounded-xl hover:bg-gray-50"
            >
              {t.nav.pricing}
            </Link>
            <Link
              to="/about"
              className="px-4 py-3 text-base font-medium text-text-secondary no-underline rounded-xl hover:bg-gray-50"
              onClick={() => setMobileOpen(false)}
            >
              {t.nav.aboutUs}
            </Link>
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`cursor-pointer text-sm font-bold tracking-widest ${language === lang.code ? 'text-text-primary' : 'text-text-muted'}`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <a href="/register" className="no-underline flex items-center justify-center w-full h-12 rounded-xl bg-accent-purple text-white text-sm font-bold">
              {t.nav.startFreeTrial}
            </a>
            <a href="/login" className="no-underline flex items-center justify-center w-full h-12 rounded-xl border border-gray-200 text-text-primary text-sm font-medium">
              {t.nav.login}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
