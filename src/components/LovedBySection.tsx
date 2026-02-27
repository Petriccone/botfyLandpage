import { useLanguage } from '../hooks/useLanguage'

const logos = [
  { name: 'Natura', color: '#00A651' },
  { name: 'iFood', color: '#EA1D2C' },
  { name: 'Nubank', color: '#820AD1' },
  { name: 'TOTVS', color: '#E21D35' },
  { name: 'Localiza', color: '#009A44' },
  { name: 'Cielo', color: '#005FAD' },
  { name: 'Stone', color: '#00A868' },
  { name: 'Hotmart', color: '#FF4D00' },
  { name: 'RD Station', color: '#0E65C8' },
  { name: 'Vivo', color: '#660099' },
]

export function LovedBySection() {
  const { t } = useLanguage()

  return (
    <section className="py-14 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted">
          {t.logoSection.title}
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-8"
          style={{ animation: 'scrollLogos 30s linear infinite', width: 'max-content' }}
        >
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center px-7 py-3 rounded-xl border border-gray-100 bg-gray-50/60"
              style={{ minWidth: 130 }}
            >
              <span
                className="text-[13px] font-bold tracking-tight whitespace-nowrap opacity-70"
                style={{ color: logo.color }}
              >
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
