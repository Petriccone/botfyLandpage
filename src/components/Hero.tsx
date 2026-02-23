import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from './ui/Button'
import { Badge } from './ui/Badge'
import { useLanguage } from '../hooks/useLanguage'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-20 sm:px-6 md:flex-row lg:px-8 lg:py-32">
        {/* Left - Robot mascot */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-1 items-center justify-center bg-transparent"
        >
          <div className="relative bg-transparent">
            <img
              src="/botfy-logo-robot.png"
              alt="Botfy AI Robot Mascot"
              className="w-[480px] max-w-full bg-transparent drop-shadow-[0_0_40px_rgba(147,51,234,0.3)]"
              draggable={false}
              style={{ background: 'transparent' }}
            />
          </div>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="flex flex-1 flex-col items-start"
        >
          <Badge className="mb-6">
            <span className="h-2 w-2 rounded-full bg-purple-500" />
            {t.hero.badge}
          </Badge>

          <h1 className="mb-6 text-4xl font-black italic leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {t.hero.titleLine1}{' '}
            <span className="gradient-text">{t.hero.titleHighlight}</span>
          </h1>

          <p className="mb-6 max-w-lg text-lg text-gray-400 leading-relaxed">
            {t.hero.subtitle}
          </p>
          <p className="mb-8 max-w-lg text-gray-400">
            {t.hero.subtitle2}
          </p>

          <div className="mb-10 flex flex-wrap gap-3">
            <a href="https://botfyai.vercel.app/register" target="_blank" rel="noopener noreferrer" className="no-underline">
              <Button variant="primary" size="lg">
                {t.hero.cta}
                <ArrowRight size={18} />
              </Button>
            </a>
            <a href="#how-it-works" className="no-underline">
              <Button variant="secondary" size="lg">
                {t.hero.ctaSecondary}
              </Button>
            </a>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-500">
            {t.hero.trustBullets.map((bullet, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                {bullet}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
