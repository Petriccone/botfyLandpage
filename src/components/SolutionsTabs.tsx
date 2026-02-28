import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const screenMap: Record<string, string> = {
  dashboard: '/screens/dashboard.png',
  crm: '/screens/crm.png',
  'ai-agents': '/screens/ai-agents.png',
  training: '/screens/training.png',
  team: '/screens/team.png',
}

export function SolutionsTabs() {
  const { t } = useLanguage()
  const [active, setActive] = useState(0)
  const [displayed, setDisplayed] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined)
  const tabs = t.solutionsTabs.tabs
  const current = tabs[displayed]

  function switchTab(i: number) {
    if (i === active || transitioning) return
    setActive(i)
    setTransitioning(true)
    clearTimeout(timerRef.current)
    // Fade out → swap content → fade in
    timerRef.current = setTimeout(() => {
      setDisplayed(i)
      setTransitioning(false)
    }, 200)
  }

  return (
    <section id="solution" className="py-24 md:py-32 bg-surface border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold tracking-tight text-text-primary mb-4"
          >
            {t.solutionsTabs.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary font-light max-w-xl mx-auto"
          >
            {t.solutionsTabs.subtitle}
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 -mx-6 px-6">
          <div className="inline-flex bg-white border border-gray-200 rounded-2xl p-1.5 gap-1 max-w-full overflow-x-auto scrollbar-hide">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => switchTab(i)}
                className={`cursor-pointer px-4 md:px-5 py-2.5 rounded-xl text-[12px] md:text-[13px] font-semibold transition-colors duration-200 whitespace-nowrap flex-shrink-0 ${
                  active === i
                    ? 'bg-accent-purple text-white shadow-sm'
                    : 'text-text-secondary hover:text-text-primary hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-opacity duration-200 ease-in-out"
          style={{ opacity: transitioning ? 0 : 1 }}
        >
          {/* Text side */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-4 tracking-tight">
              {current.title}
            </h3>
            <p className="text-text-secondary leading-relaxed mb-8 font-light text-lg">
              {current.desc}
            </p>
            <ul className="space-y-4">
              {current.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-purple/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle size={12} className="text-accent-purple" />
                  </div>
                  <span className="text-text-secondary leading-snug">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Screenshot side */}
          <div className="order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white">
              <div className="bg-gray-50 px-4 py-2.5 flex items-center gap-1.5 border-b border-gray-100">
                <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
              </div>
              <img
                src={screenMap[current.screen] || screenMap['dashboard']}
                alt={current.title}
                className="w-full block"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
