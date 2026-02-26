import { Globe, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'

export function SecurityScale() {
  const { t } = useLanguage()

  return (
    <section id="security" className="py-32 bg-surface relative border-y border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2.5rem] border border-gray-100 bg-white p-10 md:p-16 lg:p-20 relative overflow-hidden group shadow-sm"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/5 blur-[120px] pointer-events-none group-hover:bg-accent-purple/10 transition-colors duration-1000" />

          <div className="grid items-center gap-16 lg:grid-cols-2 relative z-10">
            <div>
              <span className="text-accent-purple font-mono text-[10px] uppercase tracking-[0.4em] block mb-6">Built_for_Global_Scale</span>
              <h2 className="mb-8 text-4xl md:text-6xl font-display font-bold tracking-tight text-text-primary leading-tight">
                {t.security.titleLine1} <br />
                <span className="text-accent-purple">{t.security.titleHighlight}</span>
              </h2>
              <p className="mb-10 max-w-md text-text-secondary text-lg font-light leading-relaxed">
                {t.security.subtitle}
              </p>
              <ul className="space-y-5">
                {t.security.listItems.map((item, i) => (
                  <li key={i} className="flex gap-4 text-text-primary font-medium items-start">
                    <CheckCircle size={18} className="shrink-0 text-accent-purple mt-0.5" />
                    <span className="opacity-80 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-surface p-10 shadow-sm relative">
              <div className="absolute -top-1 right-10 flex flex-col items-center">
                <div className="w-px h-10 bg-gradient-to-b from-transparent to-accent-purple/30" />
                <div className="w-2 h-2 rounded-full bg-accent-purple shadow-[0_0_10px_rgba(124,58,237,0.4)]" />
              </div>

              <div className="mb-10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-purple/10 border border-accent-purple/20">
                    <Globe size={24} className="text-accent-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary">{t.security.card.region}</h3>
                    <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest">{t.security.card.cluster}</p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full border border-green-200 bg-green-50 text-green-600 text-[10px] font-bold uppercase tracking-widest">
                  {t.security.card.active}
                </div>
              </div>

              <div className="space-y-6 pt-6 border-t border-gray-100">
                {[
                  { label: t.security.card.gdprLabel, value: t.security.card.gdprValue },
                  { label: t.security.card.encLabel, value: t.security.card.encValue },
                  { label: t.security.card.uptimeLabel, value: t.security.card.uptimeValue }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm text-text-muted font-light">{stat.label}</span>
                    <span className="text-sm font-mono font-bold text-text-primary tracking-tight">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
