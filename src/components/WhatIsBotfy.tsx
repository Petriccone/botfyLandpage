import { motion } from '../lib/motion'
import { MessageCircle, CalendarCheck, CreditCard, UserCheck } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const outputs = [
  { icon: MessageCircle, label: 'Support', color: '#25D366' },
  { icon: UserCheck, label: 'Sales', color: '#3b82f6' },
  { icon: CalendarCheck, label: 'Scheduling', color: '#f59e0b' },
  { icon: CreditCard, label: 'Payments', color: '#7c3aed' },
]

export function WhatIsBotfy() {
  const { t } = useLanguage()
  const w = t.whatIsBotfy

  return (
    <section className="py-16 md:py-32 bg-white relative overflow-hidden">

      {/* Aurora glow */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold tracking-tight text-text-primary mb-5"
          >
            {w.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary font-light max-w-2xl mx-auto"
          >
            {w.body1}
          </motion.p>
        </div>

        {/* Visual pipeline: Input → Botfy Core → Outputs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-0">

            {/* Input Panel — Your docs */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex-1 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:border-gray-200 transition-colors"
            >
              <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-text-muted mb-5">You provide</p>
              <ul className="space-y-3">
                {['Product catalog', 'FAQs & policies', 'Brand voice & tone', 'Customer data'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-text-secondary">
                    <div
                      className="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0 animate-dot-pulse"
                      style={{ animationDelay: `${i * 0.4}s` }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Horizontal arrow */}
            <div className="hidden md:flex items-center justify-center flex-shrink-0 w-16">
              <svg width="64" height="12" viewBox="0 0 64 12" className="overflow-visible">
                <line x1="0" y1="6" x2="52" y2="6" stroke="rgba(124,58,237,0.25)" strokeWidth="1.5" strokeDasharray="4 4" />
                <polygon points="50,3 60,6 50,9" fill="rgba(124,58,237,0.4)" />
                <circle r="3" fill="#7c3aed" opacity="0.9">
                  <animateMotion dur="1.6s" repeatCount="indefinite" path="M 0 6 L 52 6" />
                </circle>
              </svg>
            </div>
            {/* Vertical arrow mobile */}
            <div className="flex md:hidden items-center justify-center py-2">
              <svg width="12" height="40" viewBox="0 0 12 40" className="overflow-visible">
                <line x1="6" y1="0" x2="6" y2="30" stroke="rgba(124,58,237,0.25)" strokeWidth="1.5" strokeDasharray="4 4" />
                <polygon points="3,28 6,36 9,28" fill="rgba(124,58,237,0.4)" />
                <circle cx="6" cy="15" r="3" fill="#7c3aed" opacity="0.6" />
              </svg>
            </div>

            {/* Center — Botfy AI Core */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative flex-shrink-0 w-full md:w-auto md:min-w-[210px] flex flex-col items-center justify-center p-6 md:p-8 rounded-3xl text-center animate-glow-breathe"
              style={{
                background: 'linear-gradient(135deg, var(--color-brand-deep), var(--color-brand-primary), var(--color-brand-mid))',
              }}
            >
              {/* Dot grid overlay */}
              <div className="hidden md:block absolute inset-0 rounded-3xl overflow-hidden opacity-10 pointer-events-none">
                <div className="w-full h-full" style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                  backgroundSize: '18px 18px'
                }} />
              </div>

              {/* Pulsing rings */}
              <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none">
                <div className="absolute w-28 h-28 rounded-full border border-white/20 animate-pulse-ring" />
                <div className="absolute w-28 h-28 rounded-full border border-white/10 animate-pulse-ring" style={{ animationDelay: '1s' }} />
              </div>

              <div className="relative z-10 w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-3 border border-white/30">
                <img src="/botfy-icon.svg" alt="Botfy" className="w-9 h-9" loading="lazy" />
              </div>
              <p className="relative z-10 text-white font-display font-bold text-lg leading-tight mb-1">Botfy AI</p>
              <p className="relative z-10 text-white/60 text-[10px] font-mono tracking-[0.2em] uppercase">Digital Employee</p>
            </motion.div>

            {/* Horizontal arrow */}
            <div className="hidden md:flex items-center justify-center flex-shrink-0 w-16">
              <svg width="64" height="12" viewBox="0 0 64 12" className="overflow-visible">
                <line x1="0" y1="6" x2="52" y2="6" stroke="rgba(124,58,237,0.25)" strokeWidth="1.5" strokeDasharray="4 4" />
                <polygon points="50,3 60,6 50,9" fill="rgba(124,58,237,0.4)" />
                <circle r="3" fill="#7c3aed" opacity="0.9">
                  <animateMotion dur="1.6s" repeatCount="indefinite" path="M 0 6 L 52 6" />
                </circle>
              </svg>
            </div>
            {/* Vertical arrow mobile */}
            <div className="flex md:hidden items-center justify-center py-2">
              <svg width="12" height="40" viewBox="0 0 12 40" className="overflow-visible">
                <line x1="6" y1="0" x2="6" y2="30" stroke="rgba(124,58,237,0.25)" strokeWidth="1.5" strokeDasharray="4 4" />
                <polygon points="3,28 6,36 9,28" fill="rgba(124,58,237,0.4)" />
                <circle cx="6" cy="15" r="3" fill="#7c3aed" opacity="0.6" />
              </svg>
            </div>

            {/* Output Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex-1 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:border-gray-200 transition-colors"
            >
              <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-accent-purple mb-5">AI delivers</p>
              <div className="space-y-3">
                {outputs.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-text-secondary">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center animate-icon-bob"
                      style={{ background: `${item.color}15`, animationDelay: `${i * 0.5}s`, animationDuration: `${3.5 + i * 0.5}s` }}
                    >
                      <item.icon size={14} style={{ color: item.color }} />
                    </div>
                    {item.label}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-10 text-sm text-text-muted font-light"
        >
          {w.body2}
        </motion.p>
      </div>
    </section>
  )
}
