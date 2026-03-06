import { Quote } from 'lucide-react'
import { motion } from '../lib/motion'
import { useLanguage } from '../hooks/useLanguage'

export function TestimonialsKommo() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-32 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold tracking-tight text-text-primary text-center mb-14"
        >
          {t.newTestimonials.title}
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {t.newTestimonials.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col p-5 sm:p-7 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-[border-color,box-shadow] duration-300"
            >
              <Quote className="text-accent-purple/40 mb-4" size={28} />
              <p className="text-text-primary font-light mb-6 leading-relaxed">"{item.quote}"</p>
              <div className="mt-auto">
                <p className="font-semibold text-text-primary">{item.name}</p>
                <p className="text-sm text-text-muted">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
