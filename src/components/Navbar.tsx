import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: t.nav.howItWorks, href: '/#how-it-works' },
    { label: t.nav.pricing, href: '/#pricing' },
    { label: t.nav.aboutUs, href: '/about' },
  ]

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
      <nav
        className={`
          flex items-center justify-between w-full max-w-4xl px-6 py-3
          rounded-[2.5rem] transition-all duration-500 ease-out
          ${scrolled
            ? 'bg-primary/80 backdrop-blur-xl border border-white/10 shadow-2xl'
            : 'bg-transparent border border-transparent'}
        `}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105">
          <span className={`
            font-heading font-black text-xl tracking-tighter
            ${scrolled ? 'text-background' : 'text-primary'}
          `}>
            botfy<span className="text-accent">.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`
                px-4 py-2 text-[13px] font-medium tracking-tight rounded-full transition-all
                ${scrolled
                  ? 'text-background/70 hover:text-background hover:bg-white/5'
                  : 'text-primary/70 hover:text-primary hover:bg-primary/5'}
              `}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Lang Switch */}
          <div className="hidden sm:flex items-center gap-2 mr-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`
                  text-[10px] font-mono font-bold tracking-widest transition-colors
                  ${language === lang.code
                    ? (scrolled ? 'text-accent' : 'text-accent')
                    : (scrolled ? 'text-background/40 hover:text-background/60' : 'text-primary/40 hover:text-primary/60')}
                `}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <a
            href="https://botfyai.vercel.app/register"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-button group h-10 px-6 flex items-center justify-center bg-accent text-primary font-bold text-[13px] transition-all"
          >
            <span className="bg-layer !bg-primary"></span>
            <span className="text-layer group-hover:text-background transition-colors duration-400">
              {t.nav.startFreeTrial}
            </span>
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-full transition-colors ${scrolled ? 'text-background hover:bg-white/10' : 'text-primary hover:bg-primary/5'}`}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-20 left-6 right-6 bg-primary rounded-[2rem] p-8 shadow-3xl border border-white/5 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-drama italic text-background/80 hover:text-background transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="h-[1px] bg-white/10 w-full my-2" />
            <div className="flex items-center gap-6">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => { setLanguage(lang.code); setMobileOpen(false) }}
                  className={`text-sm font-mono tracking-widest ${language === lang.code ? 'text-accent' : 'text-background/40'}`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
