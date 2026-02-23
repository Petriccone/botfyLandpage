import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { SectionWrapper } from './ui/SectionWrapper'
import { useLanguage } from '../hooks/useLanguage'

export function AfterActivate() {
  const { t } = useLanguage()

  return (
    <SectionWrapper id="results" className="py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-10 text-3xl font-black italic tracking-tight sm:text-4xl lg:text-5xl">
          {t.afterActivate.title}
        </h2>
        <ul className="mb-10 grid gap-4 sm:grid-cols-2">
          {t.afterActivate.items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center justify-center gap-3 text-gray-300 sm:justify-start"
            >
              <CheckCircle size={20} className="shrink-0 text-green-400" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
        <p className="mb-2 text-lg font-medium text-white">
          {t.afterActivate.closing1}
        </p>
        <p className="text-gray-400">
          {t.afterActivate.closing2}
        </p>
      </div>
    </SectionWrapper>
  )
}
