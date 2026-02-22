import { Users, FileText, Lock, MessageSquare, BarChart3, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card } from './ui/Card'
import { SectionWrapper } from './ui/SectionWrapper'
import { useLanguage } from '../hooks/useLanguage'

const featureIcons = [Users, FileText, Lock, MessageSquare, BarChart3, Globe]

export function FeaturesGrid() {
  const { t } = useLanguage()

  return (
    <SectionWrapper id="features" className="py-24">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-black italic tracking-tight sm:text-4xl lg:text-5xl">
          {t.features.titleStart}{' '}
          <span className="gradient-text">{t.features.titleHighlight}</span>
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.features.items.map((feature, i) => {
          const Icon = featureIcons[i]
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                  <Icon size={24} className="text-blue-400" />
                </div>
                <h3 className="mb-3 text-lg font-bold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{feature.desc}</p>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
