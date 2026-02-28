import { motion } from 'framer-motion'
import { Code, Clock, Volume2, Database, Shield, TrendingUp, User, Headphones } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const icons = [Code, Clock, Volume2, Database, Shield, TrendingUp, User, Headphones]

export function WhyBotfyGrid() {
  const { t } = useLanguage()
  const { title, subtitle, cards } = t.whyGrid

  return (
    <section className="py-24 md:py-32 bg-surface border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold tracking-tight text-text-primary mb-4"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-lg font-light max-w-xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => {
            const Icon = icons[i % icons.length]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.08, 0.4) }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-primary/20 hover:shadow-md transition-[border-color,box-shadow] duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-purple/8 flex items-center justify-center mb-4 group-hover:bg-accent-purple/12 transition-colors">
                  <Icon size={18} className="text-accent-purple" />
                </div>
                <h3 className="font-bold text-text-primary mb-2 text-[15px]">{card.title}</h3>
                <p className="text-text-secondary text-[13px] leading-relaxed font-light">{card.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
