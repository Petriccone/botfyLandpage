import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'

export function Footer() {
  const { t, language } = useLanguage()

  return (
    <footer className="bg-primary text-background rounded-t-[4rem] overflow-hidden pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-8">
        {/* Main Grid */}
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-5 mb-24">

          {/* Brand & Status */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 mb-8 no-underline group">
              <span className="font-heading font-black text-2xl tracking-tighter text-background group-hover:text-accent transition-colors">
                botfy<span className="text-accent group-hover:text-background">.</span>
              </span>
            </Link>
            <p className="max-w-xs text-background/40 text-base leading-relaxed mb-10 font-light">
              {t.footer.desc}
            </p>

            {/* System Status Indicator */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-background/60">
                System Operating // Multi-Node Active
              </span>
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-8">
              {t.footer.product}
            </h4>
            <ul className="space-y-4">
              <li><Link to="/#how-it-works" className="text-background/50 hover:text-background transition-colors no-underline text-sm">{t.footer.features}</Link></li>
              <li><Link to="/#pricing" className="text-background/50 hover:text-background transition-colors no-underline text-sm">{t.footer.pricing}</Link></li>
              <li><Link to="/#solution" className="text-background/50 hover:text-background transition-colors no-underline text-sm">{t.footer.security}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-8">
              {t.footer.companyTitle}
            </h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-background/50 hover:text-background transition-colors no-underline text-sm">{t.footer.aboutUs}</Link></li>
              <li><Link to="/contact" className="text-background/50 hover:text-background transition-colors no-underline text-sm">{t.footer.contact}</Link></li>
              <li><a href="https://linkedin.com/company/botfy" target="_blank" rel="noopener noreferrer" className="text-background/50 hover:text-background transition-colors no-underline text-sm">LinkedIn</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-8">
              {t.footer.resources}
            </h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-background/50 hover:text-background transition-colors no-underline text-sm">{t.footer.docs}</a></li>
              <li><a href="#" className="text-background/50 hover:text-background transition-colors no-underline text-sm">{t.footer.api}</a></li>
              <li><a href="#" className="text-background/50 hover:text-background transition-colors no-underline text-sm">{t.footer.status}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[11px] font-mono text-background/20 uppercase tracking-widest">
            {t.footer.copyright}
          </p>
          <div className="flex gap-10">
            <a href="#" className="text-[11px] font-mono text-background/20 hover:text-accent transition-colors no-underline uppercase tracking-widest">
              {t.footer.privacy}
            </a>
            <a href="#" className="text-[11px] font-mono text-background/20 hover:text-accent transition-colors no-underline uppercase tracking-widest">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
