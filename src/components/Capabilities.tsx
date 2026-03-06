import { motion } from 'framer-motion'
import { Headphones, Target, CalendarCheck, CreditCard, Image, Users } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const items = [
  { icon: Headphones, color: '#25D366', bg: 'rgba(37,211,102,0.08)' },
  { icon: Target, color: '#3b82f6', bg: 'rgba(59,130,246,0.08)' },
  { icon: CalendarCheck, color: '#f59e0b', bg: 'rgba(245,158,11,0.08)' },
  { icon: CreditCard, color: '#7c3aed', bg: 'rgba(124,58,237,0.08)' },
  { icon: Image, color: '#ec4899', bg: 'rgba(236,72,153,0.08)' },
  { icon: Users, color: '#06b6d4', bg: 'rgba(6,182,212,0.08)' },
]

export function Capabilities() {
  const { t } = useLanguage()
  const c = t.capabilities

  return (
    <section id="capabilities" className="py-16 md:py-32 bg-surface relative overflow-hidden">

      {/* Background glow */}
      <div className="hidden md:block absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16">
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
            24/7 on autopilot
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold tracking-tight text-text-primary mb-4"
          >
            {c.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-lg font-light max-w-xl mx-auto"
          >
            {c.subtitle}
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {c.items.map((item, i) => {
            const visual = items[i]
            const Icon = visual.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.08, 0.4), duration: 0.5 }}
                className="relative bg-white rounded-2xl p-6 border border-gray-100 cursor-default transition-all duration-300 group overflow-hidden hover:-translate-y-1.5"
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
                {/* Hover radial glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(500px circle at 50% 0%, ${visual.bg}, transparent 60%)` }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center animate-icon-bob"
                      style={{ background: visual.bg, animationDelay: `${i * 0.4}s`, animationDuration: `${3.5 + i * 0.3}s` }}
                    >
                      <Icon size={20} style={{ color: visual.color }} />
                    </div>
                    {/* Live dot */}
                    <span className="relative flex h-1.5 w-1.5 ml-auto">
                      <span
                        className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-40"
                        style={{ backgroundColor: visual.color, animationDelay: `${i * 0.3}s` }}
                      />
                      <span
                        className="relative inline-flex rounded-full h-1.5 w-1.5"
                        style={{ backgroundColor: visual.color }}
                      />
                    </span>
                  </div>
                  <h3 className="font-bold text-text-primary mb-2 text-[15px]">{item.title}</h3>
                  <p className="text-text-secondary text-[13px] leading-relaxed font-light">{item.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
