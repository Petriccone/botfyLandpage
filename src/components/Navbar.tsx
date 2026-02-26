import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/Button'
import { useLanguage } from '../hooks/useLanguage'
import type { Language } from '../i18n/translations'

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'pt', label: 'PT' },
  { code: 'es', label: 'ES' },
]

const hashLinks = [
  { labelKey: 'howItWorks' as const, to: '/#how-it-works', id: 'how-it-works' },
  { labelKey: 'solution' as const, to: '/#solution', id: 'solution' },
  { labelKey: 'pricing' as const, to: '/#pricing', id: 'pricing' },
]

export function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleHashClick = (e: React.MouseEvent, to: string, id: string) => {
    setMobileOpen(false)
    if (location.pathname === '/') {
      e.preventDefault()
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      e.preventDefault()
      navigate(to)
    }
  }

  const navLabel = (key: 'howItWorks' | 'solution' | 'pricing') => t.nav[key]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3 no-underline">
          <div className="w-8 h-8 rounded-lg bg-accent-purple flex items-center justify-center font-bold text-white text-lg shadow-md">B</div>
          <span className="text-xl font-display font-bold tracking-tight uppercase text-text-primary">Botfy</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {hashLinks.map((link) => (
            <Link
              key={link.id}
              to={link.to}
              onClick={(e) => handleHashClick(e, link.to, link.id)}
              className="text-[13px] font-medium text-text-secondary transition-colors hover:text-text-primary no-underline"
            >
              {navLabel(link.labelKey)}
            </Link>
          ))}
          <Link
            to="/about"
            className="text-[13px] font-medium text-text-secondary transition-colors hover:text-text-primary no-underline"
          >
            {t.nav.aboutUs}
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden items-center md:flex gap-4 mr-4">
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

          <a href="https://botfyai.vercel.app/login" target="_blank" rel="noopener noreferrer" className="no-underline hidden sm:inline-flex">
            <span className="text-[13px] font-medium text-text-secondary hover:text-text-primary transition-colors cursor-pointer px-4">
              {t.nav.login}
            </span>
          </a>

          <a href="https://botfyai.vercel.app/register" target="_blank" rel="noopener noreferrer" className="no-underline">
            <Button className="h-10 px-6 rounded-full bg-accent-purple text-white hover:bg-accent-purple/90 text-xs font-bold transition-all shadow-md">
              {t.nav.startFreeTrial}
            </Button>
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center p-2 text-text-secondary hover:text-text-primary md:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-8 flex flex-col gap-6 md:hidden shadow-lg">
          <div className="flex flex-col gap-4">
            {hashLinks.map((link) => (
              <Link
                key={link.id}
                to={link.to}
                onClick={(e) => handleHashClick(e, link.to, link.id)}
                className="text-lg font-medium text-text-secondary no-underline"
              >
                {navLabel(link.labelKey)}
              </Link>
            ))}
            <Link
              to="/about"
              className="text-lg font-medium text-text-secondary no-underline"
              onClick={() => setMobileOpen(false)}
            >
              {t.nav.aboutUs}
            </Link>
          </div>
          <div className="flex gap-4 pt-4 border-t border-gray-100">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`text-sm font-bold tracking-widest ${language === lang.code ? 'text-text-primary' : 'text-text-muted'}`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
