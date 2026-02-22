import { useLanguage } from '../hooks/useLanguage'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-white/[0.06] bg-[#060612]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-600">
                <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                  <rect x="6" y="10" width="8" height="5" rx="2.5" fill="#60a5fa" />
                  <rect x="18" y="10" width="8" height="5" rx="2.5" fill="#60a5fa" />
                  <rect x="9" y="20" width="14" height="4" rx="2" fill="#a78bfa" />
                </svg>
              </div>
              <span className="text-xl font-bold">Botfy</span>
            </div>
            <p className="max-w-xs text-sm text-gray-500 leading-relaxed">{t.footer.desc}</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 text-sm font-bold">{t.footer.product}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-sm text-gray-500 transition-colors hover:text-white">
                  {t.footer.features}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-gray-500 transition-colors hover:text-white">
                  {t.footer.pricing}
                </a>
              </li>
              <li>
                <a href="#security" className="text-sm text-gray-500 transition-colors hover:text-white">
                  {t.footer.security}
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-bold">{t.footer.companyTitle}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-500 transition-colors hover:text-white">
                  {t.footer.aboutUs}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 transition-colors hover:text-white">
                  {t.footer.contact}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 transition-colors hover:text-white">
                  {t.footer.linkedin}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-gray-600">{t.footer.copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-600 transition-colors hover:text-white">
              {t.footer.privacy}
            </a>
            <a href="#" className="text-xs text-gray-600 transition-colors hover:text-white">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
