import { motion } from '../lib/motion'
import { UserPlus, Share2, Rocket } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const stepVisuals = [
  { icon: UserPlus, color: '#7c3aed', bg: 'rgba(124,58,237,0.08)' },
  { icon: Share2, color: '#3b82f6', bg: 'rgba(59,130,246,0.08)' },
  { icon: Rocket, color: '#10b981', bg: 'rgba(16,185,129,0.08)' },
]

export function StepsTimeline() {
  const { t } = useLanguage()
  const h = t.newHowItWorks

  return (
    <section id="how-it-works" className="py-16 md:py-32 bg-white relative overflow-hidden">

      {/* Background glow */}
      <div className="hidden md:block absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="mb-12 md:mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/[0.07] border border-brand-primary/20 text-accent-purple text-[12px] font-semibold tracking-wide mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-purple opacity-50" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-purple" />
            </span>
            {h.noCode}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold tracking-tight text-text-primary mb-4"
          >
            {h.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary font-light"
          >
            {h.subtitle}
          </motion.p>
        </div>

        {/* 3 Steps — full-width cards with connectors */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop: horizontal */}
          <div className="hidden md:flex items-stretch gap-0">
            {h.steps.map((step, i) => {
              const visual = stepVisuals[i]
              const Icon = visual.icon
              return (
                <div key={i} className="contents">
                  {/* Step card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    className="flex-1 relative bg-white rounded-2xl border border-gray-100 p-7 text-center group hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
                    style={{ transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease' }}
                    onMouseEnter={e => {
                      const el = e.currentTarget
                      el.style.borderColor = `${visual.color}30`
                      el.style.boxShadow = `0 8px 30px ${visual.color}12, 0 0 0 1px ${visual.color}10`
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget
                      el.style.borderColor = ''
                      el.style.boxShadow = ''
                    }}
                  >
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: `radial-gradient(400px circle at 50% 0%, ${visual.bg}, transparent 60%)` }}
                    />

                    <div className="relative z-10">
                      {/* Step number + icon */}
                      <div className="flex items-center justify-center gap-3 mb-5">
                        <div className="relative">
                          <div
                            className="absolute inset-0 rounded-full animate-step-pulse"
                            style={{ backgroundColor: `${visual.color}15`, animationDelay: `${i * 0.8}s` }}
                          />
                          <div
                            className="relative w-14 h-14 rounded-full border-2 flex items-center justify-center text-lg font-bold transition-all duration-300"
                            style={{ borderColor: `${visual.color}40`, color: visual.color }}
                          >
                            {i + 1}
                          </div>
                        </div>
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center animate-icon-bob"
                          style={{ background: visual.bg, animationDelay: `${i * 0.5}s`, animationDuration: `${3.5 + i * 0.3}s` }}
                        >
                          <Icon size={20} style={{ color: visual.color }} />
                        </div>
                      </div>

                      <h3 className="font-bold text-text-primary mb-2 text-[16px]">{step.title}</h3>
                      <p className="text-[13px] text-text-secondary font-light leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>

                  {/* Animated connector */}
                  {i < h.steps.length - 1 && (
                    <div className="flex items-center justify-center flex-shrink-0 w-14 pt-8">
                      <svg width="56" height="12" viewBox="0 0 56 12" className="overflow-visible">
                        <line x1="0" y1="6" x2="44" y2="6" stroke={`${visual.color}40`} strokeWidth="1.5" strokeDasharray="4 4" />
                        <polygon points="42,3 52,6 42,9" fill={`${visual.color}60`} />
                        <circle r="3" fill={visual.color} opacity="0.9">
                          <animateMotion dur="1.6s" repeatCount="indefinite" path="M 0 6 L 44 6" />
                        </circle>
                      </svg>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Mobile: vertical with connectors */}
          <div className="md:hidden space-y-0">
            {h.steps.map((step, i) => {
              const visual = stepVisuals[i]
              const Icon = visual.icon
              return (
                <div key={i}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 }}
                    className="flex items-start gap-5 py-5"
                  >
                    <div className="flex flex-col items-center gap-2 flex-shrink-0">
                      <div className="relative">
                        <div
                          className="absolute inset-0 rounded-full animate-step-pulse"
                          style={{ backgroundColor: `${visual.color}15`, animationDelay: `${i * 0.8}s` }}
                        />
                        <div
                          className="relative w-12 h-12 rounded-full border-2 bg-white flex items-center justify-center text-sm font-bold"
                          style={{ borderColor: `${visual.color}40`, color: visual.color }}
                        >
                          {i + 1}
                        </div>
                      </div>
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{ background: visual.bg }}
                      >
                        <Icon size={16} style={{ color: visual.color }} />
                      </div>
                    </div>
                    <div className="pt-2">
                      <h3 className="font-bold text-text-primary mb-1 text-[15px]">{step.title}</h3>
                      <p className="text-sm text-text-secondary font-light leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>

                  {/* Vertical connector */}
                  {i < h.steps.length - 1 && (
                    <div className="flex justify-start pl-[22px]">
                      <svg width="12" height="24" viewBox="0 0 12 24" className="overflow-visible">
                        <line x1="6" y1="0" x2="6" y2="20" stroke={`${visual.color}30`} strokeWidth="1.5" strokeDasharray="3 3" />
                        <circle cx="6" cy="10" r="2" fill={visual.color} opacity="0.5">
                          <animate attributeName="cy" from="2" to="18" dur="1.4s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0;0.8;0" dur="1.4s" repeatCount="indefinite" />
                        </circle>
                      </svg>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
