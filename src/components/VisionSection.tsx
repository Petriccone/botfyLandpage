import { motion } from 'framer-motion'
import { SectionWrapper } from './ui/SectionWrapper'
import { useLanguage } from '../hooks/useLanguage'

export function VisionSection() {
  const { t } = useLanguage()

  return (
    <SectionWrapper className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="mb-8 text-3xl font-black italic tracking-tight sm:text-4xl lg:text-5xl">
          {t.vision.title}
        </h2>
        <p className="mb-4 text-lg text-gray-400">
          {t.vision.line1}
        </p>
        <p className="mb-4 text-gray-300">
          {t.vision.line2}
        </p>
        <p className="mb-2 font-medium text-white">
          {t.vision.line3}
        </p>
        <p className="text-xl font-bold text-purple-300">
          {t.vision.line4}
        </p>
      </motion.div>
    </SectionWrapper>
  )
}
