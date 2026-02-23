import { useLanguage } from '../hooks/useLanguage'
import { Check } from 'lucide-react'

export function About() {
  const { t } = useLanguage()
  const a = t.pages.about

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
          {a.title}
        </h1>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          {a.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="mb-3 text-2xl font-bold text-white">
            {a.missionTitle}
          </h2>
          <p className="text-gray-300 leading-relaxed">{a.missionContent}</p>
        </section>

        <section className="mt-12">
          <h2 className="mb-3 text-2xl font-bold text-white">
            {a.problemTitle}
          </h2>
          <p className="mb-3 text-gray-300">{a.problemIntro}</p>
          <ul className="mb-4 list-inside list-disc space-y-1 text-gray-300">
            {a.problemList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="text-gray-300 leading-relaxed">{a.problemClosing}</p>
        </section>

        <section className="mt-12">
          <h2 className="mb-3 text-2xl font-bold text-white">
            {a.positioningTitle}
          </h2>
          <p className="mb-3 text-gray-300">{a.positioningIntro}</p>
          <ul className="mb-4 list-inside list-disc space-y-1 text-gray-300">
            {a.positioningList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="text-gray-300 leading-relaxed">{a.positioningClosing}</p>
        </section>

        <section className="mt-12">
          <h2 className="mb-3 text-2xl font-bold text-white">
            {a.strategyTitle}
          </h2>
          <p className="mb-2 text-gray-300">
            {a.strategyIntro}{' '}
            <span className="font-medium text-violet-400">{a.strategyPlanRef}</span>
            , {a.strategyPrincipleIntro}
          </p>
          <ul className="mb-4 list-inside list-disc space-y-1 text-gray-300">
            {a.strategyList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="text-gray-300 leading-relaxed">{a.strategyClosing}</p>
        </section>

        <section className="mt-12">
          <h2 className="mb-3 text-2xl font-bold text-white">
            {a.differentTitle}
          </h2>
          <ul className="mb-4 space-y-2 text-gray-300">
            {a.differentList.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <Check className="h-5 w-5 shrink-0 text-violet-400" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-300 leading-relaxed">{a.differentClosing}</p>
        </section>

        <section className="mt-12">
          <h2 className="mb-3 text-2xl font-bold text-white">
            {a.visionTitle}
          </h2>
          <ul className="mb-4 list-inside list-disc space-y-1 text-gray-300">
            {a.visionList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="text-gray-300 leading-relaxed">{a.visionClosing}</p>
        </section>

        <section className="mt-12">
          <h2 className="mb-3 text-2xl font-bold text-white">
            {a.founderTitle}
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            {a.founderContent.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="mt-4 font-medium text-violet-300">{a.founderClosing}</p>
        </section>
      </div>
    </main>
  )
}
