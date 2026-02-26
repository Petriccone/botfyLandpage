import { useLanguage } from '../hooks/useLanguage'
import { Check } from 'lucide-react'

export function About() {
  const { t } = useLanguage()
  const a = t.pages.about

  return (
    <main className="min-h-screen pt-24 pb-20 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-4xl font-black tracking-tight text-text-primary sm:text-5xl">
          {a.title}
        </h1>

        <div className="space-y-6 text-text-secondary leading-relaxed">
          {a.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="mb-3 text-2xl font-bold text-text-primary">
            {a.missionTitle}
          </h2>
          <p className="text-text-secondary leading-relaxed">{a.missionContent}</p>
        </section>

        <section className="mt-12">
          <h2 className="mb-3 text-2xl font-bold text-text-primary">
            {a.problemTitle}
          </h2>
          <p className="mb-3 text-text-secondary">{a.problemIntro}</p>
          <ul className="mb-4 list-inside list-disc space-y-1 text-text-secondary">
            {a.problemList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="text-text-secondary leading-relaxed">{a.problemClosing}</p>
        </section>

        <section className="mt-12">
          <h2 className="mb-3 text-2xl font-bold text-text-primary">
            {a.positioningTitle}
          </h2>
          <p className="mb-3 text-text-secondary">{a.positioningIntro}</p>
          <ul className="mb-4 list-inside list-disc space-y-1 text-text-secondary">
            {a.positioningList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="text-text-secondary leading-relaxed">{a.positioningClosing}</p>
        </section>

        <section className="mt-12">
          <h2 className="mb-3 text-2xl font-bold text-text-primary">
            {a.strategyTitle}
          </h2>
          <p className="mb-2 text-text-secondary">
            {a.strategyIntro}{' '}
            <span className="font-medium text-accent-purple">{a.strategyPlanRef}</span>
            , {a.strategyPrincipleIntro}
          </p>
          <ul className="mb-4 list-inside list-disc space-y-1 text-text-secondary">
            {a.strategyList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="text-text-secondary leading-relaxed">{a.strategyClosing}</p>
        </section>

        <section className="mt-12">
          <h2 className="mb-3 text-2xl font-bold text-text-primary">
            {a.differentTitle}
          </h2>
          <ul className="mb-4 space-y-2 text-text-secondary">
            {a.differentList.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <Check className="h-5 w-5 shrink-0 text-accent-purple" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-text-secondary leading-relaxed">{a.differentClosing}</p>
        </section>

        <section className="mt-12">
          <h2 className="mb-3 text-2xl font-bold text-text-primary">
            {a.visionTitle}
          </h2>
          <ul className="mb-4 list-inside list-disc space-y-1 text-text-secondary">
            {a.visionList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="text-text-secondary leading-relaxed">{a.visionClosing}</p>
        </section>

        <section className="mt-12">
          <h2 className="mb-3 text-2xl font-bold text-text-primary">
            {a.founderTitle}
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            {a.founderContent.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="mt-4 font-medium text-accent-purple/80">{a.founderClosing}</p>
        </section>
      </div>
    </main>
  )
}
