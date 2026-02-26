import { motion } from 'framer-motion'
import { Button } from './ui/Button'
import { useLanguage } from '../hooks/useLanguage'

export function CTASection() {
  const { t } = useLanguage()
  const k = t.kommo

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold tracking-tight text-text-primary mb-4"
        >
          {k.ctaHeadline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg text-text-secondary mb-10 font-light"
        >
          {k.ctaSub}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="https://botfyai.vercel.app/register">
            <Button size="lg" className="rounded-full px-8 h-12 bg-accent-purple text-white hover:bg-accent-purple/90 shadow-lg font-medium w-full sm:w-auto">
              {k.tryFree}
            </Button>
          </a>
          <a href="#contact">
            <Button variant="secondary" size="lg" className="rounded-full px-8 h-12 border-gray-200 bg-white text-text-primary hover:bg-gray-50 font-medium w-full sm:w-auto">
              {k.bookDemo}
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
