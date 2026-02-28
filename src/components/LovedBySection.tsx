import { useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'

const logos = [
  { name: 'Natura', domain: 'natura.com.br', color: '#00A651' },
  { name: 'iFood', domain: 'ifood.com.br', color: '#EA1D2C' },
  { name: 'Nubank', domain: 'nubank.com.br', color: '#820AD1' },
  { name: 'TOTVS', domain: 'totvs.com', color: '#E21D35' },
  { name: 'Localiza', domain: 'localiza.com', color: '#009A44' },
  { name: 'Cielo', domain: 'cielo.com.br', color: '#005FAD' },
  { name: 'Stone', domain: 'stone.com.br', color: '#00A868' },
  { name: 'Hotmart', domain: 'hotmart.com', color: '#FF4D00' },
  { name: 'RD Station', domain: 'rdstation.com', color: '#0E65C8' },
  { name: 'Vivo', domain: 'vivo.com.br', color: '#660099' },
]

function LogoCard({ logo }: { logo: typeof logos[0] }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div
      className="flex-shrink-0 flex flex-col items-center justify-center gap-2 px-6 py-4 rounded-xl border border-gray-100 bg-white/80"
      style={{ minWidth: 130 }}
    >
      {!imgError ? (
        <img
          src={`https://logo.clearbit.com/${logo.domain}`}
          alt={logo.name}
          className="h-8 w-auto max-w-[80px] object-contain opacity-80"
          onError={() => setImgError(true)}
        />
      ) : (
        <span
          className="text-[14px] font-bold tracking-tight"
          style={{ color: logo.color }}
        >
          {logo.name}
        </span>
      )}
      {!imgError && (
        <span className="text-[11px] text-text-muted font-medium">{logo.name}</span>
      )}
    </div>
  )
}

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
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-5 animate-scroll-logos"
          style={{ animation: 'scrollLogos 30s linear infinite', width: 'max-content' }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <LogoCard key={i} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  )
}
