import { motion } from 'framer-motion'
import { Play, CheckCircle, MessageCircle } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

export function HeroKommo() {
  const { t } = useLanguage()
  const k = t.kommo

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 overflow-hidden bg-white">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-purple-50/70 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 w-full">
        <div className="text-center mb-12">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/[0.07] border border-brand-primary/20 text-accent-purple text-[12px] font-semibold tracking-wide mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
            {k.badge}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-text-primary leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: 'clamp(40px, 6.5vw, 88px)' }}
          >
            {k.heroLine1}<br />
            {k.heroLine2}<br />
            <span className="gradient-text">{k.heroLine3}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            {k.heroSubline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-12"
          >
            <a href="https://botfyai.vercel.app/register" target="_blank" rel="noopener noreferrer" className="no-underline inline-flex w-full sm:w-auto px-8 py-3.5 rounded-full bg-accent-purple text-white font-bold text-[15px] hover:bg-accent-purple/90 transition-[background-color,transform] duration-200 shadow-lg shadow-brand-primary/30 hover:-translate-y-0.5 items-center justify-center">
              {k.tryFreeCta}
            </a>
            <a href="mailto:contact@botfy.ai" className="no-underline inline-flex w-full sm:w-auto px-8 py-3.5 rounded-full bg-white border border-gray-200 text-text-primary font-semibold text-[15px] hover:border-gray-300 hover:bg-gray-50 transition-[background-color,border-color] duration-200 items-center justify-center gap-2.5">
              <div className="w-6 h-6 rounded-full bg-accent-purple/10 flex items-center justify-center">
                <Play size={10} className="text-accent-purple fill-accent-purple ml-0.5" />
              </div>
              {k.heroBookDemo}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
          >
            {k.heroStats.map((stat, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <CheckCircle size={13} className="text-accent-purple flex-shrink-0" />
                <span className="text-text-secondary">
                  <strong className="text-text-primary font-semibold">{stat.value}</strong> {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Product Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-4xl"
        >
          {/* Browser chrome + screenshot */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/80 border border-gray-200 ring-1 ring-gray-100">
            <div className="bg-gray-50 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white rounded-md h-5 mx-6 flex items-center px-3 border border-gray-100">
                <span className="text-[10px] text-gray-400">app.botfy.ai</span>
              </div>
            </div>
            <img
              src="/screens/dashboard.png"
              alt="Botfy Dashboard"
              className="w-full block"
              loading="eager"
            />
          </div>

          {/* Floating incoming message - bottom left */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="absolute -bottom-6 left-4 sm:-left-8 bg-white rounded-2xl shadow-xl border border-gray-100 p-3.5 hidden sm:block"
            style={{ maxWidth: 230 }}
          >
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <MessageCircle size={13} className="text-white" />
              </div>
              <div>
                <p className="text-[10px] font-semibold text-text-muted">WhatsApp · agora</p>
                <p className="text-[12px] text-text-primary mt-0.5 leading-snug">Olá! Tenho interesse no produto 😊</p>
              </div>
            </div>
          </motion.div>

          {/* Floating AI response - bottom right */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="absolute -bottom-6 right-4 sm:-right-8 bg-accent-purple rounded-2xl shadow-xl p-3.5 hidden sm:block"
            style={{ maxWidth: 210 }}
          >
            <p className="text-white text-[10px] font-semibold mb-1">Botfy IA · respondeu</p>
            <p className="text-white/85 text-[12px] leading-snug">Olá! Já vou te ajudar 🤖</p>
            <div className="flex items-center gap-1 mt-2">
              <div className="w-1 h-1 rounded-full bg-white/50" />
              <p className="text-white/50 text-[9px]">0.8s de resposta</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
