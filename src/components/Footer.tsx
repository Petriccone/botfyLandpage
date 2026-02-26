import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-surface border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 no-underline mb-8">
              <div className="w-8 h-8 rounded-lg bg-accent-purple flex items-center justify-center font-bold text-white text-lg">B</div>
              <span className="text-xl font-display font-bold tracking-tight uppercase text-text-primary">Botfy</span>
            </Link>
            <p className="max-w-xs text-text-secondary text-sm leading-relaxed font-light mb-8">
              {t.footer.desc}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-text-primary mb-6">
              {t.footer.product}
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/#solution" className="text-sm text-text-secondary hover:text-text-primary transition-colors no-underline font-light">
                  {t.footer.features}
                </Link>
              </li>
              <li>
                <Link to="/#pricing" className="text-sm text-text-secondary hover:text-text-primary transition-colors no-underline font-light">
                  {t.footer.pricing}
                </Link>
              </li>
              <li>
                <Link to="/#security" className="text-sm text-text-secondary hover:text-text-primary transition-colors no-underline font-light">
                  {t.footer.security}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-text-primary mb-6">
              {t.footer.companyTitle}
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-sm text-text-secondary hover:text-text-primary transition-colors no-underline font-light">
                  {t.footer.aboutUs}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-text-secondary hover:text-text-primary transition-colors no-underline font-light">
                  {t.footer.contact}
                </Link>
              </li>
              <li>
                <a href="https://linkedin.com/company/botfy" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-text-primary transition-colors no-underline font-light">
                  {t.footer.linkedin}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest italic opacity-50">
            SYSTEM_STATUS :: OPTIMIZED_AESTHETICS :: [STABLE]
          </p>
          <p className="text-xs text-text-muted">
            {t.footer.copyright}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-text-muted hover:text-text-primary transition-colors no-underline">
              {t.footer.privacy}
            </a>
            <a href="#" className="text-xs text-text-muted hover:text-text-primary transition-colors no-underline">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
