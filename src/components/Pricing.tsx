import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from './ui/Button'
import { Badge } from './ui/Badge'
import { SectionWrapper } from './ui/SectionWrapper'
import { useLanguage } from '../hooks/useLanguage'

const STRIPE_LINKS: (string | null)[] = [
  'https://botfyai.vercel.app/register', // Free
  'https://buy.stripe.com/fZu4gB3WGaEF8exdYSfQI00', // Starter
  'https://buy.stripe.com/aFabJ32SCdQR7atg70fQI01', // Growth
  'https://buy.stripe.com/eVqfZj78S3cd1Q9aMGfQI02', // Scale
  null, // Enterprise - Contact Sales
]

export function Pricing() {
  const { t } = useLanguage()

  return (
    <SectionWrapper id="pricing" className="py-24">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-black italic tracking-tight sm:text-4xl lg:text-5xl">
          {t.pricing.titleStart}{' '}
          <span className="gradient-text">{t.pricing.titleHighlight}</span>
        </h2>
        <p className="text-gray-400 text-lg">{t.pricing.subtitle}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {t.pricing.plans.map((plan, i) => {
          const isPopular = i === 2
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              {isPopular && (
                <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                  <Badge variant="popular">{t.pricing.mostPopular}</Badge>
                </div>
              )}
              <div
                className={`flex h-full flex-col rounded-xl border p-6 ${
                  isPopular
                    ? 'border-purple-500/40 bg-white/[0.06]'
                    : 'border-white/[0.08] bg-white/[0.03]'
                }`}
              >
                <h3 className="mb-1 text-xl font-bold">{plan.name}</h3>
                <p className="mb-6 text-sm text-gray-500">{plan.desc}</p>

                <div className="mb-6">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className="text-sm text-gray-500">{plan.period}</span>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle size={16} className="shrink-0 text-purple-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {STRIPE_LINKS[i] ? (
                  <a
                    href={STRIPE_LINKS[i]!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    <Button
                      variant={isPopular ? 'primary' : 'secondary'}
                      size="md"
                      className="w-full"
                    >
                      {plan.cta}
                    </Button>
                  </a>
                ) : (
                  <Button
                    variant={isPopular ? 'primary' : 'secondary'}
                    size="md"
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
