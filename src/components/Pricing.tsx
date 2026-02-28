import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'

const STRIPE_LINKS: (string | null)[] = [
  null, // Free — redirect to register
  'https://buy.stripe.com/fZu4gB3WGaEF8exdYSfQI00', // Starter
  'https://buy.stripe.com/aFabJ32SCdQR7atg70fQI01', // Growth
  null, // Scale
  null, // Enterprise — contact sales
]

export function Pricing() {
  const { t } = useLanguage()

  return (
    <section id="pricing" className="py-24 md:py-32 bg-surface border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight text-text-primary"
          >
            {t.pricing.titleStart}{' '}
            <span className="text-accent-purple">{t.pricing.titleHighlight}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-text-secondary text-lg font-light"
          >
            {t.pricing.subtitle}
          </motion.p>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {t.pricing.plans.map((plan, i) => {
            const isPopular = i === 2
            const isEnterprise = i === 4
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.1, 0.4) }}
                className={`relative flex flex-col rounded-2xl border transition-[border-color,box-shadow] duration-300 overflow-hidden ${
                  isPopular
                    ? 'bg-accent-purple border-accent-purple shadow-xl shadow-brand-primary/30'
                    : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg'
                }`}
              >
                {isPopular && (
                  <div className="bg-white/20 text-white text-[10px] font-bold uppercase tracking-widest text-center py-2">
                    {t.pricing.mostPopular}
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <h3 className={`text-base font-bold mb-1 ${isPopular ? 'text-white' : 'text-text-primary'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-[12px] font-light ${isPopular ? 'text-white/70' : 'text-text-muted'}`}>
                      {plan.desc}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-1 mb-5">
                    <span className={`text-3xl font-display font-black ${isPopular ? 'text-white' : 'text-text-primary'}`}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className={`text-xs font-light ${isPopular ? 'text-white/60' : 'text-text-muted'}`}>
                        {plan.period}
                      </span>
                    )}
                  </div>

                  <ul className="space-y-2 mb-6 flex-1">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-[12px] leading-snug">
                        <CheckCircle
                          size={12}
                          className={`shrink-0 mt-0.5 ${isPopular ? 'text-white/80' : 'text-accent-purple'}`}
                        />
                        <span className={isPopular ? 'text-white/85' : 'text-text-secondary'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={isEnterprise ? 'mailto:contact@botfy.ai' : (STRIPE_LINKS[i] || '/register')}
                    target={STRIPE_LINKS[i] ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className={`no-underline mt-auto inline-flex items-center justify-center w-full h-10 rounded-xl font-bold text-[12px] transition-[background-color] duration-200 ${
                      isPopular
                        ? 'bg-white text-accent-purple hover:bg-gray-50'
                        : isEnterprise
                        ? 'bg-gray-900 text-white hover:bg-gray-800'
                        : 'bg-accent-purple text-white hover:bg-accent-purple/90'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
