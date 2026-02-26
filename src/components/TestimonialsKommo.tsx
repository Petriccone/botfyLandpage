import { motion } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'
import { Quote } from 'lucide-react'

export function TestimonialsKommo() {
  const { t } = useLanguage()
  const k = t.kommo

  return (
    <section className="py-20 md:py-28 bg-surface border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold tracking-tight text-text-primary text-center mb-16"
        >
          {k.testimonialsTitle}
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {k.testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm"
            >
              <Quote className="text-accent-purple/40 mb-4" size={28} />
              <p className="text-text-primary font-light mb-6 leading-relaxed">"{item.quote}"</p>
              <p className="font-semibold text-text-primary">{item.name}</p>
              <p className="text-sm text-text-muted">{item.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
