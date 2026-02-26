import { motion } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'
import { MessageCircle, LayoutGrid, Bot } from 'lucide-react'

const icons = [MessageCircle, LayoutGrid, Bot]
const screenImages = ['/screens/dashboard.png', '/screens/crm.png', '/screens/ai-agents.png']
const screenKeys = ['dashboard', 'crm', 'aiAgents'] as const

export function KommoAlternatingSections() {
  const { t } = useLanguage()
  const k = t.kommo
  const sections = [
    { ...k.moreConversations, icon: MessageCircle },
    { ...k.completeView, icon: LayoutGrid },
    { ...k.aiToolkit, icon: Bot },
  ]

  return (
    <>
      {sections.map((section, i) => {
        const Icon = icons[i]
        const isEven = i % 2 === 0
        const imgSrc = screenImages[i]
        const label = k.screenLabels[screenKeys[i]]
        return (
          <section
            key={i}
            className={`py-20 md:py-28 ${i % 2 === 0 ? 'bg-white' : 'bg-surface'} border-y border-gray-100`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? 'md:grid-flow-dense' : ''}`}
              >
                <div className={!isEven ? 'md:col-start-2' : ''}>
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-purple/10 text-accent-purple">
                    <Icon size={28} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-text-primary mb-6">
                    {section.title}
                  </h2>
                  <p className="text-lg text-text-secondary font-light mb-8 max-w-lg">
                    {section.desc}
                  </p>
                  <a
                    href="#how-it-works"
                    className="text-accent-purple font-semibold hover:underline"
                  >
                    {section.cta} →
                  </a>
                </div>
                <div className={`rounded-2xl border border-gray-100 overflow-hidden bg-gray-50 ${!isEven ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <img
                    src={imgSrc}
                    alt=""
                    className="w-full h-auto object-cover object-top"
                  />
                  <p className="p-4 text-sm text-text-muted font-light border-t border-gray-100">
                    {label}
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        )
      })}
    </>
  )
}
