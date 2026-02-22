import { useState } from 'react'
import { CloudUpload, BookOpen, Monitor, Zap, CheckCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionWrapper } from './ui/SectionWrapper'
import { useLanguage } from '../hooks/useLanguage'

const stepIcons = [CloudUpload, BookOpen, Monitor, Zap]

export function Platform() {
  const { t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const progress = activeIndex !== null ? (activeIndex + 1) / stepIcons.length : 0

  return (
    <SectionWrapper id="platform" className="py-24">
      <div className="text-center">
        <h2 className="mb-20 text-3xl font-black italic tracking-tight sm:text-4xl lg:text-5xl">
          {t.platform.titleStart}{' '}
          <span className="gradient-text">{t.platform.titleHighlight}</span>
        </h2>
      </div>

      {/* Steps pipeline */}
      <div
        className="mx-auto mb-20 max-w-4xl"
        onMouseLeave={() => setActiveIndex(null)}
      >
        {/* Row of steps */}
        <div className="relative flex items-start justify-between">
          {/* --- Connecting line (sits behind circles, at vertical center of icons) --- */}
          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[40px] hidden -translate-y-1/2 md:block">
            <div className="relative h-[3px] rounded-full bg-white/[0.06]">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-purple-400"
                style={{ boxShadow: '0 0 12px rgba(147,51,234,0.5), 0 0 4px rgba(147,51,234,0.8)' }}
                animate={{ width: `${progress * 100}%` }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            </div>
          </div>

          {/* Step items */}
          {t.platform.steps.map((step, i) => {
            const Icon = stepIcons[i]
            const filled = activeIndex !== null && i <= activeIndex
            const hovered = activeIndex === i

            return (
              <motion.div
                key={i}
                className="relative z-10 flex w-1/4 flex-col items-center px-3 text-center cursor-pointer"
                onMouseEnter={() => setActiveIndex(i)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                {/* Icon circle */}
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                    filled
                      ? 'border-purple-500/70 bg-purple-600/15 shadow-[0_0_24px_rgba(147,51,234,0.35)]'
                      : 'border-white/10 bg-white/[0.03]'
                  }`}
                >
                  <Icon
                    size={28}
                    className={`transition-colors duration-300 ${filled ? 'text-purple-300' : 'text-gray-500'}`}
                  />
                </div>

                {/* Text */}
                <h4 className={`mt-5 text-sm font-bold transition-colors duration-300 ${filled ? 'text-white' : 'text-gray-400'}`}>
                  {step.title}
                </h4>
                <p className={`mt-1 text-xs leading-relaxed transition-colors duration-300 ${filled ? 'text-gray-400' : 'text-gray-600'}`}>
                  {step.desc}
                </p>

                {/* Subtle hover highlight */}
                <AnimatePresence>
                  {hovered && (
                    <motion.div
                      className="pointer-events-none absolute -inset-3 -z-10 rounded-2xl bg-purple-500/[0.04]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Feature badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-3"
      >
        {t.platform.badges.map((badge, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-5 py-3 text-sm text-gray-300 transition-colors hover:border-purple-500/20 hover:bg-white/[0.05]"
          >
            <CheckCircle size={16} className="shrink-0 text-purple-400" />
            {badge}
          </div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
