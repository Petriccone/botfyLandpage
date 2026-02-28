import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown, Bot, LayoutDashboard, Inbox, BookOpen, ShoppingBag, Building2, HeartPulse, GraduationCap } from 'lucide-react'
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
  const [productOpen, setProductOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const productRef = useRef<HTMLDivElement>(null)
  const solutionsRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (productRef.current && !productRef.current.contains(e.target as Node)) setProductOpen(false)
      if (solutionsRef.current && !solutionsRef.current.contains(e.target as Node)) setSolutionsOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleHashClick = (e: React.MouseEvent, id: string) => {
    setMobileOpen(false)
    setProductOpen(false)
    setSolutionsOpen(false)
    if (location.pathname === '/') {
      e.preventDefault()
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      e.preventDefault()
      navigate(`/#${id}`)
    }
  }

  const productItems = [
    { icon: Bot, label: { en: 'AI Agents', pt: 'Agentes IA', es: 'Agentes IA' }, id: 'how-it-works' },
    { icon: LayoutDashboard, label: { en: 'Dashboard', pt: 'Dashboard', es: 'Dashboard' }, id: 'how-it-works' },
    { icon: Inbox, label: { en: 'Omnichannel Inbox', pt: 'Inbox Omnichannel', es: 'Inbox Omnicanal' }, id: 'how-it-works' },
    { icon: BookOpen, label: { en: 'AI Training', pt: 'Treinamento IA', es: 'Entrenamiento IA' }, id: 'how-it-works' },
  ]

  const solutionItems = [
    { icon: ShoppingBag, label: { en: 'Retail & E-commerce', pt: 'Varejo & E-commerce', es: 'Retail & E-commerce' } },
    { icon: Building2, label: { en: 'Real Estate', pt: 'Imóveis', es: 'Inmobiliaria' } },
    { icon: HeartPulse, label: { en: 'Health & Wellness', pt: 'Saúde & Bem-estar', es: 'Salud & Bienestar' } },
    { icon: GraduationCap, label: { en: 'Education', pt: 'Educação', es: 'Educación' } },
  ]

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

          {/* Product Dropdown */}
          <div ref={productRef} className="relative">
            <button
              onClick={() => { setProductOpen(!productOpen); setSolutionsOpen(false) }}
              className="cursor-pointer flex items-center gap-1 px-4 py-2 text-[13px] font-medium text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-gray-50"
            >
              {t.nav.product}
              <ChevronDown size={14} className={`transition-transform duration-200 ${productOpen ? 'rotate-180' : ''}`} />
            </button>
            {productOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-50">
                {productItems.map((item) => (
                  <Link
                    key={item.label.en}
                    to={`/#${item.id}`}
                    onClick={(e) => handleHashClick(e, item.id)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] text-text-secondary hover:text-text-primary hover:bg-gray-50 transition-colors no-underline"
                  >
                    <item.icon size={15} className="text-accent-purple flex-shrink-0" />
                    {item.label[language]}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div ref={solutionsRef} className="relative">
            <button
              onClick={() => { setSolutionsOpen(!solutionsOpen); setProductOpen(false) }}
              className="cursor-pointer flex items-center gap-1 px-4 py-2 text-[13px] font-medium text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-gray-50"
            >
              {t.nav.solutions}
              <ChevronDown size={14} className={`transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
            </button>
            {solutionsOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-50">
                {solutionItems.map((item) => (
                  <button
                    key={item.label.en}
                    onClick={() => setSolutionsOpen(false)}
                    className="cursor-pointer w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] text-text-secondary hover:text-text-primary hover:bg-gray-50 transition-colors text-left"
                  >
                    <item.icon size={15} className="text-accent-purple flex-shrink-0" />
                    {item.label[language]}
                  </button>
                ))}
              </div>
            )}
          </div>

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
            href="https://botfyai.vercel.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hidden lg:inline-flex"
          >
            <span className="text-[13px] font-medium text-text-secondary hover:text-text-primary transition-colors cursor-pointer px-3">
              {t.nav.login}
            </span>
          </a>

          <a
            href="https://botfyai.vercel.app/register"
            target="_blank"
            rel="noopener noreferrer"
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
              to="/#how-it-works"
              onClick={(e) => handleHashClick(e, 'how-it-works')}
              className="px-4 py-3 text-base font-medium text-text-secondary no-underline rounded-xl hover:bg-gray-50"
            >
              {t.nav.howItWorks}
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
            <a href="https://botfyai.vercel.app/register" target="_blank" rel="noopener noreferrer" className="no-underline flex items-center justify-center w-full h-12 rounded-xl bg-accent-purple text-white text-sm font-bold">
              {t.nav.startFreeTrial}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
