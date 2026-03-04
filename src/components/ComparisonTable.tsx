import { motion } from 'framer-motion'
import { Check, X, Minus, Sparkles } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

function CellIcon({ value, delay }: { value: string; delay: number }) {
  if (value === 'yes')
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay, type: 'spring', stiffness: 300, damping: 20 }}
        className="w-7 h-7 rounded-full bg-green-50 flex items-center justify-center mx-auto ring-2 ring-green-100"
      >
        <Check size={14} className="text-green-500" strokeWidth={3} />
      </motion.div>
    )
  if (value === 'no')
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center mx-auto"
      >
        <X size={14} className="text-gray-300" />
      </motion.div>
    )
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="w-7 h-7 rounded-full bg-amber-50 flex items-center justify-center mx-auto"
    >
      <Minus size={14} className="text-amber-400" />
    </motion.div>
  )
}

export function ComparisonTable() {
  const { t } = useLanguage()
  const c = t.comparison

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">

      {/* Subtle glow behind table */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/[0.07] border border-brand-primary/20 text-accent-purple text-[12px] font-semibold tracking-wide mb-6"
          >
            <Sparkles size={12} />
            Side by side
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
            className="text-text-secondary text-lg font-light"
          >
            {c.subtitle}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="overflow-x-auto rounded-3xl border border-gray-100 shadow-2xl shadow-gray-200/60 bg-white"
        >
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left px-6 py-5 bg-gray-50/80 font-medium text-text-muted text-[11px] uppercase tracking-widest rounded-tl-3xl" />
                {c.headers.map((h, i) => (
                  <th
                    key={i}
                    className={`px-6 py-5 text-center font-bold text-[13px] ${
                      i === 2
                        ? 'text-white rounded-tr-3xl relative'
                        : 'bg-gray-50/80 text-text-primary'
                    }`}
                    style={i === 2 ? { background: 'linear-gradient(135deg, var(--color-brand-deep), var(--color-brand-primary))' } : undefined}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {i === 2 && (
                        <div className="w-5 h-5 rounded-md bg-white/20 flex items-center justify-center">
                          <img src="/botfy-icon.svg" alt="" className="w-3.5 h-3.5" />
                        </div>
                      )}
                      {h}
                      {i === 2 && (
                        <span className="relative flex h-2 w-2 ml-1">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-50" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {c.rows.map((row, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.04, duration: 0.4 }}
                  className="border-t border-gray-50 hover:bg-gray-50/50 transition-colors"
                >
                  <td className="px-6 py-4 text-text-secondary font-light text-[13px] whitespace-nowrap">
                    {row.label}
                  </td>
                  {row.cells.map((cell, j) => (
                    <td
                      key={j}
                      className={`px-6 py-4 text-center ${
                        j === 2 ? 'bg-accent-purple/[0.03]' : ''
                      }`}
                    >
                      <CellIcon value={cell} delay={0.3 + i * 0.04 + j * 0.05} />
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>

          {/* Bottom accent bar for Botfy column */}
          <div className="flex">
            <div className="flex-1" />
            <div className="flex-1" />
            <div className="flex-1" />
            <div
              className="flex-1 h-1 rounded-b-3xl"
              style={{ background: 'linear-gradient(90deg, var(--color-brand-deep), var(--color-brand-primary), var(--color-brand-mid))' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
