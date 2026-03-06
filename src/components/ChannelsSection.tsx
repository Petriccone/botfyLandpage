import { motion } from 'framer-motion'
import { MessageCircle, Send, Globe } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const channels = [
  { icon: MessageCircle, name: 'WhatsApp', color: '#25D366', bg: 'rgba(37,211,102,0.06)' },
  { icon: Send, name: 'Telegram', color: '#26A5E4', bg: 'rgba(38,165,228,0.06)' },
  { icon: Globe, name: 'Web Chat', color: '#7c3aed', bg: 'rgba(124,58,237,0.06)' },
]

export function ChannelsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-14 md:py-20 bg-white border-t border-gray-100 relative overflow-hidden">

      {/* Subtle background gradient */}
      <div className="hidden md:block absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.04) 0%, transparent 60%)' }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">

        {/* Live status badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-200 bg-green-50 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-[11px] font-mono font-medium text-green-700 uppercase tracking-widest">Live — 3 channels active</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold tracking-tight text-text-primary mb-4"
        >
          {t.channels.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-text-secondary text-base sm:text-lg font-light mb-10 md:mb-14"
        >
          {t.channels.subtitle}
        </motion.p>

        {/* Channel cards */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-md mx-auto sm:max-w-none sm:flex sm:flex-wrap sm:justify-center">
          {channels.map((ch, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4, ease: 'easeOut' }}
              className="relative group flex flex-col items-center gap-2 sm:gap-3 px-3 py-4 sm:px-7 sm:py-6 rounded-2xl border border-gray-100 cursor-default transition-[transform,border-color] duration-300 hover:-translate-y-1.5"
              style={{ background: ch.bg }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: `0 8px 30px ${ch.color}25, 0 0 0 1px ${ch.color}20` }}
              />

              {/* Live pulse indicator */}
              <div className="absolute top-2.5 right-2.5">
                <span className="relative flex h-2 w-2">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                    style={{ backgroundColor: ch.color, animationDelay: `${i * 0.4}s` }}
                  />
                  <span
                    className="relative inline-flex rounded-full h-2 w-2"
                    style={{ backgroundColor: ch.color }}
                  />
                </span>
              </div>

              {/* Icon */}
              <div
                className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center animate-icon-bob"
                style={{ background: `${ch.color}18`, animationDuration: `${4 + i * 0.5}s` }}
              >
                <ch.icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: ch.color }} />
              </div>

              <span className="relative z-10 text-[11px] sm:text-[13px] font-semibold text-text-primary">{ch.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Unified inbox badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-gray-200 bg-white shadow-sm"
        >
          <div className="flex -space-x-1.5">
            {channels.map((ch, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center"
                style={{ background: `${ch.color}15` }}
              >
                <ch.icon size={11} style={{ color: ch.color }} />
              </div>
            ))}
          </div>
          <span className="text-[12px] text-text-secondary font-medium">All in one unified inbox</span>
          <div className="w-1.5 h-1.5 rounded-full bg-accent-purple animate-pulse" />
        </motion.div>
      </div>
    </section>
  )
}
