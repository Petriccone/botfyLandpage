import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

export function CTASection() {
  const { t } = useLanguage()
  const c = t.newCta
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
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-primary/10"
        >
          {/* Gradient border effect */}
          <div className="absolute inset-0 rounded-3xl"
            style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(59,130,246,0.1), rgba(16,185,129,0.1))' }}
          />

          <div className="relative m-[1px] bg-white rounded-[23px] p-12 md:p-16 overflow-hidden">
            {/* Inner glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.06) 0%, transparent 70%)' }}
            />

            {/* Dot grid overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <div className="w-full h-full" style={{
                backgroundImage: 'radial-gradient(circle, rgba(124,58,237,0.8) 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }} />
            </div>

            <div className="relative z-10">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/[0.07] border border-brand-primary/20 text-accent-purple text-[12px] font-semibold mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-purple opacity-50" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-purple" />
                </span>
                {k.ctaBadge}
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-display font-bold tracking-tight text-text-primary mb-5"
              >
                {c.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-text-secondary mb-10 font-light max-w-lg mx-auto"
              >
                {c.body}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <a
                  href="/register"
                  className="no-underline w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-white font-bold text-[15px] transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-brand-primary/30 group"
                  style={{ background: 'linear-gradient(135deg, var(--color-brand-deep), var(--color-brand-primary))' }}
                >
                  {c.ctaPrimary}
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a href="mailto:contact@botfy.ai" className="no-underline w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-white border border-gray-200 text-text-secondary font-medium text-[14px] hover:border-gray-300 hover:bg-gray-50 hover:text-text-primary transition-all duration-200">
                  {c.ctaSecondary}
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
