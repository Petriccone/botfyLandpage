import { motion } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'

export function StepsTimeline() {
  const { t } = useLanguage()

  return (
    <section id="how-it-works" className="py-32 bg-[#0a0a0a] relative overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold tracking-tight text-white mb-6"
          >
            {t.steps.titleStart}{' '}
            <span className="text-accent-purple">{t.steps.titleHighlight}</span>
          </motion.h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto font-light">
            {t.steps.subtitle}
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Vertical line - More subtle Gladia style */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-accent-purple/50 via-accent-purple/10 to-transparent md:block" />

          {t.steps.items.map((step, i) => {
            const isLeft = i % 2 === 1
            const num = String(i + 1).padStart(2, '0')

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative mb-20 flex flex-col md:flex-row items-center gap-12 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Content Side */}
                <div className="flex-1 text-center md:text-left">
                  <div className={`p-8 rounded-3xl border border-white/5 bg-[#050505] transition-all hover:border-white/10 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="mb-3 text-xl font-bold text-white tracking-tight">{step.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed font-light">{step.desc}</p>
                  </div>
                </div>

                {/* Center Marker */}
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-surface shadow-[0_0_20px_rgba(139,92,246,0.1)] text-sm font-mono font-bold text-accent-purple">
                  {num}
                </div>

                {/* Empty Side for layout */}
                <div className="hidden flex-1 md:block" />
              </motion.div>
            )
          })}
        </div>

        <div className="mt-24 text-center">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-text-muted mb-4 opacity-50">
            {t.steps.noDevLine}
          </p>
          <p className="text-lg font-display font-medium text-white/80">
            {t.steps.tagline}
          </p>
        </div>
      </div>
    </section>
  )
}
