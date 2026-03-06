import { motion } from 'framer-motion'
import { Clock, UserX, MessageSquareOff, DollarSign, AlertTriangle, Bot } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const painIcons = [Clock, UserX, MessageSquareOff, DollarSign, AlertTriangle, Bot]
const painColors = [
  { color: '#ef4444', bg: 'rgba(239,68,68,0.10)' },
  { color: '#f97316', bg: 'rgba(249,115,22,0.10)' },
  { color: '#eab308', bg: 'rgba(234,179,8,0.10)' },
  { color: '#e11d48', bg: 'rgba(225,29,72,0.10)' },
  { color: '#dc2626', bg: 'rgba(220,38,38,0.10)' },
  { color: '#7c3aed', bg: 'rgba(124,58,237,0.10)' },
]

export function ProblemSection() {
  const { t } = useLanguage()
  const p = t.problem

  return (
    <section id="problem" className="py-16 md:py-32 bg-surface relative overflow-hidden">

      {/* Decorative red-ish glow — signals "danger zone" */}
      <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(239,68,68,0.04) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold tracking-tight text-text-primary mb-4"
          >
            {p.title}
          </motion.h2>
        </div>

        {/* Pain points grid — 3 + 3 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto mb-10 md:mb-14">
          {p.cards.map((card, i) => {
            const Icon = painIcons[i]
            const accent = painColors[i]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-gray-100 hover:border-red-100 hover:shadow-md transition-all duration-300 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: accent.bg }}
                >
                  <Icon size={18} style={{ color: accent.color }} />
                </div>
                <p className="text-[13px] text-text-secondary leading-relaxed font-light">
                  {card}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Punchline — full width, gradient text, dramatic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-block rounded-2xl border border-brand-primary/20 bg-white px-8 py-6 shadow-lg shadow-brand-primary/5">
            <p className="text-xl md:text-2xl font-display font-bold">
              <span className="gradient-text">{p.body3}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
