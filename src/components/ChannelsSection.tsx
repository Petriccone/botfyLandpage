import { motion } from 'framer-motion'
import { MessageCircle, Instagram, MessageSquare, Globe, Mail } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const channels = [
  { icon: MessageCircle, name: 'WhatsApp', color: '#25D366', bg: '#F0FDF4' },
  { icon: Instagram, name: 'Instagram', color: '#E1306C', bg: '#FFF1F5' },
  { icon: MessageSquare, name: 'Messenger', color: '#0084FF', bg: '#EFF6FF' },
  { icon: Globe, name: 'Web Chat', color: '#7c3aed', bg: '#F5F3FF' },
  { icon: Mail, name: 'E-mail', color: '#EA4335', bg: '#FEF2F2' },
]

export function ChannelsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
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
          className="text-text-secondary text-lg font-light mb-14"
        >
          {t.channels.subtitle}
        </motion.p>

        <div className="flex flex-wrap justify-center gap-5">
          {channels.map((ch, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center gap-3 px-7 py-5 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all cursor-default"
              style={{ background: ch.bg }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: `${ch.color}18` }}
              >
                <ch.icon size={22} style={{ color: ch.color }} />
              </div>
              <span className="text-[13px] font-semibold text-text-primary">{ch.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
