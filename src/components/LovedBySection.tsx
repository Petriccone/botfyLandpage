import { useLanguage } from '../hooks/useLanguage'

export function LovedBySection() {
  const { t } = useLanguage()

  return (
    <section className="py-12 bg-surface border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-xl md:text-2xl font-display font-bold text-text-primary tracking-tight">
          {t.kommo.lovedBy}
        </p>
      </div>
    </section>
  )
}
