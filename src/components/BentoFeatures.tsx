import { motion } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'
import { Cpu, FileText, Shield, Globe, Zap, BarChart3 } from 'lucide-react'

export function BentoFeatures() {
  const { t } = useLanguage()

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className="text-accent-purple font-mono text-[10px] uppercase tracking-[0.4em] block mb-4">Core_Infrastructure</span>
          <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tight mb-8 max-w-4xl text-text-primary leading-[1.05]">
            Standard AI is too slow. <br />
            <span className="text-text-muted">Botfy is built for</span> <span className="text-text-primary">real-time scale.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 row-span-2 bento-card border-none bg-gradient-to-br from-surface to-white p-12 flex flex-col justify-end group overflow-hidden"
          >
            <div className="absolute top-12 left-12 w-20 h-20 rounded-3xl bg-accent-purple/10 flex items-center justify-center text-accent-purple group-hover:scale-110 transition-transform duration-700">
              <Cpu size={40} />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-text-primary mb-4">{t.features.items[0].title}</h3>
              <p className="text-text-secondary text-lg max-w-md font-light">
                {t.features.items[0].desc}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 row-span-1 bento-card p-10 flex flex-col justify-between"
          >
            <Zap size={24} className="text-accent-purple" />
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-2">{t.features.items[4].title}</h3>
              <p className="text-sm text-text-secondary font-light">{t.features.items[4].desc}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 row-span-1 bento-card p-10 flex flex-col justify-between"
          >
            <Shield size={24} className="text-accent-purple" />
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-2">{t.features.items[2].title}</h3>
              <p className="text-sm text-text-secondary font-light">{t.features.items[2].desc}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-5 row-span-1 bento-card p-10 flex flex-col justify-between"
          >
            <Globe size={24} className="text-accent-purple" />
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-2">{t.features.items[3].title}</h3>
              <p className="text-sm text-text-secondary font-light">{t.features.items[3].desc}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-7 row-span-1 bento-card p-10 flex flex-col justify-between"
          >
            <FileText size={24} className="text-accent-purple" />
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-2">{t.features.items[1].title}</h3>
              <p className="text-sm text-text-secondary font-light">{t.features.items[1].desc}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
