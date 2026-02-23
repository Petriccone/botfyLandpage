import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { SectionWrapper } from './ui/SectionWrapper'
import { useLanguage } from '../hooks/useLanguage'

export function SolutionSection() {
  const { t } = useLanguage()

  return (
    <SectionWrapper id="solution" className="py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 text-center text-3xl font-black italic tracking-tight sm:text-4xl lg:text-5xl">
          {t.solution.title}
        </h2>
        <p className="mb-10 text-center text-lg text-gray-400">
          {t.solution.intro}
        </p>
        <ul className="mb-10 space-y-4">
          {t.solution.items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-3 text-gray-300"
            >
              <CheckCircle size={22} className="shrink-0 text-purple-400" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
        <p className="mb-2 text-center text-lg font-medium text-white">
          {t.solution.closing1}
        </p>
        <p className="mb-2 text-center text-gray-400">
          {t.solution.closing2}
        </p>
        <p className="text-center font-semibold text-purple-300">
          {t.solution.closing3}
        </p>
      </div>
    </SectionWrapper>
  )
}
