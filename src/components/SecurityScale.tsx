import { Globe, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { Badge } from './ui/Badge'
import { SectionWrapper } from './ui/SectionWrapper'
import { useLanguage } from '../hooks/useLanguage'

export function SecurityScale() {
  const { t } = useLanguage()

  return (
    <SectionWrapper id="security" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-sm sm:p-10 lg:p-12"
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: título, texto e lista */}
          <div>
            <h2 className="mb-6 text-4xl font-black italic tracking-tight sm:text-5xl">
              {t.security.titleLine1}
              <br />
              <span className="gradient-text">{t.security.titleHighlight}</span>
            </h2>
            <p className="mb-8 max-w-md text-gray-400 leading-relaxed">
              {t.security.subtitle}
            </p>
            <ul className="space-y-4">
              {t.security.listItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <CheckCircle size={18} className="shrink-0 text-purple-400" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: card Frankfurt Region */}
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5">
                  <Globe size={20} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold">{t.security.card.region}</h3>
                  <p className="text-xs text-gray-500">{t.security.card.cluster}</p>
                </div>
              </div>
              <Badge variant="success">{t.security.card.active}</Badge>
            </div>

            <div className="space-y-4 border-t border-white/[0.06] pt-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">{t.security.card.gdprLabel}</span>
                <span className="text-sm font-bold">{t.security.card.gdprValue}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">{t.security.card.encLabel}</span>
                <span className="text-sm font-bold">{t.security.card.encValue}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">{t.security.card.uptimeLabel}</span>
                <span className="text-sm font-bold">{t.security.card.uptimeValue}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
