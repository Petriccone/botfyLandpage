import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { SectionWrapper } from './ui/SectionWrapper'
import { useLanguage } from '../hooks/useLanguage'

export function WhyBotfy() {
  const { t } = useLanguage()

  return (
    <SectionWrapper id="why-botfy" className="py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-8 text-3xl font-black italic tracking-tight sm:text-4xl lg:text-5xl">
          {t.whyBotfy.title}
        </h2>
        <ul className="mb-10 flex flex-wrap justify-center gap-4">
          {t.whyBotfy.items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-5 py-3 text-gray-300"
            >
              <CheckCircle size={18} className="shrink-0 text-purple-400" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
        <p className="mb-2 text-gray-400">
          {t.whyBotfy.tagline}
        </p>
        <p className="font-semibold text-purple-300">
          {t.whyBotfy.tagline2}
        </p>
      </div>
    </SectionWrapper>
  )
}
