import { motion } from 'framer-motion'
import { Globe as GlobeIcon, Users, Zap } from 'lucide-react'
import { useLanguage } from '../../../hooks/useLanguage'
import { Globe3D } from './Globe3D'

export function GlobeSection() {
  const { t } = useLanguage()
  const g = t.globe

  const stats = [
    { icon: GlobeIcon, value: g.stats[0].value, label: g.stats[0].label },
    { icon: Users, value: g.stats[1].value, label: g.stats[1].label },
    { icon: Zap, value: g.stats[2].value, label: g.stats[2].label },
  ]

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle purple glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/[0.07] border border-brand-primary/20 text-accent-purple text-[12px] font-semibold tracking-wide mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
            {g.badge}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold tracking-tight text-text-primary mb-5"
          >
            {g.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary font-light max-w-2xl mx-auto"
          >
            {g.subtitle}
          </motion.p>
        </div>

        {/* Globe + Stats */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full max-w-[380px]"
          >
            <Globe3D />
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 flex flex-col gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-5 p-5 rounded-2xl border border-gray-100 bg-surface hover:border-brand-primary/20 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-primary/[0.07] flex items-center justify-center flex-shrink-0">
                  <stat.icon size={20} className="text-accent-purple" />
                </div>
                <div>
                  <p className="text-2xl font-display font-bold text-text-primary">{stat.value}</p>
                  <p className="text-sm text-text-secondary font-light">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
