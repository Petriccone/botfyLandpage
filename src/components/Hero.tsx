import { motion } from 'framer-motion'
import { Button } from './ui/Button'
import { useLanguage } from '../hooks/useLanguage'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-black text-center">
      {/* Aurora Background Glow */}
      <div className="aurora-glow" />

      {/* Decorative Glows */}
      <div className="glow-aura glow-aura-purple w-[500px] h-[500px] -top-40 -left-20 opacity-10" />
      <div className="glow-aura glow-aura-blue w-[400px] h-[400px] top-60 -right-20 opacity-10" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        {/* Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="px-5 py-2 rounded-full border border-accent-purple/40 bg-accent-purple/10 text-[11px] font-mono font-medium tracking-[0.2em] uppercase text-accent-purple">
            {t.hero.badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-8xl font-display font-bold tracking-tight mb-8 leading-[1.1]"
        >
          {t.hero.titleLine1} <br />
          <span className="text-accent-purple">
            {t.hero.titleHighlight}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mb-12 leading-relaxed font-light"
        >
          {t.hero.subtitle} {t.hero.subtitle2}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a href="https://botfyai.vercel.app/register" className="relative group/btn">
            <span className="absolute -inset-1 rounded-full bg-accent-purple/40 blur-lg opacity-60 group-hover/btn:opacity-80 transition-opacity" />
            <Button size="lg" className="relative rounded-full px-8 h-12 bg-accent-purple text-white hover:bg-accent-purple/90 border-0 shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all font-medium">
              {t.hero.cta}
            </Button>
          </a>
          <a href="#how-it-works">
            <Button variant="secondary" size="lg" className="rounded-full px-8 h-12 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 transition-all font-medium">
              {t.hero.ctaSecondary}
            </Button>
          </a>
        </motion.div>

        {/* Trust Belt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 flex flex-wrap justify-center gap-x-12 gap-y-6 pt-12 border-t border-white/5"
        >
          {t.hero.trustBullets.map((bullet, i) => (
            <div key={i} className="flex flex-col items-center sm:items-start">
              <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Status_{i + 1}</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary">{bullet}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Background Grid Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  )
}
