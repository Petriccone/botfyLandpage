import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

export function FAQSection() {
  const { t } = useLanguage()
  const [open, setOpen] = useState<number | null>(null)
  const { title, subtitle, items } = t.faq

  return (
    <section className="py-16 md:py-32 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold tracking-tight text-text-primary mb-4"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary font-light"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.06, 0.3) }}
              className={`rounded-2xl border transition-[border-color,background-color] duration-200 overflow-hidden ${
                open === i ? 'border-brand-primary/30 bg-brand-primary/[0.04]' : 'border-gray-100 bg-white hover:border-gray-200'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="cursor-pointer w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-text-primary text-[15px] pr-4">{item.q}</span>
                <div className="flex-shrink-0">
                  {open === i
                    ? <Minus size={16} className="text-accent-purple" />
                    : <Plus size={16} className="text-text-muted" />
                  }
                </div>
              </button>
              <div
                className="grid transition-all duration-300 ease-out"
                style={{ gridTemplateRows: open === i ? '1fr' : '0fr' }}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-5">
                    <p className="text-text-secondary leading-relaxed font-light">{item.a}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
