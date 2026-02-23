import { useLanguage } from '../hooks/useLanguage'

export function Contact() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl">
          {t.pages.contact.title}
        </h1>
        <p className="mb-10 text-xl text-gray-400">
          {t.pages.contact.lead}
        </p>
        <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-6">
          <p className="mb-2 text-sm text-gray-500">{t.pages.contact.emailLabel}</p>
          <a
            href={`mailto:${t.pages.contact.email}`}
            className="text-lg font-medium text-white transition-colors hover:text-[#8B5CF6]"
          >
            {t.pages.contact.email}
          </a>
        </div>
      </div>
    </main>
  )
}
