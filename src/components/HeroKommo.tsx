import { motion } from 'framer-motion'
import { Button } from './ui/Button'
import { useLanguage } from '../hooks/useLanguage'

export function HeroKommo() {
  const { t } = useLanguage()
  const k = t.kommo

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-28 pb-16 overflow-hidden bg-white text-center">
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-text-primary leading-[1.15] mb-6"
        >
          {k.heroHeadline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mb-10 font-light"
        >
          {k.heroSubline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="https://botfyai.vercel.app/register">
            <Button size="lg" className="rounded-full px-8 h-12 bg-accent-purple text-white hover:bg-accent-purple/90 shadow-lg font-medium">
              {k.tryFreeCta}
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
