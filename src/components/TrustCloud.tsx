import { motion } from 'framer-motion'

const companies = [
  'TechCorp', 'StellarAI', 'NexusSystems', 'Vertex', 'Quantuma', 'Aether'
]

export function TrustCloud() {
  return (
    <section className="py-16 bg-surface border-y border-border-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted mb-12">
          Trusted by cutting-edge companies worldwide
        </p>

        <div className="relative flex overflow-hidden">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
            className="flex items-center gap-20 whitespace-nowrap min-w-full"
          >
            {[...companies, ...companies].map((name, i) => (
              <span key={i} className="text-2xl md:text-3xl font-display font-black text-gray-200 hover:text-gray-400 transition-colors uppercase tracking-tighter">
                {name}
              </span>
            ))}
          </motion.div>

          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-surface to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-surface to-transparent z-10" />
        </div>
      </div>
    </section>
  )
}
