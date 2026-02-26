import { motion } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'
import { Code, Inbox, Shield } from 'lucide-react'

const icons = [Code, Inbox, Shield]
const screenImages = ['/screens/training.png', '/screens/crm.png', '/screens/team.png']
const screenKeys = ['training', 'crm', 'team'] as const

export function UniqueWaySection() {
  const { t } = useLanguage()
  const k = t.kommo

  return (
    <section className="py-20 md:py-28 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold tracking-tight text-text-primary text-center mb-16"
        >
          {k.uniqueWayTitle}
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {k.uniqueCards.map((card, i) => {
            const Icon = icons[i]
            const imgSrc = screenImages[i]
            const label = k.screenLabels[screenKeys[i]]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-gray-100 bg-surface hover:border-accent-purple/20 hover:shadow-md transition-all flex flex-col"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-purple/10 text-accent-purple">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">{card.title}</h3>
                <p className="text-text-secondary font-light mb-6 flex-1">{card.desc}</p>
                <div className="rounded-xl border border-gray-100 overflow-hidden bg-white mb-4">
                  <img
                    src={imgSrc}
                    alt=""
                    className="w-full h-32 object-cover object-top"
                  />
                  <p className="p-3 text-xs text-text-muted font-light border-t border-gray-50">
                    {label}
                  </p>
                </div>
                <a href="#how-it-works" className="text-accent-purple font-semibold hover:underline">
                  {card.cta} →
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
