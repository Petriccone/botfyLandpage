import { motion } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'

export function SocialProofSection() {
  const { t } = useLanguage()

  return (
    <section id="social-proof" className="py-20 md:py-28 relative overflow-hidden border-y border-accent-purple/10 bg-gradient-to-b from-accent-purple/5 via-[#0a0a0a] to-accent-purple/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent-purple font-mono text-[10px] uppercase tracking-[0.4em] block mb-4">Results</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mb-2">
            {t.socialProof.title}
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12"
        >
          {t.socialProof.metrics.map((m, i) => (
            <div key={i} className="text-center p-8 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-accent-purple/30 transition-colors duration-300">
              <div className="text-4xl md:text-5xl font-display font-bold text-accent-purple mb-2">
                {m.value}
              </div>
              <div className="text-sm font-medium text-text-muted">
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
