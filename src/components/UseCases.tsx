import { motion } from '../lib/motion'
import { MessageCircle } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const accentColors = [
  { border: '#7c3aed', bg: 'rgba(124,58,237,0.04)', gradient: 'from-purple-500/10 to-transparent' },
  { border: '#3b82f6', bg: 'rgba(59,130,246,0.04)', gradient: 'from-blue-500/10 to-transparent' },
  { border: '#10b981', bg: 'rgba(16,185,129,0.04)', gradient: 'from-emerald-500/10 to-transparent' },
  { border: '#f59e0b', bg: 'rgba(245,158,11,0.04)', gradient: 'from-amber-500/10 to-transparent' },
]

// Simulated WhatsApp conversation snippets per industry
const chatPreviews = [
  [
    { from: 'user', text: 'I need to book an appointment for next Tuesday' },
    { from: 'bot', text: 'Of course! Dr. Silva has slots at 9am, 2pm, and 4pm. Which works best?' },
  ],
  [
    { from: 'user', text: 'Do you have this sofa in grey?' },
    { from: 'bot', text: 'Yes! The Comfort Plus is available in grey. Here\'s the link to order: 🛒' },
  ],
  [
    { from: 'user', text: 'Can I reschedule my haircut to Saturday?' },
    { from: 'bot', text: 'Done! Moved to Saturday at 3pm. See you then! 💇‍♀️' },
  ],
  [
    { from: 'user', text: 'I\'m looking for a 2BR apartment near downtown' },
    { from: 'bot', text: 'I found 3 matches! Here\'s the first one with photos 📸' },
  ],
]

export function UseCases() {
  const { t } = useLanguage()
  const u = t.useCases

  return (
    <section id="use-cases" className="py-16 md:py-32 bg-surface relative overflow-hidden">

      <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold tracking-tight text-text-primary mb-4"
          >
            {u.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-lg font-light max-w-xl mx-auto"
          >
            {u.subtitle}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {u.cases.map((c, i) => {
            const accent = accentColors[i]
            const chat = chatPreviews[i]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Top: industry header with gradient */}
                <div className={`px-5 sm:px-7 pt-5 sm:pt-6 pb-4 bg-gradient-to-r ${accent.gradient}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{c.emoji}</span>
                    <div>
                      <span className="text-[12px] font-bold uppercase tracking-widest" style={{ color: accent.border }}>
                        {c.industry}
                      </span>
                      <span className="relative flex h-1.5 w-1.5 inline-flex ml-2 align-middle">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ backgroundColor: accent.border }} />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ backgroundColor: accent.border }} />
                      </span>
                    </div>
                  </div>
                  <p className="text-text-secondary text-[13px] leading-relaxed font-light">
                    {c.desc}
                  </p>
                </div>

                {/* Bottom: fake WhatsApp chat preview */}
                <div className="px-5 py-4 bg-gray-50/50 border-t border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                      <MessageCircle size={10} className="text-white" />
                    </div>
                    <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">WhatsApp preview</span>
                  </div>
                  <div className="space-y-2">
                    {chat.map((msg, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: msg.from === 'user' ? 10 : -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + j * 0.2 }}
                        className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[85%] px-3 py-2 rounded-xl text-[11px] leading-snug ${
                            msg.from === 'user'
                              ? 'bg-green-100 text-green-900'
                              : 'bg-white border border-gray-200 text-text-primary'
                          }`}
                        >
                          {msg.from === 'bot' && (
                            <span className="text-[9px] font-semibold text-accent-purple block mb-0.5">Botfy AI</span>
                          )}
                          {msg.text}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
