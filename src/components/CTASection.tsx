import { motion } from 'framer-motion'
import { Button } from './ui/Button'
import { useLanguage } from '../hooks/useLanguage'

export function CTASection() {
  const { t } = useLanguage()

  return (
    <section className="py-32 bg-surface relative overflow-hidden border-t border-border-subtle">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] border border-gray-100 bg-gradient-to-br from-white to-surface px-8 py-24 text-center overflow-hidden group shadow-sm"
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 transition-opacity duration-1000 group-hover:opacity-20">
            <div className="w-[500px] h-[500px] bg-accent-purple/30 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10">
            <span className="text-text-muted font-mono text-[10px] uppercase tracking-[0.4em] block mb-8 opacity-60">Ready_To_Deploy</span>
            <h2 className="mx-auto mb-8 max-w-3xl text-4xl md:text-6xl font-display font-bold tracking-tight text-text-primary leading-tight">
              {t.cta.title}
            </h2>
            <p className="mx-auto mb-12 max-w-xl text-text-secondary text-lg font-light">
              {t.cta.subtitle}
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <a href="https://botfyai.vercel.app/register" className="no-underline inline-block relative">
                <span className="absolute -inset-1 rounded-full bg-accent-purple/15 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <Button size="lg" className="relative rounded-full px-12 h-14 bg-accent-purple text-white hover:bg-accent-purple/90 text-sm font-bold tracking-widest shadow-lg">
                  {t.cta.button}
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
