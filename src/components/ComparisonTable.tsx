import { motion } from 'framer-motion'
import { Check, X, Minus, Sparkles } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

function CellIcon({ value }: { value: string }) {
  if (value === 'yes')
    return (
      <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center ring-2 ring-green-100">
        <Check size={12} className="text-green-500" strokeWidth={3} />
      </div>
    )
  if (value === 'no')
    return (
      <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center">
        <X size={12} className="text-gray-300" />
      </div>
    )
  return (
    <div className="w-6 h-6 rounded-full bg-amber-50 flex items-center justify-center">
      <Minus size={12} className="text-amber-400" />
    </div>
  )
}

export function ComparisonTable() {
  const { t } = useLanguage()
  const c = t.comparison

  return (
    <section className="py-16 md:py-32 bg-white relative overflow-hidden">

      {/* Subtle glow behind table */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16">
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

        {/* Desktop: table layout */}
        <div className="hidden sm:block">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="rounded-3xl border border-gray-100 shadow-2xl shadow-gray-200/60 bg-white"
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
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.rows.map((row, i) => (
                  <tr
                    key={i}
                    className="border-t border-gray-50 hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-text-secondary font-light text-[13px]">
                      {row.label}
                    </td>
                    {row.cells.map((cell, j) => (
                      <td
                        key={j}
                        className={`px-6 py-4 text-center ${
                          j === 2 ? 'bg-accent-purple/[0.03]' : ''
                        }`}
                      >
                        <div className="flex justify-center">
                          <CellIcon value={cell} />
                        </div>
                      </td>
                    ))}
                  </tr>
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

        {/* Mobile: stacked cards per competitor */}
        <div className="sm:hidden space-y-4">
          {c.headers.map((header, headerIdx) => (
            <div
              key={headerIdx}
              className={`rounded-2xl border overflow-hidden ${
                headerIdx === 2
                  ? 'border-accent-purple/30 shadow-lg shadow-brand-primary/10'
                  : 'border-gray-100'
              }`}
            >
              {/* Card header */}
              <div
                className={`px-5 py-3.5 flex items-center gap-2 ${
                  headerIdx === 2
                    ? 'text-white'
                    : 'bg-gray-50 text-text-primary'
                }`}
                style={headerIdx === 2 ? { background: 'linear-gradient(135deg, var(--color-brand-deep), var(--color-brand-primary))' } : undefined}
              >
                {headerIdx === 2 && (
                  <div className="w-5 h-5 rounded-md bg-white/20 flex items-center justify-center">
                    <img src="/botfy-icon.svg" alt="" className="w-3.5 h-3.5" />
                  </div>
                )}
                <span className="font-bold text-[14px]">{header}</span>
              </div>

              {/* Card rows */}
              <div className="bg-white divide-y divide-gray-50">
                {c.rows.map((row, rowIdx) => (
                  <div key={rowIdx} className="flex items-center justify-between px-5 py-3">
                    <span className="text-[13px] text-text-secondary font-light">{row.label}</span>
                    <CellIcon value={row.cells[headerIdx]} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
