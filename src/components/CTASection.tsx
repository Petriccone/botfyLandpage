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
        className="relative overflow-hidden border border-accent-cyan/20 bg-background px-8 py-20 text-center"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-accent-cyan/5 blur-2xl" />
        </div>
        {/* Background glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-accent-cyan/10 blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-accent-blue/10 blur-[100px]" />
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
