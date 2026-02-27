import { motion } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'

function AnimatedArrow() {
  return (
    <div className="hidden md:flex items-center justify-center flex-shrink-0 w-16">
      <svg width="64" height="12" viewBox="0 0 64 12" className="overflow-visible">
        {/* Dashed track */}
        <line
          x1="0" y1="6" x2="52" y2="6"
          stroke="rgba(124,58,237,0.25)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        {/* Arrowhead */}
        <polygon
          points="50,3 60,6 50,9"
          fill="rgba(124,58,237,0.4)"
        />
        {/* Moving dot */}
        <circle r="3" fill="#7c3aed" opacity="0.9">
          <animateMotion dur="1.6s" repeatCount="indefinite" path="M 0 6 L 52 6" />
        </circle>
      </svg>
    </div>
  )
}

export function StepsTimeline() {
  const { t } = useLanguage()
  const h = t.howItWorks

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-white relative overflow-hidden">

      {/* Background: subtle radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

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

        {/* AI Pipeline Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-0">

            {/* Input Panel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex-1 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:border-gray-200 transition-colors"
            >
              <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-accent-purple mb-5">{h.inputLabel}</p>
              <ul className="space-y-3">
                {h.inputs.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-text-secondary">
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0"
                      animate={{ scale: [1, 1.8, 1], opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Arrow left → center */}
            <AnimatedArrow />

            {/* Center — Botfy AI Core */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 150 }}
              className="relative flex-shrink-0 flex flex-col items-center justify-center p-8 rounded-3xl text-center animate-glow-breathe"
              style={{
                background: 'linear-gradient(135deg, #6d28d9, #7c3aed, #8b5cf6)',
                minWidth: 210,
              }}
            >
              {/* Dot grid overlay */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-10 pointer-events-none">
                <div className="w-full h-full" style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                  backgroundSize: '18px 18px'
                }} />
              </div>

              {/* Pulsing rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-28 h-28 rounded-full border border-white/20 animate-pulse-ring" />
                <div className="absolute w-28 h-28 rounded-full border border-white/10 animate-pulse-ring" style={{ animationDelay: '1s' }} />
              </div>

              {/* B logo */}
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 border border-white/30">
                <span className="text-white font-display font-black text-2xl">B</span>
              </div>

              <p className="relative z-10 text-white font-bold text-lg leading-tight mb-1">Botfy IA</p>
              <p className="relative z-10 text-white/60 text-[10px] font-mono tracking-[0.2em] uppercase">Neural Engine</p>
            </motion.div>

            {/* Arrow center → right */}
            <AnimatedArrow />

            {/* Output Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex-1 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:border-gray-200 transition-colors"
            >
              <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-accent-purple mb-5">{h.outputLabel}</p>
              <ul className="space-y-3">
                {h.outputs.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-text-secondary">
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-accent-purple/50 flex-shrink-0"
                      animate={{ scale: [1, 1.8, 1], opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 + 0.5 }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* 3 Steps */}
        <div className="grid md:grid-cols-3 gap-px bg-gray-100 rounded-2xl overflow-hidden max-w-4xl mx-auto">
          {h.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-white px-8 py-8 text-center group hover:bg-purple-50/40 transition-colors"
            >
              <div className="relative w-12 h-12 mx-auto mb-5">
                <motion.div
                  className="absolute inset-0 rounded-full bg-accent-purple/10"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
                />
                <div className="relative w-12 h-12 rounded-full border-2 border-accent-purple/25 bg-white flex items-center justify-center text-sm font-bold text-accent-purple group-hover:border-accent-purple/50 transition-colors">
                  {i + 1}
                </div>
              </div>
              <h3 className="font-bold text-text-primary mb-2 text-[15px]">{step.title}</h3>
              <p className="text-sm text-text-secondary font-light leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-text-muted opacity-50">
            {h.noCode}
          </p>
        </div>
      </div>
    </section>
  )
}
