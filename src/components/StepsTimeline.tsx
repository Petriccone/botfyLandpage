import { motion } from 'framer-motion'
import { Card } from './ui/Card'
import { SectionWrapper } from './ui/SectionWrapper'
import { useLanguage } from '../hooks/useLanguage'

export function StepsTimeline() {
  const { t } = useLanguage()

  return (
    <SectionWrapper className="py-24">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-black italic tracking-tight sm:text-4xl lg:text-5xl">
          {t.steps.titleStart}{' '}
          <span className="gradient-text">{t.steps.titleHighlight}</span>{' '}
          {t.steps.titleEnd}
        </h2>
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-purple-500/50 via-blue-500/30 to-transparent md:block" />

        {t.steps.items.map((step, i) => {
          const isLeft = i % 2 === 1
          const num = String(i + 1).padStart(2, '0')

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative mb-12 flex items-center gap-8 ${
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Card */}
              <div className="flex-1">
                <Card className="p-6">
                  <h3 className="mb-2 text-lg font-bold">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                </Card>
              </div>

              {/* Number circle */}
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-purple-500/50 bg-[#0a0a1a] text-sm font-bold text-purple-400">
                {num}
              </div>

              {/* Spacer */}
              <div className="hidden flex-1 md:block" />
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
