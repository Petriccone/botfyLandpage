import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/Button'
import { useLanguage } from '../hooks/useLanguage'
import type { Language } from '../i18n/translations'

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'pt', label: 'PT' },
  { code: 'es', label: 'ES' },
]

export function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: t.nav.platform, href: '#platform' },
    { label: t.nav.features, href: '#features' },
    { label: t.nav.pricing, href: '#pricing' },
    { label: t.nav.company, href: '#security' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#0a0a1a]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo: robô + Botfy juntos */}
        <a href="#" className="flex items-center gap-1.5 shrink-0 [&_img]:shrink-0">
          <img
            src="/botfy-logo-robot.png"
            alt=""
            className="h-12 w-auto object-contain"
            aria-hidden
          />
          <span className="whitespace-nowrap leading-none"><span className="logo-botfy-bot">Bot</span><span className="logo-botfy-fy">fy</span></span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-4 py-2 text-sm text-gray-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <div className="hidden items-center rounded-lg border border-white/10 sm:flex">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`cursor-pointer px-3 py-1.5 text-xs font-medium transition-colors ${
                  language === lang.code
                    ? 'bg-white/10 text-white'
                    : 'text-gray-500 hover:text-gray-300'
                } ${lang.code === 'en' ? 'rounded-l-lg' : ''} ${lang.code === 'es' ? 'rounded-r-lg' : ''}`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <Button variant="ghost" size="sm" className="hidden md:inline-flex text-gray-400 hover:text-white">
            {t.nav.login}
          </Button>

          <a href="https://botfyai.vercel.app/register" target="_blank" rel="noopener noreferrer" className="no-underline">
            <Button variant="primary" size="sm">
              {t.nav.startFreeTrial}
            </Button>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white md:hidden cursor-pointer"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/[0.06] bg-[#0a0a1a]/95 backdrop-blur-xl md:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-md px-3 py-2 text-sm text-gray-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-2 pt-3">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`cursor-pointer rounded-md px-3 py-1.5 text-xs font-medium ${
                    language === lang.code ? 'bg-white/10 text-white' : 'text-gray-500'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
