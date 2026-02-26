import { motion } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'
import { CheckCircle } from 'lucide-react'

export function WhyUsSection() {
  const { t } = useLanguage()

  return (
    <section id="why-us" className="py-24 md:py-32 bg-surface border-y border-border-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent-purple font-mono text-[10px] uppercase tracking-[0.4em] block mb-4">
            Why_Us
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-text-primary mb-4">
            {t.whyUs.title}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto font-light">
            {t.whyUs.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-3 gap-8 mb-20"
        >
          {t.whyUs.metrics.map((m, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-accent-purple mb-2">
                {m.value}
              </div>
              <div className="text-xs font-medium uppercase tracking-wider text-text-muted">
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {t.whyUs.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3 text-left">
              <CheckCircle size={20} className="shrink-0 text-accent-purple mt-0.5" />
              <span className="text-text-secondary font-light">{bullet}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
