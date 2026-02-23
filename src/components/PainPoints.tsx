import { Shield, Cpu, DollarSign, FileWarning, Puzzle, TrendingDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card } from './ui/Card'
import { SectionWrapper } from './ui/SectionWrapper'
import { useLanguage } from '../hooks/useLanguage'

const icons = [Shield, Cpu, DollarSign, FileWarning, Puzzle, TrendingDown]

export function PainPoints() {
  const { t } = useLanguage()

  return (
    <SectionWrapper id="problem" className="py-24">
      <div className="text-center">
        <h2 className="mb-4 text-3xl font-black italic tracking-tight sm:text-4xl lg:text-5xl">
          {t.painPoints.title}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-gray-400 text-lg">
          {t.painPoints.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 mb-12">
        {t.painPoints.items.map((item, i) => {
          const Icon = icons[i]
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10">
                  <Icon size={24} className="text-red-400" />
                </div>
                <h3 className="text-sm font-bold">{item}</h3>
              </Card>
            </motion.div>
          )
        })}
      </div>
      <p className="text-center text-lg font-semibold text-white">
        {t.painPoints.closing}
      </p>
    </SectionWrapper>
  )
}
