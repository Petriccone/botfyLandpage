import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { CheckCircle } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const STRIPE_LINKS: (string | null)[] = [
  null, // Free
  'https://buy.stripe.com/fZu4gB3WGaEF8exdYSfQI00', // Starter
  'https://buy.stripe.com/aFabJ32SCdQR7atg70fQI01', // Growth
  null, // Scale
  null, // Enterprise
]

export function Pricing() {
  const { t } = useLanguage()
  const container = useRef(null)

  useGSAP(() => {
    gsap.from('.pricing-card', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: 'power3.out'
    })
  }, { scope: container })

  return (
    <section id="pricing" ref={container} className="py-24 md:py-32 bg-background border-t border-primary/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl tracking-tighter text-primary mb-4 uppercase">
            {t.pricing.titleStart}{' '}
            <span className="text-accent">{t.pricing.titleHighlight}</span>
          </h2>
          <p className="font-drama italic text-2xl text-primary/40">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {t.pricing.plans.map((plan, i) => {
            const isPopular = i === 2
            const isEnterprise = i === 4
            return (
              <div
                key={i}
                className={`
                  pricing-card flex flex-col rounded-[2.5rem] p-8 border transition-all duration-500
                  ${isPopular
                    ? 'bg-primary border-accent shadow-2xl scale-105 z-10'
                    : 'bg-white border-primary/5 hover:border-accent/30'}
                `}
              >
                {isPopular && (
                  <div className="text-accent text-[9px] font-mono font-bold uppercase tracking-[0.3em] mb-6">
                    {t.pricing.mostPopular}
                  </div>
                )}

                <div className="mb-8">
                  <h3 className={`text-lg font-bold mb-2 ${isPopular ? 'text-background' : 'text-primary'}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-3xl font-heading font-black ${isPopular ? 'text-background' : 'text-primary'}`}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className={`text-xs font-mono tracking-tighter ${isPopular ? 'text-background/40' : 'text-primary/40'}`}>
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-[12px] leading-relaxed">
                      <CheckCircle
                        size={14}
                        className={`shrink-0 mt-0.5 ${isPopular ? 'text-accent' : 'text-primary/20'}`}
                      />
                      <span className={isPopular ? 'text-background/70' : 'text-primary/60'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={isEnterprise ? 'mailto:contact@botfy.ai' : (STRIPE_LINKS[i] || 'https://botfyai.vercel.app/register')}
                  target={!isEnterprise ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="magnetic-button group h-12 w-full flex items-center justify-center bg-accent text-primary font-bold text-sm"
                >
                  <span className={`bg-layer ${isPopular ? '!bg-background' : '!bg-primary'}`}></span>
                  <span className={`text-layer ${isPopular ? 'group-hover:text-primary' : 'group-hover:text-background'} transition-colors duration-400`}>
                    {plan.cta}
                  </span>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
