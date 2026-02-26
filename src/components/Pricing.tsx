import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from './ui/Button'
import { useLanguage } from '../hooks/useLanguage'

const STRIPE_LINKS: (string | null)[] = [
  'https://botfyai.vercel.app/register',
  'https://buy.stripe.com/fZu4gB3WGaEF8exdYSfQI00',
  'https://buy.stripe.com/aFabJ32SCdQR7atg70fQI01',
  'https://buy.stripe.com/eVqfZj78S3cd1Q9aMGfQI02',
  null,
]

export function Pricing() {
  const { t } = useLanguage()

  return (
    <section id="pricing" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight text-text-primary"
          >
            {t.pricing.titleStart}{' '}
            <span className="text-accent-purple">{t.pricing.titleHighlight}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-text-secondary text-lg max-w-2xl mx-auto font-light"
          >
            {t.pricing.subtitle}
          </motion.p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {t.pricing.plans.map((plan, i) => {
            const isPopular = i === 2
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 ${isPopular
                  ? 'bg-white border-accent-purple/40 shadow-[0_0_30px_rgba(124,58,237,0.08)]'
                  : 'bg-surface border-gray-100 hover:border-gray-200 hover:shadow-md'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent-purple text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                    {t.pricing.mostPopular}
                  </div>
                )}

                <h3 className="text-lg font-bold text-text-primary mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-display font-bold text-text-primary">{plan.price}</span>
                  <span className="text-xs text-text-muted">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex gap-3 text-sm text-text-secondary leading-tight">
                      <CheckCircle size={14} className="shrink-0 text-accent-purple mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={STRIPE_LINKS[i] || '#contact'}
                  className="mt-auto block"
                >
                  <Button
                    variant={isPopular ? 'primary' : 'secondary'}
                    className={`w-full rounded-full h-11 text-xs font-bold tracking-widest ${isPopular
                      ? 'bg-accent-purple text-white hover:bg-accent-purple/90 border-none'
                      : 'border-gray-200 bg-white text-text-primary hover:bg-gray-50'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
