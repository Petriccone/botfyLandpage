import { motion } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'

export function CTASection() {
  const { t } = useLanguage()
  const k = t.kommo

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-gray-100">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-primary/[0.06] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-100 p-12 md:p-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/[0.07] border border-brand-primary/20 text-accent-purple text-[12px] font-semibold mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
            {k.ctaBadge}
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-text-primary mb-5">
            {k.ctaHeadline}
          </h2>
          <p className="text-lg text-text-secondary mb-10 font-light max-w-lg mx-auto">
            {k.ctaSub}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://botfyai.vercel.app/register" target="_blank" rel="noopener noreferrer" className="no-underline w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-full bg-accent-purple text-white font-bold text-[15px] hover:bg-accent-purple/90 transition-[background-color,transform] duration-200 shadow-lg shadow-brand-primary/30 hover:-translate-y-0.5">
              {k.tryFree}
            </a>
            <a href="mailto:contact@botfy.ai" className="no-underline w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-full bg-white border border-gray-200 text-text-primary font-semibold text-[15px] hover:border-gray-300 hover:bg-gray-50 transition-[background-color,border-color] duration-200">
              {k.bookDemo}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
