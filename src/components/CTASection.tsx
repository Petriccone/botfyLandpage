import { motion } from 'framer-motion'
import { Button } from './ui/Button'
import { SectionWrapper } from './ui/SectionWrapper'
import { useLanguage } from '../hooks/useLanguage'

export function CTASection() {
  const { t } = useLanguage()

  return (
    <SectionWrapper className="py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-white/[0.03] to-white/[0.01] px-8 py-20 text-center"
      >
        {/* Background glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-purple-600/20 blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-blue-600/15 blur-[100px]" />
        </div>

        <div className="relative">
          <h2 className="mx-auto mb-6 max-w-3xl text-3xl font-black italic tracking-tight sm:text-4xl lg:text-5xl">
            {t.cta.title}
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-gray-400">
            {t.cta.subtitle}
          </p>
          <a href="https://botfyai.vercel.app/register" target="_blank" rel="noopener noreferrer" className="no-underline">
            <Button variant="primary" size="xl" className="rounded-xl">
              {t.cta.button}
            </Button>
          </a>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
