import { useLanguage } from '../hooks/useLanguage'

export function About() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl">
          {t.pages.about.title}
        </h1>
        <p className="mb-8 text-xl text-gray-400">
          {t.pages.about.lead}
        </p>
        <p className="text-gray-300 leading-relaxed">
          {t.pages.about.content}
        </p>
      </div>
    </main>
  )
}
