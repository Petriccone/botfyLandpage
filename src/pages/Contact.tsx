import { useState } from 'react'
import { motion } from '../lib/motion'
import { Send, Mail } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

export function Contact() {
  const { t } = useLanguage()
  const c = t.pages.contact
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-text-primary mb-4">
              {c.title}
            </h1>
            <p className="text-lg text-text-secondary font-light max-w-lg mx-auto">
              {c.lead}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm"
          >
            {sent ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Send size={22} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">Mensagem enviada!</h3>
                <p className="text-text-secondary font-light">Responderemos em até 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder={c.namePlaceholder}
                    required
                    className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 text-text-primary text-[14px] outline-none focus:border-accent-purple focus:bg-white transition-all placeholder:text-text-muted"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder={c.companyPlaceholder}
                    className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 text-text-primary text-[14px] outline-none focus:border-accent-purple focus:bg-white transition-all placeholder:text-text-muted"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder={c.whatsappPlaceholder}
                    className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 text-text-primary text-[14px] outline-none focus:border-accent-purple focus:bg-white transition-all placeholder:text-text-muted"
                  />
                </div>
                <div>
                  <textarea
                    placeholder={c.messagePlaceholder}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-text-primary text-[14px] outline-none focus:border-accent-purple focus:bg-white transition-all placeholder:text-text-muted resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="cursor-pointer w-full h-12 rounded-xl bg-accent-purple text-white font-bold text-[14px] hover:bg-accent-purple/90 transition-all flex items-center justify-center gap-2"
                >
                  <Send size={15} />
                  {c.send}
                </button>
              </form>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5"
          >
            {/* Email card */}
            <div className="bg-surface border border-gray-100 rounded-3xl p-7">
              <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                <Mail size={18} className="text-text-secondary" />
              </div>
              <p className="text-text-muted text-sm mb-2">{c.orEmail}</p>
              <a
                href={`mailto:${c.email}`}
                className="text-text-primary font-semibold hover:text-accent-purple transition-colors no-underline"
              >
                {c.email}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
