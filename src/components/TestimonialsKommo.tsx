import { motion } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'

export function TestimonialsKommo() {
  const { t } = useLanguage()
  const k = t.kommo

  return (
    <section className="py-24 md:py-32 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold tracking-tight text-text-primary text-center mb-14"
        >
          {k.testimonialsTitle}
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {k.testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col p-7 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all"
            >
              {/* Metric highlight */}
              <div className="inline-flex self-start mb-5">
                <span className="text-2xl font-display font-black text-accent-purple">{item.metric}</span>
              </div>

              {/* Quote */}
              <p className="text-text-secondary font-light leading-relaxed flex-1 mb-6">
                "{item.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-accent-purple/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-purple font-bold text-sm">{item.name[0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-text-primary text-[14px]">{item.name}</p>
                  <p className="text-[12px] text-text-muted">{item.role} · {item.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
