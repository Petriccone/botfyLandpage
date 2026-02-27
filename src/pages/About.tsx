import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

export function About() {
  const { t } = useLanguage()
  const a = t.pages.about

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-accent-purple text-[12px] font-semibold mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
              {a.title}
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-text-primary leading-[1.1] mb-6">
              {a.tagline}
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Mission */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-display font-bold text-text-primary mb-4 tracking-tight">
              {a.missionTitle}
            </h2>
            <p className="text-text-secondary leading-relaxed font-light text-lg">
              {a.missionContent}
            </p>
          </motion.section>

          {/* Problem */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-2xl font-display font-bold text-text-primary mb-4 tracking-tight">
              {a.problemTitle}
            </h2>
            <p className="text-text-secondary font-light mb-4">{a.problemIntro}</p>
            <ul className="space-y-2 mb-4">
              {a.problemList.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-text-secondary font-light">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-text-secondary font-light">{a.problemClosing}</p>
          </motion.section>
        </div>

        {/* What makes us different */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-20 border-t border-gray-100"
        >
          <h2 className="text-2xl font-display font-bold text-text-primary mb-10 tracking-tight text-center">
            {a.differentTitle}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {a.differentList.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-5 rounded-2xl bg-surface border border-gray-100">
                <CheckCircle size={16} className="text-accent-purple flex-shrink-0 mt-0.5" />
                <span className="text-text-secondary text-sm font-light leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Vision */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-20 border-t border-gray-100"
        >
          <h2 className="text-2xl font-display font-bold text-text-primary mb-8 tracking-tight text-center">
            {a.visionTitle}
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {a.visionList.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 hover:border-purple-100 transition-colors">
                <div className="w-8 h-8 rounded-full bg-accent-purple/10 flex items-center justify-center flex-shrink-0 text-accent-purple font-bold text-sm">
                  {i + 1}
                </div>
                <p className="text-text-secondary font-light">{item}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-16 border-t border-gray-100 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-8 tracking-tight">
            {a.ctaTitle}
          </h3>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://botfyai.vercel.app/register" target="_blank" rel="noopener noreferrer" className="no-underline">
              <button className="cursor-pointer px-8 py-3.5 rounded-full bg-accent-purple text-white font-bold text-[15px] hover:bg-accent-purple/90 transition-all shadow-lg shadow-purple-200">
                {a.ctaButton}
              </button>
            </a>
            <a href="mailto:contact@botfy.ai" className="no-underline">
              <button className="cursor-pointer px-8 py-3.5 rounded-full bg-white border border-gray-200 text-text-primary font-semibold text-[15px] hover:border-gray-300 transition-all">
                {a.ctaSecondary}
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
