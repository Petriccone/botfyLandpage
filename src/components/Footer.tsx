import { Link } from 'react-router-dom'
import { Shield, CheckCircle } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">

        {/* Main grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 mb-14">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2.5 no-underline mb-5">
              <div
                className="relative w-[34px] h-[34px] rounded-[9px] flex-shrink-0 flex items-center justify-center"
                style={{ background: 'linear-gradient(145deg, #7c3aed, #3a08a2)' }}
              >
                <span className="text-white font-display font-extrabold text-[19px] leading-none select-none">b</span>
                <div className="absolute top-[4px] right-[4px] w-[7px] h-[7px] rounded-full bg-white/30 border border-white/60" />
              </div>
              <span className="font-display font-bold text-[18px] tracking-tight text-text-primary leading-none">botfy</span>
            </Link>
            <p className="max-w-xs text-text-secondary text-sm leading-relaxed font-light mb-6">
              {t.footer.desc}
            </p>
            <a href="https://linkedin.com/company/botfy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors no-underline text-sm">
              LinkedIn
            </a>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-text-muted mb-5">
              {t.footer.product}
            </h4>
            <ul className="space-y-3.5">
              {[
                { label: t.footer.features, to: '/#how-it-works' },
                { label: t.footer.pricing, to: '/#pricing' },
                { label: t.footer.security, to: '/#solution' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-[13px] text-text-secondary hover:text-text-primary transition-colors no-underline font-light">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-text-muted mb-5">
              {t.footer.companyTitle}
            </h4>
            <ul className="space-y-3.5">
              {[
                { label: t.footer.aboutUs, to: '/about' },
                { label: t.footer.contact, to: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-[13px] text-text-secondary hover:text-text-primary transition-colors no-underline font-light">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-text-muted mb-5">
              {t.footer.resources}
            </h4>
            <ul className="space-y-3.5">
              {[
                { label: t.footer.docs, href: '#' },
                { label: t.footer.api, href: '#' },
                { label: t.footer.status, href: '#' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-[13px] text-text-secondary hover:text-text-primary transition-colors no-underline font-light">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="py-8 border-y border-gray-200 mb-8">
          <div className="flex flex-wrap gap-5 items-center">
            <div className="flex items-center gap-2 text-text-muted text-[12px]">
              <Shield size={14} className="text-green-500" />
              <span>{t.footer.gdprLabel}</span>
            </div>
            <div className="flex items-center gap-2 text-text-muted text-[12px]">
              <CheckCircle size={14} className="text-blue-500" />
              <span>{t.footer.lgpdLabel}</span>
            </div>
            <div className="flex items-center gap-2 text-text-muted text-[12px]">
              <CheckCircle size={14} className="text-accent-purple" />
              <span>{t.footer.metaPartner}</span>
            </div>
            <div className="flex items-center gap-2 text-text-muted text-[12px]">
              <Shield size={14} className="text-yellow-500" />
              <span>ISO 27001</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-text-muted font-light">
            {t.footer.copyright}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[12px] text-text-muted hover:text-text-secondary transition-colors no-underline">
              {t.footer.privacy}
            </a>
            <a href="#" className="text-[12px] text-text-muted hover:text-text-secondary transition-colors no-underline">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
