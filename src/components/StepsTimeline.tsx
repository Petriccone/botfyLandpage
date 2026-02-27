import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

export function StepsTimeline() {
  const { t } = useLanguage()
  const h = t.howItWorks

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-20 text-center">
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

        {/* Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto">
            {/* Input column */}
            <div className="rounded-2xl border border-gray-100 bg-surface p-6">
              <p className="text-[11px] font-bold uppercase tracking-widest text-text-muted mb-5">{h.inputLabel}</p>
              <ul className="space-y-3">
                {h.inputs.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-text-secondary">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Center - Botfy */}
            <div className="rounded-2xl bg-accent-purple p-6 flex flex-col items-center justify-center text-center shadow-lg shadow-purple-200">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                <span className="text-white font-display font-black text-2xl">B</span>
              </div>
              <p className="text-white font-bold text-lg mb-1">Botfy IA</p>
              <p className="text-white/70 text-[12px]">Treinada no seu negócio</p>
              <div className="flex gap-2 mt-4">
                <ArrowRight size={14} className="text-white/50 rotate-180" />
                <ArrowRight size={14} className="text-white/70" />
              </div>
            </div>

            {/* Output column */}
            <div className="rounded-2xl border border-gray-100 bg-surface p-6">
              <p className="text-[11px] font-bold uppercase tracking-widest text-text-muted mb-5">{h.outputLabel}</p>
              <ul className="space-y-3">
                {h.outputs.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-text-secondary">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-purple/50 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 3 Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {h.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-10 h-10 rounded-full border-2 border-accent-purple/20 bg-purple-50 flex items-center justify-center text-sm font-bold text-accent-purple mx-auto mb-4">
                {i + 1}
              </div>
              <h3 className="font-bold text-text-primary mb-2">{step.title}</h3>
              <p className="text-sm text-text-secondary font-light">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-text-muted opacity-60">
            {h.noCode}
          </p>
        </div>
      </div>
    </section>
  )
}
